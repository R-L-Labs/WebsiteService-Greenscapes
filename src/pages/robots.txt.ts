import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const isStaging = import.meta.env.PUBLIC_ENV === 'staging';
  const isProd = import.meta.env.PROD && !isStaging;
  const sitemap = site ? new URL('sitemap-index.xml', site).href : '/sitemap-index.xml';

  const body = isProd
    ? `User-agent: *
Allow: /

# Block tracking-parameter URLs (avoid duplicate content)
Disallow: /*?*utm_*
Disallow: /*?*ref=*

# Defensive: paths reserved for future internal use
Disallow: /admin/
Disallow: /api/

Sitemap: ${sitemap}
`
    : `# Non-production environment — block all crawlers
User-agent: *
Disallow: /
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
