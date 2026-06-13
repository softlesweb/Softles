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
    // Base weight background and explicit desktop constraints maintained
    <section className="py-12 sm:py-16 lg:py-28 bg-[#0D0F12] border-t border-[#2a2e40]" id="faq">
      <div className="service-page-container">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#181B23] border border-[#2a2e40] mb-4">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#BCC1CA]/80">
              Common Questions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#BCC1CA]/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
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
                  bg-[#14161F] 
                  border 
                  transition-all 
                  duration-300
                  ${isOpen ? "border-[#DC4242]/40 shadow-[0_12px_30px_rgba(220,66,66,0.04)]" : "border-[#2a2e40]/70 hover:border-[#DC4242]/30"}
                `}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full px-5 sm:px-8 py-5 flex items-center justify-between gap-4 text-left group transition-colors"
                >
                  <h4 className={`font-bold text-sm sm:text-base tracking-tight transition-colors duration-300 ${isOpen ? "text-[#DC4242]" : "text-white group-hover:text-[#DC4242]"}`}>
                    {faq.q}
                  </h4>
                  
                  {/* Precision Chevron Icon instead of hardcoded raw string plus code */}
                  <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded bg-[#0D0F12] border border-[#2a2e40] text-[#BCC1CA]/60 group-hover:text-[#DC4242] transition-colors">
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
                    ${isOpen ? "grid-rows-[1fr] opacity-100 border-t border-[#2a2e40]/40" : "grid-rows-[0fr] opacity-0"}
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-8 py-5 bg-[#0D0F12]/40 text-[#BCC1CA]/80 text-xs sm:text-sm leading-relaxed tracking-wide">
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