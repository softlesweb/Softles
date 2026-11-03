"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { isLandingRoute } from "@/lib/routes";

// The global nav, WhatsApp button and route loader load as their own chunks. Every other
// page still server-renders them; landing pages never download their code (the mobile
// menu alone is ~20 KB), which keeps those pages inside their JS budget.
const RouteLoader = dynamic(() => import("./RouteLoader"));
const Navbar = dynamic(() => import("../Navbar"));
const WhatsAppFab = dynamic(() => import("./WhatsAppFab"));

export default function SiteChrome({ children }) {
  const showChrome = !isLandingRoute(usePathname());

  return (
    <>
      {showChrome ? (
        <>
          <RouteLoader />
          <Navbar />
        </>
      ) : null}
      {children}
      {showChrome ? <WhatsAppFab /> : null}
    </>
  );
}
