"use client";

import { useState } from "react";

export default function ShopifyFAQ() {
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

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-[#191C26]" id="faq">
      <div className="service-page-container">
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BCC1CA]">
              Common Questions
            </span>
            <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
          </div>
          <h2 className="service-section-heading mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-[#BCC1CA]/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Everything you need to know before starting your Shopify project with us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#181B23] border border-[#2a2e40] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between gap-3 hover:bg-[#1a1e2a] transition-colors duration-300"
              >
                <h4 className="font-semibold text-[#FFFFFF] text-left text-sm sm:text-base pr-2">
                  {faq.q}
                </h4>
                <span
                  className={`text-xl font-bold text-[#BCC1CA] transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIdx === idx ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {openIdx === idx && (
                <div className="px-4 sm:px-8 py-4 sm:py-5 bg-[#12131c] border-t border-[#2a2e40] text-[#BCC1CA]/80 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
