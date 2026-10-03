"use client";

import { Children, Fragment, isValidElement } from "react";
import { motion } from "framer-motion";
import { EASE, viewportOnce } from "./motion-presets";

const word = {
  hidden: { y: "105%", opacity: 0 },
  show: { y: "0%", opacity: 1, transition: { duration: 0.65, ease: EASE } },
};

// Flattens children into words (text split on whitespace) plus passthrough elements like <br>.
function split(children, out = []) {
  Children.forEach(children, (child) => {
    if (typeof child === "string" || typeof child === "number") {
      for (const part of String(child).split(/(\s+)/)) {
        if (part) out.push(/^\s+$/.test(part) ? " " : { word: part });
      }
    } else if (isValidElement(child) && child.type === Fragment) {
      split(child.props.children, out);
    } else if (child != null && child !== false) {
      out.push(child);
    }
  });
  return out;
}

// Heading whose words rise one by one from behind their own mask, the first time it scrolls into view.
export default function WordReveal({ as = "h2", className = "", delay = 0.09, children }) {
  const Tag = motion[as];
  const parts = split(children);
  const label = parts
    .map((p) => (typeof p === "string" ? p : p.word ?? " "))
    .join("")
    .replace(/\s+/g, " ")
    .trim();

  return (
    <Tag
      className={className}
      aria-label={label}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: delay } } }}
    >
      {parts.map((p, i) => {
        if (typeof p === "string") return p;
        if (p.word === undefined) return <Fragment key={i}>{p}</Fragment>;
        return (
          <span key={i} aria-hidden="true" className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
            <motion.span variants={word} className="word-reveal inline-block">
              {p.word}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}
