import {readFileSync, statSync} from 'node:fs';

// The web pages and PDF share the same guide source.
// shortcut: read once at startup; restart `npm run dev` after editing the guide.
const file = 'src/_materials/curriculum-guide/healing-the-sacred-curriculum-guide';
const sections = readFileSync(`${file}.md`, 'utf8').split(/(?=^## )/m).map(section => {
  const [heading, ...body] = section.trim().split('\n');
  return {
    title: heading.replace(/^## /, ''),
    content: body.join('\n').trim().replace(/\n---$/, '').trim()
  };
});
const guideSections = sections.filter(({title}) => title === 'Series Details' || /^Episode \d+:/.test(title)).map(section => {
  const episode = section.title.match(/^Episode (\d+):/);
  const slug = episode ? `episode-${episode[1].padStart(2, '0')}` : 'series-details';
  return {...section, slug, url: `/course/${slug}/`};
});
const about = sections.find(({title}) => title === 'About This Curriculum Guide');
const guidePages = [{title: 'Curriculum Guide', slug: 'index', url: '/course/'}, ...guideSections];

export default {
  layout: 'course',
  permalink: '/course/{{ page.fileSlug }}/index.html',
  guideSections,
  pdfSize: `${Math.round(statSync(`${file}.pdf`).size / 1024)} KB`,
  eleventyComputed: {
    coursePager: data => {
      const index = guidePages.findIndex(item => item.slug === data.page.fileSlug);
      return index < 0 ? {} : {previous: guidePages[index - 1], next: guidePages[index + 1]};
    },
    courseSection: data => guideSections.find(({slug}) => slug === data.page.fileSlug),
    title: data => data.courseSection?.title || 'Curriculum Guide',
    description: data => data.courseSection
      ? `Teaching notes, discussion questions, and additional resources: ${data.courseSection.title}.`
      : 'A teaching companion to the Healing the Sacred podcast. For each of the eleven episodes it gives a description, five discussion questions, and additional resources.',
    guide: data => data.courseSection
      ? data.courseSection.content.replace(/^### /gm, '## ')
      : `## ${about.title}\n\n${about.content}`,
    draft: data => !data.meta.curriculumGuide.published
  }
};
