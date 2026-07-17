/**
 * routes.config.js — Patrick Bravo UGC
 * -----------------------------------------------------------------------
 * Reparto de keywords acordado tras revisar el keyword research de AdWords:
 *
 * - Home: solo "creador de contenido" + "influencer español" (identidad).
 *   Se descarta "creadora de contenido" (género no aplica) y "tik tok
 *   españa" / "tik tokers españoles" / "tiktoker español" (intención de
 *   búsqueda de listado/directorio, no de perfil individual — alto riesgo
 *   de rebote). Esas tres quedan como candidatas a un futuro post de blog
 *   tipo "mejores creadores de TikTok España" donde apareces como fuente,
 *   NO como landing objetivo.
 *
 * - "Para marcas": SOLO keywords de intención de contratación directa
 *   (contratar, media kit, portfolio). Se descarta "agencia de
 *   influencers" y variantes — esa intención busca una empresa
 *   intermediaria, no un creador individual; el rebote pesa más que el
 *   hallazgo casual ocasional.
 *
 * - Belleza/Fitness: cluster completo "Patrick Bravo" del research.
 * -----------------------------------------------------------------------
 */

const SITE = {
  name: "Patrick Bravo",
  baseUrl: "https://patrick-bravo-kappa.vercel.app", // aún sin dominio propio
  defaultImage: "https://patrick-bravo-kappa.vercel.app/img/og-default.jpg",
  twitterHandle: "@patrick_bravo_oficial",
  logo: "https://patrick-bravo-kappa.vercel.app/img/logo.png",
  sameAs: [
    "https://www.tiktok.com/@patrick_bravo_oficial",
    "https://www.instagram.com/patrick_bravo_oficial",
  ],
};

const ROUTES = [
  {
    path: "/",
    title: "Patrick Bravo — Creador de Contenido e Influencer Español",
    description:
      "Creador de contenido e influencer español especializado en storytelling, transformación personal y contenido UGC para marcas.",
    changefreq: "weekly",
    priority: 1.0,
    lastmod: "2026-07-17",
    type: "SoftwareApplication", // home = "presentación" del propio Patrick como marca/producto
    image: "https://patrick-bravo-kappa.vercel.app/img/og-home.jpg",
    // keywords objetivo (referencia interna, no se usa en el <head>):
    // creador de contenido (1mil-10mil) · influencer español (1mil-10mil)
  },
  {
    path: "/para-marcas",
    title: "Contrata a Patrick Bravo — Creador UGC | Media Kit",
    description:
      "Media kit, tarifas y portfolio de Patrick Bravo. Contrata contenido UGC a medida para tu marca: vídeos con guion propio y publicación cruzada.",
    changefreq: "monthly",
    priority: 0.9,
    lastmod: "2026-07-17",
    type: "FAQPage",
    image: "https://patrick-bravo-kappa.vercel.app/img/og-para-marcas.jpg",
    faq: [
      {
        q: "¿Cómo contrato a Patrick Bravo como creador de contenido?",
        a: "Puedes revisar el media kit y las tarifas en esta página y contactar directamente por email para negociar el brief.",
      },
      {
        q: "¿Qué incluye el portfolio de Patrick Bravo?",
        a: "Vídeos UGC con guion propio, contenido de transformación personal y publicación cruzada en TikTok e Instagram.",
      },
    ],
    // keywords: contratar creador de contenido · media kit influencer ·
    // media kit para influencers · portfolio creador de contenido
  },
  {
    path: "/belleza-fitness",
    title: "Contenido de Belleza y Fitness | Patrick Bravo",
    description:
      "Contenido de transformación física, rutina y storytelling de belleza y fitness masculino — el proceso real, semana a semana.",
    changefreq: "weekly",
    priority: 0.8,
    lastmod: "2026-07-17",
    type: "TechArticle", // ajusta a "WebPage" si prefieres no forzarlo como artículo técnico
    image: "https://patrick-bravo-kappa.vercel.app/img/og-belleza-fitness.jpg",
    author: "Patrick Bravo",
    datePublished: "2026-07-17",
    // keywords: influencer fitness · influencer fitness hombre · influencer
    // de fitness · creador de contenido fitness · influencer de belleza ·
    // influencer maquillaje (si aplica a tu línea de contenido real)
  },
  // 👉 Pendiente de decidir: post de blog para tik tok españa / tik tokers
  // españoles / tiktoker español (intención listado, no landing directa)
];

module.exports = { SITE, ROUTES };
