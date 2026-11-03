// Attribution for the /au funnel: UTMs plus the per-prospect ?ref link from outreach.
// Kept in sessionStorage so it survives the booking and Stripe round trips in the same tab.
const KEY = "softles_au_attribution";
const PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "ref", "brand"];

function stored() {
  try {
    return JSON.parse(window.sessionStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}

// Merges anything in the current URL over what this tab already saw, saves it, returns it.
export function getAttribution() {
  if (typeof window === "undefined") return {};
  const query = new URLSearchParams(window.location.search);
  const fresh = {};
  for (const param of PARAMS) {
    const value = query.get(param);
    if (value) fresh[param] = value.slice(0, 100);
  }
  const merged = { ...stored(), ...fresh };
  if (Object.keys(fresh).length) {
    try {
      window.sessionStorage.setItem(KEY, JSON.stringify(merged));
    } catch {
      // Private mode or storage blocked: attribution just won't follow the visitor.
    }
  }
  return merged;
}

// "?brand=Frank Body" wins; otherwise "?ref=frankbody.com.au" becomes "Frankbody".
export function brandName({ brand, ref } = {}) {
  const tidy = (s) => s.replace(/[^\p{L}\p{N} &'.-]/gu, "").trim().slice(0, 40);
  if (brand) return tidy(brand) || null;
  if (!ref) return null;
  const label = ref
    .replace(/^https?:\/\//i, "")
    .replace(/^www\./i, "")
    .split(/[/?#.]/)[0];
  return label ? tidy(label.charAt(0).toUpperCase() + label.slice(1)) || null : null;
}

// Store host from ?ref, for pre-filling the Leak Check.
export function refStore({ ref } = {}) {
  if (!ref) return "";
  return ref.replace(/^https?:\/\//i, "").split(/[?#]/)[0].replace(/\/+$/, "");
}

// Booking tools (Cal.com, Calendly) read UTMs off the link and keep them on the booking.
export function withUtm(href, attribution, placement) {
  try {
    const url = new URL(href);
    const defaults = { utm_source: "softles.in", utm_medium: "au_page", utm_content: placement };
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
      const value = attribution[key] || defaults[key];
      if (value && !url.searchParams.has(key)) url.searchParams.set(key, value);
    }
    return url.toString();
  } catch {
    return href;
  }
}
