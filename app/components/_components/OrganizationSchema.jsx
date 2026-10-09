// Sitewide Organization structured data — the base layer that page-level
// FAQPage schema hangs off. Everything here is already public on the site.
const ORG = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SoftLes",
  url: "https://softles.in",
  logo: "https://softles.in/SoftLes.png",
  description:
    "SoftLes is a web design and development agency building WordPress and Shopify sites, custom web apps, and the integrations and automation that keep them running.",
  email: "info@softles.in",
  telephone: "+918954000202",
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  sameAs: [
    "https://www.facebook.com/softlesweb/",
    "https://x.com/softlesindia",
    "https://www.linkedin.com/company/softlesindia/",
    "https://www.instagram.com/softlesindia/",
  ],
  knowsAbout: [
    "WordPress development",
    "Shopify development",
    "Web design and prototyping",
    "API integration",
    "Workflow automation",
  ],
};

export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG) }}
    />
  );
}
