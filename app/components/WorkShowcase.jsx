"use client";

import Image from "next/image";
import { useState } from "react";

// Five flagship builds, shown in live device mockups. Desktop + mobile
// screenshots are full-page captures that auto-scroll inside the frames.
const projects = [
  {
    name: "Brunswick Fur Food",
    category: "E-commerce",
    stack: "Shopify",
    host: "brunswickfurfood.com",
    url: "https://www.brunswickfurfood.com/",
    desktop: "/work/brunswick-desktop.jpg",
    mobile: "/work/brunswick-mobile.jpg",
    desktopH: 6449,
    mobileH: 10123,
    blurb:
      "Fresh, human-grade dog food for Melbourne — a Shopify store rebuilt to turn product quality into trust and repeat orders.",
    highlights: [
      "Conversion-focused custom theme",
      "Smoother subscription & trial flow",
      "Mobile-first product discovery",
    ],
    metrics: [
      { value: "2.5k+", label: "Orders" },
      { value: "5/5", label: "Rating" },
      { value: "30%", label: "Repeat rate" },
    ],
    tags: ["Shopify", "Subscriptions", "CRO"],
  },
  {
    name: "LibrarySetu",
    category: "SaaS",
    stack: "Web app",
    host: "librarysetu.com",
    url: "https://librarysetu.com/",
    desktop: "/work/librarysetu-desktop.jpg",
    mobile: "/work/librarysetu-mobile.jpg",
    desktopH: 3265,
    mobileH: 7671,
    blurb:
      "Study-library management software — seats, students, fees and dues in one calm dashboard built for Indian study libraries.",
    highlights: [
      "Clear product storytelling",
      "Conversion-focused SaaS marketing site",
      "Fast and responsive on every device",
    ],
    tags: ["SaaS", "Product", "Marketing site"],
  },
  {
    name: "Wavelo",
    category: "SaaS",
    stack: "Web app",
    host: "wavelo.vercel.app",
    url: "https://wavelo.vercel.app/",
    desktop: "/work/wavelo-desktop.jpg",
    mobile: "/work/wavelo-mobile.jpg",
    desktopH: 3394,
    mobileH: 9007,
    blurb:
      "A WhatsApp Business platform — campaigns, automations and a shared inbox in one workspace, wrapped in a crisp product-marketing site.",
    highlights: [
      "Bold, modern product narrative",
      "Interactive dashboard visuals",
      "Early-access lead capture",
    ],
    tags: ["SaaS", "Product", "Landing"],
  },
  {
    name: "RecoBee",
    category: "Web app",
    stack: "Web app",
    host: "reco-bee.com",
    url: "https://reco-bee.com/",
    desktop: "/work/recobee-desktop.jpg",
    mobile: "/work/recobee-mobile.jpg",
    desktopH: 3543,
    mobileH: 7397,
    blurb:
      "Movie reviews, ratings and watchlists across OTTs — a discovery platform designed to feel cinematic and effortless.",
    highlights: [
      "Cinematic, media-rich interface",
      "Search & discovery flows",
      "Personal watchlists across OTTs",
    ],
    tags: ["Web app", "Entertainment", "Product"],
  },
  {
    name: "Umang Aatray",
    category: "Website",
    stack: "Website",
    host: "umang-mu.vercel.app",
    url: "https://umang-mu.vercel.app/",
    desktop: "/work/umang-desktop.jpg",
    mobile: "/work/umang-mobile.jpg",
    desktopH: 7383,
    mobileH: 9012,
    blurb:
      "Personal-brand site for a commercial & criminal lawyer in New Delhi — editorial, trustworthy, and built to book intro calls.",
    highlights: [
      "Editorial personal brand",
      "Credentials front-and-centre",
      "Clear consultation CTAs",
    ],
    tags: ["Website", "Legal", "Personal brand"],
  },
];

const CATEGORIES = ["All", "E-commerce", "SaaS", "Web app", "Website"];

