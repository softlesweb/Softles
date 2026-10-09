"use client";

import { useEffect, useRef, useState } from "react";

// Timed stepper: each step's ring draws in turn, the ring's animationend hands off
// to the next (so pausing the ring on hover pauses everything), then it loops.
export default function useStepSequence(count, { stepMs = 4000, holdMs = 1400 } = {}) {
  const ref = useRef(null);
  const [active, setActive] = useState(-1);
  const [holding, setHolding] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      setHolding(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        setActive(0);
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Rest fully lit for a beat after the last step, then start over.
  useEffect(() => {
    if (!holding || reduced) return;
    const t = setTimeout(() => {
      setHolding(false);
      setActive(0);
    }, holdMs);
    return () => clearTimeout(t);
  }, [holding, reduced, holdMs]);

  const advance = () => {
    if (active >= count - 1) setHolding(true);
    else setActive(active + 1);
  };

  const playingIdx = holding ? -1 : active;
  const played = holding ? count : Math.max(active, 0);
  const activeIdx = hovered !== null ? hovered : playingIdx >= 0 ? playingIdx : null;

  return {
    ref,
    activeIdx,
    playingIdx,
    played,
    hovered,
    setHovered,
    paused: hovered !== null,
    advance,
    stepMs,
  };
}
