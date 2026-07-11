"use client";

import { useState } from "react";
import { trackPixel } from "@/lib/metaPixel";

const GOALS = [
  "Redesign my site",
  "Migrate to WordPress",
  "Build a new site",
  "Speed up my site",
];

export default function LeadForm({ ctaLabel = "Talk to a WordPress Expert" }) {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [goal, setGoal] = useState(GOALS[0]);
  const [status, setStatus] = useState("idle"); // idle | loading | sent | error

  const valid = name.trim() && whatsapp.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!valid || status === "loading") return;
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone: whatsapp,
          storeUrl: siteUrl,
          goal,
          source: "WordPress Landing Page (/lp/wordpress)",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      trackPixel("Lead", { content_name: "wordpress-lp", goal });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
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
          A WordPress expert from SoftLes will contact you on WhatsApp within a few hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="softles-card p-6 sm:p-7 flex flex-col gap-4" autoComplete="off">
      <div className="text-center mb-1">
        <h3 className="text-xl font-bold text-white">Get your site plan</h3>
        <p className="text-[#C7CCD6]/70 text-sm mt-1">No obligation. Reply within hours.</p>
      </div>

      <input
        type="text"
        placeholder="Your name *"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="bg-[#0F131A] border border-[#2E3446] focus:border-[#FF4D57] focus:outline-none text-white placeholder-[#7c8394] rounded-lg px-4 py-3 text-sm"
      />
      <input
        type="tel"
        placeholder="WhatsApp number *"
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
        required
        className="bg-[#0F131A] border border-[#2E3446] focus:border-[#FF4D57] focus:outline-none text-white placeholder-[#7c8394] rounded-lg px-4 py-3 text-sm"
      />
      <input
        type="url"
        placeholder="Current site URL (optional)"
        value={siteUrl}
        onChange={(e) => setSiteUrl(e.target.value)}
        className="bg-[#0F131A] border border-[#2E3446] focus:border-[#FF4D57] focus:outline-none text-white placeholder-[#7c8394] rounded-lg px-4 py-3 text-sm"
      />
      <select
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="bg-[#0F131A] border border-[#2E3446] focus:border-[#FF4D57] focus:outline-none text-white rounded-lg px-4 py-3 text-sm"
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
        className="softles-primary-button w-full justify-center mt-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {status === "loading" ? "Sending…" : ctaLabel}
      </button>

      {status === "error" && (
        <p className="text-[#FF4D57] text-xs text-center">
          Something went wrong. Please try WhatsApp instead.
        </p>
      )}
      <p className="text-[#C7CCD6]/50 text-[11px] text-center">
        We&apos;ll only use your details to contact you about your website.
      </p>
    </form>
  );
}
