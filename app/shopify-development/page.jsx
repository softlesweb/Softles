import Footer from "../components/Footer";
import ShopifyHero from "./components/ShopifyHero";
import ShopifyTrust from "./components/ShopifyTrust";
import ShopifyServices from "./components/ShopifyServices";
import ShopifyProcess from "./components/ShopifyProcess";
import ShopifyTechStack from "./components/ShopifyTechStack";
import ShopifyProjects from "./components/ShopifyProjects";
import ShopifyBenefits from "./components/ShopifyBenefits";
import ShopifyFAQ from "./components/ShopifyFAQ";
import ShopifyCTA from "./components/ShopifyCTA";

export const metadata = {
  title: "Shopify Development Services — SoftLes",
  description:
    "Certified Shopify development experts. Custom themes, Shopify Plus, headless commerce, app development and store automation for high-converting Shopify stores.",
};

export default function ShopifyDevelopment() {
  return (
    <main className="bg-[#191C26] overflow-x-hidden">
      <ShopifyHero />
      <ShopifyServices />
      <ShopifyTrust />
      <ShopifyProcess />
      <ShopifyTechStack />
      <ShopifyProjects />
      <ShopifyBenefits />
      <ShopifyFAQ />
      <ShopifyCTA />
      <Footer />
    </main>
  );
}
