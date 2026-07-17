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
  personName: "Patrick Bravo",
  baseUrl: "https://patrick-bravo-kappa.vercel.app", // aún sin dominio propio
  defaultImage: "https://patrick-bravo-kappa.vercel.app/img/og-default.jpg",
  twitterHandle: "@patrick_bravo_oficial",
  logo: "https://patrick-bravo-kappa.vercel.app/img/logo.png",
  sameAs: [
    "https://www.tiktok.com/@patrick_bravo_oficial",
    "https://www.instagram.com/patrick_bravo_oficial",
    // Entidad cruzada: mismo Patrick, frente de contenido IA/tecnología
    "https://neuralclab-ugc.vercel.app/",
    "https://www.youtube.com/channel/UC_EQH_U6yBtna6zt81mbBCQ",
    "https://www.tiktok.com/@neuralclab",
    "https://www.instagram.com/neuralclab",
  ],
  // Señales reputacionales (ajusta las cifras si cambian)
  stats: [
    { platform: "Instagram", followers: 18093 },
    { platform: "TikTok", followers: 2921 },
    { platform: "YouTube — Belleza de Hombre by Patrick Bravo", followers: 17500 },
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
    type: "Person", // home = presentación de Patrick como persona/creador, no como producto
    jobTitle: "Creador de contenido / Influencer",
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
    type: "ServicePage",
    serviceType: "Vídeo UGC con guion propio y publicación cruzada",
    areaServed: "ES",
    image: "https://patrick-bravo-kappa.vercel.app/img/og-para-marcas.jpg",
    faq: [
      {
        q: "¿Cómo contrato a un creador de contenido como Patrick Bravo?",
        a: "Puedes revisar el media kit y las tarifas en esta página y contactar directamente por email para negociar el brief y el pago (70% al inicio, 30% a la entrega).",
      },
      {
        q: "¿Dónde puedo ver el media kit de Patrick Bravo?",
        a: "El media kit con datos de audiencia, tarifas y ejemplos de trabajo está disponible para descarga directa en esta página.",
      },
      {
        q: "¿Tiene portfolio Patrick Bravo como creador de contenido?",
        a: "Sí, el portfolio incluye vídeos UGC con guion propio, contenido de transformación personal y ejemplos de publicación cruzada en TikTok e Instagram.",
      },
      {
        q: "¿Qué es un creador de contenido UGC?",
        a: "Un creador de contenido UGC (User Generated Content) produce vídeos con estilo auténtico y personal para que las marcas los usen en sus propios canales de publicidad y redes.",
      },
    ],
    // keywords: contratar creador de contenido · media kit influencer ·
    // media kit para influencers · portfolio creador de contenido ·
    // creador de contenido ugc
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
