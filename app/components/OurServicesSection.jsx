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
        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-20 bg-[#23263a] text-white text-xs px-2.5 py-1.5 rounded shadow-lg whitespace-nowrap">
          {tip}
        </span>
      )}
    </span>
  );
}

const services = [
  {
    image: "/DesignSystem.png",
    title: "Design & Prototyping",
    bullets: [
      { txt: "Wireframing & mockups", tip: "Low → high fidelity screens that map every interaction." },
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
    title: "Custom Web Development",
    bullets: [
      { txt: "Custom website development", tip: "Bespoke sites tailored to your brand and goals." },
      { txt: "Full-stack web applications", tip: "React, Next.js, Node and modern backend architectures." },
      { txt: "Scalable web solutions", tip: "Architecture and ops that grow with your product." },
      { txt: "API development & integrations", tip: "Robust APIs and third-party integrations for data flow." },
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
    <div className="xl:hidden w-full flex flex-col items-center py-8 mt-5 relative">
      <div
        className="relative w-full max-w-xs min-h-[460px] perspective-1000"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Stacked background cards */}
        {[1, 2].map((offset) => {
          const index = (active + offset) % services.length;
          const zIndex = 10 - offset;
          const scale = 1 - (offset * 0.08);
          const opacity = 1 - (offset * 0.4);
          const yOffset = offset * 20;

          return (
            <motion.div
              key={`stack-${index}`}
              initial={false}
              animate={{
                scale,
                y: yOffset,
                opacity,
                rotateX: 5,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-[#23263a] to-[#181B23] rounded-2xl shadow-xl p-8 flex flex-col items-start min-h-[320px] border border-[#2a2e40]"
              style={{
                zIndex,
                transformOrigin: "center bottom",
              }}
            >
              <div className="mb-6 flex items-center justify-start opacity-70">
                <Image
                  src={services[index].image}
                  alt={services[index].title}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-left text-white/70">{services[index].title}</h3>
              <ul className="w-full flex flex-col gap-2 mt-2 mb-6 opacity-70">
                {services[index].bullets.slice(0, 2).map((b, i) => (
                  <li
                    key={i}
                    className="relative pl-8 py-1.5 bg-[#23263a]/40 rounded-lg text-sm text-[#F3F4F6]/70 font-medium"
                  >
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-[#DC4242]/50 text-white text-xs">
                      ✓
                    </span>
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
              y: 24,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -24,
              scale: 0.94,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-br from-[#23263a] to-[#181B23] rounded-2xl shadow-2xl p-8 flex flex-col items-start min-h-[320px] z-30 border border-[#DC4242]/20"
          >
            <div className="mb-2 md:mb-6 flex items-center justify-center">
              <Image
                src={services[active].image}
                alt={services[active].title}
                width={72}
                height={72}
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold mb-4 text-left text-white">{services[active].title}</h3>
            <ul className="w-full flex flex-col gap-5">
              {services[active].bullets.map((b, i) => (
                <li
                  key={i}
                  className="relative pl-10 py-2 bg-[#23263a]/60 rounded-lg text-sm text-[#F3F4F6] font-medium shadow-sm border border-[#23263a] text-left hover:border-[#DC4242] transition-all duration-200"
                >
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 rounded-full bg-[#DC4242] text-white text-xs font-bold shadow-md">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="#DC4242"/>
                      <path d="M7 10.5L9 12.5L13 8.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {b.txt}
                </li>
              ))}
            </ul>

            {/* Active card indicator */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-gradient-to-r from-[#DC4242] to-[#ff6b6b] rounded-full" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <div className="flex gap-4 mt-8 z-40">
        <button
          disabled={isPrevDisabled}
          onClick={handlePrev}
          className={`flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
            isPrevDisabled
              ? "bg-[#23263a]/40 text-white/40 cursor-not-allowed"
              : "bg-gradient-to-br from-[#23263a] to-[#181B23] hover:from-[#DC4242] hover:to-[#ff6b6b] text-white hover:shadow-xl"
          }`}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Indicators */}
        <div className="flex items-center gap-2">
          {services.map((_, idx) => (
            <button
              key={idx}
              disabled={idx === active}
              onClick={() => {
                setDirection(idx > active ? 1 : -1);
                setActive(idx);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === active
                  ? 'w-8 bg-gradient-to-r from-[#DC4242] to-[#ff6b6b]'
                  : 'bg-[#23263a] hover:bg-[#DC4242]/50'
              }`}
            />
          ))}
        </div>

        <button
          disabled={isNextDisabled}
          onClick={handleNext}
          className={`flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
            isNextDisabled
              ? "bg-[#23263a]/40 text-white/40 cursor-not-allowed"
              : "bg-gradient-to-br from-[#23263a] to-[#181B23] hover:from-[#DC4242] hover:to-[#ff6b6b] text-white hover:shadow-xl"
          }`}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function OurServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:pt-20 md:pb-24 px-0 flex flex-col justify-center place-content-between overflow-hidden border-t border-[#2a2e40] bg-[#191C26]">
      <div className="service-page-container mx-auto w-full flex flex-col">
        <div className="relative z-10 flex flex-col">
          <div className="flex items-center text-base font-normal text-[#FFFFFF]">
            <Image
              src={"/Separator.png"}
              alt="separator"
              width={0}
              height={0}
              sizes="(max-width: 768px) 40vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover overflow-hidden min-w-min h-[2px] mr-[10px]"
            />
          <p className="text-sm uppercase tracking-[0.2em] text-[#BCC1CA]">
            What We Do
          </p>
        </div>
        <span className="mt-2 mb-2 lg:mb-0 service-section-heading text-[#FFFFFF]">
          What we do
        </span>
        <span className="text-sm sm:text-base text-[#BCC1CA]/80 mt-2 max-w-2xl leading-relaxed">
          We blend creativity and technology to deliver impactful digital products. Explore our core services below.
        </span>
      </div>

      {/* Mobile stack card carousel */}
      <MobileStackCarousel services={services} />

      {/* Desktop stacked grid */}
      <div className="mt-10 hidden xl:grid xl:grid-cols-4 gap-8 relative perspective-1200">
        {services.map((service, idx) => {
          // Calculate stacking order with perspective
          const stackOrder = services.length - idx;
          const translateY = idx * 8; // Slight vertical offset
          const translateX = idx % 2 === 0 ? -idx * 4 : idx * 4; // Alternating horizontal offset
          const rotate = idx % 2 === 0 ? -1 : 1; // Slight alternating rotation

          return (
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                y: 50,
                rotateX: 10,
                rotateY: rotate * 5
              }}
              whileInView={{
                opacity: 1,
                y: translateY,
                rotateX: 0,
                rotateY: rotate
              }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: "easeOut"
              }}
              whileHover={{
                y: -20,
                scale: 1.05,
                rotateY: 0,
                rotateX: -5,
                zIndex: 50,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              className="group cursor-pointer bg-gradient-to-br from-[#23263a] to-[#181B23] rounded-2xl shadow-2xl p-4 flex flex-col items-start transition-all duration-500 relative min-h-[320px] border border-[#2a2e40] hover:border-[#DC4242]/40"
              style={{
                zIndex: stackOrder,
                transformStyle: 'preserve-3d',
                transform: `translate3d(${translateX}px, ${translateY}px, ${-idx * 20}px) rotateY(${rotate}deg)`,
              }}
            >
              {/* Card glow effect */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#DC4242]/0 via-[#DC4242]/10 to-[#DC4242]/0 opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />

              <div className="mb-6 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 flex items-center justify-start relative z-10">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={72}
                  height={72}
                  className="rounded-full"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#DC4242]/20 to-transparent opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
              </div>

              <h3 className="text-xl font-bold mb-4 text-left text-white group-hover:text-[#DC4242] transition-colors duration-300 leading-tight relative z-10">
                {service.title}
              </h3>

              <ul className="w-full flex flex-col gap-3 mt-2 mb-6 relative z-10">
                {service.bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + i * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="relative pl-10 py-2 bg-[#23263a]/60 rounded-lg text-sm text-[#F3F4F6] font-medium shadow-sm border border-[#23263a] hover:border-[#DC4242] hover:bg-[#23263a]/80 transition-all duration-300 text-left group/bullet"
                  >
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 rounded-full bg-[#DC4242] text-white text-xs font-bold shadow-md group-hover/bullet:scale-110 transition-transform duration-300">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="#DC4242"/>
                        <path d="M7 10.5L9 12.5L13 8.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>

                    {/* Tooltip wrapped bullet text */}
                    <BulletTooltip tip={b.tip}>
                      <span className="group-hover:text-white transition-colors duration-200">
                        {b.txt}
                      </span>
                    </BulletTooltip>
                  </motion.li>
                ))}
              </ul>

              {/* Card edge highlight */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#DC4242]/20 transition-all duration-500 pointer-events-none" />

              {/* 3D depth effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          );
        })}
      </div>

      {/* Stack indicator for desktop */}
      {/* <div className="hidden sm:flex justify-center mt-12 relative z-10">
        <div className="flex items-center gap-2 px-4 py-2 bg-[#23263a]/50 rounded-full backdrop-blur-sm">
          <svg className="w-4 h-4 text-[#DC4242] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div> */}
      </div>
    </section>
  );
}