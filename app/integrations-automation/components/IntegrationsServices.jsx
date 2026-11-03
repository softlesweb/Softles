"use client";

import WordReveal from "../../components/_components/WordReveal";
import SpotlightServiceCard from "../../components/_components/SpotlightServiceCard";
import { motion } from "framer-motion";
import { enter } from "@/app/components/_components/motion-presets";

const iconProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const services = [
  {
    icon: (
      <svg {...iconProps}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    title: "Site & Store Integrations",
    desc: "Connect WordPress or Shopify to the CRM, ERP, inventory or accounting system you already run — in both directions.",
    featured: true,
    bullets: [
      "CRM sync (HubSpot, Zoho, Salesforce)",
      "Inventory & order sync",
      "Accounting (Xero, QuickBooks)",
      "Two-way, not just export",
    ],
  },
  {
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20M6 15h4" />
      </svg>
    ),
    title: "Payments & Checkout Flows",
    desc: "Stripe, Razorpay and PayPal setup — plus the subscription, refund and reconciliation logic that starts after the first successful charge.",
    bullets: [
      "Gateway setup & testing",
      "Subscriptions & recurring billing",
      "Refunds & failed-payment recovery",
      "Reconciliation into accounting",
    ],
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Workflow Automation",
    desc: "Replace the copy-paste between your tools with automations in Zapier, Make or n8n — or custom code where those run out of road.",
    bullets: [
      "Lead routing & qualification",
      "Order & fulfilment handoffs",
      "Slack and email alerting",
      "Scheduled reports, no CSV exports",
    ],
  },
  {
    icon: (
      <svg {...iconProps}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Custom API & Middleware",
    desc: "When no off-the-shelf connector exists, we build the endpoint, the sync, the retry logic and the error handling that keeps it honest.",
    bullets: [
      "Custom REST & webhook endpoints",
      "Retry, queueing & rate limits",
      "Field mapping & transformation",
      "Failure alerts from day one",
    ],
  },
];

export default function IntegrationsServices() {
  return (
    <section className="softles-section-secondary" id="services">
      <div className="service-page-container mx-auto w-full flex flex-col">
        <div className="flex flex-col mb-10">
          <motion.div {...enter(0)} className="softles-eyebrow mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">What we build</span>
          </motion.div>
          <WordReveal as="h2" className="service-section-heading text-ink">
            Four kinds of plumbing
          </WordReveal>
          <motion.p {...enter(2)} className="softles-section-copy">
            Most projects are one of these, or two of them together. All of them start with an audit rather than a platform recommendation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {services.map((service, idx) => (
            <SpotlightServiceCard
              key={service.title}
              idx={idx}
              icon={service.icon}
              title={service.title}
              desc={service.desc}
              bullets={service.bullets}
              badge={service.featured ? "Most common" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
