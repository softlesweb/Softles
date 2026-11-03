"use client";

import { useId, useState } from "react";
import { trackEvent } from "@/lib/gtag";
import { trackPixel } from "@/lib/metaPixel";
import { getAttribution } from "@/lib/auAttribution";

// Fields /api/contact reads by name; anything else travels as a labelled detail.
const CORE_FIELDS = ["name", "email", "phone", "storeUrl", "message", "goal"];

const TONES = {
  ink: {
    label: "text-white",
    hint: "text-[#A9AFBC]",
    input:
      "bg-[#0E1016] border border-[#2A2E3A] text-white placeholder:text-[#A9AFBC]/60 focus:border-[#FF4D57]",
    button: "bg-[#FF4D57] text-[#0E1016] hover:bg-[#FF6A72]",
  },
  paper: {
    label: "text-[#0E1016]",
    hint: "text-[#545866]",
    input:
      "bg-white border border-[#D8D2C6] text-[#0E1016] placeholder:text-[#545866]/60 focus:border-[#0E1016]",
    button: "bg-[#0E1016] text-white hover:bg-[#2A2E3A]",
  },
  coral: {
    label: "text-[#0E1016]",
    hint: "text-[#0E1016]/80",
    input:
      "bg-[#0E1016] border border-transparent text-white placeholder:text-[#A9AFBC]/70 focus:border-white",
    button: "bg-[#0E1016] text-white hover:bg-[#2A2E3A]",
  },
};

// One form for every AU lead (report request, audit request, agency, intake).
// `fields` drives the inputs; `values` and `details` ride along unseen.
export default function LeadForm({
  source,
  fields,
  submitLabel,
  sentTitle,
  sentText,
  event,
  values = {},
  details = {},
  tone = "ink",
  marketingConsent = true,
  autoFocus = false,
  onSent,
}) {
  const uid = useId();
  const t = TONES[tone];
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = { ...values, source, company_website: form.get("company_website") || "" };
    const extra = { ...details };

    for (const field of fields) {
      const value = String(form.get(field.name) || "").trim();
      if (CORE_FIELDS.includes(field.name)) payload[field.name] = value;
      else extra[field.label] = value;
    }
    if (marketingConsent) extra["Marketing emails"] = form.get("marketing") ? "Yes" : "No";
    payload.details = { ...extra, ...getAttribution() };

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "That didn't send.");
      setStatus("sent");
      if (event) trackEvent(event, { source });
      trackPixel("Lead", { content_name: source });
      onSent?.();
    } catch (err) {
      setStatus("error");
      setError(
        `${err.message || "That didn't send."} Try again, or email info@softles.in.`
      );
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="py-2">
        <p className={`font-display text-xl font-semibold ${t.label}`}>{sentTitle}</p>
        {sentText ? <p className={`mt-2 ${t.hint}`}>{sentText}</p> : null}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative grid gap-4">
      {fields.map((field, index) => {
        const id = `${uid}-${field.name}`;
        const hintId = field.hint ? `${id}-hint` : undefined;
        const common = {
          id,
          name: field.name,
          // Forms revealed by a button take over its focus, since the button is gone.
          autoFocus: autoFocus && index === 0,
          required: field.required,
          autoComplete: field.autoComplete,
          placeholder: field.placeholder,
          "aria-describedby": hintId,
          className: `w-full rounded-[10px] px-4 py-3 text-base outline-none transition-colors ${t.input}`,
        };
        return (
          <div key={field.name} className="grid gap-1.5">
            <label htmlFor={id} className={`text-sm font-medium ${t.label}`}>
              {field.label}
              {field.required ? null : <span className={`font-normal ${t.hint}`}> (optional)</span>}
            </label>
            {field.type === "textarea" ? (
              <textarea {...common} rows={3} />
            ) : field.type === "select" ? (
              <select {...common} defaultValue="">
                <option value="" disabled>
                  Choose one
                </option>
                {field.options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                {...common}
                type={field.type || "text"}
                inputMode={field.inputMode}
                autoCapitalize={field.type === "email" || field.inputMode === "url" ? "none" : undefined}
                spellCheck={field.type === "email" || field.inputMode === "url" ? false : undefined}
              />
            )}
            {field.hint ? (
              <p id={hintId} className={`text-sm ${t.hint}`}>
                {field.hint}
              </p>
            ) : null}
          </div>
        );
      })}

      {/* Honeypot: hidden from people and screen readers, irresistible to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${uid}-company_website`}>Company website</label>
        <input id={`${uid}-company_website`} name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      {marketingConsent ? (
        <label className={`flex items-start gap-3 text-sm ${t.hint}`}>
          <input type="checkbox" name="marketing" className="mt-0.5 h-4 w-4 shrink-0 accent-[#FF4D57]" />
          <span>Send me occasional Shopify speed notes by email. Unsubscribe any time.</span>
        </label>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className={`justify-self-start rounded-full px-6 py-3 font-semibold transition-colors disabled:opacity-60 ${t.button}`}
      >
        {status === "sending" ? "Sending…" : submitLabel}
      </button>

      {status === "error" ? (
        <p role="alert" className={`text-sm font-medium ${tone === "paper" ? "text-[#B3261E]" : t.label}`}>
          {error}
        </p>
      ) : null}

      <p className={`text-xs leading-relaxed ${t.hint}`}>
        Softles uses these details only to reply to you and send what you asked for, in line with
        the Australian Privacy Principles. Read our{" "}
        <a href="/privacy" className="underline underline-offset-2">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}
