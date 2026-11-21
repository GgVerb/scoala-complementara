// Generează, din client/src/data/articles.json și lista de pagini de mai jos:
//   client/public/sitemap.xml  — pentru Google (T2, T8)
//   client/public/_redirects   — rutele Netlify: paginile și articolele existente
//                                răspund cu 200, orice altă adresă cu 404 (T6)
// Rulează automat înainte de `vite build` (vezi package.json → "build").
// Pagină nouă în App.tsx → adaug-o în lista `pages`.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://ggverb.ro";

const pages = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/articole", changefreq: "weekly", priority: "0.9" },
  { path: "/pentru-elevi", changefreq: "monthly", priority: "0.8" },
  { path: "/pentru-adulti", changefreq: "monthly", priority: "0.8" },
  { path: "/pentru-institutii", changefreq: "monthly", priority: "0.8" },
  { path: "/pentru-mentori", changefreq: "monthly", priority: "0.7" },
  { path: "/despre-noi", changefreq: "monthly", priority: "0.7" },
  { path: "/confidentialitate", changefreq: "yearly", priority: "0.3" },
];

const articles = JSON.parse(
  readFileSync(path.join(root, "client/src/data/articles.json"), "utf8"),
);

const url = ({ loc, lastmod, changefreq, priority }) =>
  [
    "  <url>",
    `    <loc>${loc}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ]
    .filter(Boolean)
    .join("\n");

const entries = [
  ...pages.map((p) => url({ loc: SITE + p.path, ...p })),
  ...articles.map((a) =>
    url({
      loc: `${SITE}/articol/${a.id}`,
      lastmod: a.date,
      changefreq: "yearly",
      priority: a.listed ? "0.7" : "0.5",
    }),
  ),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Fișier generat automat de scripts/generate-sitemap.mjs. Nu-l edita manual. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>
`;

writeFileSync(path.join(root, "client/public/sitemap.xml"), xml);
console.log(`sitemap.xml: ${entries.length} adrese`);

// _redirects: fișierele existente (robots.txt, /portfolio/...) sunt servite
// înaintea acestor reguli; restul primesc aplicația, cu 200 sau 404.
const routes = [
  ...pages.filter((p) => p.path !== "/").map((p) => p.path),
  ...articles.map((a) => `/articol/${a.id}`),
];
const redirects =
  "# Fișier generat automat de scripts/generate-routes.mjs. Nu-l edita manual.\n" +
  routes.map((r) => `${r}  /index.html  200`).join("\n") +
  "\n/*  /index.html  404\n";
writeFileSync(path.join(root, "client/public/_redirects"), redirects);
console.log(`_redirects: ${routes.length} rute + 404`);
