import Footer from "../components/Footer";
import DesignHero from "./components/DesignHero";
import DesignProjects from "./components/DesignProjects";
import DesignTrust from "./components/DesignTrust";
import DesignServices from "./components/DesignServices";
import DesignProcess from "./components/DesignProcess";
import DesignTechStack from "./components/DesignTechStack";
import DesignDeliverables from "./components/DesignDeliverables";
import DesignFAQ from "./components/DesignFAQ";
import DesignCTA from "./components/DesignCTA";

export const metadata = {
  title: "Web Design & Prototyping Services — SoftLes",
  description:
    "We design your site in Figma and hand you a clickable prototype — so you approve the real journey before development starts, not a static PDF.",
  alternates: { canonical: "/design-prototyping" },
  openGraph: {
    title: "Web Design & Prototyping Services — SoftLes",
    description:
      "Wireframes, UI design in Figma, clickable prototypes and a documented handoff — design that survives the build.",
    url: "https://softles.in/design-prototyping",
  },
};

// Design pages sell on craft and visual proof, so work sits high on the page.
export default function DesignPrototyping() {
  return (
    <main className="bg-[#0E1219] overflow-x-hidden">
      <DesignHero />
      <DesignProjects />
      <DesignTrust />
      <DesignServices />
      <DesignProcess />
      <DesignDeliverables />
      <DesignTechStack />
      <DesignFAQ />
      <DesignCTA />
      <Footer />
    </main>
  );
}
