import { useEffect } from "react";

// T4: titlu, descriere, canonical și Open Graph per pagină.
// index.html are valorile pentru homepage; acest hook le suprascrie la navigare.
const SITE = "https://ggverb.ro";
const SITE_NAME = "Școala Complementară";
const DEFAULT_TITLE = "Școala Complementară — Educație Experiențială în Natură pentru Tineri";
const DEFAULT_DESCRIPTION =
  "Educație experiențială în Carpați. Aventură, comunicare, autonomie — pentru tineri care vor mai mult de la viață. Ghidată de ranger Gheorghe Lungu, Parcul Național Domogled-Valea Cernei.";

interface PageMeta {
  /** Titlul paginii, fără numele site-ului. Gol = titlul implicit (homepage). */
  title?: string;
  description?: string;
  /** Calea canonică, de ex. "/articole". */
  path: string;
  /** true pentru paginile care nu trebuie indexate (404, articol inexistent). */
  noindex?: boolean;
  type?: "website" | "article";
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function usePageMeta({ title, description, path, noindex = false, type = "website" }: PageMeta) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
    const desc = description || DEFAULT_DESCRIPTION;
    const url = SITE + (path === "/" ? "/" : path);

    document.title = fullTitle;
    setMeta("name", "description", desc);
    setMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", type);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", desc);
    setCanonical(url);
  }, [title, description, path, noindex, type]);
}
