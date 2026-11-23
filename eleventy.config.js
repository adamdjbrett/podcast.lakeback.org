/**
 * Built on eleventy-excellent (https://github.com/madrilene/eleventy-excellent).
 * Most adjustments are made in `./src/_config/*`.
 */
import {getEpisodes, getBios, showInSitemap} from './src/_config/collections.js';
import events from './src/_config/events.js';
import filters from './src/_config/filters.js';
import plugins from './src/_config/plugins.js';
import {svgShortcode} from './src/_config/shortcodes/svg.js';
import * as pagefind from 'pagefind';
import {curriculumGuide} from './src/_data/meta.js';

export default async function (eleventyConfig) {
  eleventyConfig.on('eleventy.before', async () => {
    await events.buildAllCss();
    await events.buildAllJs();
  });

  // Search index, written beside the pages after every build (dev too, so /search/ works locally).
  eleventyConfig.on('eleventy.after', async ({directories}) => {
    const {index} = await pagefind.createIndex();
    await index.addDirectory({path: directories.output});
    await index.writeFiles({outputPath: `${directories.output}/pagefind`});
    await events.buildOffline(directories.output);
  });

  eleventyConfig.addWatchTarget('./src/assets/**/*.{css,js,svg,png,jpg,jpeg,webp}');
  eleventyConfig.ignores.add('src/_materials/**'); // transcripts and the curriculum guide: kept with the source, never built

  eleventyConfig.addCollection('episodes', getEpisodes);
  eleventyConfig.addCollection('bios', getBios);
  eleventyConfig.addCollection('showInSitemap', showInSitemap);

  eleventyConfig.addPlugin(plugins.htmlConfig);
  eleventyConfig.addPlugin(plugins.drafts);

  eleventyConfig.addBundle('css', {hoist: true});
  eleventyConfig.addBundle('js', {hoist: true}); // the theme switch, inlined in the head
  eleventyConfig.setLibrary('md', plugins.markdownLib);

  Object.entries(filters).forEach(([name, filter]) => eleventyConfig.addFilter(name, filter));

  eleventyConfig.addShortcode('svg', svgShortcode);
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  // Images are pre-sized WebP (no build-time image step); the feed keeps its 3000px JPG and iOS its PNG touch icon.
  ['src/assets/fonts/', 'src/assets/transcripts/', 'src/assets/svg/directories/', 'src/assets/images/template/', 'src/assets/images/bios/'].forEach(path => eleventyConfig.addPassthroughCopy(path));
  eleventyConfig.addPassthroughCopy({'src/assets/images/favicon/': '/', 'src/_headers': '_headers', 'src/_redirects': '_redirects'}); // Cloudflare reads _headers/_redirects from dist
  // the curriculum guide PDF follows its page: dev always, production once meta.curriculumGuide.published is true
  if (curriculumGuide.published || process.env.ELEVENTY_ENV !== 'production') {
    eleventyConfig.addPassthroughCopy({'src/_materials/curriculum-guide/healing-the-sacred-curriculum-guide.pdf': curriculumGuide.pdf.slice(1)});
  }

  return {
    markdownTemplateEngine: 'njk',
    dir: {output: 'dist', input: 'src', includes: '_includes', layouts: '_layouts'}
  };
}
