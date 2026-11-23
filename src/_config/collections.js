/** Episodes, newest first. Drafts are dropped from production builds by the drafts plugin. */
export const getEpisodes = collection =>
  collection.getFilteredByGlob('./src/episodes/*.md').sort((a, b) => b.date - a.date || b.data.episode - a.data.episode);

/** All relevant pages as a collection for sitemap.xml */
export const showInSitemap = collection => collection.getFilteredByGlob('./src/**/*.{md,njk}');

/** Host and guest bios, for linking names on episode pages. */
export const getBios = collection => collection.getFilteredByGlob('./src/bios/*.md');
