/**
 * scripts/build-llms-txt.js
 * -----------------------------------------------------------------------
 * Genera public/llms.txt automáticamente a partir de routes.config.js,
 * siguiendo el estándar emergente llmstxt.org: Markdown plano, resumen
 * ejecutivo arriba, y un mapa de enlaces por sección abajo.
 *
 * Uso: node scripts/build-llms-txt.js
 * -----------------------------------------------------------------------
 */

const fs = require("fs");
const path = require("path");
const { ROUTES, SITE } = require("../routes.config");

function buildLlmsTxt(routes, site) {
  const core = routes.filter((r) => r.priority >= 0.9);
  const rest = routes.filter((r) => r.priority < 0.9);

  const section = (title, items) =>
    items.length
      ? `## ${title}\n\n` +
        items
          .map((r) => `- [${r.title}](${site.baseUrl}${r.path}): ${r.description}`)
          .join("\n") +
        "\n"
      : "";

  return `# ${site.name}

> ${routes[0]?.description || ""}

${site.name} ofrece formación práctica de Inteligencia Artificial, herramientas de productividad y contenido técnico sobre modelos de lenguaje (ChatGPT, Gemini, Claude), automatizaciones y adopción de IA para creadores y empresas.

${section("Secciones principales", core)}
${section("Contenido y artículos", rest)}
## Contacto

- Email: Neuralclab@gmail.com
- YouTube: ${site.sameAs[0]}
- TikTok: ${site.sameAs[1]}
- Instagram: ${site.sameAs[2]}
`;
}

function run() {
  const content = buildLlmsTxt(ROUTES, SITE);
  const outPath = path.join(process.cwd(), "public", "llms.txt");
  fs.writeFileSync(outPath, content, "utf-8");
  console.log(`✅ llms.txt generado en ${outPath}`);
}

run();
