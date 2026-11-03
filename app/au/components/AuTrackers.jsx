"use client";

import { useEffect } from "react";
import { getAttribution } from "@/lib/auAttribution";

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const LINKEDIN_PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;
const FIRST_INTERACTION = ["pointerdown", "keydown", "touchstart", "scroll"];

function injectScript(src) {
  const script = document.createElement("script");
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

// Meta's base snippet, unminified: a queueing stub until fbevents.js arrives.
function loadMetaPixel(id) {
  if (window.fbq) return;
  const fbq = function () {
    fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments);
  };
  window.fbq = fbq;
  if (!window._fbq) window._fbq = fbq;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  injectScript("https://connect.facebook.net/en_US/fbevents.js");
  fbq("init", id);
  fbq("track", "PageView");
}

function loadLinkedInInsight(id) {
  if (window._linkedin_data_partner_ids?.includes(id)) return;
  window._linkedin_partner_id = id;
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(id);
  injectScript("https://snap.licdn.com/li.lms-analytics/insight.min.js");
}

// Loads the retargeting tags now. Pages that report a conversion call this directly.
export function loadRetargeting() {
  if (META_PIXEL_ID) loadMetaPixel(META_PIXEL_ID);
  if (LINKEDIN_PARTNER_ID) loadLinkedInInsight(LINKEDIN_PARTNER_ID);
}

// Saves UTMs/ref for later leads, and holds the retargeting tags back until the
// visitor first interacts, so they cost nothing on first paint.
export default function AuTrackers() {
  useEffect(() => {
    getAttribution();
    if (!META_PIXEL_ID && !LINKEDIN_PARTNER_ID) return;

    const load = () => {
      FIRST_INTERACTION.forEach((type) => window.removeEventListener(type, load));
      loadRetargeting();
    };
    FIRST_INTERACTION.forEach((type) =>
      window.addEventListener(type, load, { once: true, passive: true })
    );
    return () => FIRST_INTERACTION.forEach((type) => window.removeEventListener(type, load));
  }, []);

  return null;
}
