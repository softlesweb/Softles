"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/gtag";
import { trackPixel } from "@/lib/metaPixel";
import { loadRetargeting } from "./AuTrackers";
import LeadForm from "./LeadForm";

const AUDIT = { value: 1500, currency: "AUD" };

// Count each conversion once per tab, even if the visitor reloads this page.
function trackOnce(key, fire) {
  try {
    if (window.sessionStorage.getItem(key)) return;
    window.sessionStorage.setItem(key, "1");
  } catch {
    // Storage blocked: fire anyway, a rare double count beats a missed one.
  }
  fire();
}

export default function ThanksContent({ type }) {
  useEffect(() => {
    if (type === "other") return;
    loadRetargeting();
    // gtag loads after hydration; give it a moment so the event isn't dropped.
    const timer = setTimeout(() => {
      if (type === "call") {
        trackOnce("softles_au_call_booked", () => {
          trackEvent("call_booked");
          trackPixel("Schedule");
        });
      }
      if (type === "audit") {
        trackOnce("softles_au_audit_paid", () => {
          trackEvent("audit_paid", AUDIT);
          trackPixel("Purchase", AUDIT);
        });
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [type]);

  if (type === "audit") {
    return (
      <>
        <h1 className="font-display text-[clamp(2.25rem,6vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em]">
          Payment received. Let&apos;s start your audit.
        </h1>
        <p className="mt-5 max-w-[36rem] text-lg leading-relaxed text-[#A9AFBC]">
          Your receipt is on its way from Stripe. Tell us about your store below and the 5 working days
          start once we have access.
        </p>
        <div className="mt-10 max-w-xl rounded-[14px] border border-[#2A2E3A] bg-[#171A22] p-5 sm:p-6">
          <LeadForm
            source="AU Audit intake"
            event="audit_intake_sent"
            marketingConsent={false}
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
              {
                name: "collaboratorCode",
                label: "Collaborator request code",
                hint: "In your Shopify admin, go to Settings > Users > Security. We'll send a collaborator request and you approve it. We never need your password.",
                inputMode: "numeric",
              },
              {
                name: "message",
                label: "What should the audit focus on?",
                type: "textarea",
                placeholder: "For example: mobile conversion is down since we changed theme in August.",
              },
            ]}
            submitLabel="Send details"
            sentTitle="Got it. Your audit is booked in."
            sentText="Your project lead will email you to confirm access and the delivery date."
          />
        </div>
      </>
    );
  }

  return (
    <>
      <h1 className="font-display text-[clamp(2.25rem,6vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em]">
        {type === "call" ? "Your call is booked." : "Thanks. We'll be in touch."}
      </h1>
      <p className="mt-5 max-w-[36rem] text-lg leading-relaxed text-[#A9AFBC]">
        {type === "call"
          ? "The calendar invite is in your inbox. If you'd like us to look at your store before we talk, run the free leak check and we'll have the results on the call."
          : "While you wait, see how your store scores on mobile."}
      </p>
      <a
        href="/au#check"
        className="mt-8 inline-flex rounded-full bg-[#FF4D57] px-6 py-3 font-semibold text-[#0E1016] transition-colors hover:bg-[#FF6A72]"
      >
        Run the leak check
      </a>
    </>
  );
}
