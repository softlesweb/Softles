import { Space_Grotesk, Inter, Caveat } from "next/font/google";
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
// Handwritten accent — used only for expressive brand words in the hero.
const hand = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-hand",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>SoftLes | Web Design, Development & Automation Agency</title>
        <meta
          name="description"
          content="SoftLes is a design‑driven digital agency that blends creativity and technology to craft impactful digital products. Our services include research & strategy, UI/UX design and prototyping, full‑stack development, and AI‑powered automation. Book a free discovery session and build something remarkable with us."
        />
        <meta
          name="keywords"
          content="SoftLes, softles, web design agency, UI/UX design, product strategy, wireframing, mockups, design systems, full‑stack development, API integration, cloud integration, performance optimization, AI automation, LLM integration, chatbots, RPA, predictive analytics, digital experiences, research & strategy, development, prototyping"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

        <meta
          property="og:title"
          content="SoftLes – Web Design, Development & Automation Agency"
        />
        <meta
          property="og:description"
          content="At SoftLes we combine design, technology and strategy to help businesses grow online. Our core services span research & strategy, design & prototyping, development and AI‑enabled automation. Your vision, our creativity—powered by purpose."
        />
        <meta property="og:url" content="https://softles.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://softles.in/og-image.jpg" />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SoftLes – Crafting Digital Experiences"
        />
        <meta
          name="twitter:description"
          content="SoftLes is a small team of creative professionals delivering research‑driven design, full‑stack development and AI automation services. Schedule a discovery call to build your next digital product."
        />
        <meta
          name="twitter:image"
          content="https://softles.in/twitter-card.jpg"
        />

        <link rel="canonical" href="https://softles.in/" />

         {/* Favicon links */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${display.variable} ${body.variable} ${hand.variable} antialiased`}
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
