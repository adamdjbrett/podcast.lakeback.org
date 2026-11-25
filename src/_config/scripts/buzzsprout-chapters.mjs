// Push chapter markers from src/_data/chapters.json to Buzzsprout. Dry run unless --push.
// The token comes from ../.env or the environment, never the command line (same as buzzsprout.mjs).
// Usage: npm run -s buzz:chapters                    -> show what would change, write nothing
//        npm run -s buzz:chapters -- --push          -> write chapters; episodes that already have some are skipped
//        npm run -s buzz:chapters -- --push --force  -> replace existing chapters too
// API: PUT replaces an episode's whole chapter list (github.com/Buzzsprout/buzzsprout-api, sections/chapters.md).
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { podcast } from "../../_data/meta.js";

const secs = t => String(t).split(":").reduce((s, n) => s * 60 + Number(n), 0);

// Returns what is wrong with a chapter list, or null. duration is the episode length in seconds.
function problem(chapters, duration = Infinity) {
  if (!Array.isArray(chapters) || !chapters.length) return "no chapters";
  if (secs(chapters[0].start_time) !== 0) return "first chapter must start at 00:00";
  for (const [i, c] of chapters.entries()) {
    const t = secs(c.start_time);
    if (!c.title?.trim()) return `chapter ${i + 1} has no title`;
    if (Number.isNaN(t)) return `bad start_time "${c.start_time}"`;
    if (i && t <= secs(chapters[i - 1].start_time)) return `"${c.title}" does not start after the chapter before it`;
    if (t >= duration) return `"${c.title}" starts at ${c.start_time}, past the end of the audio (${duration}s)`;
  }
  return null;
}

// ponytail: self-check runs on every start, it is four asserts
assert.equal(secs("01:02:03"), 3723);
assert.equal(problem([{ title: "Intro", start_time: "00:00" }, { title: "Main", start_time: "01:30" }], 100), null);
assert.match(problem([{ title: "Intro", start_time: "00:05" }]), /00:00/);
assert.match(problem([{ title: "Intro", start_time: "00:00" }, { title: "Late", start_time: "02:00" }], 100), /past the end/);

const { BUZZSPROUT_API_TOKEN: token, BUZZSPROUT_PODCAST_ID: id = String(podcast.buzzsprout.id) } = process.env;
if (!token) {
  console.error("Missing BUZZSPROUT_API_TOKEN: set it in ../.env or the environment (Buzzsprout > Settings > API access)");
  process.exit(1);
}
const push = process.argv.includes("--push"), force = process.argv.includes("--force");

// Header auth, not ?api_token=, so the token stays out of URLs and logs.
async function api(path, body) {
  const res = await fetch(`https://www.buzzsprout.com/api/${id}/${path}`, {
    method: body ? "PUT" : "GET",
    headers: {
      Authorization: `Token token=${token}`,
      Accept: "application/json",
      "User-Agent": "podcast.lakeback.org chapters script",
      ...(body && { "Content-Type": "application/json; charset=utf-8" }),
    },
    body: body && JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Buzzsprout ${res.status} on ${path}: ${await res.text()}`);
  return res.json();
}

const episodes = JSON.parse(await readFile(new URL("../../_data/chapters.json", import.meta.url), "utf8"));
let failed = 0;
for (const { episode, buzzsprout, chapters } of episodes) {
  const label = `Episode ${episode} (${buzzsprout})`;
  try {
    const [{ duration }, existing] = await Promise.all([api(`episodes/${buzzsprout}`), api(`episodes/${buzzsprout}/chapters`)]);
    const bad = problem(chapters, duration || Infinity); // duration is 0 while Buzzsprout is still processing audio
    if (bad) throw new Error(bad);
    if (existing.length && !force) console.log(`${label}: skipped, already has ${existing.length} chapters (--force to replace)`);
    else if (!push) console.log(`${label}: would set ${chapters.length} chapters${existing.length ? `, replacing ${existing.length}` : ""}`);
    else {
      const saved = await api(`episodes/${buzzsprout}/chapters`, { chapters });
      if (saved.length < chapters.length) throw new Error(`sent ${chapters.length} chapters, Buzzsprout kept ${saved.length}`);
      console.log(`${label}: set ${chapters.length} chapters`);
    }
  } catch (err) {
    failed++;
    console.error(`${label}: FAILED, ${err.message}`);
  }
}
if (!push) console.log("\nDry run, nothing was changed. Add -- --push to write.");
process.exit(failed ? 1 : 0);
