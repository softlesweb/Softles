"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// Full-screen branded loader that appears:
//  - on first site load (brief splash), and
//  - instantly when an internal route link is clicked (before the route resolves).
export default function RouteLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const safety = useRef(null);

  // Hide once the initial load settles.
  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 650);
    return () => clearTimeout(t);
  }, []);

  // Route committed → hide.
  useEffect(() => {
    setVisible(false);
    if (safety.current) clearTimeout(safety.current);
  }, [pathname]);

  // Show immediately on internal navigation clicks.
  useEffect(() => {
    const onClick = (e) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest?.("a");
      if (!a || a.target === "_blank") return;
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("/") || href.startsWith("/#")) return;
      let dest;
      try {
        dest = new URL(a.href, window.location.href);
      } catch {
        return;
      }
      if (dest.pathname === window.location.pathname) return;
      setVisible(true);
      if (safety.current) clearTimeout(safety.current);
      safety.current = setTimeout(() => setVisible(false), 5000);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-[#0E1219] transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative h-14 w-14">
        <div className="absolute inset-0 rounded-full border-[3px] border-[#2E3446]" />
        <div className="absolute inset-0 animate-spin rounded-full border-[3px] border-transparent border-t-[#FF4D57]" />
      </div>
      <span className="text-sm tracking-[0.25em] uppercase text-[#C7CCD6]/70">SoftLes</span>
    </div>
  );
}
