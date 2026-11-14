"use client";

import { motion } from "framer-motion";
import { enter } from "./motion-presets";

// Lets server-rendered pages use the site's entrance cascade without
// becoming client components themselves. `index` is the item's place in
// the cascade, like everywhere else on the site.
export default function Reveal({ index = 0, className = "", children }) {
  return (
    <motion.div {...enter(index)} className={className}>
      {children}
    </motion.div>
  );
}
