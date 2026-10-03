"use client";

import { motion } from "framer-motion";

// Auto-scrolling tech-stack rail with brand-coloured logo chips and
// edge fades. Shared by the service pages' "Tools & Technologies" sections.
export default function TechMarquee({ techs }) {
  const looped = [...techs, ...techs];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden py-2
      before:absolute before:left-0 before:top-0 before:bottom-0 before:w-16 sm:before:w-28 before:bg-gradient-to-r before:from-[#161C27] before:to-transparent before:z-10
      after:absolute after:right-0 after:top-0 after:bottom-0 after:w-16 sm:after:w-28 after:bg-gradient-to-l after:from-[#161C27] after:to-transparent after:z-10"
    >
      <div className="flex w-max items-stretch gap-3 sm:gap-4 animate-[marquee_26s_linear_infinite] hover:[animation-play-state:paused]">
        {looped.map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            style={{ "--tc": tech.color }}
            className="group min-w-[170px] sm:min-w-[190px] rounded-2xl border border-[#2E3446]/80 bg-gradient-to-b from-[#1a2130] to-[#12161F] px-4 py-5 sm:px-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#454f66]"
          >
            <div
              className="mb-3.5 mx-auto flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300 group-hover:shadow-[0_0_22px_-4px_var(--tc)]"
              style={{
                color: tech.color,
                borderColor: `${tech.color}45`,
                background: `${tech.color}14`,
              }}
            >
              {tech.icon}
            </div>
            <h4 className="mb-1 text-sm font-semibold text-white">{tech.name}</h4>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C7CCD6]/60">
              {tech.desc}
            </p>
          </div>
        ))}
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
    </motion.div>
  );
}
