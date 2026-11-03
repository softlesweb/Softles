import Footer from "./components/Footer";
import Hero from "./components/Hero";
import WorkShowcase from "./components/WorkShowcase";
import OurServicesSection from "./components/OurServicesSection";
// import IndustriesSection from "./components/IndustriesSection";
import OurApproachSection from "./components/OurApproachSection";
import StatementSection from "./components/StatementSection";
// import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import OurTeamSection from "./components/OurTeamSection";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="bg-page overflow-x-clip">
      <Hero />
      <WorkShowcase />
      <OurServicesSection />
      <StatementSection />
      {/* <IndustriesSection /> */}
      <OurApproachSection />
      {/* <TestimonialsSection /> */}
      <OurTeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
