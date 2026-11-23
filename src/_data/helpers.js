import {existsSync} from 'node:fs';

/** aria-current for a nav link: exact match, or the section the current page sits in. */
export function getLinkActiveState(itemUrl, pageUrl) {
  if (typeof pageUrl !== 'string') return '';
  if (itemUrl === pageUrl) return ' aria-current="page"';
  if (itemUrl.length > 1 && pageUrl.startsWith(itemUrl)) return ' aria-current="page" data-state="active"';
  return '';
}

/** A site path ("/assets/…") if that file exists under src/, else undefined. For front matter defaults in directory data. */
export const asset = path => (existsSync(`src${path}`) ? path : undefined);
