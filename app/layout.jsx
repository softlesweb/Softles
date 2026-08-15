import { Space_Grotesk, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import WhatsAppFab from "./components/_components/WhatsAppFab";
import RouteLoader from "./components/_components/RouteLoader";

// GA4 measurement ID — overridable via env, with the live property as default.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-X446Z72C6Z";

// Modern type system: Space Grotesk for display/headings, Inter for body.
const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Site-wide defaults. Per-page metadata (title, description, canonical,
// openGraph) is set in each page's own `metadata` export and merges over this.
// og:image / twitter:image are supplied automatically by app/opengraph-image.jsx.
export const metadata = {
  metadataBase: new URL("https://softles.in"),
  title: "SoftLes | Web Design, Development & Automation Agency",
  description:
    "SoftLes is a design‑driven digital agency that blends creativity and technology to craft impactful digital products. We build WordPress and Shopify sites, custom web apps, and AI‑powered automation. Book a free discovery session and build something remarkable with us.",
  keywords: [
    "SoftLes",
    "web design agency",
    "WordPress development",
    "Shopify development",
    "UI/UX design",
    "full‑stack development",
    "AI automation",
    "web design company India",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "SoftLes",
    locale: "en_IN",
    url: "https://softles.in/",
    title: "SoftLes – Web Design, Development & Automation Agency",
    description:
      "We combine design, technology and strategy to help businesses grow online — WordPress and Shopify builds, custom development, and AI‑enabled automation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftLes – Web Design, Development & Automation Agency",
    description:
      "WordPress and Shopify sites, custom web development and AI automation. Schedule a discovery call to build your next digital product.",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} antialiased`}
      >
        <RouteLoader />
        <Navbar/>
        {children}
        <WhatsAppFab />
      </body>
      {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
    </html>
  );
}
