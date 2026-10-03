"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

// Homepage "What we do" card language: cursor-tracking spotlight border,
// inner light wash, diamond bullet list. Reused across service pages.
export default function SpotlightServiceCard({ icon, title, desc, bullets = [], badge, idx = 0 }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mx", "-200px");
    el.style.setProperty("--my", "-200px");
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] } }}
      viewport={{ once: true, margin: "-50px" }}
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
          <div className="mb-5 flex items-start justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FF4D57]/30 bg-gradient-to-b from-[#FF4D57]/15 to-[#FF4D57]/[0.04] text-[#FF4D57] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-500 group-hover:border-[#FF4D57]/60 group-hover:text-[#FF6A3D]">
              {icon}
            </div>
            {badge && (
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#FF4D57]/10 border border-[#FF4D57]/30 text-[#FF4D57]">
                {badge}
              </span>
            )}
          </div>

          <h3 className="text-lg xl:text-xl font-bold text-white leading-tight">{title}</h3>
          <p className="text-sm text-[#C7CCD6]/75 leading-relaxed mt-2.5 mb-6">{desc}</p>

          {bullets.length > 0 && (
          <ul className="mt-auto flex flex-col">
            {bullets.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 py-3 border-t border-[#252B3A] text-sm text-[#C7CCD6] hover:text-white hover:pl-1.5 transition-all duration-300"
              >
                <span className="text-[#FF4D57] text-xs leading-none">◆</span>
                {item}
              </li>
            ))}
          </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
}
