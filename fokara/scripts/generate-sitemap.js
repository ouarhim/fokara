const fs = require('fs');
const path = require('path');

// Base URL - TODO: Move to environment variable
const baseUrl = 'https://maktabatlfokara.194.163.143.60.sslip.io';

// Routes configuration
const routes = [
  {
    path: '/',
    changefreq: 'weekly',
    priority: 1.0,
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    path: '/agadir',
    changefreq: 'weekly',
    priority: 0.9,
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    path: '/maroc.html',
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0],
  },
];

// Generate sitemap XML
const generateSitemap = () => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

  routes.forEach((route) => {
    sitemap += `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <xhtml:link rel="alternate" hreflang="ar-MA" href="${baseUrl}${route.path}" />
    <xhtml:link rel="alternate" hreflang="fr-MA" href="${baseUrl}${route.path}" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${route.path}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${route.path}" />
  </url>
`;
  });

  sitemap += `</urlset>`;

  return sitemap;
};

// Write sitemap to public directory
const sitemap = generateSitemap();
const publicDir = path.join(__dirname, '..', 'public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(sitemapPath, sitemap, 'utf8');
console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
console.log(`📄 Total URLs: ${routes.length}`);
