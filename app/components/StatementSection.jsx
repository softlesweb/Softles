"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { enter } from "./_components/motion-presets";

// *word* marks an accent word.
const TEXT =
  "We don't just build websites. We build the *storefronts,* *systems* and *integrations* your business runs on, and we stick around after launch to help it *grow.*";

const WORDS = TEXT.split(" ").map((w) => ({
  text: w.replace(/\*/g, ""),
  accent: w.startsWith("*"),
}));

function Word({ progress, range, accent, children }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <>
      <motion.span style={{ opacity }} className={`fill-word ${accent ? "text-[#FF4D57]" : "text-white"}`}>
        {children}
      </motion.span>{" "}
    </>
  );
}

// Positioning statement whose words light up one by one as you scroll through it.
export default function StatementSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });

  return (
    <section className="w-full py-16 md:py-28 bg-[#0E1219] border-t border-[#2E3446]">
      <div className="service-page-container">
        <motion.div {...enter(0)} className="softles-eyebrow justify-center mb-6">
          <span className="softles-eyebrow-line" />
          <span className="softles-eyebrow-text">Why SoftLes</span>
        </motion.div>
        <h2
          ref={ref}
          className="mx-auto max-w-5xl text-center text-[28px] leading-[1.25] sm:text-4xl lg:text-5xl xl:text-[56px] font-bold tracking-tight"
        >
          {WORDS.map((w, i) => (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[i / WORDS.length, (i + 1) / WORDS.length]}
              accent={w.accent}
            >
              {w.text}
            </Word>
          ))}
        </h2>
      </div>
    </section>
  );
}
