// Landing pages (/lp/* ad pages and the /au sales page) render their own minimal
// header and CTAs, so the global navbar, WhatsApp button and route loader skip them.
export function isLandingRoute(pathname) {
  if (!pathname) return false;
  return pathname.startsWith("/lp") || pathname === "/au" || pathname.startsWith("/au/");
}
