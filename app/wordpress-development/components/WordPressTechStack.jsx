"use client";

import {
  SiWordpress,
  SiWoocommerce,
  SiPhp,
  SiMysql,
  SiElementor,
  SiGutenberg,
  SiWpengine,
  SiCloudflare,
} from "react-icons/si";

export default function WordPressTechStack() {
  const techs = [
    { icon: <SiWordpress />, name: "WordPress", desc: "Core CMS Platform" },
    { icon: <SiWoocommerce />, name: "WooCommerce", desc: "E-commerce Engine" },
    { icon: <SiPhp />, name: "PHP", desc: "Server-side Logic" },
    { icon: <SiMysql />, name: "MySQL", desc: "Database Layer" },
    { icon: <SiElementor />, name: "Elementor", desc: "Visual Page Builder" },
    { icon: <SiGutenberg />, name: "Gutenberg", desc: "Block Editor" },
    { icon: <SiWpengine />, name: "WP Engine", desc: "Managed Hosting" },
    { icon: <SiCloudflare />, name: "Cloudflare", desc: "CDN & Security" },
  ];

  return (
    <section className="softles-section-secondary">
      <div className="service-page-container">
        
        {/* Header - Strictly matching original fonts, weights and line markers */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="softles-eyebrow justify-center mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">
              Technology Stack
            </span>
          </div>
          <h2 className="service-section-heading mb-3">
            Tools & Technologies
          </h2>
          <p className="softles-section-copy mx-auto">
            We use battle-tested, best-in-class technologies to build WordPress
            solutions that are fast, secure, and future-proof.
          </p>
        </div>

        {/* 4-Column Dev Console Grid System (Different structure layout from Shopify) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {techs.map((tech, idx) => (
            <div
              key={idx}
              className="
                group
                relative
                softles-card
                p-6
                overflow-hidden
              "
            >
              
              {/* Dev Terminal Layout Metadata Marker */}
              <div className="absolute top-2.5 right-3 text-[9px] text-[#BCC1CA]/30 uppercase tracking-widest group-hover:text-[#DC4242]/50 transition-colors duration-300">
                [dep_0{idx + 1}]
              </div>

              {/* Core Content Layout Alignment */}
              <div className="relative z-10 flex flex-col items-center text-center">

                {/* Technical Metric Icon Box */}
                <div
                  className="
                    w-14 h-14
                    mb-4
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    bg-[#191C26]
                    border border-[#2a2e40]
                    text-2xl
                    text-white
                    transition-all duration-300
                    group-hover:bg-[#DC4242]/10
                    group-hover:border-[#DC4242]/30
                    group-hover:text-[#DC4242]
                  "
                >
                  {tech.icon}
                </div>

                {/* Typography Block - Retaining original exact hierarchy parameters */}
                <h4
                  className="
                    font-bold
                    text-[#FFFFFF]
                    text-sm
                    mb-1
                    transition-colors duration-300
                    group-hover:text-[#DC4242]
                  "
                >
                  {tech.name}
                </h4>

                <p
                  className="
                    text-[#BCC1CA]/60
                    text-xs
                    transition-colors duration-300
                    group-hover:text-[#FFFFFF]/80
                  "
                >
                  {tech.desc}
                </p>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
