import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";

const script = readFileSync(new URL("../src/assets/countdown.js", import.meta.url), "utf8");

test("the board counts down across days and stops exactly at the scheduled instant", () => {
  const instant = "2026-11-23T10:00:00-07:00";
  const digits = Array.from({ length: 4 }, () => ({}));
  const elements = {
    time: { dateTime: instant },
    ".clock": { hidden: true, querySelectorAll: () => digits },
    ".signal": { hidden: false },
    ".arrived": { hidden: true }
  };
  let now = Date.parse(instant) - 93784250;
  let next;
  runInNewContext(script, {
    document: { querySelector: selector => elements[selector] },
    Date: { parse: Date.parse, now: () => now },
    setTimeout: callback => { next = callback; }
  });
  assert.deepEqual(digits.map(d => d.textContent), ["01", "02", "03", "05"]);
  assert.equal(elements[".clock"].hidden, false);
  now = Date.parse(instant) - 1;
  next();
  assert.deepEqual(digits.map(d => d.textContent), ["00", "00", "00", "01"]);
  now++;
  const lastTick = next;
  next = undefined;
  lastTick();
  assert.equal(next, undefined);
  assert.equal(elements[".clock"].hidden, true);
  assert.equal(elements[".signal"].hidden, true);
  assert.equal(elements[".arrived"].hidden, false);
});
