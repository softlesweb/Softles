"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";

// The case study opens with the device tilted back on a stage; as you scroll
// into the story it straightens and settles to full size, so the build feels
// like it is being handed to you rather than sitting there as a flat image.
export default function CaseHeroStage({ children }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  // Progress runs from the stage entering the viewport to it sitting centred,
  // so the device is still tilted on first paint and lands flat as you read on.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const p = useSpring(scrollYProgress, { stiffness: 110, damping: 26, mass: 0.35 });

  const rotateX = useTransform(p, [0, 1], [13, 0]);
  // Slight zoom in as it lands centre stage, so the device steps toward you.
  const scale = useTransform(p, [0, 1], [0.94, 1.04]);

  return (
    <div ref={ref} className="relative mt-12 sm:mt-14">
      {/* Two-tone stage light: warm behind the screen, cool wash lower right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-10 -top-16 bottom-0 bg-[radial-gradient(45%_45%_at_50%_35%,rgba(255,77,87,0.16),transparent_70%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-10 top-10 bottom-0 bg-[radial-gradient(40%_40%_at_72%_85%,rgba(109,94,246,0.14),transparent_70%)] blur-3xl"
      />

      <motion.div
        className="group/card relative mx-auto w-full max-w-[780px]"
        style={
          reduced
            ? undefined
            : { rotateX, scale, transformPerspective: 1600, transformOrigin: "50% 100%" }
        }
        initial={reduced ? false : { opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
