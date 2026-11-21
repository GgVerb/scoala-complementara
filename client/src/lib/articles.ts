// Sursa unică pentru articole: client/src/data/articles.json.
// De aici derivă lista de pe /articole, ultimele articole de pe homepage,
// titlul și data din pagina articolului, navigarea precedent/următor
// și sitemap.xml (generat la build de scripts/generate-sitemap.mjs).
//
// Pentru un articol nou: adaugă o intrare în articles.json și conținutul
// în components/article-content.tsx (blocul `if (articleId === "...")`).
import data from "@/data/articles.json";

export interface ArticleMeta {
  id: string;
  title: string;
  description: string;
  /** Data publicării, format ISO: AAAA-LL-ZZ */
  date: string;
  /** false = articol accesibil prin link, dar care nu apare în listă și în navigare */
  listed: boolean;
  /** Unde duce butonul din header (implicit: lista de articole) */
  backTo?: "despre-noi";
}

const LUNI = [
  "ianuarie", "februarie", "martie", "aprilie", "mai", "iunie",
  "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie",
];

/** "2026-11-19" → "19 noiembrie 2026" */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map((n) => parseInt(n, 10));
  return `${d} ${LUNI[m - 1]} ${y}`;
}

export const allArticles: ArticleMeta[] = data as ArticleMeta[];

/** Articolele din listă, cele mai recente primele (la aceeași dată: ordinea din JSON). */
export const listedArticles: ArticleMeta[] = allArticles
  .map((a, i) => ({ a, i }))
  .filter(({ a }) => a.listed)
  .sort((x, y) => (x.a.date === y.a.date ? x.i - y.i : x.a.date < y.a.date ? 1 : -1))
  .map(({ a }) => a);

export function getArticle(id: string | undefined): ArticleMeta | undefined {
  return allArticles.find((a) => a.id === id);
}

/** Precedent = mai vechi, următor = mai nou. Doar pentru articolele din listă. */
export function getPrevNext(id: string): { previous?: ArticleMeta; next?: ArticleMeta } {
  const i = listedArticles.findIndex((a) => a.id === id);
  if (i === -1) return {};
  return { previous: listedArticles[i + 1], next: listedArticles[i - 1] };
}
