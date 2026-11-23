import {readFileSync, readdirSync} from 'node:fs';
import matter from 'gray-matter';
import {markdownLib} from '../_config/plugins/markdown.js';

const folder = 'src/_materials/transcripts';
// shortcut: source manuscripts load at startup; restart the dev server after editing them.
const episodes = readdirSync('src/episodes').filter(file => /^\d{3}-.+\.md$/.test(file));

export default readdirSync(folder).filter(file => /^episode-\d{2}-.+\.md$/.test(file)).sort().map(file => {
  const {data, content} = matter(readFileSync(`${folder}/${file}`, 'utf8'));
  const id = String(data.episode).padStart(2, '0');
  const episodeFile = episodes.find(name => Number(name.slice(0, 3)) === data.episode);
  if (!episodeFile) throw new Error(`No episode found for transcript: ${file}`);
  return {
    id,
    episode: data.episode,
    title: data.title,
    description: data.description,
    url: `/transcripts/episode-${id}/`,
    pdf: `/assets/transcripts/${episodeFile.replace(/\.md$/, '.pdf')}`,
    guide: `/course/episode-${id}/`,
    html: markdownLib.render(content.replace(/^# .+\r?\n/, '').trim())
  };
});
