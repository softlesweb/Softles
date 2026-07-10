import Footer from "../components/Footer";
import WordPressHero from "./components/WordPressHero";
import WordPressTrust from "./components/WordPressTrust";
import WordPressServices from "./components/WordPressServices";
import WordPressProcess from "./components/WordPressProcess";
import WordPressTechStack from "./components/WordPressTechStack";
import WordPressProjects from "./components/WordPressProjects";
import WordPressBenefits from "./components/WordPressBenefits";
import WordPressFAQ from "./components/WordPressFAQ";
import WordPressCTA from "./components/WordPressCTA";

export const metadata = {
  title: "WordPress Development Services — SoftLes",
  description: "Custom WordPress solutions built for growth. From custom themes and WooCommerce stores to headless architectures. Get scalable, secure, high-performing WordPress websites.",
};

export default function WordPressDevelopment() {
  return (
    <main className="bg-[#0E1219] overflow-x-hidden">
      <WordPressHero />
      <WordPressProjects />
      <WordPressServices />
      <WordPressTrust />
      <WordPressProcess />
      <WordPressTechStack />
      <WordPressBenefits />
      <WordPressFAQ />
      <WordPressCTA />
      <Footer />
    </main>
  );
}
