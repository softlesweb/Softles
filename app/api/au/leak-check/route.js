import { unstable_cache } from "next/cache";
import { normaliseStoreUrl, summarisePsi } from "@/lib/leakCheck";

// PageSpeed runs a full mobile Lighthouse pass, which takes 15–40s.
export const maxDuration = 60;

const PSI_ENDPOINT = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";

// Best effort, per server instance: stops one visitor from burning the PageSpeed quota.
const LIMIT_PER_HOUR = 5;
const HOUR_MS = 60 * 60 * 1000;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < HOUR_MS);
  const blocked = recent.length >= LIMIT_PER_HOUR;
  if (!blocked) recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (!times.some((t) => now - t < HOUR_MS)) hits.delete(key);
    }
  }
  return blocked;
}

// Lighthouse errors that mean "we couldn't open that page", as opposed to "Google is busy".
const UNREACHABLE_RE = /FAILED_DOCUMENT_REQUEST|ERRORED_DOCUMENT_REQUEST|DNS_FAILURE|NO_FCP|NOT_HTML|INVALID_URL/;

class CheckError extends Error {
  constructor(code, detail) {
    super(detail || code);
    this.code = code;
  }
}

// Google fetches the store, not us, so a visitor can't point this at our own network.
async function runCheck(url) {
  const params = new URLSearchParams({ url, strategy: "mobile", category: "performance" });
  if (process.env.PAGESPEED_API_KEY) params.set("key", process.env.PAGESPEED_API_KEY);

  let res;
  try {
    res = await fetch(`${PSI_ENDPOINT}?${params}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(55000),
    });
  } catch (e) {
    throw new CheckError(e?.name === "TimeoutError" ? "timeout" : "busy", e?.message);
  }

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const message = body?.error?.message || "";
    if (res.status === 429) throw new CheckError("busy", "PageSpeed quota exceeded");
    if (UNREACHABLE_RE.test(message)) throw new CheckError("unreachable", message);
    throw new CheckError(res.status === 400 ? "unreachable" : "busy", `${res.status} ${message}`);
  }

  return summarisePsi(await res.json(), url);
}

// The raw PageSpeed JSON is too big for the data cache, so cache the summary instead.
// Thrown errors are never cached; a store re-checked within 24h gets the stored result.
const cachedCheck = unstable_cache(runCheck, ["au-leak-check-v1"], { revalidate: 86400 });

const MESSAGES = {
  invalid: "That doesn't look like a store address. Try something like yourbrand.com.au.",
  unreachable:
    "We couldn't load that page. Check the address works in your browser, or try your homepage.",
  timeout: "That page took too long to test. Try again, or try your homepage.",
  busy: "The speed checker is busy right now. Try again in a minute.",
  limited: "You've run a few checks already. Try again in an hour, or book a call and we'll run it for you.",
};

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ code: "invalid", error: MESSAGES.invalid }, { status: 400 });
  }

  const url = normaliseStoreUrl(body?.url);
  if (!url) {
    return Response.json({ code: "invalid", error: MESSAGES.invalid }, { status: 400 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  if (rateLimited(ip)) {
    return Response.json({ code: "limited", error: MESSAGES.limited }, { status: 429 });
  }

  try {
    const result = await cachedCheck(url);
    return Response.json({ ok: true, result });
  } catch (e) {
    const code = e instanceof CheckError ? e.code : "busy";
    console.error("Leak check failed:", code, url, e?.message);
    const status = code === "unreachable" ? 422 : 503;
    return Response.json({ code, error: MESSAGES[code] || MESSAGES.busy }, { status });
  }
}
