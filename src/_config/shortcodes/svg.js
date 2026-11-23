import {readFileSync} from 'node:fs';

/**
 * Inline an SVG from src/assets/svg: {% svg "phosphor/rss", "Label", "class", "style" %}.
 * The files are already optimized (run `npx svgo -r -f src/assets/svg` after adding one), so this only reads them.
 * No label = decorative (aria-hidden).
 */
export const svgShortcode = (name, label = '', className = '', style = '') => {
  const attrs = [label ? `aria-label="${label}"` : 'aria-hidden="true"', className && `class="${className}"`, style && `style="${style}"`];
  return readFileSync(`./src/assets/svg/${name}.svg`, 'utf8').replace(/<svg(.*?)>/, `<svg$1 ${attrs.filter(Boolean).join(' ')}>`);
};
