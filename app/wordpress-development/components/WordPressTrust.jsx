"use client";

import { SiWordpress } from "react-icons/si";
import { FiSearch, FiLayers, FiEdit3 } from "react-icons/fi";

export default function WordPressTrust() {
  const advantages = [
    {
      icon: <SiWordpress className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />,
      title: "Flexible CMS",
      desc: "Manage any type of content — from blogs and portfolios to complex product catalogs — with a customisable admin interface your team can actually use.",
    },
    {
      icon: <FiSearch className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />,
      title: "SEO Friendly",
      desc: "Clean semantic markup, fast page speeds, schema support, and deep SEO plugin integrations make WordPress an ideal foundation for organic search growth.",
    },
    {
      icon: <FiLayers className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />,
      title: "Scalable Architecture",
      desc: "Start small and grow without rebuilding. WordPress scales from brochure sites to enterprise platforms with 100k+ products and millions of monthly visitors.",
    },
    {
      icon: <FiEdit3 className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />,
      title: "Easy Content Management",
      desc: "Empower your marketing team to publish, edit, and update content without developer involvement — no coding knowledge required after launch.",
    },
  ];

  return (
    <section className="softles-section-secondary" id="why-wordpress">
      <div className="service-page-container">
        <div className="text-center mb-10">
          <div className="softles-eyebrow justify-center mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">Platform Advantages</span>
          </div>
          <h2 className="service-section-heading text-[#FFFFFF]">
            Why Businesses Choose WordPress
          </h2>
          <p className="softles-section-copy mx-auto">
            WordPress powers over 43% of the web for good reason — it&apos;s flexible, scalable, and built for long-term growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="group relative softles-card p-6 flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 bg-[#191C26] border border-[#2a2e40] group-hover:bg-[#DC4242]/10 group-hover:border-[#DC4242]/30 transition-all duration-300">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl text-white mb-3 leading-tight group-hover:text-[#DC4242] transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-[#BCC1CA] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
