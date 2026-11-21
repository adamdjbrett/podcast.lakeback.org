import { load } from "js-yaml";

export default function (config) {
  config.addDataExtension("yml", load);
  config.addPassthroughCopy("src/assets");
  config.addPassthroughCopy({ "tokens.css": "assets/tokens.css" });
  config.addFilter("schedule", (instant, zone, part) => {
    const options = part === "date"
      ? { weekday: "long", month: "short", day: "numeric" }
      : { hour: "numeric", minute: "2-digit" };
    return new Intl.DateTimeFormat("en-US", { ...options, timeZone: zone }).format(new Date(instant));
  });
  return { dir: { input: "src", output: "dist" } };
}
