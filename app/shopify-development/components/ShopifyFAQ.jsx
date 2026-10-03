"use client";

import FaqSection from "../../components/_components/FaqSection";

const faqs = [
  {
    q: "Why should I choose Shopify for my ecommerce business?",
    a: "Shopify is the world's leading ecommerce platform with over 4.6 million active stores. It combines a fully managed, hosted infrastructure — no server maintenance — with an extensive app ecosystem, native payment processing via Shop Pay, and a clear scalability path to Shopify Plus. For brands wanting to launch fast, iterate often, and grow without accumulating technical debt, Shopify is the most commercially sensible choice available today.",
  },
  {
    q: "Do you build Shopify Plus stores?",
    a: "Yes. We have hands-on production experience with the complete Shopify Plus feature set — Shopify Scripts, Launchpad, Flow, B2B Commerce, Shopify Markets, multi-storefronts, and the Plus Admin API. Whether you're an existing Plus merchant looking for a partner, or a scaling brand preparing to move up, we can help you make full use of the platform's capabilities.",
  },
  {
    q: "Can you redesign my existing Shopify store without losing data or rankings?",
    a: "Absolutely. We rebuild and redesign Shopify stores regularly. Our process develops the new theme in a staging environment while your live store keeps trading. We preserve your URL structure for SEO, migrate all customisations, and execute a zero-downtime switchover with a same-day rollback plan ready as a precaution.",
  },
  {
    q: "Do you develop custom Shopify apps?",
    a: "Yes — both public (App Store) and private apps. When existing Shopify apps don't meet your exact requirements, we architect and build a custom solution. Common use cases include loyalty programs, custom subscription management portals, B2B pricing logic, and ERP or WMS integrations.",
  },
  {
    q: "Can you migrate my store from WooCommerce or Magento to Shopify?",
    a: "Yes. We handle full platform migrations to Shopify, including product data, customer records, order history, SEO redirects, and all third-party integrations. We build and fully validate the new Shopify store in parallel before executing a staged cutover to minimise risk.",
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "Yes. We offer monthly retainer plans covering ongoing development hours, theme and app updates, performance monitoring, security reviews, and priority support SLAs. Many of our clients treat SoftLes as their outsourced Shopify development team — a long-term technical partner rather than a one-off agency project.",
  },
];

export default function ShopifyFAQ() {
  return (
    <FaqSection
      title="Frequently asked questions"
      copy="Everything you need to know before starting your Shopify project with us."
      faqs={faqs}
    />
  );
}
