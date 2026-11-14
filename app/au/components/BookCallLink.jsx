"use client";

import { trackEvent } from "@/lib/gtag";

// Every "book a call" link on /au scrolls to the booking section (#book), which holds the
// calendar. Pages without that section pass href="/au#book".
export default function BookCallLink({
  placement,
  className,
  href = "#book",
  children = "Book a 30-min call with Shakti",
}) {
  return (
    <a href={href} onClick={() => trackEvent("book_call_click", { placement })} className={className}>
      {children}
    </a>
  );
}
