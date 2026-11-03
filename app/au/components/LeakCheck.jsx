"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/gtag";
import { trackPixel } from "@/lib/metaPixel";
import { getAttribution, refStore } from "@/lib/auAttribution";

// The results view (and its report form) only matters once a check has run, so it
// loads as its own chunk. onSubmit starts fetching it while Lighthouse works.
const loadResults = () => import("./LeakResults");
const Results = dynamic(loadResults);

// What the visitor reads while Lighthouse runs (15–40s), keyed by elapsed seconds.
const STAGES = [
  [0, "Opening your page on a simulated mid-range phone over 4G"],
  [7, "Timing how long the main content takes to show"],
  [16, "Weighing the scripts and apps that load with it"],
  [27, "Nearly there. Heavy pages take a little longer."],
];

export default function LeakCheck({ id, placement, prefillFromRef = false }) {
  const [url, setUrl] = useState("");
  const [state, setState] = useState({ status: "idle" });
  const [elapsed, setElapsed] = useState(0);
  const inputRef = useRef(null);

  // Outreach links carry ?ref=brand.com.au, so the visitor's own store is ready to check.
  useEffect(() => {
    if (prefillFromRef) setUrl((current) => current || refStore(getAttribution()));
  }, [prefillFromRef]);

  useEffect(() => {
    if (state.status !== "running") return;
    const started = Date.now();
    const timer = setInterval(() => setElapsed(Math.floor((Date.now() - started) / 1000)), 500);
    return () => clearInterval(timer);
  }, [state.status]);

  async function onSubmit(e) {
    e.preventDefault();
    if (!url.trim()) {
      setState({ status: "error", message: "Enter your store's address, like yourbrand.com.au." });
      inputRef.current?.focus();
      return;
    }

    setElapsed(0);
    setState({ status: "running" });
    loadResults();
    trackEvent("check_started", { placement });

    try {
      const res = await fetch("/api/au/leak-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
        signal: AbortSignal.timeout(70000),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.result) {
        throw new Error(data.error || "The speed checker is busy right now. Try again in a minute.");
      }
      setState({ status: "done", result: data.result });
      trackEvent("check_completed", {
        placement,
        score: data.result.score,
        band: data.result.band,
        is_shopify: data.result.isShopify,
      });
      trackPixel("ViewContent", { content_name: "AU Leak Check result" });
    } catch (err) {
      const message =
        err?.name === "TimeoutError"
          ? "That took too long. Try again, or try your homepage."
          : err.message;
      setState({ status: "error", message });
    }
  }

  const running = state.status === "running";
  const stage = [...STAGES].reverse().find(([from]) => elapsed >= from)[1];
  const progress = Math.min(95, 100 * (1 - Math.exp(-elapsed / 14)));
  const errorId = `${id}-error`;
  // One live region that always exists, so screen readers hear progress and the result.
  const announcement = running
    ? stage
    : state.status === "done"
      ? `Score ${state.result.score} out of 100. ${state.result.headline}`
      : "";

  return (
    <div className="rounded-[14px] border border-[#2A2E3A] bg-[#171A22] p-5 sm:p-6">
      <p className="sr-only" aria-live="polite">
        {announcement}
      </p>
      <form onSubmit={onSubmit} noValidate>
        <label htmlFor={id} className="au-mono text-sm text-[#A9AFBC]">
          Your store URL
        </label>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <input
            ref={inputRef}
            id={id}
            name="url"
            type="text"
            inputMode="url"
            autoComplete="url"
            autoCapitalize="none"
            spellCheck={false}
            placeholder="yourbrand.com.au"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={running}
            aria-invalid={state.status === "error" || undefined}
            aria-describedby={state.status === "error" ? errorId : undefined}
            className="min-w-0 flex-1 rounded-[10px] border border-[#2A2E3A] bg-[#0E1016] px-4 py-3.5 text-base text-white outline-none transition-colors placeholder:text-[#A9AFBC]/60 focus:border-[#FF4D57] disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={running}
            className="rounded-full bg-[#FF4D57] px-6 py-3.5 font-semibold text-[#0E1016] transition-colors hover:bg-[#FF6A72] disabled:opacity-70"
          >
            {running ? "Checking…" : "See my leak score"}
          </button>
        </div>
        {state.status === "idle" || state.status === "error" ? (
          <p className="mt-3 text-sm text-[#A9AFBC]">
            Free, no email needed. Runs Google&apos;s mobile speed test on your page in about 30 seconds.
          </p>
        ) : null}
      </form>

      {state.status === "error" ? (
        <p id={errorId} role="alert" className="mt-3 text-sm font-medium text-[#FF8A91]">
          {state.message}
        </p>
      ) : null}

      {running ? (
        <div className="mt-5" aria-hidden="true">
          <div className="h-1.5 overflow-hidden rounded-full bg-[#2A2E3A]">
            <div
              className="h-full rounded-full bg-[#FF4D57] transition-[width] duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-3 flex justify-between gap-4 text-sm text-[#A9AFBC]">
            <span>{stage}</span>
            <span className="au-mono">{elapsed}s</span>
          </p>
        </div>
      ) : null}

      {state.status === "done" ? (
        <Results
          result={state.result}
          placement={placement}
          onReset={() => {
            setState({ status: "idle" });
            setUrl("");
            inputRef.current?.focus();
          }}
        />
      ) : null}
    </div>
  );
}
