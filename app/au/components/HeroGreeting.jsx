"use client";

import { useEffect, useState } from "react";
import { brandName, getAttribution } from "@/lib/auAttribution";

// Outreach links (?ref=brand.com.au, optional &brand=Name) swap the eyebrow for a greeting.
// Read after hydration so the page itself stays static.
export default function HeroGreeting({ children }) {
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    setBrand(brandName(getAttribution()));
  }, []);

  if (!brand) return children;
  return (
    <p className="softles-eyebrow mb-2">
      <span className="softles-eyebrow-line shrink-0" aria-hidden="true" />
      <span className="text-sm font-semibold text-ink sm:text-base">
        Hi {brand}, here&apos;s where your store leaks.
      </span>
    </p>
  );
}
