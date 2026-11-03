// Leak Check helpers for /au: turn a visitor's input into a PageSpeed-ready URL,
// and a raw PageSpeed Insights response into the small summary the page shows.
// Pure functions only, so they run the same on the server and in tests.

// Accepts "brand.com.au", "https://brand.com.au/products/x?variant=1" etc.
// Returns a clean https URL, or null for anything that isn't a public hostname.
export function normaliseStoreUrl(input) {
  let raw = String(input || "").trim();
  if (!raw || raw.length > 300) return null;
  if (!/^https?:\/\//i.test(raw)) raw = `https://${raw}`;

  let url;
  try {
    url = new URL(raw);
  } catch {
    return null;
  }

  const host = url.hostname.toLowerCase().replace(/\.$/, "");
  const isIp = /^[\d.]+$/.test(host) || host.includes(":") || host.startsWith("[");
  if (!host.includes(".") || isIp || host === "localhost" || host.endsWith(".local")) {
    return null;
  }

  const path = url.pathname.replace(/\/+$/, "");
  return `https://${host}${path}`;
}

// Lighthouse's own colour bands for the performance score.
export function scoreBand(score) {
  if (score >= 90) return "green";
  if (score >= 50) return "amber";
  return "red";
}

// Web Vitals "good" / "poor" thresholds (web.dev/vitals). Between the two is "needs work".
const THRESHOLDS = {
  lcp: [2500, 4000],
  inp: [200, 500],
  tbt: [200, 600],
  cls: [0.1, 0.25],
};

export function metricBand(metric, value) {
  const t = THRESHOLDS[metric];
  if (!t || value == null) return null;
  if (value <= t[0]) return "green";
  if (value <= t[1]) return "amber";
  return "red";
}

const SHOPIFY_RE = /cdn\.shopify\.com|\/cdn\/shop\/|\.myshopify\.com|shopifycloud|shopifysvc\.com/;

// Names the owner of a script so the visitor sees "Judgeme reviews", not a CDN path.
function scriptOwner(item, storeHost) {
  let url;
  try {
    url = new URL(item.url);
  } catch {
    return null;
  }
  // Theme app extensions: cdn.shopify.com/extensions/<id>/<app-handle>-<version>/assets/...
  const ext = url.pathname.match(/\/extensions\/[^/]+\/([^/]+)\//);
  if (ext) {
    const name = ext[1].replace(/-\d[\w.]*$/, "").replace(/[-_]+/g, " ").trim();
    return name ? name.charAt(0).toUpperCase() + name.slice(1) : "Shopify app";
  }
  if (/\/cdn\/shop\/t\/|\/s\/files\/.+\/t\/\d+\//.test(url.pathname)) return "Your theme";
  // /cdn/wpm/ is Shopify's web pixel manager, served from the store's own domain.
  if (SHOPIFY_RE.test(url.hostname + url.pathname) || url.pathname.startsWith("/cdn/wpm/")) {
    return "Shopify";
  }
  if (url.hostname === storeHost || url.hostname.endsWith(`.${storeHost}`)) return "Your theme";
  return item.entity || url.hostname.replace(/^www\./, "");
}

// Groups script downloads by owner and returns the heaviest few.
function heaviestScripts(items, storeHost, limit = 3) {
  const totals = new Map();
  for (const item of items) {
    if (item.resourceType !== "Script" || !item.transferSize) continue;
    const owner = scriptOwner(item, storeHost);
    if (!owner) continue;
    totals.set(owner, (totals.get(owner) || 0) + item.transferSize);
  }
  return [...totals.entries()]
    .filter(([, bytes]) => bytes >= 10 * 1024)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([name, bytes]) => ({ name, bytes }));
}

// Field data (real Chrome users) is the only source of INP; many small stores have none.
function fieldInp(psi) {
  const metric =
    psi.loadingExperience?.metrics?.INTERACTION_TO_NEXT_PAINT ||
    psi.originLoadingExperience?.metrics?.INTERACTION_TO_NEXT_PAINT;
  return typeof metric?.percentile === "number" ? metric.percentile : null;
}

function plainEnglish(lcpMs) {
  if (lcpMs == null) return "We couldn't time this page's main content.";
  const secs = (lcpMs / 1000).toFixed(1);
  if (lcpMs <= 2500) return `This page shows its main content in ${secs}s on a 4G phone. That's quick.`;
  return `This page takes ${secs}s to show its main content on a 4G phone.`;
}

export function summarisePsi(psi, requestedUrl) {
  const lhr = psi?.lighthouseResult;
  const rawScore = lhr?.categories?.performance?.score;
  if (!lhr || typeof rawScore !== "number") {
    throw new Error("PageSpeed response had no performance score");
  }

  const audits = lhr.audits || {};
  const num = (id, places = 0) => {
    const value = audits[id]?.numericValue;
    return typeof value === "number" ? Number(value.toFixed(places)) : null;
  };
  const finalUrl = lhr.finalDisplayedUrl || lhr.finalUrl || requestedUrl;
  const storeHost = new URL(finalUrl).hostname;
  const requests = audits["network-requests"]?.details?.items || [];

  const score = Math.round(rawScore * 100);
  const lcpMs = num("largest-contentful-paint");

  return {
    url: requestedUrl,
    finalUrl,
    host: storeHost.replace(/^www\./, ""),
    isShopify: requests.some((r) => SHOPIFY_RE.test(r.url || "")),
    score,
    band: scoreBand(score),
    headline: plainEnglish(lcpMs),
    metrics: {
      lcpMs,
      inpMs: fieldInp(psi),
      tbtMs: num("total-blocking-time"),
      cls: num("cumulative-layout-shift", 3),
      pageBytes: num("total-byte-weight"),
    },
    heaviest: heaviestScripts(requests, storeHost),
    checkedAt: psi.analysisUTCTimestamp || new Date().toISOString(),
  };
}
