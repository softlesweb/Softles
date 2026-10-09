"use client";

import WordReveal from "../../components/_components/WordReveal";
import { motion } from "framer-motion";

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

export default function WordPressTrust() {
  const advantages = [
    {
      icon: (
        <svg {...iconProps}>
          <rect x="3" y="3" width="7" height="9" rx="1" />
          <rect x="14" y="3" width="7" height="5" rx="1" />
          <rect x="14" y="12" width="7" height="9" rx="1" />
          <rect x="3" y="16" width="7" height="5" rx="1" />
        </svg>
      ),
      title: "Flexible CMS",
      desc: "Manage any type of content — from blogs and portfolios to complex product catalogs — with a customisable admin interface your team can actually use.",
    },
    {
      icon: (
        <svg {...iconProps}>
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      ),
      title: "SEO Friendly",
      desc: "Clean semantic markup, fast page speeds, schema support, and deep SEO plugin integrations make WordPress an ideal foundation for organic search growth.",
    },
    {
      icon: (
        <svg {...iconProps}>
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      ),
      title: "Scalable Architecture",
      desc: "Start small and grow without rebuilding. WordPress scales from brochure sites to enterprise platforms with millions of monthly visitors.",
    },
    {
      icon: (
        <svg {...iconProps}>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      ),
      title: "Easy Content Management",
      desc: "Empower your marketing team to publish, edit, and update content without developer involvement — no coding knowledge required after launch.",
    },
  ];

  return (
    <section className="softles-section-secondary" id="why-wordpress">
      <div className="service-page-container">
        <div className="mb-4">
          <div className="softles-eyebrow mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">Platform Advantages</span>
          </div>
          <WordReveal as="h2" className="service-section-heading text-ink">
            Why Businesses Choose WordPress
          </WordReveal>
          <p className="softles-section-copy max-w-xl">
            WordPress powers over 43% of the web for good reason — it&apos;s flexible, scalable, and built for long-term growth.
          </p>
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
