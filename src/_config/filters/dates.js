// All in UTC, so a front matter date of 2026-01-15 never prints as the 14th.
const longDate = new Intl.DateTimeFormat('en-US', {dateStyle: 'long', timeZone: 'UTC'});

/** 2026-01-15T00:00:00.000Z, for feeds and the sitemap */
export const toISOString = date => new Date(date).toISOString();
/** 2026-01-15, for datetime attributes and metadata */
export const isoDate = date => toISOString(date).slice(0, 10);
/** January 15, 2026 */
export const readableDate = date => longDate.format(new Date(date));
/** RFC 822, for the podcast feed's pubDate */
export const rfc822 = date => new Date(date).toUTCString();
