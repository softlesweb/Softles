"use client";

import WordReveal from "../../components/_components/WordReveal";
import { motion } from "framer-motion";
import { FaShopify } from "react-icons/fa";

const EASE = [0.22, 1, 0.36, 1];

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export default function ShopifyTrust() {
  const advantages = [
    {
      icon: (
        <svg {...iconProps}>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: "Fast & Reliable Infrastructure",
      desc: "Shopify's global CDN and enterprise-ready uptime keep your store fast and available during every launch and sale.",
    },
    {
      icon: (
        <svg {...iconProps}>
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: "Secure Payment Ecosystem",
      desc: "PCI-compliant checkout, Shop Pay optimization, and secure payments so customers can buy with confidence.",
    },
    {
      icon: (
        <svg {...iconProps}>
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      ),
      title: "Scalable Commerce Platform",
      desc: "Grow from a single storefront to Shopify Plus, multi-country stores, and headless commerce without a rewrite.",
    },
    {
      icon: (
        <svg {...iconProps}>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      ),
      title: "Easy Store Management",
      desc: "A polished admin experience and smart workflows make product, order, and campaign management simple.",
    },
  ];

  return (
    <section className="softles-section-secondary" id="why-shopify">
      <div className="service-page-container">
        <div className="mb-4">
          <div className="softles-eyebrow mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">Platform Advantages</span>
          </div>
          <WordReveal as="h2" className="service-section-heading text-ink">
            Why Leading Brands Choose Shopify
          </WordReveal>
          <p className="softles-section-copy max-w-xl">
            Shopify powers over 4.6 million stores worldwide. It&apos;s the platform built to convert browsers into buyers — and to scale without friction.
          </p>

          {/* Partner framing — we build with Shopify, as partners, not resellers */}
          <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-[#36F4A4]/30 bg-[#36F4A4]/[0.07] px-5 py-2.5">
            <FaShopify className="w-5 h-5 text-[#36F4A4] shrink-0" />
            <span className="text-sm text-mute">
              <span className="font-bold text-ink">SoftLes × Shopify</span> — we work as a Shopify partner agency, building on the platform every day.
            </span>
          </div>
        </div>

        {/* Stripe-style borderless feature grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-16">
          {advantages.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE }}
              className="group flex items-start gap-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand transition-all duration-300 group-hover:border-brand/60 group-hover:bg-brand/15">
                {item.icon}
              </span>
              <div>
                <h3 className="text-base font-bold text-ink leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-mute/75 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
