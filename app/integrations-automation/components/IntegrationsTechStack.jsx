"use client";

import WordReveal from "../../components/_components/WordReveal";
import {
  SiZapier,
  SiMake,
  SiN8N,
  SiStripe,
  SiHubspot,
  SiShopify,
  SiAirtable,
  SiGooglesheets,
} from "react-icons/si";
import TechMarquee from "../../components/_components/TechMarquee";
import { motion } from "framer-motion";
import { enter } from "@/app/components/_components/motion-presets";

export default function IntegrationsTechStack() {
  // Hexes verified against each vendor's own brand assets. Shopify uses its
  // current marketing accent — the logo green is too dark to read here.
  const techs = [
    { icon: <SiZapier className="w-6 h-6" />, color: "#FF4F00", name: "Zapier", desc: "No-Code Automation" },
    { icon: <SiMake className="w-6 h-6" />, color: "#8200FA", name: "Make", desc: "Visual Workflows" },
    { icon: <SiN8N className="w-6 h-6" />, color: "#EA4B71", name: "n8n", desc: "Self-Hosted Automation" },
    { icon: <SiStripe className="w-6 h-6" />, color: "#635BFF", name: "Stripe", desc: "Payments" },
    { icon: <SiHubspot className="w-6 h-6" />, color: "#FF4800", name: "HubSpot", desc: "CRM Sync" },
    { icon: <SiShopify className="w-6 h-6" />, color: "#36F4A4", name: "Shopify", desc: "Commerce API" },
    { icon: <SiAirtable className="w-6 h-6" />, color: "#18BFFF", name: "Airtable", desc: "Ops Database" },
    { icon: <SiGooglesheets className="w-6 h-6" />, color: "#34A853", name: "Google Sheets", desc: "Reporting" },
  ];

  return (
    <section className="softles-section-primary" id="platforms">
      <div className="service-page-container">
        <div className="text-center mb-10">
          <motion.div {...enter(0)} className="softles-eyebrow justify-center mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">Platforms we connect</span>
          </motion.div>
          <WordReveal as="h2" className="service-section-heading mb-3">Look for your tools</WordReveal>
          <motion.p {...enter(2)} className="softles-section-copy mx-auto">
            These are the ones we work with most. If yours isn&apos;t here and it has an API, it&apos;s almost certainly still connectable — ask us.
          </motion.p>
        </div>

        <TechMarquee techs={techs} />
      </div>
    </section>
  );
}
