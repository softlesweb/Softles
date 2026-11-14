"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/gtag";
import { trackPixel } from "@/lib/metaPixel";
import Arrow from "./Arrow";

// Shown only after a click, so the form code stays out of the first-load JS.
const LeadForm = dynamic(() => import("./LeadForm"));

const CONTACT_FIELDS = [
  { name: "name", label: "Your name", required: true, autoComplete: "name" },
  { name: "email", label: "Work email", type: "email", required: true, autoComplete: "email" },
  {
    name: "storeUrl",
    label: "Store URL",
    required: true,
    inputMode: "url",
    autoComplete: "url",
    placeholder: "yourbrand.com.au",
  },
];

// One entry per request button on the page. Prices here must match OFFERS in page.jsx.
const REQUESTS = {
  leak: {
    // Stripe Payment Link for the AUD 1,500 audit. Its success URL should be
    // https://softles.in/au/thanks?type=audit, which shows the intake form.
    // Until it's set, the button opens a request form and the audit is invoiced by hand.
    checkoutUrl: process.env.NEXT_PUBLIC_AU_AUDIT_CHECKOUT_URL,
    value: 1500,
    startEvent: "audit_checkout_started",
    button: "Get my audit",
    intro: "Tell us where to send the invoice. The 5 working days start once it's paid.",
    source: "AU Audit request",
    fields: CONTACT_FIELDS,
    submitLabel: "Request my audit",
    sentText: "We'll email you an invoice in AUD and a start date.",
  },
  apps: {
    // Invoiced by hand for now; no Stripe link or thanks-page intake yet.
    value: 750,
    startEvent: "app_audit_started",
    sentEvent: "app_audit_requested",
    button: "Get my app bill audit",
    intro: "Tell us where to send the invoice. The 3 working days start once it's paid.",
    source: "AU App Bill Audit request",
    fields: [
      ...CONTACT_FIELDS,
      {
        name: "appSpend",
        label: "Roughly what you spend on apps each month",
        type: "select",
        options: ["Under AUD 300", "AUD 300–1,000", "AUD 1,000–3,000", "Over AUD 3,000", "Not sure"],
      },
    ],
    submitLabel: "Request my app bill audit",
    sentText: "We'll email you an invoice in AUD and ask for collaborator access to your store.",
  },
  call: {
    // Stand-in for the booking calendar, used only if no booking URL is set (see page.jsx).
    startEvent: "call_request_started",
    sentEvent: "call_requested",
    button: "Ask for a call time",
    source: "AU Call request",
    fields: [
      ...CONTACT_FIELDS,
      {
        name: "callTime",
        label: "Best time for you",
        type: "select",
        options: ["1–3 pm AEDT", "3–5 pm AEDT", "Either"],
      },
    ],
    submitLabel: "Ask for a call",
    sentText: "Shakti will email you a few times to pick from.",
  },
};

// The main site's two button styles. `variant` picks one; `inline` shows the form without a
// click, loading it once it nears the screen.
const BUTTON = { primary: "softles-primary-button", secondary: "softles-secondary-button" };

export default function RequestCta({ kind = "leak", variant = "primary", inline = false }) {
  const offer = REQUESTS[kind];
  const buttonClass = `${BUTTON[variant]} group w-full`;
  const label = (
    <>
      <span>{offer.button}</span>
      {variant === "primary" ? <Arrow /> : null}
    </>
  );
  const money = offer.value ? { value: offer.value, currency: "AUD" } : {};
  // null until shown; "click" moves focus into the form, "inline" leaves focus alone.
  const [open, setOpen] = useState(null);
  const spot = useRef(null);

  useEffect(() => {
    if (!inline || !spot.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setOpen("inline");
        observer.disconnect();
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(spot.current);
    return () => observer.disconnect();
  }, [inline]);

  if (offer.checkoutUrl) {
    return (
      <a
        href={offer.checkoutUrl}
        onClick={() => {
          trackEvent(offer.startEvent, money);
          trackPixel("InitiateCheckout", money);
        }}
        className={buttonClass}
      >
        {label}
      </a>
    );
  }

  if (!open && inline) return <div ref={spot} className="min-h-[28rem]" />;

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => {
          setOpen("click");
          trackEvent(offer.startEvent, { ...money, method: offer.value ? "invoice_request" : "request_form" });
        }}
        className={buttonClass}
      >
        {label}
      </button>
    );
  }

  return (
    <div className="mt-2">
      {offer.intro ? <p className="mb-4 text-sm text-mute">{offer.intro}</p> : null}
      <LeadForm
        autoFocus={open === "click"}
        source={offer.source}
        event={offer.sentEvent}
        fields={offer.fields}
        submitLabel={offer.submitLabel}
        sentTitle="Request received."
        sentText={offer.sentText}
      />
    </div>
  );
}
