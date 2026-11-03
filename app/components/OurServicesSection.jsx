"use client";

import WordReveal from "./_components/WordReveal";
import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { enter, EASE } from "./_components/motion-presets";

const MotionLink = motion.create(Link);

const iconProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const services = [
  {
    number: "01",
    icon: (
      <svg {...iconProps}>
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    href: "/design-prototyping",
    linkLabel: "Learn more",
    title: "Design & Prototyping",
    description: "From idea to clickable, user-tested screens — in days, not weeks.",
    items: [
      "AI-accelerated wireframes & mockups",
      "Design systems & branding",
      "Interactive prototypes",
      "User testing",
    ],
  },
  {
    number: "02",
    icon: (
      <svg {...iconProps}>
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    href: "/shopify-development",
    linkLabel: "Learn more",
    title: "Shopify Development",
    description: "Storefronts and apps built for conversion, brand, and speed.",
    items: [
      "Custom Theme Development",
      "Headless & Next.js / Hydrogen",
      "Shopify App Development",
      "Integrations & Automation",
    ],
  },
  {
    number: "03",
    icon: (
      <svg {...iconProps}>
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
      </svg>
    ),
    href: "/wordpress-development",
    linkLabel: "Learn more",
    title: "WordPress Development",
    description: "Custom themes, plugins, and headless builds — pixel-perfect, to spec.",
    items: [
      "Custom Theme Development",
      "Headless WordPress (Next.js)",
      "Plugin & WooCommerce Extensions",
      "Integrations & Automation",
    ],
  },
  {
    number: "04",
    icon: (
      <svg {...iconProps}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    href: "/integrations-automation",
    linkLabel: "Learn more",
    title: "Integrations & Automation",
    description: "Your store, CRM, and back office — finally talking to each other.",
    items: [
      "API & CRM integrations",
      "Workflow & AI automation",
      "Payments, shipping & ERP",
      "Custom web apps when needed",
    ],
  },
];

function SpotlightCard({ service, idx }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    // Icon tilt follows the cursor (offset from card centre).
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--ry", `${(px * 18).toFixed(2)}deg`);
    el.style.setProperty("--rx", `${(-py * 14).toFixed(2)}deg`);
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mx", "-200px");
    el.style.setProperty("--my", "-200px");
    el.style.setProperty("--rx", "8deg");
    el.style.setProperty("--ry", "-8deg");
  };

  return (
    <MotionLink
      href={service.href}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.25 + idx * 0.09, ease: EASE } }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative block rounded-2xl bg-line/70 p-px cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-page active:bg-brand/40 transition-colors max-md:sticky max-md:top-[var(--stack-top)]"
      style={{ "--mx": "-200px", "--my": "-200px", "--rx": "8deg", "--ry": "-8deg", "--stack-top": `${76 + idx * 12}px` }}
    >
      {/* Border glow that follows the cursor */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(320px circle at var(--mx) var(--my), rgba(255,77,87,0.55), transparent 70%)",
        }}
      />

      {/* Card surface */}
      <div className="relative h-full rounded-[15px] bg-gradient-to-b from-panel to-deep p-6 xl:p-7 overflow-hidden">
        {/* Inner light wash following the cursor */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              "radial-gradient(480px circle at var(--mx) var(--my), rgba(255,77,87,0.06), transparent 65%)",
          }}
        />

        <div className="relative flex flex-col h-full">
          <div className="mb-5 [perspective:600px]">
            {/* Icon with a 3D bevel treatment */}
            <div className="relative w-fit [transform-style:preserve-3d] transition-transform duration-200 ease-out [transform:rotateX(var(--rx))_rotateY(var(--ry))] group-hover:[transform:rotateX(var(--rx))_rotateY(var(--ry))_translateY(-4px)_scale(1.06)]">
              {/* Glow under the icon */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-full bg-[radial-gradient(circle,rgba(255,77,87,0.16),transparent_70%)] blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              {/* Ground shadow that deepens on hover */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 -bottom-2.5 h-2 w-10 -translate-x-1/2 rounded-full bg-[var(--svc-ground)] blur-[6px] transition-all duration-500 group-hover:w-12"
              />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-brand/30 bg-gradient-to-b from-brand/15 to-brand/[0.04] text-brand shadow-[var(--svc-icon-shadow)] transition-all duration-500 group-hover:border-brand/60 group-hover:text-brand-2 group-hover:shadow-[var(--svc-icon-shadow-hover)]">
                {service.icon}
              </div>
            </div>
          </div>

          <h3 className="text-lg xl:text-xl font-bold text-ink leading-tight">
            {service.title}
          </h3>
          <p className="text-sm text-mute/75 leading-relaxed mt-2.5 mb-6">
            {service.description}
          </p>

          <ul className="mt-auto flex flex-col">
            {service.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 py-3 border-t border-line text-sm text-mute hover:text-ink hover:pl-1.5 transition-all duration-300"
              >
                <span className="text-brand text-xs leading-none">◆</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Link affordance — revealed on hover */}
          <div className="flex items-center gap-2 pt-4 border-t border-line text-sm font-bold text-brand opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {service.linkLabel}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </div>
        </div>
      </div>
    </MotionLink>
  );
}

export default function OurServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:pt-20 md:pb-24 overflow-x-clip border-t border-line bg-page">
      <div className="service-page-container mx-auto w-full flex flex-col">
        <div className="flex flex-col">
          <motion.div {...enter(0)} className="softles-eyebrow mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">Our services</span>
          </motion.div>
          <WordReveal as="span" className="mt-2 mb-2 lg:mb-0 service-section-heading text-ink">
            What we do
          </WordReveal>
          <motion.span {...enter(2)} className="text-sm sm:text-base text-mute mt-2 max-w-2xl leading-relaxed">
            Design, development, and the automation that connects it all. Here&apos;s where we spend our time.
          </motion.span>
        </div>

        <div className="mt-12 flex flex-col gap-5 md:grid md:grid-cols-2 lg:grid-cols-4 md:items-stretch">
          {services.map((service, idx) => (
            <SpotlightCard key={service.number} service={service} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
