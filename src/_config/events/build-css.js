import fs from 'node:fs/promises';
import esbuild from 'esbuild';

/** One stylesheet: src/assets/css/global/global.css, bundled and minified into _includes so the head can inline it. */
export const buildAllCss = async () => {
  const {outputFiles} = await esbuild.build({
    entryPoints: ['src/assets/css/global/global.css'],
    bundle: true,
    minify: true,
    write: false,
    external: ['/assets/*'], // fonts and icons are served from dist, not inlined
    target: ['chrome123', 'firefox120', 'safari17.5'] // the light-dark() baseline; esbuild adds the prefixes these still need
  });
  await fs.mkdir('src/_includes/css', {recursive: true});
  // ponytail: the head inlines this file through Nunjucks, which reads `{#` as a comment; minified `}{#id` would break the build
  await fs.writeFile('src/_includes/css/global.css', outputFiles[0].text.replaceAll('{#', '{ #'));
};
