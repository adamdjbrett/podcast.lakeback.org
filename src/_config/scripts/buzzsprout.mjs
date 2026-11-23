// Read-only Buzzsprout API helper. The token comes from ../.env or the environment, never the command line.
// Usage: npm run -s buzz                  -> all episodes
//        npm run -s buzz -- episodes/123  -> one episode
import { podcast } from "../../_data/meta.js";

const { BUZZSPROUT_API_TOKEN: token, BUZZSPROUT_PODCAST_ID: id = String(podcast.buzzsprout.id) } = process.env;
if (!token) {
  console.error("Missing BUZZSPROUT_API_TOKEN: set it in ../.env or the environment (Buzzsprout > Settings > API access)");
  process.exit(1);
}

const path = process.argv[2] ?? "episodes";
if (!/^[a-z_]+(\/\d+)?$/.test(path)) {
  console.error(`Bad path "${path}". Expected e.g. episodes or episodes/123`);
  process.exit(1);
}

// Header auth, not ?api_token=, so the token stays out of URLs and logs.
const res = await fetch(`https://www.buzzsprout.com/api/${id}/${path}.json`, {
  headers: { Authorization: `Token token=${token}` },
});
if (!res.ok) {
  console.error(`Buzzsprout ${res.status}: ${await res.text()}`);
  process.exit(1);
}
console.log(JSON.stringify(await res.json(), null, 2));
