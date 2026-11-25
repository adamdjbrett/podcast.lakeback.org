// The production address is fixed: the canonical URLs and the podcast feed must never carry a preview hostname.
export const productionUrl = 'https://podcast.lakeback.org';
export const url = process.env.ELEVENTY_ENV === 'production' ? productionUrl : 'http://localhost:8080';
export const siteName = 'Healing the Sacred';
export const siteSubtitle = 'Restoring Onondaga Lake through Story, Ceremony, and Public Scholarship';
export const siteDescription = siteSubtitle;
export const locale = 'en_US';
export const lang = 'en';
export const skipContent = 'Skip to content';
export const author = {
  name: 'American Indian Law Alliance',
  website: 'https://aila.ngo',
  email: 'media@aila.ngo',
  description: 'An NGO in consultative status with the United Nations Economic & Social Council (ECOSOC)', // as on aila.ngo
  // AILA's official profiles, as linked (rel="me") in the aila.ngo footer. Add one here only once aila.ngo links it.
  social: [
    'https://www.instagram.com/americanindianlawalliance',
    'https://www.facebook.com/americanindianlawalliance',
    'https://bsky.app/profile/aila.social',
    'https://www.linkedin.com/company/american-indian-law-alliance',
    'https://x.com/ailanyc',
    'https://www.youtube.com/@aila-ngo'
  ]
};
export const links = {
  lakeback: 'https://lakeback.org',
  ailaSocial: 'https://aila.social'
};
// The licence for the podcast's content (the code's licence is in LICENSE). The footer reads this.
export const license = {
  label: 'Content licensed under',
  name: 'CC BY 4.0',
  url: 'https://creativecommons.org/licenses/by/4.0/deed.en',
  icon: 'cc-by' // src/assets/svg/cc-by.svg, a local copy of the Creative Commons 88x31 button
};
// The curriculum guide page (/course/) and its PDF. Set `published` to false and only `npm run dev` builds them.
export const curriculumGuide = {
  published: true,
  pdf: '/assets/curriculum-guide/healing-the-sacred-curriculum-guide.pdf' // copied from src/_materials/curriculum-guide/
};
export const themeLight = '#c9dfe0'; // meta theme-color, close to the light page colour
export const themeDark = '#0f2a30'; // meta theme-color, close to the dark page colour
export const cover = '/assets/images/template/cover-3000.jpg'; // podcast feed artwork
export const opengraph_default = '/assets/images/template/cover-1200.webp';
export const opengraph_default_alt =
  'Healing the Sacred: Restoring Onondaga Lake through Story, Ceremony, and Public Scholarship, lettered in gold over fish and an eel swimming through the teal water of Onondaga Lake.';
export const podcast = {
  author: 'American Indian Law Alliance',
  ownerEmail: author.email, // left out of the feed when empty
  category: 'Society & Culture',
  subcategory: 'Documentary',
  explicit: false,
  type: 'episodic',
  copyright: 'American Indian Law Alliance',
  feed: '/feed/feed.rss', // the podcast feed, the one to submit to directories
  // the hosted feed (JSON-LD webFeed points here); color = player progress bar, the --color-primary ochre as hex
  buzzsprout: {id: 2667694, feed: 'https://feeds.buzzsprout.com/2667694.rss', color: 'd49838'},
  // Where the show is listed (Buzzsprout > Directories). Rendered with icons on /subscribe/ and the home page,
  // and listed as the podcast's sameAs in the JSON-LD. Icon = src/assets/svg/directories/<icon>.svg.
  // ponytail: Amazon Music and Pocket Casts are left out until Buzzsprout shows them as listed.
  directories: [
    {name: 'Apple Podcasts', icon: 'apple-podcasts', url: 'https://podcasts.apple.com/podcast/id6838173635'},
    {name: 'Spotify', icon: 'spotify', url: 'https://open.spotify.com/show/65Tj23KRuMYTJJFxhJkY5n'},
    {name: 'YouTube', icon: 'youtube', url: 'https://www.youtube.com/playlist?list=PLE98CAQgldhg'},
    {name: 'iHeartRadio', icon: 'iheartradio', url: 'https://iheart.com/podcast/350604028'},
    {name: 'Overcast', icon: 'overcast', url: 'https://overcast.fm/itunes6838173635'},
    {name: 'Castro', icon: 'castro', url: 'https://castro.fm/itunes/6838173635'},
    {name: 'Podcast Addict', icon: 'podcast-addict', url: 'https://podcastaddict.com/podcast/healing-the-sacred/7388092'},
    {name: 'Castbox', icon: 'castbox', url: 'https://castbox.fm/vic/6838173635'},
    {name: 'Deezer', icon: 'deezer', url: 'https://www.deezer.com/show/1003785271'},
    {name: 'Player FM', icon: 'player-fm', url: 'https://player.fm/series/series-3768423'},
    {name: 'Goodpods', icon: 'goodpods', url: 'https://www.goodpods.com/podcasts-aid/6838173635'},
    {name: 'Podchaser', icon: 'podchaser', url: 'https://www.podchaser.com/podcasts/healing-the-sacred-6684909'},
    {name: 'Podcast Index', icon: 'podcast-index', url: 'https://podcastindex.org/podcast/8126159'},
    {name: 'TrueFans', icon: 'truefans', url: 'https://truefans.fm/9b5206e1-7ddf-5780-a901-bfaad18d7e3b'},
    {name: 'Listen Notes', icon: 'listen-notes', url: 'https://www.listennotes.com/podcasts/healing-the-sacred-american-indian-law-YlGn_XgM3cE/'}
  ]
};
export const navigation = {
  ariaTop: 'Main',
  ariaBottom: 'Complementary'
};
export const themeSwitch = {
  title: 'Theme',
  light: 'light',
  dark: 'dark'
};

