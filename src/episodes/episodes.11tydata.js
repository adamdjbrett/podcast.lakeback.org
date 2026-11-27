// Directory data for every episode: template, URL, and whether it reaches the sitemap and feeds.
// Episodes are published by default; front matter `published: false` overrides this, and such an
// episode renders in `npm run dev` only (production drops it from pages, sitemap and feeds via the drafts plugin).
export default {
  published: true,
  layout: 'episode',
  permalink: '/episodes/{{ page.fileSlug }}/index.html',
  eleventyComputed: {
    episode: data => Number(data.page.fileSlug.slice(0, 3)), // from the ###- filename prefix
    draft: data => data.published !== true,
    excludeFromSitemap: data => data.published !== true,
    audio: data => (data.url ? {url: data.url, length: data.bytes || 0, type: 'audio/mpeg'} : undefined),
    // HTML is the accessible reading format; the original PDF is offered on that page.
    transcript: data => data.transcripts.find(item => item.episode === Number(data.page.fileSlug.slice(0, 3)))?.url
  }
};
