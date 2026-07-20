"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* ---------- Tooltip for bullets ---------- */
function BulletTooltip({ children, tip }) {
  const [show, setShow] = useState(false);
  return (
    <span
      className="relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-20 bg-surface-overlay text-ink text-xs px-2.5 py-1.5 rounded-lg border border-line shadow-lg whitespace-nowrap">
          {tip}
        </span>
      )}
    </span>
  );
}

/* ---------- Small calm check mark (token-driven, no raw hex) ---------- */
function CheckMark() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 shrink-0 text-brand"
      aria-hidden="true"
    >
      <path d="M4 10.5L8.5 15L16 5.5" />
    </svg>
  );
}

const services = [
  {
    image: "/DesignSystem.png",
    title: "Design & Prototyping",
    bullets: [
      { txt: "AI-accelerated wireframes & mockups", tip: "AI-assisted design moves from idea to high-fidelity screens in days, not weeks." },
      { txt: "Design systems & branding", tip: "Re-usable components that ensure brand consistency at scale." },
      { txt: "Interactive prototypes", tip: "Clickable demos for rapid feedback before writing code." },
      { txt: "User testing", tip: "Task-based sessions to refine UX and boost conversion." },
    ],
  },

  {
    image: "/InterfaceDesign.png",
    title: "Shopify Development",
    bullets: [
      { txt: "Custom Theme Development", tip: "Conversion-focused themes built for brand and speed." },
      { txt: "Headless & Next.js / Hydrogen", tip: "Decoupled storefronts for performance and flexibility." },
      { txt: "Shopify App Development", tip: "Embedded and private apps to extend store capability." },
      { txt: "Integrations & Automation", tip: "Connect Shopify to CRM, email and business systems." },
    ],
  },

  {
    image: "/UserResearch.png",
    title: "WordPress Development",
    bullets: [
      { txt: "Custom Theme Development", tip: "Pixel-perfect WordPress themes built from scratch." },
      { txt: "Headless WordPress (Next.js)", tip: "Decoupled architectures for modern frontends and speed." },
      { txt: "Plugin & WooCommerce Extensions", tip: "Custom plugins and commerce features built to spec." },
      { txt: "Integrations & Automation", tip: "Connect WordPress to CRMs, email and business tools." },
    ],
  },

  {
    image: "/Prototyping.png",
    title: "Integrations & Automation",
    bullets: [
      { txt: "API & CRM integrations", tip: "Connect your store or site to CRMs, email, and business systems." },
      { txt: "Workflow & AI automation", tip: "Automate order flows, notifications, and back-office busywork." },
      { txt: "Payments, shipping & ERP", tip: "Reliable hookups to the platforms your operations run on." },
      { txt: "Custom web apps when needed", tip: "Bespoke full-stack development as the supporting layer for automations and integrations." },
    ],
  },
];

