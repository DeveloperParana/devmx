import { EventDto } from '../dtos';

const createSitemapUrl = (loc: string, lastmod: string | null) => `<url>
<loc>${loc}</loc>
${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
</url>`;

export function createSitemapFromEvents(events: EventDto[]) {
  const header = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  const urls = events
    .map((event) => {
      const loc = `https://devparana.mx/#/evento/${event.id}`;
      const lastmod = event.date ? new Date(event.date).toISOString() : null;

      return createSitemapUrl(loc, lastmod);
    })
    .join('');

  const footer = `</urlset>`;

  return `${header}${urls}${footer}`;
}
