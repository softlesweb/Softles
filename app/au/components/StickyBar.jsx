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
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-[#2A2E3A] bg-[#0E1016]/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-3">
        <BookCallLink
          placement="sticky_bar"
          className="flex-1 rounded-full bg-[#FF4D57] py-3 text-center font-semibold text-[#0E1016]"
        >
          Book a call
        </BookCallLink>
        <button
          type="button"
          onClick={goToCheck}
          className="flex-1 rounded-full border border-white/30 py-3 font-semibold text-white"
        >
          Free store check
        </button>
      </div>
    </div>
  );
}
