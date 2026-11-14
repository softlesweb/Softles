"use client";

import { useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/gtag";
import { trackPixel } from "@/lib/metaPixel";
import { getAttribution, withUtm } from "@/lib/auAttribution";

const host = (origin) => {
  try {
    return new URL(origin).hostname;
  } catch {
    return "";
  }
};
const isCalendly = (hostname) => hostname === "calendly.com" || hostname.endsWith(".calendly.com");
const isCal = (hostname) => hostname === "cal.com" || hostname.endsWith(".cal.com");
const isGoogle = (hostname) => hostname === "calendar.google.com";

// Google Calendar, Calendly and Cal.com all run as a plain iframe, so no vendor script loads on the page.
function embedSrc(base) {
  const url = new URL(base);
  // Google's booking page ignores UTM tags, so its URL is left as Google gave it.
  if (isGoogle(url.hostname)) {
    url.searchParams.set("gv", "true");
    return url.toString();
  }
  const tagged = new URL(withUtm(base, getAttribution(), "book_section"));
  if (isCalendly(tagged.hostname)) {
    tagged.searchParams.set("embed_domain", window.location.hostname);
    tagged.searchParams.set("embed_type", "Inline");
    tagged.searchParams.set("hide_gdpr_banner", "1");
    tagged.searchParams.set("background_color", "0e1016");
    tagged.searchParams.set("text_color", "ffffff");
    tagged.searchParams.set("primary_color", "ff4d57");
  } else if (isCal(tagged.hostname)) {
    tagged.searchParams.set("theme", "dark");
  }
  return tagged.toString();
}

// The full booking page for the "open in a new tab" link (Google's ?gv=true is the embed view).
function pageUrl(base) {
  const url = new URL(base);
  if (isGoogle(url.hostname)) url.searchParams.delete("gv");
  return url.toString();
}

// Same once-per-tab guard as the thanks page, so a booking that also redirects there counts once.
function trackBooked() {
  try {
    if (window.sessionStorage.getItem("softles_au_call_booked")) return;
    window.sessionStorage.setItem("softles_au_call_booked", "1");
  } catch {
    // Storage blocked: fire anyway.
  }
  trackEvent("call_booked", { placement: "book_section" });
  trackPixel("Schedule");
}

export default function BookingEmbed({ url }) {
  const [src, setSrc] = useState(null);
  const frame = useRef(null);
  const google = isGoogle(host(url));

  useEffect(() => {
    setSrc(embedSrc(url));

    // Calendly and Cal.com tell the page when a booking is made. Google doesn't.
    const onMessage = (e) => {
      const from = host(e.origin);
      const data = e.data;
      const booked =
        (isCalendly(from) && data?.event === "calendly.event_scheduled") ||
        (isCal(from) && data?.originator === "CAL" && String(data?.type).startsWith("bookingSuccessful"));
      if (booked) trackBooked();
    };

    // A click inside the calendar moves focus into the iframe. Counted once, as a sign of
    // intent, since Google bookings can't be seen from the page.
    let used = false;
    const onBlur = () => {
      if (used || document.activeElement !== frame.current) return;
      used = true;
      trackEvent("booking_calendar_used", { placement: "book_section" });
    };

    window.addEventListener("message", onMessage);
    window.addEventListener("blur", onBlur);
    return () => {
      window.removeEventListener("message", onMessage);
      window.removeEventListener("blur", onBlur);
    };
  }, [url]);

  return (
    <div>
      <div
        className={`h-[720px] overflow-hidden rounded-[14px] border ${
          google ? "border-transparent bg-white" : "border-[#2A2E3A] bg-[#0E1016]"
        }`}
      >
        {src ? (
          <iframe
            ref={frame}
            title="Book a call with Shakti"
            src={src}
            loading="lazy"
            className="h-full w-full border-0"
          />
        ) : null}
      </div>
      <p className="mt-3 text-sm text-[#A9AFBC]">
        Calendar not loading?{" "}
        <a href={pageUrl(url)} target="_blank" rel="noopener" className="text-white underline underline-offset-4">
          Open it in a new tab
        </a>
      </p>
    </div>
  );
}
