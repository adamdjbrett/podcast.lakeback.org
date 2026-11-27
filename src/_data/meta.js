import guideCitation from './guideCitation.js'; // the curriculum guide's title and authors for the JSON-LD

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
  // AILA's Organization node, shared @id with aila.ngo, aila.social and lakeback.org: keep it identical to
  // aila.ngo's (src/_includes/schemas/Organization.njk and src/_data/organization.yaml there).
  organization: {
    "name": "American Indian Law Alliance",
    "alternateName": "AILA",
    "description": "An NGO in consultative status with the United Nations Economic & Social Council (ECOSOC)",
    "url": "https://aila.ngo/",
    "logo": "https://aila.ngo/icon-512x512.png",
    "email": "aila@aila.ngo",
    "address": {
      "@type": "PostalAddress",
      "postOfficeBoxNumber": "336",
      "addressLocality": "DeWitt",
      "addressRegion": "NY",
      "postalCode": "13214-9211",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://aila.social/",
      "https://lakeback.org/",
      "https://podcast.lakeback.org/",
      "https://www.youtube.com/playlist?list=PLE98CAQgldhg",
      "https://doctrineofdiscovery.org/",
      "https://podcast.doctrineofdiscovery.org/",
      "https://www.sullivanclinton.com/",
      "https://www.instagram.com/americanindianlawalliance",
      "https://www.facebook.com/americanindianlawalliance",
      "https://bsky.app/profile/aila.social",
      "https://www.linkedin.com/company/american-indian-law-alliance",
      "https://x.com/ailanyc",
      "https://www.youtube.com/@aila-ngo"
    ]
  }
};
export const links = {
  lakeback: 'https://lakeback.org'
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
  // The JSON-LD PodcastSeries description; siteDescription stays the feeds' and meta description's text.
  description:
    'Healing the Sacred is an eleven-episode limited series from the American Indian Law Alliance on restoring Onondaga Lake through story, ceremony, and public scholarship.',
  guid: '9b5206e1-7ddf-5780-a901-bfaad18d7e3b', // podcast:guid in the Buzzsprout feed
  // Series credits as on /colophon/. Each role is the PodcastSeries property it fills; bio = src/bios/<bio>.md (name must equal its front-matter name).
  // ponytail: producer/editor emit @id refs, so anyone with a bio in those roles must also be an actor (defined in full there).
  credits: [
    {name: 'Betty Lyons Hill', bio: 'betty-lyons-hill', alternateName: ['Betty Hill (Lyons)', 'Betty Lyons'], roles: ['actor', 'producer', 'editor']},
    {name: 'Patricia Nolan Vogt', bio: 'patricia-nolan-vogt', roles: ['actor']},
    {name: 'Adam DJ Brett', bio: 'adam-dj-brett', sameAs: ['https://adamdjbrett.com'], roles: ['actor', 'producer', 'editor']},
    {name: 'Michael Wais', roles: ['editor']},
    {name: 'Cole Belmont', roles: ['editor']},
    {name: 'Chris Thomas', bio: 'chris-thomas', roles: ['contributor']}
  ],
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
    {name: 'Apple Podcasts', icon: 'apple-podcasts', url: 'https://podcasts.apple.com/us/podcast/healing-the-sacred/id6838173635'},
    {name: 'Spotify', icon: 'spotify', url: 'https://open.spotify.com/show/65Tj23KRuMYTJJFxhJkY5n'},
    {name: 'YouTube', icon: 'youtube', url: 'https://www.youtube.com/playlist?list=PLE98CAQgldhg'},
    {name: 'iHeartRadio', icon: 'iheartradio', url: 'https://www.iheart.com/podcast/953-healing-the-sacred-350604028/'},
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

/** "Richard W. Hill, Sr." -> "Hill, Richard W., Sr.": the inverted form DC and Zotero expect for personal names. */
export const sortName = name => {
  const [, given, family, suffix] = String(name).trim().match(/^(.+?)\s+(\S+?)(?:,?\s+(Jr\.|Sr\.|II|III|IV))?$/) || [];
  return family ? [family, given, suffix].filter(Boolean).join(', ') : name;
};

// JSON-LD keyword for a front-matter tag: hyphens become spaces, except where that loses spelling.
const keyword = tag => ({'womens-rights': "women's rights"})[tag] || tag.replace(/-/g, ' ');

/**
 * JSON-LD for every page: the website, the podcast and AILA, linked by @id, plus the episode on episode pages.
 * Takes meta as an argument (head/schema.njk passes it) so tests can render with overridden values.
 * `ep` is {url, title, description, date, episode, host, guests, tags, audio, bios} on episode pages.
 * `episodes` is collections.episodes: the series' hasPart, dates and keywords.
 * lakeback.org copies the built PodcastSeries node into its _data/podcastSeries.json; rerun that export after changing it.
 */
export const jsonLd = (m, ep, episodes = []) => {
  const home = `${m.url}/`;
  const ids = {site: `${home}#website`, podcast: `${home}#podcast`, org: `${m.author.website.replace(/\/$/, '')}/#organization`};
  const ref = id => ({'@id': id});
  const ymd = d => d && new Date(d).toISOString().slice(0, 10); // shared by the episode node and the hasPart stubs
  const bioId = slug => `${home}bios/${slug}/#person`;
  const person = c =>
    c.bio
      ? {'@type': 'Person', '@id': bioId(c.bio), name: c.name, alternateName: c.alternateName, sameAs: c.sameAs, url: `${home}bios/${c.bio}/`}
      : {'@type': 'Person', name: c.name};
  // Full Person nodes for actor/contributor; @id refs elsewhere (see the credits comment in podcast).
  const credit = (role, full) => {
    const list = m.podcast.credits.filter(c => c.roles.includes(role)).map(c => (full || !c.bio ? person(c) : ref(bioId(c.bio))));
    return list.length ? list : undefined;
  };
  const sorted = [...episodes].sort((a, b) => a.data.episode - b.data.episode);
  const parts = sorted.map(e => ({
    '@type': 'PodcastEpisode', '@id': `${m.url}${e.url}#episode`, url: m.url + e.url,
    name: e.data.title, episodeNumber: e.data.episode, datePublished: ymd(e.date)
  }));
  const dates = parts.map(p => p.datePublished).sort();
  const tags = [...new Set(sorted.flatMap(e => e.data.tags || []))].map(keyword);
  const lake = 'http://www.wikidata.org/entity/Q3825751'; // Onondaga Lake
  const hosts = [ref(bioId('adam-dj-brett')), ref(bioId('betty-lyons-hill'))]; // authors of the article and the guide
  const graph = [
    {
      '@type': 'WebSite', '@id': ids.site, url: home, name: m.siteName, description: m.siteDescription,
      inLanguage: m.lang, publisher: ref(ids.org), about: ref(ids.podcast)
    },
    {
      '@type': 'PodcastSeries', '@id': ids.podcast, url: home, name: m.siteName, alternativeHeadline: m.siteSubtitle,
      description: m.podcast.description, inLanguage: m.lang,
      image: {
        '@type': 'ImageObject', url: m.url + m.cover, contentUrl: m.url + m.cover,
        width: 3000, height: 3000, encodingFormat: 'image/jpeg', // cover-3000.jpg, checked with sips
        caption: m.opengraph_default_alt, creditText: 'Victoria Dickerson' // the art credit on /colophon/
      },
      webFeed: m.podcast.buzzsprout.feed,
      sameAs: m.podcast.directories.map(d => d.url),
      identifier: {'@type': 'PropertyValue', propertyID: 'podcast:guid', value: m.podcast.guid},
      genre: [m.podcast.category, m.podcast.subcategory],
      keywords: tags.length ? tags.join(', ') : undefined,
      about: [
        {'@type': 'LakeBodyOfWater', '@id': lake, name: 'Onondaga Lake', sameAs: 'https://en.wikipedia.org/wiki/Onondaga_Lake'},
        ref(`${m.links.lakeback}/#project`)
      ],
      contentLocation: ref(lake),
      publisher: ref(ids.org), creator: ref(ids.org),
      actor: credit('actor', true), producer: credit('producer'), editor: credit('editor'), contributor: credit('contributor', true),
      // as on /course/: funded by AILA and, in part, by the AAR's Public Scholarship Grant
      funder: [ref(ids.org)],
      funding: {
        '@type': 'Grant', name: 'Public Scholarship Grant',
        funder: {'@type': 'Organization', name: 'American Academy of Religion', url: 'https://aarweb.org/'}
      },
      copyrightHolder: ref(ids.org), copyrightYear: dates[0] && Number(dates[0].slice(0, 4)), license: m.license.url,
      isAccessibleForFree: true, accessMode: ['auditory'], accessibilityFeature: ['transcript'],
      // the article the podcast takes its name from (/about/); DOI from the JMU page's citation_doi
      isBasedOn: {
        '@type': 'ScholarlyArticle', '@id': 'https://doi.org/10.62365/2576-0955.1133',
        name: 'Healing the Sacred: The Fight to Restore Onondaga Lake and Honor Indigenous Land',
        url: 'https://commons.lib.jmu.edu/ijr/vol9/iss1/2/', author: hosts
      },
      subjectOf: m.curriculumGuide.published
        ? {
            '@type': 'LearningResource', name: guideCitation.title, url: m.url + guideCitation.url,
            author: guideCitation.authors.map(a => ref(`${m.url}${a.url}#person`)),
            encoding: {'@type': 'MediaObject', contentUrl: m.url + m.curriculumGuide.pdf, encodingFormat: 'application/pdf'}
          }
        : undefined,
      // A limited series: start and end dates plus the closed list of episodes.
      datePublished: dates[0], startDate: dates[0], endDate: dates.at(-1),
      hasPart: parts.length ? parts : undefined
    },
    {'@type': 'Organization', '@id': ids.org, ...m.author.organization}
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
      datePublished: ymd(ep.date), inLanguage: m.lang,
      partOfSeries: ref(ids.podcast), publisher: ref(ids.org), copyrightHolder: ref(ids.org), license: m.license.url,
      creator: ep.host ? person(ep.host) : ref(ids.org),
      contributor: ep.guests?.length ? ep.guests.map(person) : undefined,
      keywords: ep.tags?.length ? ep.tags.map(keyword).join(', ') : undefined,
      associatedMedia: ep.audio?.url ? {'@type': 'AudioObject', contentUrl: ep.audio.url, encodingFormat: ep.audio.type} : undefined
    });
  }
  // A literal closing script tag must never escape the JSON-LD element.
  return JSON.stringify({'@context': 'https://schema.org', '@graph': graph}).replace(/</g, '\\u003c');
};
