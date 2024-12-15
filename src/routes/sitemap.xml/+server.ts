import { allPages, baseUrl } from '@/lib/constants';

const prerender = true;

function GET() {
	const body = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
	xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
	xmlns:xhtml="https://www.w3.org/1999/xhtml"
	xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
>${allPages
		.map(
			(page) => `
	<url>
		<loc>${baseUrl}${page}</loc>
	</url>`
		)
		.join('')}
</urlset>`;

	const response = new Response(body);
	response.headers.set('Content-Type', 'application/xml');
	return response;
}

export { GET, prerender };
