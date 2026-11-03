"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { trackEvent } from "@/lib/gtag";
import { trackPixel } from "@/lib/metaPixel";

// Shown only after a click, so the form code stays out of the first-load JS.
const LeadForm = dynamic(() => import("./LeadForm"));

// Stripe Payment Link for the AUD 1,500 audit. Its success URL should be
// https://softles.in/au/thanks?type=audit, which shows the intake form.
// Until it's set, the button opens a request form and the audit is invoiced by hand.
const CHECKOUT_URL = process.env.NEXT_PUBLIC_AU_AUDIT_CHECKOUT_URL;
const AUDIT = { value: 1500, currency: "AUD" };

const buttonClass =
  "inline-flex rounded-full bg-[#FF4D57] px-6 py-3 font-semibold text-[#0E1016] transition-colors hover:bg-[#FF6A72]";

export default function AuditCta() {
  const [open, setOpen] = useState(false);

  if (CHECKOUT_URL) {
    return (
      <a
        href={CHECKOUT_URL}
        onClick={() => {
          trackEvent("audit_checkout_started", AUDIT);
          trackPixel("InitiateCheckout", AUDIT);
        }}
        className={buttonClass}
      >
        Get my audit
      </a>
    );
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          trackEvent("audit_checkout_started", { ...AUDIT, method: "invoice_request" });
        }}
        className={buttonClass}
      >
        Get my audit
      </button>
    );
  }

  return (
    <div className="mt-2">
      <p className="mb-4 text-sm text-[#A9AFBC]">
        Tell us where to send the invoice. The 5 working days start once it&apos;s paid.
      </p>
      <LeadForm
        autoFocus
        source="AU Audit request"
        fields={[
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
        ]}
        submitLabel="Request my audit"
        sentTitle="Request received."
        sentText="We'll email you an invoice in AUD and a start date."
      />
    </div>
  );
}
