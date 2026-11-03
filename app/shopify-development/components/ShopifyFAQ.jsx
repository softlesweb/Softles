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
    <section className="softles-section-primary" id="faq">
      <div className="service-page-container">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="softles-eyebrow justify-center mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">
              Common Questions
            </span>
          </div>
          <h2 className="service-section-heading text-[#FFFFFF]">
            Frequently Asked Questions
          </h2>
          <p className="softles-section-copy mx-auto">
            Everything you need to know before starting your Shopify project with us.
          </p>
        </div>

        {/* Accordion Stack Container */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                // Symmetrical interaction model matching previous structural cards
                className={`
                  rounded-xl 
                  overflow-hidden 
                  bg-gradient-to-br from-[#23263a] to-[#181B23] 
                  border 
                  transition-all 
                  duration-300
                  ${isOpen ? "border-[#FF4D57]/40 shadow-[0_12px_30px_rgba(255,77,87,0.04)]" : "border-[#2E3446]/70 hover:border-[#FF4D57]/30"}
                `}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full px-5 sm:px-8 py-5 flex items-center justify-between gap-4 text-left group transition-colors"
                >
                  <h4 className={`font-bold text-sm sm:text-base tracking-tight transition-colors duration-300 ${isOpen ? "text-[#FF4D57]" : "text-white group-hover:text-[#FF4D57]"}`}>
                    {faq.q}
                  </h4>
                  
                  {/* Precision Chevron Icon instead of hardcoded raw string plus code */}
                  <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded bg-[#0E1219] border border-[#2E3446] text-[#C7CCD6]/60 group-hover:text-[#FF4D57] transition-colors">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                {/* Accordion Content Panel */}
                <div
                  className={`
                    grid 
                    transition-all 
                    duration-300 
                    ease-in-out
                    ${isOpen ? "grid-rows-[1fr] opacity-100 border-t border-[#2E3446]/40" : "grid-rows-[0fr] opacity-0"}
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-8 py-5 bg-[#0E1219]/60 text-[#C7CCD6]/80 text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
