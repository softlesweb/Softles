import { getProject } from "../../work/projects";

// What the page preloader says for each route: a small eyebrow that types in,
// and the page's own name that rises word by word. Home keeps the wordmark
// preloader; legal pages get nothing but the route bar, so return null there.
const PAGES = {
  "/shopify-development": { eyebrow: "Services · E-commerce", title: "Shopify Development" },
  "/wordpress-development": { eyebrow: "Services · Websites", title: "WordPress Development" },
  "/design-prototyping": { eyebrow: "Services · Design", title: "Design & Prototyping" },
  "/integrations-automation": { eyebrow: "Services · Automation", title: "Integrations & Automation" },
  "/lp/shopify": { eyebrow: "Services · E-commerce", title: "Shopify Development" },
  "/lp/wordpress": { eyebrow: "Services · Websites", title: "WordPress Development" },
  "/work": { eyebrow: "Selected work", title: "Our Work" },
  "/blog": { eyebrow: "Journal", title: "Blog" },
};

export function preloaderCopy(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (PAGES[path]) return PAGES[path];

  const slug = path.match(/^\/work\/([^/]+)$/)?.[1];
  if (slug) {
    const project = getProject(slug);
    if (project) return { eyebrow: `Case study · ${project.category}`, title: project.name };
  }
  return null;
}
