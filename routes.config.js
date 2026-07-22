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
 *
 * NOTA (22 jul 2026): las rutas /para-marcas y /belleza-fitness se han
 * retirado de este archivo hasta que esas páginas existan de verdad.
 * Estaban en el sitemap sin que el HTML/contenido se hubiera construido
 * aún, lo que causaba 404 reales servidos a Google. Cuando esas páginas
 * estén construidas y confirmadas, se vuelven a añadir aquí.
 * -----------------------------------------------------------------------
 */

const SITE = {
  name: "Patrick Bravo",
  personName: "Patrick Bravo",
  baseUrl: "https://patrick-bravo-kappa.vercel.app", // aún sin dominio propio
  defaultImage: "https://patrick-bravo-kappa.vercel.app/img/patrick-bravo-influencer-portrait.jpg",
  twitterHandle: "@patrick_bravo_oficial",
  logo: "https://patrick-bravo-kappa.vercel.app/img/logo.png",
  sameAs: [
    "https://www.tiktok.com/@patrickbravooficial",
    "https://www.instagram.com/patrick_bravo_oficial",
    // Entidad cruzada: mismo Patrick, frente de contenido IA/tecnología
    "https://neuralclab-ugc.vercel.app/",
    "https://www.youtube.com/@Bellezadehombre",
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
    lastmod: "2026-07-22",
    type: "Person", // home = presentación de Patrick como persona/creador, no como producto
    jobTitle: "Creador de contenido / Influencer",
    image: "https://patrick-bravo-kappa.vercel.app/img/patrick-bravo-influencer-portrait.jpg",
    // keywords objetivo (referencia interna, no se usa en el <head>):
    // creador de contenido (1mil-10mil) · influencer español (1mil-10mil)
    faq: [
      {
        q: "¿Qué es un creador de contenido?",
        a: "Un creador de contenido es una persona que produce publicaciones, vídeos o contenido para redes sociales de forma regular, construyendo una audiencia propia y colaborando con marcas.",
      },
      {
        q: "¿Quién es Patrick Bravo?",
        a: "Patrick Bravo es un creador de contenido e influencer español especializado en storytelling y transformación personal, con presencia en TikTok e Instagram.",
      },
      {
        q: "¿Dónde puedo seguir a Patrick Bravo como influencer español?",
        a: "Puedes seguir a Patrick Bravo en TikTok e Instagram como @patrick_bravo_oficial.",
      },
    ],
  },
  // 👉 /para-marcas y /belleza-fitness: retiradas temporalmente — ver nota
  // superior. Vuelven aquí cuando el HTML de esas páginas exista de verdad
  // y esté confirmado entre el chat de la web y el chat de SEO.
];

module.exports = { SITE, ROUTES };
