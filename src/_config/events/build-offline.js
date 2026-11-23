import {createHash} from 'node:crypto';
import {glob, readFile, writeFile} from 'node:fs/promises';
import {join, relative} from 'node:path';

// Cache reading/search and the guide download, not audio or original transcript PDFs.
export const buildOffline = async outputDir => {
  const files = (await Array.fromAsync(glob([
    '**/*.html',
    'assets/images/**/*.webp', 'assets/svg/**/*.svg', 'assets/fonts/**/*.woff2',
    'pagefind/**/*', 'site.webmanifest', '*.webp', 'apple-touch-icon.png', 'assets/curriculum-guide/*.pdf', 'assets/citations/*'
  ], {cwd: outputDir, exclude: ['404.html'], withFileTypes: true})))
    .filter(entry => entry.isFile()) // node's glob also returns directories
    .map(entry => relative(outputDir, join(entry.parentPath, entry.name)))
    .sort();
  const hash = createHash('sha256');
  for (const file of files) {
    hash.update(file).update(await readFile(join(outputDir, file)));
  }
  const urls = files.map(file => `/${file.replace(/(?:^|\/)index\.html$/, match => match.startsWith('/') ? '/' : '')}`);
  const worker = await readFile(join(outputDir, 'sw.js'), 'utf8');
  await writeFile(join(outputDir, 'sw.js'), worker
    .replace('__BUILD_REVISION__', hash.digest('hex').slice(0, 16))
    .replace('__PRECACHE_ASSETS__', JSON.stringify(urls)));
};
