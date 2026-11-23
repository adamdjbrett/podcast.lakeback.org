import {isoDate, readableDate} from './dates.js';
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const tex = s => String(s).replace(/[&%$#_{}]/g, '\\$&');

/**
 * One episode, cited four ways. `format` is 'chicago' (an HTML string for the page) or a file
 * extension from meta.citations.formats ('ris', 'csl.json', 'bib').
 * The author is the publishing organisation: the show names no host.
 * ponytail: guests are not cited. Add them as CSL `guest` / RIS `A2` if a style ever needs them.
 */
export const cite = (ep, meta, format = 'chicago') => {
  const d = ep.data;
  const [year, month, day] = isoDate(ep.date).split('-').map(Number); // UTC, like the page dates
  const url = meta.url + ep.url;
  const author = meta.podcast.author;
  const number = [d.season && `season ${d.season}`, d.episode && `episode ${d.episode}`].filter(Boolean).join(', ');
  const sentence = number && number[0].toUpperCase() + number.slice(1);
  const medium = ['Podcast', d.duration].filter(Boolean).join(', ');

  if (format === 'chicago') {
    return [
      `${esc(author)}.`,
      `“${esc(d.title).replace(/([.?!])?$/, m => m || '.')}”`,
      `<cite>${esc(meta.siteName)}</cite>.`,
      sentence && `${sentence}.`,
      `${readableDate(ep.date)}.`,
      `${esc(medium)}.`,
      `${url}.`
    ]
      .filter(Boolean)
      .join(' ');
  }

  if (format === 'ris') {
    return (
      [
        ['TY', 'SOUND'],
        ['TI', d.title],
        ['AU', author],
        ['T2', meta.siteName],
        ['PB', author],
        ['PY', String(year)],
        ['DA', `${isoDate(ep.date).replaceAll('-', '/')}/`],
        ['M1', sentence],
        ['M3', medium],
        ['AB', d.description],
        ['LA', meta.lang],
        ['UR', url],
        ['ER', '']
      ]
        .filter(([tag, value]) => tag === 'ER' || value)
        .map(([tag, value]) => `${tag}  - ${String(value).replace(/\s+/g, ' ')}`)
        .join('\r\n') + '\r\n'
    );
  }

  if (format === 'csl.json') {
    return JSON.stringify(
      [
        {
          id: ep.fileSlug,
          type: 'song', // Zotero's CSL type for a podcast episode
          title: d.title,
          'container-title': meta.siteName,
          author: [{literal: author}],
          publisher: author,
          issued: {'date-parts': [[year, month, day]]},
          number: d.episode,
          medium: 'Podcast',
          dimensions: d.duration,
          abstract: d.description,
          language: meta.lang,
          URL: url
        }
      ],
      null,
      2
    );
  }

  if (format === 'bib') {
    return `@misc{${meta.siteName.toLowerCase().replace(/\W+/g, '')}-${ep.fileSlug},
  author       = {{${tex(author)}}},
  title        = {${tex(d.title)}},
  howpublished = {${tex([meta.siteName, number].filter(Boolean).join(', '))}},
  year         = {${year}},
  month        = {${month}},
  day          = {${day}},
  note         = {${tex(medium)}},
  url          = {${url}}
}
`;
  }

  throw new Error(`cite: unknown format "${format}"`);
};

export const citeGuide = (guide, meta, format = 'chicago') => {
  const url = meta.url + guide.url;
  const publisher = meta.author.name;
  if (format === 'chicago') {
    const [first, ...others] = guide.authors;
    const authors = [`${first.family}, ${first.given}`, ...others.map(author => `${author.given} ${author.family}`)].join(', and ');
    return `${esc(authors)}. <cite>${esc(guide.title)}</cite>. ${esc(publisher)}, ${guide.year}. ${url}.`;
  }
  if (format === 'ris') {
    return [
      ['TY', 'RPRT'], ['TI', guide.title],
      ...guide.authors.map(author => ['AU', `${author.family}, ${author.given}`]),
      ['PB', publisher], ['PY', guide.year], ['LA', meta.lang], ['UR', url], ['ER', '']
    ].map(([tag, value]) => `${tag}  - ${String(value).replace(/\s+/g, ' ')}`).join('\r\n') + '\r\n';
  }
  if (format === 'csl.json') {
    return JSON.stringify([{
      id: guide.id, type: 'report', title: guide.title, author: guide.authors.map(({given, family}) => ({given, family})),
      publisher, issued: {'date-parts': [[guide.year]]}, language: meta.lang, URL: url
    }], null, 2);
  }
  if (format === 'bib') {
    return `@techreport{${guide.id},
  author      = {${guide.authors.map(author => tex(`${author.family}, ${author.given}`)).join(' and ')}},
  title       = {${tex(guide.title)}},
  institution = {${tex(publisher)}},
  year        = {${guide.year}},
  url         = {${url}}
}
`;
  }
  throw new Error(`citeGuide: unknown format "${format}"`);
};
