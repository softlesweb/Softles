"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { trackPixel } from "@/lib/metaPixel";

// Reuses the site's existing EmailJS credentials.
const EMAILJS_SERVICE = "service_db4zwz8";
const EMAILJS_TEMPLATE = "template_oiu2ped";
const EMAILJS_PUBLIC_KEY = "oo80cgXuN0GQTNqFm";

const GOALS = [
  "Redesign my store",
  "Migrate to Shopify",
  "Build a new store",
  "Speed up my store",
];

export default function LeadForm({ ctaLabel = "Talk to a Shopify Expert" }) {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [storeUrl, setStoreUrl] = useState("");
  const [goal, setGoal] = useState(GOALS[0]);
  const [status, setStatus] = useState("idle"); // idle | loading | sent | error

  const valid = name.trim() && whatsapp.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valid || status === "loading") return;
    setStatus("loading");

    emailjs
      .send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          user_name: name,
          user_phone: whatsapp,
          user_email: "",
          user_message: `New Shopify landing-page lead\nWhatsApp: ${whatsapp}\nStore URL: ${
            storeUrl || "—"
          }\nGoal: ${goal}\nSource: Meta Ads — /lp/shopify`,
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("sent");
        trackPixel("Lead", { content_name: "shopify-lp", goal });
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
      });
  };

  if (status === "sent") {
    return (
      <div className="softles-card p-8 text-center flex flex-col items-center gap-3">
        <div className="w-14 h-14 rounded-full bg-[rgba(255,77,87,0.12)] border border-[#FF4D57]/40 flex items-center justify-center">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FF4D57" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white">Thanks — we&apos;ll reach out shortly</h3>
        <p className="text-[#C7CCD6]/80 text-sm max-w-xs">
          A Shopify expert from SoftLes will contact you on WhatsApp within a few hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="softles-card p-6 sm:p-7 flex flex-col gap-4" autoComplete="off">
      <div className="text-center mb-1">
        <h3 className="text-xl font-bold text-white">Get your store plan</h3>
        <p className="text-[#C7CCD6]/70 text-sm mt-1">No obligation. Reply within hours.</p>
      </div>

      <input
        type="text"
        placeholder="Your name *"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="bg-[#181a20] border border-[#23263a] focus:border-[#FF4D57] focus:outline-none text-white placeholder-[#777] rounded-lg px-4 py-3 text-sm"
      />
      <input
        type="tel"
        placeholder="WhatsApp number *"
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
        required
        className="bg-[#181a20] border border-[#23263a] focus:border-[#FF4D57] focus:outline-none text-white placeholder-[#777] rounded-lg px-4 py-3 text-sm"
      />
      <input
        type="url"
        placeholder="Current store URL (optional)"
        value={storeUrl}
        onChange={(e) => setStoreUrl(e.target.value)}
        className="bg-[#181a20] border border-[#23263a] focus:border-[#FF4D57] focus:outline-none text-white placeholder-[#777] rounded-lg px-4 py-3 text-sm"
      />
      <select
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="bg-[#181a20] border border-[#23263a] focus:border-[#FF4D57] focus:outline-none text-white rounded-lg px-4 py-3 text-sm"
      >
        {GOALS.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>

      <button
        type="submit"
        disabled={!valid || status === "loading"}
        className="softles-primary-button w-full justify-center mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending…" : ctaLabel}
      </button>

      {status === "error" && (
        <p className="text-[#FF4D57] text-xs text-center">
          Something went wrong. Please try WhatsApp instead.
        </p>
      )}
      <p className="text-[#C7CCD6]/50 text-[11px] text-center">
        We&apos;ll only use your details to contact you about your store.
      </p>
    </form>
  );
}