function MobileStackCarousel({ services }) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const isPrevDisabled = active === 0;
  const isNextDisabled = active === services.length - 1;

  const handleNext = () => {
    if (isNextDisabled) return;
    setDirection(1);
    setActive((prev) => Math.min(prev + 1, services.length - 1));
  };
  const handlePrev = () => {
    if (isPrevDisabled) return;
    setDirection(-1);
    setActive((prev) => Math.max(prev - 1, 0));
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) handleNext(); // Swipe left -> next
    else if (diff < -50) handlePrev(); // Swipe right -> prev
  };

  return (
    <div className="md:hidden w-full flex flex-col items-center mt-12 relative">
      <div
        className="relative w-full max-w-xs min-h-[460px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Stacked background cards */}
        {[1, 2].map((offset) => {
          const index = (active + offset) % services.length;
          const zIndex = 10 - offset;
          const scale = 1 - (offset * 0.05);
          const opacity = 1 - (offset * 0.5);
          const yOffset = offset * 16;

          return (
            <motion.div
              key={`stack-${index}`}
              initial={false}
              animate={{
                scale,
                y: yOffset,
                opacity,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 softles-card p-8 flex flex-col items-start min-h-[320px]"
              style={{
                zIndex,
                transformOrigin: "center bottom",
              }}
            >
              <div className="mb-6 flex items-center justify-start opacity-70">
                <Image
                  src={services[index].image}
                  alt={services[index].title}
                  width={56}
                  height={56}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold mb-4 text-left text-ink-muted">{services[index].title}</h3>
              <ul className="w-full flex flex-col gap-2 mt-2 mb-6 opacity-70">
                {services[index].bullets.slice(0, 2).map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 py-1 text-sm text-ink-muted"
                  >
                    <CheckMark />
                    {b.txt}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}

        {/* Active card */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={active}
            custom={direction}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 bg-surface-raised rounded-2xl border border-line-strong shadow-[0_1px_2px_rgba(0,0,0,0.25)] p-8 flex flex-col items-start min-h-[320px] z-30"
          >
            <div className="mb-4 flex items-center justify-center">
              <Image
                src={services[active].image}
                alt={services[active].title}
                width={64}
                height={64}
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-5 text-left text-ink">{services[active].title}</h3>
            <ul className="w-full flex flex-col gap-3">
              {services[active].bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-line-subtle bg-surface-overlay/40 px-3 py-2 text-sm text-ink-muted text-left transition-colors duration-200 hover:border-line hover:text-ink"
                >
                  <CheckMark />
                  {b.txt}
                </li>
              ))}
            </ul>

            {/* Active card indicator */}
            <div className="absolute -top-px left-8 w-10 h-0.5 bg-brand rounded-full" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center gap-4 mt-8 z-40">
        <button
          disabled={isPrevDisabled}
          onClick={handlePrev}
          aria-label="Previous service"
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
            isPrevDisabled
              ? "border-line-subtle text-ink-faint cursor-not-allowed"
              : "border-line-strong text-ink hover:border-brand hover:text-brand"
          }`}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Indicators */}
        <div className="flex items-center gap-2">
          {services.map((_, idx) => (
            <button
              key={idx}
              disabled={idx === active}
              aria-label={`Go to service ${idx + 1}`}
              onClick={() => {
                setDirection(idx > active ? 1 : -1);
                setActive(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === active
                  ? 'w-8 bg-brand'
                  : 'w-1.5 bg-line-strong hover:bg-ink-faint'
              }`}
            />
          ))}
        </div>

        <button
          disabled={isNextDisabled}
          onClick={handleNext}
          aria-label="Next service"
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
            isNextDisabled
              ? "border-line-subtle text-ink-faint cursor-not-allowed"
              : "border-line-strong text-ink hover:border-brand hover:text-brand"
          }`}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function OurServicesSection() {
  return (
    <section id="services" className="w-full py-16 md:py-24 px-0 flex flex-col justify-center overflow-hidden border-t border-line bg-surface">
      <div className="service-page-container mx-auto w-full flex flex-col">
        <div className="relative z-10 flex flex-col">
          <div className="softles-eyebrow">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">What We Do</span>
          </div>
          <span className="mt-4 service-section-heading font-semibold text-ink">
            What we do
          </span>
          <span className="softles-section-copy">
            Design, development, and the automation that connects it all. Here&apos;s where we spend our time.
          </span>
        </div>

        {/* Mobile stack card carousel — phones only */}
        <MobileStackCarousel services={services} />

        {/* Tablet & desktop grid: 2 columns on tablet, 4 on desktop */}
        <div className="mt-12 md:mt-16 hidden md:grid grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="group softles-card p-6 md:p-8 flex flex-col items-start min-h-[320px]"
            >
              <div className="mb-6 flex items-center justify-start transition-transform duration-300 group-hover:-translate-y-0.5">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>

              <h3 className="text-lg font-semibold mb-5 text-left text-ink leading-tight">
                {service.title}
              </h3>

              <ul className="w-full flex flex-col gap-2.5">
                {service.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-lg border border-line-subtle bg-surface-overlay/40 px-3 py-2 text-sm text-ink-muted text-left transition-colors duration-300 hover:border-line hover:text-ink"
                  >
                    <CheckMark />
                    <BulletTooltip tip={b.tip}>
                      <span>{b.txt}</span>
                    </BulletTooltip>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
