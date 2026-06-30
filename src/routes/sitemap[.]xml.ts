import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://unpainted-canvas-room.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          { p: "/", pr: "1.0" },
          { p: "/sobre", pr: "0.8" },
          { p: "/servicos", pr: "0.9" },
          { p: "/contato", pr: "0.8" },
          { p: "/termos-de-uso", pr: "0.3" },
          { p: "/politica-de-privacidade-geral", pr: "0.3" },
          { p: "/politica-de-privacidade", pr: "0.5" },
          { p: "/aviso-legal", pr: "0.3" },
        ];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((u) => `  <url><loc>${BASE_URL}${u.p}</loc><changefreq>monthly</changefreq><priority>${u.pr}</priority></url>`).join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
