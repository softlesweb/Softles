import Footer from "./components/Footer";
import Hero from "./components/Hero";
import FeaturedCaseStudy from "./components/FeaturedCaseStudy";
import OurServicesSection from "./components/OurServicesSection";
// import IndustriesSection from "./components/IndustriesSection";
import OurApproachSection from "./components/OurApproachSection";
// import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import OurTeamSection from "./components/OurTeamSection";

export default function Home() {
  return (
    <main className="bg-surface overflow-x-hidden sm:pt-[60px]">
      <Hero />
      <FeaturedCaseStudy />
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
