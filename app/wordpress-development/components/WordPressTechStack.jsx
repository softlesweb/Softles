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
    { icon: <SiWordpress className="w-5 h-5" />, name: "WordPress", desc: "Core CMS Platform" },
    { icon: <SiWoocommerce className="w-5 h-5" />, name: "WooCommerce", desc: "E-commerce Engine" },
    { icon: <SiPhp className="w-5 h-5" />, name: "PHP", desc: "Server-side Logic" },
    { icon: <SiMysql className="w-5 h-5" />, name: "MySQL", desc: "Database Layer" },
    { icon: <SiElementor className="w-5 h-5" />, name: "Elementor", desc: "Visual Page Builder" },
    { icon: <SiGutenberg className="w-5 h-5" />, name: "Gutenberg", desc: "Block Editor" },
    { icon: <SiWpengine className="w-5 h-5" />, name: "WP Engine", desc: "Managed Hosting" },
    { icon: <SiCloudflare className="w-5 h-5" />, name: "Cloudflare", desc: "CDN & Security" },
  ];

  const loopedTechs = [...techs, ...techs];

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

        <div className="overflow-hidden rounded-2xl border border-[#2E3446]/70 bg-[#0E1219]/70 py-4 sm:py-5">
          <div className="flex w-max items-center justify-center gap-3 sm:gap-4 animate-[marquee_22s_linear_infinite] hover:[animation-play-state:paused]">
            {loopedTechs.map((tech, idx) => (
              <div
                key={`${tech.name}-${idx}`}
                className="group min-w-[170px] sm:min-w-[190px] rounded-xl border border-[#2E3446]/70 bg-[#181B23]/90 px-4 py-4 sm:px-5 sm:py-5 text-center shadow-sm transition-all duration-300 hover:border-[#FF4D57]/40 hover:bg-[#1E222D]"
              >
                <div className="mb-3 mx-auto flex h-10 w-10 items-center justify-center rounded-lg border border-[#2E3446] bg-[#0E1219] text-[#C7CCD6] transition-all duration-300 group-hover:border-[#FF4D57]/30 group-hover:text-[#FF4D57]">
                  {tech.icon}
                </div>
                <h4 className="mb-1 text-sm font-semibold text-white transition-colors duration-300 group-hover:text-[#FF4D57]">
                  {tech.name}
                </h4>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#C7CCD6]/60">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>

      </div>
    </section>
  );
}
