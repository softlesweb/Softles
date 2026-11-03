"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// Shown only after a click, so the form code stays out of the first-load JS.
const LeadForm = dynamic(() => import("./LeadForm"));

export default function AgencyForm() {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded="false"
        className="rounded-full bg-[#0E1016] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#2A2E3A]"
      >
        Partner with us
      </button>
    );
  }

  return (
    <div className="w-full max-w-md">
      <LeadForm
        autoFocus
        tone="coral"
        source="AU Agency partner"
        event="agency_form_sent"
        marketingConsent={false}
        fields={[
          { name: "name", label: "Your name", required: true, autoComplete: "name" },
          { name: "agency", label: "Agency", required: true, autoComplete: "organization" },
          { name: "email", label: "Work email", type: "email", required: true, autoComplete: "email" },
          {
            name: "hours",
            label: "Overflow hours a month",
            type: "select",
            required: true,
            options: ["Under 20", "20 to 40", "40 to 80", "More than 80"],
          },
        ]}
        submitLabel="Send to Softles"
        sentTitle="Thanks. We'll be in touch by email."
        sentText="We'll come back with partner rates and how a white-label handover works."
      />
    </div>
  );
}
