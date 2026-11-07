"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { trackEvent } from "@/lib/gtag";
import { trackPixel } from "@/lib/metaPixel";

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

// One entry per paid audit on the page. Prices here must match the offer cards in page.jsx.
const AUDITS = {
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
};

const buttonClass =
  "inline-flex rounded-full bg-[#FF4D57] px-6 py-3 font-semibold text-[#0E1016] transition-colors hover:bg-[#FF6A72]";

export default function AuditCta({ audit = "leak" }) {
  const offer = AUDITS[audit];
  const money = { value: offer.value, currency: "AUD" };
  const [open, setOpen] = useState(false);

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
        {offer.button}
      </a>
    );
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          trackEvent(offer.startEvent, { ...money, method: "invoice_request" });
        }}
        className={buttonClass}
      >
        {offer.button}
      </button>
    );
  }

  return (
    <div className="mt-2">
      <p className="mb-4 text-sm text-[#A9AFBC]">{offer.intro}</p>
      <LeadForm
        autoFocus
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
