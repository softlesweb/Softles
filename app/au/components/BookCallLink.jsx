"use client";

import { trackEvent } from "@/lib/gtag";
import { getAttribution, withUtm } from "@/lib/auAttribution";

// Cal.com or Calendly link, set per environment. Its "after booking" redirect should be
// https://softles.in/au/thanks?type=call so the booking is counted as call_booked.
const BOOKING_URL = process.env.NEXT_PUBLIC_AU_BOOKING_URL;
const FALLBACK = `mailto:info@softles.in?subject=${encodeURIComponent("Book a 20-min call")}`;

export default function BookCallLink({ placement, className, children = "Book a 20-min call" }) {
  const onClick = (e) => {
    trackEvent("book_call_click", { placement });
    if (BOOKING_URL) e.currentTarget.href = withUtm(BOOKING_URL, getAttribution(), placement);
  };

  return (
    <a
      href={BOOKING_URL || FALLBACK}
      target={BOOKING_URL ? "_blank" : undefined}
      rel={BOOKING_URL ? "noopener" : undefined}
      onClick={onClick}
      className={className}
    >
      {children}
    </a>
  );
}
