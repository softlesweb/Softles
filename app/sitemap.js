// Next.js metadata route → served at /sitemap.xml
// Only indexable pages belong here; the /lp/* ad pages are intentionally noindex.
import { projects } from "./work/projects";

const BASE_URL = "https://softles.in";

export default function sitemap() {
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/shopify-development", priority: 0.9, changeFrequency: "monthly" },
    { path: "/wordpress-development", priority: 0.9, changeFrequency: "monthly" },
    ...projects.map((p) => ({
      path: `/work/${p.slug}`,
      priority: 0.7,
      changeFrequency: "monthly",
    })),
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ];

  const lastModified = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
