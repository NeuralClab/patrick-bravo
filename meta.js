/**
 * lib/meta.js
 * -----------------------------------------------------------------------
 * Construye el bloque completo de <head> (meta, canonical, Open Graph,
 * JSON-LD) para una ruta dada, y lo inyecta en un HTML base.
 *
 * Dos formas de usarlo:
 *
 * 1) BUILD-TIME (recomendado si sigues sirviendo HTML estático puro):
 *    node scripts/build-heads.js  → reescribe el <head> de cada .html
 *    antes de subir a GitHub/Vercel. Cero coste en runtime, mantiene
 *    tu velocidad actual intacta.
 *
 * 2) RUNTIME (si quieres SSR real por request):
 *    una Vercel Edge Function que intercepta la respuesta y hace el
 *    mismo injectHead() al vuelo. Ver api/render-example.js.
 * -----------------------------------------------------------------------
 */

const { buildSchema } = require("./schema");

const TITLE_MAX = 60;
const DESC_MAX = 160;

function truncate(str, max) {
  if (!str) return "";
  return str.length > max ? str.slice(0, max - 1).trimEnd() + "…" : str;
}

function escapeAttr(str = "") {
  return str.replace(/"/g, "&quot;");
}

/**
 * Genera el string HTML completo a insertar dentro de <head>...</head>
 */
function buildHeadTags(route, site) {
  const title = truncate(route.title, TITLE_MAX);
  const description = truncate(route.description, DESC_MAX);
  const url = site.baseUrl + route.path;
  const image = route.image || site.defaultImage;
  const schema = buildSchema(route, site);

  return `
    <title>${title}</title>
    <meta name="description" content="${escapeAttr(description)}" />
    <link rel="canonical" href="${url}" />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapeAttr(title)}" />
    <meta property="og:description" content="${escapeAttr(description)}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:site_name" content="${escapeAttr(site.name)}" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="${site.twitterHandle}" />
    <meta name="twitter:title" content="${escapeAttr(title)}" />
    <meta name="twitter:description" content="${escapeAttr(description)}" />
    <meta name="twitter:image" content="${image}" />

    <!-- JSON-LD (AEO/GEO): entidades estructuradas para LLMs y buscadores -->
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
  `.trim();
}

/**
 * Inserta el bloque generado dentro de un HTML existente.
 * Busca el marcador <!--SEO_HEAD--> en tu plantilla base y lo sustituye.
 * (Así no tocas el resto del <head> manual: viewport, fonts, favicon...)
 */
function injectHead(html, route, site) {
  const tags = buildHeadTags(route, site);
  if (html.includes("<!--SEO_HEAD-->")) {
    return html.replace("<!--SEO_HEAD-->", tags);
  }
  // fallback: inyecta justo antes de </head> si no hay marcador
  return html.replace("</head>", `${tags}\n</head>`);
}

module.exports = { buildHeadTags, injectHead, truncate };
