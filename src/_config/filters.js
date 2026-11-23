import {toISOString, isoDate, readableDate, rfc822} from './filters/dates.js';
import {cite, citeGuide} from './filters/cite.js';

/** "https://lakeback.org/x/" -> "lakeback.org" */
const host = url => new URL(url).hostname;

/** Bio page URL for a person named in episode front matter, matched on the bio's `name`. */
const bioUrl = (name, bios = []) => bios.find(b => b.data.name === name)?.url;

export default {toIsoString: toISOString, isoDate, readableDate, rfc822, host, cite, citeGuide, bioUrl};
