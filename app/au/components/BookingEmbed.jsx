"use client";

import { useEffect, useState } from "react";
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

// Calendly and Cal.com both run as a plain iframe, so no vendor script loads on the page.
function embedSrc(base) {
  const url = new URL(withUtm(base, getAttribution(), "book_section"));
  if (isCalendly(url.hostname)) {
    url.searchParams.set("embed_domain", window.location.hostname);
    url.searchParams.set("embed_type", "Inline");
    url.searchParams.set("hide_gdpr_banner", "1");
    url.searchParams.set("background_color", "0e1016");
    url.searchParams.set("text_color", "ffffff");
    url.searchParams.set("primary_color", "ff4d57");
  } else if (isCal(url.hostname)) {
    url.searchParams.set("theme", "dark");
  }
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

  useEffect(() => {
    setSrc(embedSrc(url));

    const onMessage = (e) => {
      const from = host(e.origin);
      const data = e.data;
      const booked =
        (isCalendly(from) && data?.event === "calendly.event_scheduled") ||
        (isCal(from) && data?.originator === "CAL" && String(data?.type).startsWith("bookingSuccessful"));
      if (booked) trackBooked();
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [url]);

  return (
    <div>
      <div className="h-[700px] overflow-hidden rounded-[14px] border border-[#2A2E3A] bg-[#0E1016]">
        {src ? (
          <iframe title="Book a call with Shakti" src={src} loading="lazy" className="h-full w-full border-0" />
        ) : null}
      </div>
      <p className="mt-3 text-sm text-[#A9AFBC]">
        Calendar not loading?{" "}
        <a href={url} target="_blank" rel="noopener" className="text-white underline underline-offset-4">
          Open it in a new tab
        </a>
      </p>
    </div>
  );
}
