"use client";

import { useState } from "react";

export default function WordPressFAQ() {
  const faqs = [
    {
      q: "Why should I choose WordPress for my business website?",
      a: "WordPress is the world's most widely used CMS, powering over 43% of all websites. It offers unmatched flexibility, a huge ecosystem of plugins and integrations, strong SEO capabilities, and the ability to scale from a simple blog to a complex enterprise platform — all with a content management interface your team can actually learn to use without developer assistance.",
    },
    {
      q: "Can you redesign my existing WordPress website without losing content?",
      a: "Absolutely. We handle complete WordPress redesigns regularly and have a proven migration process that preserves all your existing content, SEO rankings, and URL structure. We build and test the new design in a staging environment first, then execute a clean switchover with zero downtime.",
    },
    {
      q: "Do you develop custom WordPress plugins?",
      a: "Yes. When existing plugins don't meet your exact requirements — or when you need specific business logic, custom workflows, or API integrations — we build fully custom plugins from scratch. All plugins are coded to WordPress standards, thoroughly documented, and come with handover training so your team understands what was built.",
    },
    {
      q: "Do you provide ongoing WordPress maintenance and support?",
      a: "We offer flexible ongoing maintenance retainers that cover core WordPress and plugin updates, daily backups, uptime monitoring, security hardening, and a set number of monthly development hours for small feature additions or content updates. Our clients treat us as their outsourced WordPress team.",
    },
    {
      q: "Can WordPress handle large-scale websites with high traffic?",
      a: "Yes, when built correctly. WordPress scales exceptionally well with the right architecture — managed hosting like WP Engine or Kinsta, a properly configured CDN (Cloudflare), object caching (Redis or Memcached), and optimized database queries. We've built and maintain WordPress platforms handling millions of monthly page views without issue.",
    },
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-[#191C26]">
      <div className="service-page-container">
        {/* Header */}
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
            Everything you need to know before getting started with your WordPress
            project.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#181B23] border border-[#2a2e40] rounded-2xl overflow-hidden"
            >
              {/* Question */}
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

              {/* Answer */}
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
