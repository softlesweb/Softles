"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Empathize from "@/public/Empathize.png";
import Define from "@/public/Define.png";
import Ideate from "@/public/Ideate.png";
import Prototype from "@/public/Prototype.png";
import Test from "@/public/Test.png";
import useStepSequence from "./useStepSequence";

const EASE = [0.22, 1, 0.36, 1];

// Generic process icons, mapped to steps by position (same set as the
// homepage "Our Approach" section).
const stepIcons = [Empathize, Define, Ideate, Prototype, Test];

// One card per step, each carrying its own ghost numeral. The sequence walks
// itself: the active card lifts and runs a timer along its top edge, and that
// timer finishing is what hands over to the next — so hovering, which pauses the
// timer, pauses the whole run.
export default function ProcessSteps({ steps }) {
  const flow = useStepSequence(steps.length);

  return (
    <div
      ref={flow.ref}
      onMouseLeave={() => flow.setHovered(null)}
      className="grid w-full grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-5"
    >
      {steps.map((step, idx) => {
        const on = flow.activeIdx === idx;
        const done = flow.played > idx;
        return (
          <motion.div
            key={step.num ?? idx}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: idx * 0.09, ease: EASE }}
            onMouseEnter={() => flow.setHovered(idx)}
            className={`relative overflow-hidden rounded-2xl border px-5 pb-6 pt-5 transition-[transform,border-color,background] duration-500 ${
              on
                ? "-translate-y-2 border-[#FF4D57]/45 bg-gradient-to-b from-[#221A24] to-[#12141D]"
                : `bg-gradient-to-b from-[#1A2030] to-[#10141D] ${done ? "border-[#FF4D57]/20" : "border-[#2E3446]"}`
            }`}
          >
            {/* Timer along the top edge — its end is the hand-off to the next step */}
            {flow.playingIdx === idx && (
              <span
                key={`timer-${idx}-${flow.played}`}
                aria-hidden="true"
                onAnimationEnd={flow.advance}
                className="step-timer absolute left-0 top-0 h-[2px] bg-gradient-to-r from-[#FF4D57] to-[#FF6A3D]"
                style={{
                  animationDuration: `${flow.stepMs}ms`,
                  animationPlayState: flow.paused ? "paused" : "running",
                }}
              />
            )}

            <span
              aria-hidden="true"
              className={`pointer-events-none absolute -bottom-5 right-3 text-[96px] font-bold leading-none tracking-[-0.05em] transition-colors duration-500 ${
                on ? "text-[#FF4D57]/[0.13]" : "text-white/[0.035]"
              }`}
              style={{ fontFamily: "var(--font-display), var(--font-body), system-ui, sans-serif" }}
            >
              {step.num ?? String(idx + 1).padStart(2, "0")}
            </span>

            <div className="relative">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-500 ${
                  on
                    ? "scale-105 border-[#FF4D57]/55 bg-[#FF4D57]/16"
                    : "border-[#FF4D57]/25 bg-[#FF4D57]/[0.08]"
                }`}
              >
                {/* The icons are portrait, not square, so the static import's
                    own dimensions are kept and CSS sets the width — declaring a
                    square box would reserve the wrong space for them. */}
                <Image
                  src={stepIcons[idx % stepIcons.length]}
                  alt={`Process step icon for ${step.title}`}
                  className="h-auto w-[26px]"
                />
              </div>

              <span
                className={`mt-4 block text-[10.5px] font-black uppercase tracking-[0.18em] transition-colors duration-500 ${
                  on || done ? "text-[#FF4D57]" : "text-[#C7CCD6]/40"
                }`}
              >
                Step {step.num ?? String(idx + 1).padStart(2, "0")}
              </span>

              <h3
                className={`mt-1.5 text-[16.5px] font-bold leading-snug tracking-tight transition-colors duration-500 ${
                  on ? "text-white" : "text-[#cfd4dd]"
                }`}
              >
                {step.title}
              </h3>

              <p
                className={`mt-2 text-[13px] leading-relaxed transition-colors duration-500 ${
                  on ? "text-[#C7CCD6]" : "text-[#8f97a8]"
                }`}
              >
                {step.desc}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
