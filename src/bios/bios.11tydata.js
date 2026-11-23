import {asset} from '../_data/helpers.js';

// Directory data for host and guest bios: /bios/first-last-name/
export default {
  layout: 'bio',
  permalink: '/bios/{{ page.fileSlug }}/index.html',
  eleventyComputed: {
    title: data => data.name,
    description: data => data.bio,
    // src/assets/images/bios/<file-name>.webp when it exists; `avatar` in front matter overrides it
    avatar: data => data.avatar || asset(`/assets/images/bios/${data.page.fileSlug}.webp`)
  }
};
