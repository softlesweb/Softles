"use client";

import FaqSection from "../../components/_components/FaqSection";

// Each answer opens with a self-contained factual sentence — that opening line
// is what search and AI answer engines quote.
const faqs = [
  {
    q: "What's the difference between an integration and an automation?",
    a: "An integration connects two systems so they share data without anyone moving it; an automation runs a task without a person doing it. Most real projects need both, which is why the terms get used interchangeably — the same platforms usually do both jobs.",
  },
  {
    q: "Should we use Zapier, Make, n8n, or custom code?",
    a: "It depends on your volume and how much branching logic you need. No-code is faster and cheaper to start, but per-task pricing and step limits make high-volume or heavily conditional workflows cheaper to build in code, and n8n can be self-hosted to remove per-task fees entirely. We recommend after seeing your actual numbers, not before.",
  },
  {
    q: "How much does an integration cost?",
    a: "It varies widely with scope, so we quote against your specific systems rather than a menu price. A single straightforward connection is a small piece of work; connecting a store to several platforms with two-way sync, error handling and reconciliation is a multi-week project. The cost drivers are how many systems, whether data flows one way or both, and how many edge cases have to be handled.",
  },
  {
    q: "How long does it take?",
    a: "Simple automations typically ship in days. A multi-system integration is usually two to four weeks of build plus testing, and a first large integration with full discovery, staged rollout and handover can run considerably longer. We give you a stage-by-stage timeline after the audit.",
  },
  {
    q: "What happens when an automation breaks?",
    a: "APIs change and third-party services go down — the real question is whether you find out. Every build we ship includes failure alerts and a retry or queue design, so a broken sync surfaces immediately instead of silently dropping records. Retainer clients get us fixing it; everyone else gets a documented runbook for their own team.",
  },
  {
    q: "Do we pay for Zapier or Make separately?",
    a: "Yes — platform subscriptions are billed by those vendors directly to your own account, and we build inside your workspace rather than ours. Self-hosted n8n avoids per-task fees but adds a hosting cost instead; we'll show you the monthly running cost for each option before you commit.",
  },
  {
    q: "Can you fix or finish our existing automations instead of rebuilding?",
    a: "Yes, and it's a common starting point. We audit what's already there, keep what works, document it, and rebuild only the parts that are actually broken — inheriting a half-finished setup is usually cheaper than starting over.",
  },
  {
    q: "Is our customer data safe?",
    a: "Data moves directly between your own accounts, not through ours. We use scoped API keys with least-privilege access, credentials stay in your workspace, and we can sign an NDA and data-processing agreement. We don't claim certifications we don't hold — if you need a specific compliance standard, tell us early so we can scope it properly.",
  },
];

export default function IntegrationsFAQ() {
  return (
    <FaqSection
      title="Frequently asked questions"
      copy="Straight answers on platforms, cost drivers and what happens when something breaks."
      faqs={faqs}
    />
  );
}
