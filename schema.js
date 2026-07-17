/**
 * lib/schema.js
 * -----------------------------------------------------------------------
 * Genera el bloque JSON-LD (Schema.org) correcto según el "type" de la
 * ruta. Esto es lo que realmente ayuda a LLMs y motores de búsqueda
 * generativa (GEO/AEO) a entender QUÉ es tu página, no solo de qué habla.
 * -----------------------------------------------------------------------
 */

function buildOrganizationNode(site) {
  return {
    "@type": "Organization",
    name: site.name,
    url: site.baseUrl,
    logo: site.logo,
    sameAs: site.sameAs,
  };
}

function buildSchema(route, site) {
  const base = {
    "@context": "https://schema.org",
  };

  switch (route.type) {
    case "TechArticle":
      return {
        ...base,
        "@type": "TechArticle",
        headline: route.title,
        description: route.description,
        image: route.image || site.defaultImage,
        author: {
          "@type": "Person",
          name: route.author || site.name,
        },
        publisher: buildOrganizationNode(site),
        datePublished: route.datePublished,
        dateModified: route.lastmod,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": site.baseUrl + route.path,
        },
      };

    case "FAQPage":
      return {
        ...base,
        "@type": "FAQPage",
        mainEntity: (route.faq || []).map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      };

    case "Person": {
      const profilePageNode = {
        "@type": "ProfilePage",
        mainEntity: {
          "@type": "Person",
          "@id": `${site.baseUrl}/#person`,
          name: site.personName || site.name,
          url: site.baseUrl,
          image: route.image || site.defaultImage,
          description: route.description,
          jobTitle: route.jobTitle || "Creador de contenido",
          sameAs: site.sameAs,
          ...(site.stats
            ? {
                interactionStatistic: site.stats.map((s) => ({
                  "@type": "InteractionCounter",
                  interactionType: "https://schema.org/FollowAction",
                  userInteractionCount: s.followers,
                  name: s.platform,
                })),
              }
            : {}),
        },
      };

      if (!route.faq) {
        return { ...base, ...profilePageNode };
      }

      const faqNode = {
        "@type": "FAQPage",
        mainEntity: route.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      };
      return { ...base, "@graph": [profilePageNode, faqNode] };
    }

    case "ServicePage": {
      // Service conectado al Person vía @id (misma persona, no una entidad nueva)
      const serviceNode = {
        "@type": "Service",
        name: route.title,
        description: route.description,
        serviceType: route.serviceType || "Contenido UGC",
        provider: { "@id": `${site.baseUrl}/#person` },
        areaServed: route.areaServed || "ES",
        url: site.baseUrl + route.path,
      };
      const faqNode = route.faq
        ? {
            "@type": "FAQPage",
            mainEntity: route.faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }
        : null;
      return {
        ...base,
        "@graph": faqNode ? [serviceNode, faqNode] : [serviceNode],
      };
    }

    case "SoftwareApplication":
      return {
        ...base,
        "@type": "SoftwareApplication",
        name: site.name,
        url: site.baseUrl,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: route.description,
        publisher: buildOrganizationNode(site),
      };

    default:
      // Fallback seguro: WebPage genérica, siempre mejor que no emitir nada
      return {
        ...base,
        "@type": "WebPage",
        name: route.title,
        description: route.description,
        url: site.baseUrl + route.path,
      };
  }
}

module.exports = { buildSchema };