function DeviceMockup({ project }) {
  return (
    <div className="ws-devices relative w-full">
      {/* Laptop */}
      <div className="relative mx-auto w-full max-w-[560px]">
        {/* Screen bezel */}
        <div className="rounded-t-xl border border-[#2E3446] border-b-0 bg-[#0b0d12] p-2 sm:p-2.5 shadow-2xl">
          <div className="ws-screen relative overflow-hidden rounded-md bg-[#0E1219]">
            <Image
              src={project.desktop}
              alt={`${project.name} — desktop`}
              width={1080}
              height={project.desktopH}
              className="ws-scroll ws-scroll-d w-full h-auto"
            />
          </div>
        </div>
        {/* Base / deck */}
        <div className="relative mx-auto h-3 sm:h-4 w-[112%] -ml-[6%] rounded-b-xl rounded-t-[3px] bg-gradient-to-b from-[#3a4150] to-[#1a1e27] border border-[#2E3446]">
          <span className="absolute left-1/2 top-0 h-1.5 w-16 sm:w-24 -translate-x-1/2 rounded-b-lg bg-[#0b0d12]/70" />
        </div>
      </div>

      {/* Phone, overlapping front-right */}
      <div className="absolute -bottom-5 right-1 sm:-right-2 w-[26%] max-w-[130px]">
        <div className="relative rounded-[1.4rem] border-[5px] border-[#0b0d12] bg-[#0b0d12] shadow-[0_18px_40px_rgba(0,0,0,0.5)]">
          <span className="absolute left-1/2 top-1.5 z-10 h-1.5 w-10 -translate-x-1/2 rounded-full bg-[#0b0d12] ring-1 ring-[#2E3446]" />
          <div className="ws-screen-m relative overflow-hidden rounded-[1.05rem] bg-[#0E1219]">
            <Image
              src={project.mobile}
              alt={`${project.name} — mobile`}
              width={440}
              height={project.mobileH}
              className="ws-scroll ws-scroll-m w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WorkShowcase() {
  const [active, setActive] = useState("All");
  const shown = projects.filter((p) => active === "All" || p.category === active);

  return (
    <section id="work" className="w-full py-14 md:py-24 bg-[#0E1219]">
      <div className="service-page-container">
        {/* Header */}
        <div className="softles-eyebrow mb-3">
          <span className="softles-eyebrow-line" />
          <span className="softles-eyebrow-text">Selected work</span>
        </div>
        <h2 className="service-section-heading text-[#FFFFFF]">Work worth showing off</h2>
        <p className="softles-section-copy max-w-2xl">
          Real, live builds — e-commerce, SaaS products and business sites. Hover any mockup to pause the scroll and look closer.
        </p>

        {/* Category filter */}
        <div className="mt-7 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide border transition-colors ${
                active === c
                  ? "bg-[#FF4D57] border-[#FF4D57] text-white"
                  : "bg-transparent border-[#2E3446] text-[#C7CCD6] hover:border-[#FF4D57]/50 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Rows */}
        <div className="mt-12 flex flex-col gap-20 md:gap-28">
          {shown.map((p, i) => (
            <div key={p.name} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Devices */}
              <div className={`group px-2 sm:px-6 lg:px-0 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <DeviceMockup project={p} />
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center rounded-full bg-[#FF4D57]/10 border border-[#FF4D57]/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FF4D57]">
                    {p.category}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#C7CCD6]/50 font-semibold">
                    {p.stack}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  {p.name}
                </h3>
                <p className="text-[#C7CCD6]/85 text-sm md:text-base leading-relaxed mt-3 max-w-xl">
                  {p.blurb}
                </p>

                {/* Highlights */}
                <ul className="mt-5 flex flex-col gap-2.5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-[#C7CCD6] text-sm">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF4D57" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Metrics (only where we have real numbers) */}
                {p.metrics && (
                  <div className="mt-6 grid grid-cols-3 gap-3 max-w-md">
                    {p.metrics.map((m) => (
                      <div key={m.label} className="rounded-xl border border-[#2E3446] bg-[#161C27] px-3 py-3 text-center">
                        <div className="text-lg md:text-xl font-black text-white">{m.value}</div>
                        <div className="text-[10px] uppercase tracking-wider text-[#C7CCD6]/60 mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags + CTA */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="inline-block px-2.5 py-1 bg-[#FF4D57]/5 border border-[#FF4D57]/20 rounded text-[11px] text-[#FF4D57] font-semibold tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="softles-primary-button mt-7 w-full sm:w-auto justify-center sm:justify-start"
                >
                  <span>Visit live site</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <path d="M7 17L17 7M17 7H8M17 7v9" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .ws-screen {
          --sh: 220px;
          height: var(--sh);
        }
        .ws-screen-m {
          --ph: 200px;
          height: var(--ph);
        }
        @media (min-width: 640px) {
          .ws-screen { --sh: 280px; }
          .ws-screen-m { --ph: 240px; }
        }
        @media (min-width: 1024px) {
          .ws-screen { --sh: 320px; }
          .ws-screen-m { --ph: 260px; }
        }
        .ws-scroll {
          position: absolute;
          top: 0;
          left: 0;
          will-change: transform;
        }
        .ws-scroll-d {
          animation: wsScrollD 22s linear infinite alternate;
        }
        .ws-scroll-m {
          animation: wsScrollM 18s linear infinite alternate;
        }
        @keyframes wsScrollD {
          0%, 8% { transform: translateY(0); }
          92%, 100% { transform: translateY(calc(-100% + var(--sh))); }
        }
        @keyframes wsScrollM {
          0%, 8% { transform: translateY(0); }
          92%, 100% { transform: translateY(calc(-100% + var(--ph))); }
        }
        .group:hover .ws-scroll {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .ws-scroll { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
