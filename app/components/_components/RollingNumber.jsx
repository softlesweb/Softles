"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const REEL = "01234567890123456789".split("");

// Odometer number: every digit spins its own reel a full turn and lands on the value.
// `play` lets a parent (a slider) restart it; without it, it plays once when scrolled into view.
export default function RollingNumber({ value, play }) {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true, margin: "-40px" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const text = String(value);
  const on = play ?? seen;
  let digit = 0;

  return (
    <span ref={ref} className="inline-flex leading-none">
      {!mounted
        ? text
        : (
          <>
            <span className="sr-only">{text}</span>
            {text.split("").map((ch, i) => {
              if (!/\d/.test(ch)) {
                return <span key={i} aria-hidden="true" className="inline-block h-[1em] leading-none">{ch}</span>;
              }
              const delay = digit++ * 80;
              return (
                <span key={i} aria-hidden="true" className="inline-block h-[1em] overflow-hidden leading-none tabular-nums">
                  <span
                    className="rolling-reel flex flex-col"
                    style={{
                      transform: `translateY(-${on ? Number(ch) + 10 : 0}em)`,
                      transition: on ? `transform 1.5s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms` : "none",
                    }}
                  >
                    {REEL.map((n, j) => (
                      <span key={j} className="h-[1em] leading-none">{n}</span>
                    ))}
                  </span>
                </span>
              );
            })}
          </>
        )}
    </span>
  );
}
