/**
 * api/sitemap.js
 * -----------------------------------------------------------------------
 * Vercel Serverless Function → sirve /sitemap.xml en tiempo real.
 * En Vercel, cualquier archivo dentro de /api/ se convierte automáticamente
 * en un endpoint. Este archivo, al llamarse sitemap.js, queda disponible
 * en /api/sitemap — añade el rewrite de vercel.json (más abajo) para que
 * también responda en /sitemap.xml (la ruta que espera Google).
 *
 * Si en el futuro las rutas vienen de una base de datos real en vez de
 * routes.config.js, sustituye la importación por tu query (Postgres,
 * Supabase, etc.) — el resto del código no cambia.
 * -----------------------------------------------------------------------
 */

const { ROUTES, SITE } = require("../routes.config");

function buildSitemapXml(routes, site) {
  const urlEntries = routes
    .map(
      (r) => `
  <url>
    <loc>${site.baseUrl}${r.path}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries}
</urlset>`;
}

module.exports = (req, res) => {
  const xml = buildSitemapXml(ROUTES, SITE);

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  // cachea 1h en el edge de Vercel, revalida en background — real-time
  // pero sin regenerar el XML en cada request
  res.setHeader("Cache-Control", "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400");
  res.status(200).send(xml);
};
