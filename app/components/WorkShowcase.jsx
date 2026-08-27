"use client";

import Link from "next/link";
import { useState } from "react";
import DeviceFrame from "./_components/DeviceFrame";
import { projects } from "../work/projects";

const CATEGORIES = ["All", "E-commerce", "SaaS", "Web app", "Website"];

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
          Real, live builds — e-commerce, SaaS products and business sites. Switch between desktop and mobile, flip through the pages, and hover to pause.
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
            <div key={p.slug} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Devices */}
              <div className={`group ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <DeviceFrame project={p} />
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
                  {p.summary}
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

                {/* Metrics */}
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

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="inline-block px-2.5 py-1 bg-[#FF4D57]/5 border border-[#FF4D57]/20 rounded text-[11px] text-[#FF4D57] font-semibold tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTAs — keep visitors on-site */}
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Link href={`/work/${p.slug}`} className="softles-primary-button justify-center sm:justify-start">
                    <span>View project</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                  <Link href="/#book-call" className="softles-secondary-button justify-center sm:justify-start">
                    Start a similar project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
