import Footer from "../components/Footer";
import IntegrationsHero from "./components/IntegrationsHero";
import IntegrationsPain from "./components/IntegrationsPain";
import IntegrationsTechStack from "./components/IntegrationsTechStack";
import IntegrationsServices from "./components/IntegrationsServices";
import IntegrationsProcess from "./components/IntegrationsProcess";
import IntegrationsProjects from "./components/IntegrationsProjects";
import IntegrationsBenefits from "./components/IntegrationsBenefits";
import IntegrationsFAQ from "./components/IntegrationsFAQ";
import IntegrationsCTA from "./components/IntegrationsCTA";

export const metadata = {
  title: "Integrations & Workflow Automation — SoftLes",
  description:
    "We connect your WordPress or Shopify site to the CRM, payments and ops tools you already run — and automate the handoffs your team still does by hand.",
  alternates: { canonical: "/integrations-automation" },
  openGraph: {
    title: "Integrations & Workflow Automation — SoftLes",
    description:
      "API integrations, payment flows and workflow automation in Zapier, Make and n8n — built in staging, with failure alerts from day one.",
    url: "https://softles.in/integrations-automation",
  },
};

// Automation buyers arrive with a symptom and scan for their own tools, so the
// pain section and the platform marquee both sit above the service list.
export default function IntegrationsAutomation() {
  return (
    <main className="bg-[#0E1219] overflow-x-hidden">
      <IntegrationsHero />
      <IntegrationsPain />
      <IntegrationsTechStack />
      <IntegrationsServices />
      <IntegrationsProcess />
      <IntegrationsProjects />
      <IntegrationsBenefits />
      <IntegrationsFAQ />
      <IntegrationsCTA />
      <Footer />
    </main>
  );
}
