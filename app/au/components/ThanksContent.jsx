"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/gtag";
import { trackPixel } from "@/lib/metaPixel";
import { loadRetargeting } from "./AuTrackers";
import LeadForm from "./LeadForm";
import Arrow from "./Arrow";

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
        <h1 className="text-[2.1rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink sm:text-5xl sm:leading-[1.08] lg:text-[54px] lg:leading-[1.07]">
          Payment received. Let&apos;s start your audit.
        </h1>
        <p className="mt-6 max-w-[50ch] text-base leading-relaxed text-mute lg:text-lg">
          Your receipt is on its way from Stripe. Tell us about your store below and the 5 working days
          start once we have access.
        </p>
        <div className="mt-10 max-w-xl rounded-2xl border border-line bg-gradient-to-br from-raise to-panel p-6 shadow-[var(--shadow-card)] sm:p-8">
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
      <h1 className="text-[2.1rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink sm:text-5xl sm:leading-[1.08] lg:text-[54px] lg:leading-[1.07]">
        {type === "call" ? "Your call is booked." : "Thanks. We'll be in touch."}
      </h1>
      <p className="mt-6 max-w-[50ch] text-base leading-relaxed text-mute lg:text-lg">
        {type === "call"
          ? "The calendar invite is in your inbox. If you'd like us to look at your store before we talk, run the free leak check and we'll have the results on the call."
          : "While you wait, see how your store scores on mobile."}
      </p>
      <a
        href="/au#hero"
        className="softles-primary-button group mt-9"
      >
        <span>Run the leak check</span>
        <Arrow />
      </a>
    </>
  );
}
