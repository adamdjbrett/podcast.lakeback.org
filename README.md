# Healing the Sacred (v2)

Podcast site for the American Indian Law Alliance, at `https://podcast.lakeback.org`.
Built on [eleventy-excellent](https://github.com/madrilene/eleventy-excellent), the same starter as its sister site [aila.ngo](https://www.aila.ngo): Eleventy 3, Nunjucks, CUBE CSS; the design tokens are plain CSS custom properties (Tailwind was removed once the design settled).

```bash
npm install
npm run dev     # http://localhost:8080 (PORT=8081 npm run dev for another port); draft episodes show
npm run build   # production build in dist/; draft episodes get no page, list row or feed item
npm run deploy  # build and deploy to Cloudflare (wrangler)
npm run -s buzz # read-only Buzzsprout API (token in ../.env)
```

## Layout of the repo

The root holds only what has to live there: `README.md`, `CHANGELOG.md`, `LICENSE`, `package.json`, `eleventy.config.js`, `wrangler.jsonc` and the dotfiles. Site sources are in `src/`.

## Where things are

| What | Where |
|---|---|
| Site settings, podcast feed settings, directory links | `src/_data/meta.js` |
| Home page copy (hero, letter, related items, colophon) | `src/_data/home.json` |
| Nav links | `src/_data/navigation.js` |
| Episodes | `src/episodes/*.md`, named `###-slug.md` (see *Front matter* below) |
| Host and guest bios | `src/bios/*.md` |
| Pages | `src/pages/` |
| Curriculum guide (`/course/`): `src/pages/course/index.md` links the PDF, series details, and eleven episode pages. `src/pages/course/course.11tydata.js` reads their content from the PDF's Markdown source in `src/_materials/curriculum-guide/`; built in production while `curriculumGuide.published` is true | `curriculumGuide` in `src/_data/meta.js`; previous/next title buttons follow the index, series details, and episode order |
| Labels and UI strings for every other page | `src/_data/labels.json` |
| Feeds (RSS, Atom, JSON, twtxt), robots, sitemap, humans, credits, manifest, service worker, 404 | `src/common/` |
| Credits list (prints `/credits.txt`) | `src/_data/credits.json` |
| Citation formats (Chicago, RIS, CSL JSON, BibTeX) | `src/_config/filters/cite.js` |
| Eleventy config: collections, filters, plugins, CSS and JS builds | `src/_config/` |
| Transcript manuscripts (rendered as HTML), backups, and the curriculum guide source | `src/_materials/` |
| Content license shown in the footer | `license` in `src/_data/meta.js` |
| Colours: the lake surfaces and the semantic names | `src/assets/css/global/base/variables.css` |
| Brand colours, fonts, type and space scales (frozen design tokens), and the few utility classes | `src/assets/css/global/base/tokens.css`, `src/assets/css/global/base/token-utilities.css` |
| Blocks: header, sheet and index rows, lake bands and wave mask, home, episode | `src/assets/css/global/blocks/` |
| Cover art, lake band, logo: pre-sized WebP, copied as-is (no build-time image step) | `src/assets/images/template/`; favicons and manifest icons in `src/assets/images/favicon/` |

## Front matter

Layouts and templates read front matter keys; wherever a value repeats or follows from the file name, a data file sets it, and a file's own front matter only carries what is particular to it.

| Folder | Set by its `*.11tydata.js` | Left to each file |
|---|---|---|
| `src/pages/` | `layout: page`, `permalink: /<file-name>/` | `title`, `description` (`index.njk` overrides both defaults) |
| `src/episodes/` | `layout`, `permalink`, `episode` (from the `###-` prefix), `draft`, `audio` (from `url`), `transcript` (the matching HTML transcript from `src/_data/transcripts.js`) | `title`, `description`, `date` (the Buzzsprout release date), `duration` (`MM:SS`) and `bytes` (the MP3 size), both from the Buzzsprout feed's `itunes:duration` and enclosure `length`, `host`, `guests`, `tags`, `url`, `published` |
| `src/bios/` | `layout`, `permalink`, `title`, `description`, `avatar` (when `src/assets/images/bios/<file-name>.webp` exists) | `name`, `bio`, `links`; `avatar` only to point somewhere else |
| `src/common/` | `eleventyExcludeFromCollections: true` | `permalink` |

Site-wide defaults (site name, description, Open Graph image) come from `src/_data/meta.js`; `image` in front matter overrides the Open Graph image for one page.

Directory links (Apple Podcasts, Spotify, YouTube and the rest) live under `podcast.directories` in `meta.js`; add one there once Buzzsprout shows the show as listed.

## What comes from where

- **aila.ngo:** Red Hat Display and Atkinson Hyperlegible, the teal and yellow of its palette, the button block, the header and footer structure, the footer theme switch.
- **The lake (v1):** teal page stock from the cover painting, pale round-cornered sheets, pill buttons, the ochre accent from the cover lettering, deep-teal banner and subscribe band, the sine-wave mask on the band and the lake image.

## What the build produces

- **Images and icons:** WebP and SVG are published, with two exceptions: `/assets/images/template/cover-3000.jpg` for podcast feeds and `/apple-touch-icon.png` for Apple home-screen icons. Every size the pages use is a committed WebP (`cover-360…900`, `lake-band-800/1400`, `logo-144`, `cover-1200` for Open Graph, favicon and manifest icons), with `srcset`, `width` and `height` written in the templates; nothing is re-encoded at build time. Make a new size once (any image tool) and commit it. The print and editing originals live outside the repo in `../podcast.lakeback.org-source-art/`. SVGs are optimized once on disk (`npx svgo -r -f src/assets/svg` after adding one).
- **Feeds:** `/feed/feed.rss` (the podcast feed, with audio enclosures and iTunes tags), `/feed/feed.xml` (Atom), `/feed/feed.json`, `/feed/twtxt.txt`. The list lives in `meta.feeds`; the head, the Subscribe page and `humans.txt` loop over it. `/feed.xml` (the v1 address) redirects to the podcast feed (`src/_redirects`, read by Cloudflare).
- **Citations:** each episode page ends with a Chicago citation and a Copy button, and gets `/assets/citations/<file-slug>.ris`, `.csl.json` and `.bib`. The curriculum guide also has Chicago text and downloads named `healing-the-sacred-curriculum-guide.{ris,csl.json,bib}`, using the shared metadata in `src/_data/guideCitation.js`. These cite the whole guide from every course page and are saved offline. Add a format in `meta.citations.formats` and `cite.js`.
- **Search:** Pagefind indexes `dist/` after every build, dev included. Control+K or Command+K opens `/search/` from any page.
- **Metadata:** every page has a linked JSON-LD graph for `WebSite`, `PodcastSeries`, and the American Indian Law Alliance `Organization`. `jsonLd` in `src/_data/meta.js` serializes it safely from site settings. Dublin Core covers titles, creators, publisher, description, language, canonical identity, licensing, parent resources, and known dates. Zotero metadata explicitly identifies episodes as `podcast`, the guide index as `report` (with its personal authors and PDF), and other pages as `webpage`.
- **IndieWeb:** content pages and episodes use `h-entry`, `p-name`, `e-content`, canonical `u-url`/`u-uid`, and `p-author h-card`. Course bylines link to author bios; bios have canonical h-cards. The footer exposes the publisher's organization h-card, home URL, email, and `rel="me"` link to AILA; episode listings use `h-feed`. Author markup follows the standard `p-author h-card` pattern. Webmention receiving and IndieAuth endpoints require actual services and are not advertised.
- **Transcripts:** all eleven manuscripts render at `/transcripts/episode-XX/`. Course chapters and published episodes link to the HTML edition; original transcript PDFs remain optional downloads. Edit the manuscripts in `src/_materials/transcripts/` and restart the dev server after changing them.
- **PWA:** `/site.webmanifest` and `/sw.js`. After the first successful online visit, the worker saves reading pages, HTML transcripts, search assets, fonts, images, and the curriculum PDF. Audio and original transcript PDFs require a connection. Each build fingerprints the saved content and removes only older site caches. An `/offline/` page handles uncached navigation. Registration waits for page load and is disabled on `localhost`; test with `127.0.0.1` or HTTPS. Cloudflare provides compression; `src/_headers` controls the font, worker and manifest cache headers and makes citation files downloads; unknown URLs get `404.html` (`not_found_handling` in `wrangler.jsonc`).
- **Accessibility:** named landmarks, working skip-to-main focus, visible focus indicators, labeled search with result announcements, clipboard feedback, readable light/dark themes, and layouts checked at 320px with enlarged text and WCAG text spacing. HTML transcripts provide a reading alternative to the original PDFs. Automated checks supplement human accessibility review.
- **Lighthouse:** on November 17, 2026, Lighthouse 13.6 measured 100 Performance, 100 Accessibility, 100 Best Practices, and 100 SEO on both mobile and desktop against a local production preview with compression and the configured cache headers. A plain server without compression scored 99 Performance. Scores depend on hosting and test conditions; verify the public URL with PageSpeed Insights after deployment.

## Credits and license

`/credits.txt` is printed from `src/_data/credits.json`. Eleventy (11ty / Build Awesome) was created by Zach Leatherman; Eleventy Excellent was created by Lene Saile and its contributors.

The code is under the ISC License, as Eleventy Excellent is; see [LICENSE](LICENSE). The podcast's content (episodes, transcripts, bios, images, curriculum guide) is under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.en); the footer of every page says so, from `license` in `src/_data/meta.js`, with a local copy of the Creative Commons button at `src/assets/svg/cc-by.svg`. Changes are logged in [CHANGELOG.md](CHANGELOG.md).
