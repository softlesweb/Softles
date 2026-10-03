"use client";

import { MotionConfig } from "framer-motion";

// Honours the visitor's "reduce motion" system setting across every framer
// animation on the site — entrances resolve instantly instead of sliding.
export default function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