// Every feed, in one place: the head's alternate links, the Subscribe page and humans.txt all loop over this.
export const feeds = [
  {title: 'Podcast RSS', url: podcast.feed, type: 'application/rss+xml', note: 'For podcast apps: carries the audio.'},
  {title: 'Atom', url: '/feed/feed.xml', type: 'application/atom+xml', note: 'For feed readers.'},
  {title: 'JSON Feed', url: '/feed/feed.json', type: 'application/feed+json', note: 'For feed readers.'},
  {title: 'twtxt', url: '/feed/twtxt.txt', type: 'text/plain', note: 'For twtxt clients.'}
];
// Citation downloads written to /assets/citations/<episode>.<ext> on build. The formats live in src/_config/filters/cite.js.
export const citations = {
  path: '/assets/citations/',
  formats: [
    {ext: 'ris', label: 'RIS'},
    {ext: 'csl.json', label: 'CSL JSON'},
    {ext: 'bib', label: 'BibTeX'}
  ]
};
export const themeColor = '#0f3d45'; // web app manifest

/** "Richard W. Hill Sr." -> "Hill, Richard W., Sr.": the inverted form DC and Zotero expect for personal names. */
export const sortName = name => {
  const [, given, family, suffix] = String(name).trim().match(/^(.+?)\s+(\S+?)(?:,?\s+(Jr\.|Sr\.|II|III|IV))?$/) || [];
  return family ? [family, given, suffix].filter(Boolean).join(', ') : name;
};

/**
 * JSON-LD for every page: the website, the podcast and AILA, linked by @id, plus the episode on episode pages.
 * Takes meta as an argument (head/schema.njk passes it) so tests can render with overridden values.
 * `ep` is {url, title, description, date, episode, host, guests, tags, audio, bios} on episode pages.
 */
export const jsonLd = (m, ep) => {
  const home = `${m.url}/`;
  const ids = {site: `${home}#website`, podcast: `${home}#podcast`, org: `${m.author.website.replace(/\/$/, '')}/#organization`};
  const ref = id => ({'@id': id});
  const graph = [
    {
      '@type': 'WebSite', '@id': ids.site, url: home, name: m.siteName, description: m.siteDescription,
      inLanguage: m.lang, publisher: ref(ids.org), about: ref(ids.podcast)
    },
    {
      '@type': 'PodcastSeries', '@id': ids.podcast, url: home, name: m.siteName, description: m.siteDescription,
      inLanguage: m.lang, image: m.url + m.cover, webFeed: m.podcast.buzzsprout.feed,
      publisher: ref(ids.org), creator: ref(ids.org), copyrightHolder: ref(ids.org), license: m.license.url,
      isPartOf: ref(ids.site), sameAs: [m.podcast.buzzsprout.feed, ...m.podcast.directories.map(d => d.url)]
    },
    {
      '@type': 'Organization', '@id': ids.org, name: m.author.name, url: m.author.website, email: m.author.email,
      description: m.author.description, sameAs: [m.author.website, m.links.ailaSocial, m.links.lakeback, m.productionUrl, m.podcast.buzzsprout.feed, ...m.author.social]
    }
  ];
  if (ep) {
    const page = m.url + ep.url;
    const person = name => {
      const bio = (ep.bios || []).find(b => b.data.name === name)?.url; // same match as the bioUrl filter
      return bio ? {'@type': 'Person', '@id': `${m.url}${bio}#person`, name, url: m.url + bio} : {'@type': 'Person', name};
    };
    graph.push({
      '@type': 'PodcastEpisode', '@id': `${page}#episode`, url: page, mainEntityOfPage: page,
      name: ep.title, description: ep.description, episodeNumber: ep.episode,
      datePublished: ep.date && new Date(ep.date).toISOString().slice(0, 10), inLanguage: m.lang,
      partOfSeries: ref(ids.podcast), publisher: ref(ids.org), copyrightHolder: ref(ids.org), license: m.license.url,
      creator: ep.host ? person(ep.host) : ref(ids.org),
      contributor: ep.guests?.length ? ep.guests.map(person) : undefined,
      keywords: ep.tags?.length ? ep.tags.map(tag => tag.replace(/-/g, ' ')).join(', ') : undefined,
      associatedMedia: ep.audio?.url ? {'@type': 'AudioObject', contentUrl: ep.audio.url, encodingFormat: ep.audio.type} : undefined
    });
  }
  // A literal closing script tag must never escape the JSON-LD element.
  return JSON.stringify({'@context': 'https://schema.org', '@graph': graph}).replace(/</g, '\\u003c');
};
