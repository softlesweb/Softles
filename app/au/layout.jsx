import { Instrument_Serif, JetBrains_Mono } from "next/font/google";
import AuTrackers from "./components/AuTrackers";
import "./au.css";

// The AU brand kit adds two faces to the site's Space Grotesk + Inter:
// Instrument Serif Italic for accent words, JetBrains Mono for labels and numbers.
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-serif",
  display: "swap",
});
// Labels sit below the fold or inside results, so don't spend first-paint bandwidth on it.
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

export default function AuLayout({ children }) {
  return (
    <div className={`au-root ${serif.variable} ${mono.variable}`}>
      {children}
      <AuTrackers />
    </div>
  );
}
