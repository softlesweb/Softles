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
    <p className="min-h-[2.5rem] font-display text-lg font-medium text-white sm:min-h-0 sm:text-xl">
      Hi {brand}, here&apos;s where your store leaks.
    </p>
  );
}
