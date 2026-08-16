import Footer from "./components/Footer";
import Hero from "./components/Hero";
import WorkShowcase from "./components/WorkShowcase";
import OurServicesSection from "./components/OurServicesSection";
// import IndustriesSection from "./components/IndustriesSection";
import OurApproachSection from "./components/OurApproachSection";
// import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import OurTeamSection from "./components/OurTeamSection";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="bg-[#0E1219] overflow-x-hidden sm:pt-[60px]">
      <Hero />
      <WorkShowcase />
      <OurServicesSection />
      {/* <IndustriesSection /> */}
      <OurApproachSection />
      {/* <TestimonialsSection /> */}
      <OurTeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
