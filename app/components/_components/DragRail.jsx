"use client";

import { useEffect, useRef } from "react";

// Horizontal rail that scrolls itself, loops seamlessly, and can be dragged.
// Children must be rendered twice by the caller so the track is exactly 2x
// wide — the loop wraps at the halfway mark, which is invisible.
export default function DragRail({ children, speed = 0.6, className = "" }) {
  const ref = useRef(null);
  const hovering = useRef(false);
  const held = useRef(false);
  const dragging = useRef(false);
  const moved = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const half = () => el.scrollWidth / 2;
    // Normalise any position into the first copy, in both directions.
    const norm = (x) => {
      const h = half();
      return h > 0 ? ((x % h) + h) % h : x;
    };

    let frame;
    const tick = () => {
      if (!hovering.current && !held.current && !document.hidden) {
        el.scrollLeft = norm(el.scrollLeft + speed);
      }
      frame = requestAnimationFrame(tick);
    };
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      frame = requestAnimationFrame(tick);
    }

    // Native scrolling (touch, trackpad, wheel) still has to loop.
    const onScroll = () => {
      if (dragging.current) return;
      const h = half();
      if (h > 0 && el.scrollLeft >= h) el.scrollLeft -= h;
    };

    let startX = 0;
    let startScroll = 0;
    let releaseTimer;
    let armed = false; // pointer is down, but it is not a drag yet

    const onPointerDown = (e) => {
      clearTimeout(releaseTimer);
      held.current = true;
      moved.current = false;
      // Touch keeps the browser's own scrolling and inertia.
      if (e.pointerType === "touch") return;
      armed = true;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      // Capture is deliberately NOT taken here: capturing on pointerdown sends
      // the click to the rail instead of whatever was under the cursor, which
      // stopped the cards' LinkedIn links from opening.
    };

    const onPointerMove = (e) => {
      if (!armed && !dragging.current) return;
      const dx = e.clientX - startX;
      if (!dragging.current) {
        // Only once the pointer has actually travelled does this become a drag.
        if (Math.abs(dx) <= 4) return;
        dragging.current = true;
        moved.current = true;
        try {
          el.setPointerCapture(e.pointerId);
        } catch {}
      }
      e.preventDefault();
      // Wrapping the target lets a backwards drag run past zero instead of
      // hitting the start of the track.
      el.scrollLeft = norm(startScroll - dx);
    };

    // Bound to the window, not the rail: a press that never travels 4px takes no
    // pointer capture, so releasing it off the rail would otherwise never reach
    // this and the rail would stay held — frozen — for good.
    const endDrag = (e) => {
      if (!held.current) return;
      armed = false;
      if (dragging.current) {
        dragging.current = false;
        try {
          el.releasePointerCapture(e.pointerId);
        } catch {}
      }
      // Let touch momentum settle before the rail takes over again.
      const wait = e.pointerType === "touch" ? 700 : 0;
      releaseTimer = setTimeout(() => {
        held.current = false;
      }, wait);
    };

    // A drag must not also open the card's link.
    const onClickCapture = (e) => {
      if (!moved.current) return;
      moved.current = false;
      e.preventDefault();
      e.stopPropagation();
    };

    // Images and links are natively draggable; that would hijack the gesture.
    const onDragStart = (e) => e.preventDefault();

    const onEnter = () => (hovering.current = true);
    const onLeave = () => (hovering.current = false);

    el.addEventListener("dragstart", onDragStart);
    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);
    el.addEventListener("click", onClickCapture, true);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(releaseTimer);
      el.removeEventListener("dragstart", onDragStart);
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", endDrag);
      window.removeEventListener("pointercancel", endDrag);
      el.removeEventListener("click", onClickCapture, true);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={`drag-rail hide-scrollbar flex w-full cursor-grab select-none overflow-x-auto overscroll-x-contain active:cursor-grabbing ${className}`}
    >
      {children}
    </div>
  );
}
