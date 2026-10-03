"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "./motion-presets";
import BrandPreloader from "./BrandPreloader";
import PagePreloader from "./PagePreloader";
import { preloaderCopy } from "./preloaderCopy";

// Loading feedback for both ways a page can arrive:
//  - a preloader overlay the first time a page is visited in this tab — the
//    wordmark wave for home, the page's own name everywhere else. On a click it
//    starts immediately and holds at 100% until the new route has committed,
//    so it always covers the swap;
//  - a slim progress bar for every later visit, and for pages with no overlay.
const SEEN_KEY = "softles:preloaded";

function seenPaths() {
  try {
    return JSON.parse(sessionStorage.getItem(SEEN_KEY) || "[]");
  } catch {
    return [];
  }
}
function markSeen(path) {
  try {
    const seen = seenPaths();
    if (!seen.includes(path)) sessionStorage.setItem(SEEN_KEY, JSON.stringify([...seen, path]));
  } catch {
    // Private mode or blocked storage: the preloader simply plays again.
  }
}
function hasOverlay(path) {
  return path === "/" || Boolean(preloaderCopy(path));
}

export default function RouteLoader() {
  const pathname = usePathname();
  const [pending, setPending] = useState(false);
  // { path, id } — the page whose preloader is showing; id remounts it per trip.
  const [overlay, setOverlay] = useState(() => ({ path: pathname, id: 0 }));
  const safety = useRef(null);

  const ready = !overlay || pathname === overlay.path;

  // First load: play the preloader once per tab. sessionStorage is not
  // available during SSR, so the check runs after mount and drops the overlay
  // before it has drawn a frame if this page was already visited.
  useEffect(() => {
    if (seenPaths().includes(pathname)) setOverlay(null);
    else markSeen(pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Route committed → finish the bar.
  useEffect(() => {
    setPending(false);
    if (safety.current) clearTimeout(safety.current);
  }, [pathname]);

  // Intercept internal link clicks: show the destination's preloader, or the
  // bar when it has none.
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
      if (hasOverlay(dest.pathname) && !seenPaths().includes(dest.pathname)) {
        markSeen(dest.pathname);
        setOverlay({ path: dest.pathname, id: Date.now() });
        return;
      }
      setPending(true);
      if (safety.current) clearTimeout(safety.current);
      safety.current = setTimeout(() => setPending(false), 8000);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  const clear = () => setOverlay(null);

  return (
    <>
      <AnimatePresence>
        {pending && !overlay && (
          <motion.div
            key="route-bar"
            aria-hidden="true"
            className="fixed inset-x-0 top-0 z-[110] h-[3px] origin-left bg-gradient-to-r from-[#FF4D57] to-[#FF6A3D] shadow-[0_0_14px_rgba(255,77,87,0.55)]"
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 0.92, transition: { duration: 2.6, ease: EASE } }}
            exit={{ scaleX: 1, opacity: 0, transition: { duration: 0.4, ease: "easeOut" } }}
          />
        )}
      </AnimatePresence>

      {overlay &&
        (overlay.path === "/" ? (
          <BrandPreloader key={overlay.id} ready={ready} onDone={clear} />
        ) : (
          <LandingPreloader key={overlay.id} pathname={overlay.path} ready={ready} onDone={clear} />
        ))}
    </>
  );
}

function LandingPreloader({ pathname, ready, onDone }) {
  const copy = preloaderCopy(pathname);
  return copy ? <PagePreloader eyebrow={copy.eyebrow} title={copy.title} ready={ready} onDone={onDone} /> : null;
}
