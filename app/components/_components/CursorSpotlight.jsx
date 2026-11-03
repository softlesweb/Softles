"use client";

import { useRef, useEffect } from "react";

// A soft spotlight that trails the cursor within its parent section.
// Drop it inside a `relative overflow-hidden` container. Desktop / fine-pointer only.
export default function CursorSpotlight() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const host = el?.parentElement;
    if (!host || window.matchMedia("(pointer: coarse)").matches) return;

    const target = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    let raf = 0;

    const render = () => {
      pos.x += (target.x - pos.x) * 0.14;
      pos.y += (target.y - pos.y) * 0.14;
      el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(render);
    };
    const onMove = (e) => {
      const r = host.getBoundingClientRect();
      target.x = e.clientX - r.left;
      target.y = e.clientY - r.top;
      el.style.opacity = "1";
    };
    const onLeave = () => {
      el.style.opacity = "0";
    };

    host.addEventListener("mousemove", onMove);
    host.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(raf);
      host.removeEventListener("mousemove", onMove);
      host.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 z-0 hidden lg:block"
      style={{
        width: 520,
        height: 520,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(255,77,87,0.18) 0%, rgba(109,94,246,0.10) 40%, transparent 68%)",
        filter: "blur(24px)",
        opacity: 0,
        transition: "opacity 0.5s ease",
        willChange: "transform",
      }}
    />
  );
}
