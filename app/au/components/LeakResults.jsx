"use client";

import { metricBand } from "@/lib/leakCheck";
import BookCallLink from "./BookCallLink";
import LeadForm from "./LeadForm";

const BAND_COLOUR = { green: "#3DD68C", amber: "#FFB020", red: "#FF4D57" };
const SCORE_WORD = { green: "Tight", amber: "Slow leak", red: "Big leak" };
const METRIC_WORD = { green: "Good", amber: "Needs work", red: "Poor" };

const seconds = (ms) =>
  ms == null ? "–" : ms >= 1000 ? `${(ms / 1000).toFixed(1)} s` : `${Math.round(ms)} ms`;
const size = (bytes) =>
  bytes == null
    ? "–"
    : bytes >= 1024 * 1024
      ? `${(bytes / 1024 / 1024).toFixed(1)} MB`
      : `${Math.round(bytes / 1024)} KB`;

function Gauge({ score, band }) {
  const arc = Math.PI * 52;
  return (
    <svg viewBox="0 0 120 70" className="w-36 shrink-0" role="img" aria-label={`Mobile score ${score} out of 100`}>
      <path d="M8 62 A52 52 0 0 1 112 62" fill="none" stroke="#2A2E3A" strokeWidth="10" strokeLinecap="round" />
      <path
        d="M8 62 A52 52 0 0 1 112 62"
        fill="none"
        stroke={BAND_COLOUR[band]}
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={`${(score / 100) * arc} ${arc}`}
      />
      <text x="60" y="58" textAnchor="middle" fill="#fff" fontSize="30" fontWeight="700" fontFamily="var(--font-display)">
        {score}
      </text>
    </svg>
  );
}

function Metric({ label, value, band, note }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-t border-[#2A2E3A] py-3">
      <dt className="text-[#A9AFBC]">
        {label}
        {note ? <span className="block text-xs text-[#A9AFBC]/80">{note}</span> : null}
      </dt>
      <dd className="au-mono text-right">
        <span className="text-white">{value}</span>
        {band ? (
          <span className="ml-2 inline-flex items-center gap-1.5 text-xs" style={{ color: BAND_COLOUR[band] }}>
            <span aria-hidden="true" className="h-2 w-2 rounded-full" style={{ background: BAND_COLOUR[band] }} />
            {METRIC_WORD[band]}
          </span>
        ) : null}
      </dd>
    </div>
  );
}

// Loaded only once a check starts (see LeakCheck), so it stays out of the first-load JS.
export default function LeakResults({ result, placement, onReset }) {
  const { metrics, heaviest } = result;
  const hasInp = metrics.inpMs != null;

  return (
    <div className="mt-6">
      <div className="flex flex-wrap items-center gap-5">
        <Gauge score={result.score} band={result.band} />
        <div className="min-w-[14rem] flex-1">
          <p className="au-mono text-sm" style={{ color: BAND_COLOUR[result.band] }}>
            {SCORE_WORD[result.band]} · {result.host}
          </p>
          <p className="mt-1 font-display text-xl font-semibold leading-snug text-white">{result.headline}</p>
        </div>
      </div>

      {!result.isShopify ? (
        <p className="mt-4 rounded-[10px] border border-[#2A2E3A] px-4 py-3 text-sm text-[#A9AFBC]">
          This doesn&apos;t look like a Shopify store. The numbers still stand, but our fixes are built for Shopify.
        </p>
      ) : null}

      <dl className="mt-5 text-sm">
        <Metric label="Main content shows (LCP)" value={seconds(metrics.lcpMs)} band={metricBand("lcp", metrics.lcpMs)} />
        {hasInp ? (
          <Metric label="Response to taps (INP)" value={seconds(metrics.inpMs)} band={metricBand("inp", metrics.inpMs)} />
        ) : (
          <Metric
            label="Page frozen while loading (TBT)"
            note="Not enough real-visitor data for INP yet"
            value={seconds(metrics.tbtMs)}
            band={metricBand("tbt", metrics.tbtMs)}
          />
        )}
        <Metric
          label="Layout jumps (CLS)"
          value={metrics.cls == null ? "–" : metrics.cls.toFixed(2)}
          band={metricBand("cls", metrics.cls)}
        />
        <Metric label="Page weight" value={size(metrics.pageBytes)} />
      </dl>

      {heaviest.length ? (
        <div className="mt-5">
          <p className="text-sm text-[#A9AFBC]">Heaviest scripts on this page</p>
          <ol className="mt-2 grid gap-1.5 text-sm">
            {heaviest.map((script) => (
              <li key={script.name} className="flex justify-between gap-4">
                <span className="truncate text-white">{script.name}</span>
                <span className="au-mono text-[#A9AFBC]">{size(script.bytes)}</span>
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      <p className="mt-4 text-xs text-[#A9AFBC]">
        Google PageSpeed Insights, mobile, one page. Scores move a few points between runs.
      </p>

      <div className="mt-6 rounded-[12px] bg-[#0E1016] p-5">
        <p className="font-display text-lg font-semibold text-white">Get the full report</p>
        <p className="mt-1 mb-4 text-sm text-[#A9AFBC]">
          We&apos;ll look at these results and email you a short report with the first fixes we&apos;d make.
        </p>
        <LeadForm
          source="AU Leak Check"
          event="email_captured"
          fields={[{ name: "email", label: "Email", type: "email", required: true, autoComplete: "email" }]}
          values={{ storeUrl: result.url }}
          details={{
            Score: result.score,
            LCP: seconds(metrics.lcpMs),
            INP: metrics.inpMs == null ? null : seconds(metrics.inpMs),
            TBT: seconds(metrics.tbtMs),
            CLS: metrics.cls,
            "Page weight": size(metrics.pageBytes),
            "Heaviest scripts": heaviest.map((s) => s.name).join(", "),
            "Shopify detected": result.isShopify ? "Yes" : "No",
            Placement: placement,
          }}
          submitLabel="Email me the report"
          sentTitle="Thanks. We've got your results."
          sentText="One of our developers will go through them and email you the report."
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        <a href="#offer" className="rounded-full bg-[#FF4D57] px-6 py-3 font-semibold text-[#0E1016] hover:bg-[#FF6A72]">
          Get a Revenue Leak Audit
        </a>
        <BookCallLink placement={`${placement}_results`} className="font-semibold text-white underline underline-offset-4" >
          Book a call
        </BookCallLink>
        <button type="button" onClick={onReset} className="text-sm text-[#A9AFBC] underline underline-offset-4">
          Check another page
        </button>
      </div>
    </div>
  );
}
