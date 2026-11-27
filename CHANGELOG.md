# Changelog

Notable changes to the Healing the Sacred site. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/); versions follow `package.json`.

## [Unreleased]

### Fixed

- Post-launch copy: the About page, home subscribe band and curriculum guide (web and PDF) no longer say the series is unreleased. The About page lists all eight guests with bio links.
- Episode dates match the Buzzsprout release (November 22, 2026, not November 14), and every episode has a `duration`, so episode pages, `itunes:duration` and citations show the length. The curriculum guide gives each run time and the series total.
- Episode enclosures carry each MP3's byte size from the Buzzsprout feed (`bytes` in front matter) instead of `length="0"`.
- Episode 9 is titled "Richard W. Hill, Sr. on the Great Law, Wampum, and the Two Row Wampum Treaty", as on Buzzsprout, and he is named Richard W. Hill, Sr. throughout the site, transcript and curriculum guide.

## [2.1.0] - 2026-11-22

Launch: all eleven episodes released on Buzzsprout.

### Added

- Episodes are published by default: `src/episodes/episodes.11tydata.js` sets `published: true`, and front matter `published: false` keeps an episode out of production (pages, sitemap, feeds).
- A bio page for Chris Thomas (Onondaga Nation, Beaver Clan) with his photo; bio layouts accept `avatar_alt` for photo alt text (default: the person's name).
- `/humans.json` (vouches for aila.ngo, aila.social, lakeback.org, adamdjbrett.com and six peer sites) and `<link rel="human-json">` in the head.
- The Buzzsprout large player at the top of `/episodes/`, from Buzzsprout's embed script with `color` set to `meta.podcast.buzzsprout.color` (`d49838`, the `--color-primary` ochre). Episode-page players take the same colour.
- Cloudflare static-asset rules: `src/_headers` (citation downloads, font caching, `sw.js` and manifest headers) and `src/_redirects` (`/feed.xml` → `/feed/feed.rss`, 301), ported from `netlify.toml`. `wrangler.jsonc` serves `404.html` via `not_found_handling: "404-page"`.
- Faster Workers Builds deploys: `wrangler.jsonc` no longer has a `build.command`, so `wrangler deploy` stops rebuilding the site the dashboard build just made (`npm run deploy` now runs `npm run build && wrangler deploy` locally). No `.node-version`, so the build uses the image's preinstalled Node 24 instead of downloading a newer 22.x. `.npmrc` turns off audit and fund during install.
- Plain-CSS design tokens: `src/assets/css/global/base/tokens.css` (the 39 custom properties the site uses) and `token-utilities.css` (the 9 utility classes the templates use).
- Pre-sized WebP images in `src/assets/images/`: `cover-{360,480,640,900}.webp`, `cover-1200.webp` (Open Graph), `lake-band-{800,1400}.webp`, `logo-144.webp`, and `favicon.webp`, `icon-192.webp`, `icon-512.webp`.

- A safely serialized JSON-LD graph on every page linking the website, podcast series, and American Indian Law Alliance publisher. Expanded Zotero and Dublin Core metadata distinguish podcast episodes, the curriculum report, and ordinary pages, with real dates, creators, licensing, and the guide PDF.
- IndieWeb entry properties on content pages, author h-cards and canonical identifiers, organization identity links, and h-feed episode listings. Guide authors link to their canonical bios.

- Previous/next curriculum buttons show adjacent section and episode titles, from the index through all eleven episodes. The guide citation section now includes dedicated RIS, CSL JSON, and BibTeX downloads with personal authors and report metadata, available offline.

- Accessible HTML editions of all eleven transcripts, linked from course chapters and published episode pages, with the original PDFs retained as optional downloads.
- Versioned offline precaching for reading pages, transcripts, search, fonts, images, and the curriculum PDF; an offline fallback page; app identity and worker cache headers.
- Regression tests for theme storage failures, clipboard feedback, search announcements, transcript mappings, and offline cache behavior. Local mobile/desktop Lighthouse, contrast, accessibility, and browser interaction reports live in `output/quality/`.

- A colophon with production and editorial credits, all three hosts and eight guests, and the website credits; a land acknowledgement page. Footer navigation links to both, with Colophon replacing Credits.
- `LICENSE` and this changelog. The code is ISC, matching Eleventy Excellent, with its MIT and SIL components; the podcast's content is CC BY 4.0.
- A footer line on every page, "Content licensed under CC BY 4.0", with the Creative Commons button (a local copy at `src/assets/svg/cc-by.svg`, with a `viewBox` added so it scales) and `rel="license"` on the link. It reads `license` in `src/_data/meta.js`.
- Directory data files `src/pages/pages.11tydata.js` and `src/common/common.11tydata.js`.
- `npm run bios:webp`.
- Credits for Zach Leatherman (11ty / Build Awesome) and for the creator and contributors of Eleventy Excellent in `/credits.txt`.

### Changed

- The homepage Episodes header always links to `/episodes/`; the "In production" badge is gone.
- The homepage subscribe band lists Apple Podcasts, Spotify, Overcast, Podcast Addict and Listen Notes, then an "All 15 apps, plus the RSS feed →" button to `/subscribe/` (`home.json` `subscribe.featured` and `subscribe.more`; `directory-rows.njk` takes `onlyDirectories`). `/subscribe/` still lists every app and the feed.
- The music credit reads "Chris Thomas" and links to his bio on every episode page and in the colophon.
- JSON-LD: the AILA Organization gains its ECOSOC `description`, and aila.social and AILA's YouTube channel join its `sameAs` (`meta.links.ailaSocial`, `meta.author.social`).
- CSS is bundled, prefixed and minified by esbuild (`src/_config/events/build-css.js`), replacing PostCSS, Tailwind and cssnano. `global.css` lists every stylesheet explicitly in cascade-layer order; Tailwind's `screen()` media queries are written as pixel widths (640, 662, 1000px).
- Images are committed pre-sized and served as-is, with hand-written `src`, `srcset`, `width` and `height`; nothing is re-encoded at build time.
- SVGs are optimized once on disk (`npx svgo -r -f src/assets/svg` after adding one); the `svg` shortcode only reads the file.
- Dates use `Date` and `Intl` instead of dayjs (`src/_config/filters/dates.js`, `cite.js`); citation output is byte-identical.
- Scripts and the service-worker precache use esbuild glob entry points and `node:fs` `glob` instead of fast-glob; `clean`, `dev` and `build` use the shell instead of rimraf and cross-env.
- Passthrough copies are narrowed to fonts, transcripts, directory icons, template and bio images, and favicons; the precache list follows the new image paths.
- `npm run buzz` reads only `../.env`; the podcast ID defaults to `meta.podcast.buzzsprout.id`.
- `engines.node` is `>=22`. `.gitignore` adds `.claude` and `.dev.vars`.
- Production builds take about 1.2–1.5s, down from about 3.5s. Citation generation was measured at 10–15 ms and left as is.

- Builds publish images and icons as WebP or SVG, except the original JPG podcast feed artwork and PNG Apple touch icon. Responsive JPEG fallbacks are removed; stable artwork and icon URLs are generated as WebP from the original JPG/PNG sources, including Open Graph metadata, favicons, and manifest icons. Feeds reference the original 3000px JPG, and the Apple touch link uses the original 180px PNG, which is also cached offline.
- The curriculum guide now has a short `/course/` index, a series-details page, and eleven episode pages, all read from the PDF's Markdown source. The index keeps the main PDF download; section pages use a small PDF button and a link back to the index.
- The teaching companion is named "Curriculum Guide" throughout the site, source files, drafts, PDF edition, and flyer. Its page remains at `/course/`; its PDF is now `/assets/curriculum-guide/healing-the-sacred-curriculum-guide.pdf`.
- Front matter that repeated across files now comes from data:
  - pages get `layout: page` and `permalink: /<file-name>/` from `pages.11tydata.js`;
  - everything in `src/common/` is kept out of collections by `common.11tydata.js` (which made `excludeFromSitemap` there redundant);
  - an episode's `transcript` is set when `src/assets/transcripts/<file-name>.pdf` exists;
  - a bio's `avatar` is set when `src/assets/images/bios/<file-name>.webp` exists (front matter still overrides it);
  - an episode's Open Graph `image` falls back to `meta.opengraph_default`, so the eleven identical `image` lines are gone.
- Everything that is not root-only configuration moved into `src/`:
  - `transcripts/`, `.transcripts-backup/` and `curriculum-guide/` to `src/_materials/` (ignored by Eleventy and by Tailwind's class scan);
  - `tailwind.config.js` to `src/_config/tailwind.config.js`;
  - `scripts/bios-to-webp.mjs` to `src/_config/scripts/`.
- `package.json` license: `UNLICENSED` to `ISC`.

### Removed

- Tailwind and the JSON design tokens: `src/_data/designTokens/`, `src/_config/tailwind.config.js` and `src/_config/utils/` (the unused 50 token variables and 9 utilities went with them).
- `@11ty/eleventy-img`, its HTML transform, `src/_config/events/build-images.js` and the Markdown image renderer. Builds no longer write the unused `cover-3000.webp` and `apple-touch-icon.webp`. Unused source art and the image originals (about 28 MB, including `lake-band-v1.webp`) moved out of the repo to `../podcast.lakeback.org-source-art/`.
- 162 npm packages, including tailwindcss, postcss-js, postcss, postcss-import, postcss-import-ext-glob, autoprefixer, cssnano, svgo, dayjs, fast-glob, rimraf, cross-env, markdown-it-link-attributes and `@awesome.me/buildawesome`.
- `.prettierrc`, `.prettierignore` and `prettier-plugin-jinja-template` (with prettier, 11 MB): no script ran them and VS Code has no Prettier extension.
- Eight unused Phosphor icons (arrow-square-out, butterfly, envelope, github-logo, instagram-logo, linkedin-logo, x-logo, youtube-logo).
- `netlify.toml` (deploys go through Cloudflare via wrangler), `tests/` and the `test` script, `.env`, `.env.example` and `intros-outros.md`.
- Dead CSS (`.indicator`, grid `data-rows`/`data-layout` variants, `.repel[data-nowrap]`, `.sidebar[data-direction='rtl']`, `.prose mark` and `pre` rules), Eleventy layout aliases, the sitemap's `lastUpdated`/`changeFreq` branches, and the unused `authors` value in `course.11tydata.js`.

### Fixed

- Episodes 001 and 002 were missing `published: true` and dropped out of production builds.
- `eleventy.after` reads `directories.output` instead of the deprecated `dir.output`, so `--output` builds no longer write pagefind, images and `sw.js` into `./dist`.
- The inlined stylesheet escapes `{#`, which Nunjucks otherwise reads as a comment opener when a minified rule starts with an id selector.

- Keyboard skip-link focus, publisher landmarks, small-screen enlarged-text overflow, low-contrast interactive states and list markers, search labeling and result announcements, clipboard failure feedback, and theme controls when browser storage is blocked.
- Responsive cover sizing and service-worker registration timing to preserve loading performance.

- Patricia Nolan Vogt is credited as a host, rather than a producer, in the curriculum guide, its web index and announcement, and the draft episode outros. Producer credits name Betty Hill (Lyons) and Adam DJ Brett.
- The two small-text token names no longer collapse onto the larger `step-1` and `step-2` sizes when slugified, restoring the existing small-button and secondary-text styles.
- Tailwind no longer scans the built scripts in `src/_includes/scripts/`, so a build gives the same stylesheet whether or not `npm run clean` ran first (it used to pick up `.visible` and `.static` from the minified scripts).

### Security

- `npm audit` reports 0 vulnerabilities: `@11ty/eleventy-img` was upgraded to 7.1.1 to clear three high-severity advisories (old `sharp` and `image-size`), then removed. Install scripts for esbuild, fsevents and workerd are approved in `allowScripts`.

## [2.0.0]

Rebuilt on [Eleventy Excellent](https://github.com/madrilene/eleventy-excellent), the starter behind the sister site aila.ngo. See the README for what the build produces.
