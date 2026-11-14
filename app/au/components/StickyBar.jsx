"use client";

import { useEffect, useState } from "react";
import BookCallLink from "./BookCallLink";

// Phone-only bar. Appears once the hero has scrolled away, and steps aside at the
// booking section, which is where its main button goes.
export default function StickyBar() {
  const [pastHero, setPastHero] = useState(false);
  const [atBooking, setAtBooking] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const booking = document.getElementById("book");
    if (!hero || !booking) return;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) {
          setPastHero(!entry.isIntersecting && entry.boundingClientRect.top < 0);
        } else {
          setAtBooking(entry.isIntersecting);
        }
      }
    });
    observer.observe(hero);
    observer.observe(booking);
    return () => observer.disconnect();
  }, []);

  const visible = pastHero && !atBooking;

  // The free check lives in the hero.
  const goToCheck = () => {
    const input = document.getElementById("store-url");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    input?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
    setTimeout(() => input?.focus({ preventScroll: true }), reduced ? 0 : 450);
  };

  return (
    <div
      inert={visible ? undefined : ""}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-line bg-page/90 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-3">
        <BookCallLink
          placement="sticky_bar"
          className="flex-1 rounded-full bg-gradient-to-r from-brand to-brand-2 py-3 text-center text-sm font-bold uppercase tracking-wide text-white shadow-[0_8px_28px_rgba(255,77,87,0.38)]"
        >
          Book a call
        </BookCallLink>
        <button
          type="button"
          onClick={goToCheck}
          className="flex-1 rounded-full py-3 text-sm font-bold uppercase tracking-wide text-mute shadow-[inset_0_0_0_1px_var(--btn-ring)]"
        >
          Free store check
        </button>
      </div>
    </div>
  );
}
