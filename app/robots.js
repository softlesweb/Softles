// Next.js metadata route → served at /robots.txt
const BASE_URL = "https://softles.in";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Ad landing pages and API routes should stay out of search results.
        disallow: ["/lp/", "/api/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
