"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
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
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: idx * 0.08, ease: "easeOut" }}
      className="group relative rounded-2xl bg-[#2E3446]/70 p-px"
      style={{ "--mx": "-200px", "--my": "-200px" }}
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
      <div className="relative h-full rounded-[15px] bg-gradient-to-b from-[#161C27] to-[#10141D] p-6 xl:p-7 overflow-hidden">
        {/* Inner light wash following the cursor */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              "radial-gradient(480px circle at var(--mx) var(--my), rgba(255,77,87,0.06), transparent 65%)",
          }}
        />

        <div className="relative flex flex-col h-full">
          <div className="flex items-baseline justify-between mb-5">
            <span className="text-xs font-bold tracking-[0.25em] text-[#7c8394]">
              {service.number}
            </span>
            <span className="h-px flex-1 mx-4 bg-gradient-to-r from-[#2E3446] to-transparent" />
          </div>

          <h3 className="text-lg xl:text-xl font-bold text-white leading-tight">
            {service.title}
          </h3>
          <p className="text-sm text-[#C7CCD6]/75 leading-relaxed mt-2.5 mb-6">
            {service.description}
          </p>

          <ul className="mt-auto flex flex-col">
            {service.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 py-3 border-t border-[#252B3A] text-sm text-[#C7CCD6] hover:text-white hover:pl-1.5 transition-all duration-300"
              >
                <span className="text-[#FF4D57] text-xs leading-none">◆</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function OurServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:pt-20 md:pb-24 overflow-hidden border-t border-[#2E3446] bg-[#0E1219]">
      <div className="service-page-container mx-auto w-full flex flex-col">
        <div className="flex flex-col">
          <div className="softles-eyebrow mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">Our services</span>
          </div>
          <span className="mt-2 mb-2 lg:mb-0 service-section-heading text-[#FFFFFF]">
            What we do
          </span>
          <span className="text-sm sm:text-base text-[#C7CCD6] mt-2 max-w-2xl leading-relaxed">
            Design, development, and the automation that connects it all. Here&apos;s where we spend our time.
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {services.map((service, idx) => (
            <SpotlightCard key={service.number} service={service} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
