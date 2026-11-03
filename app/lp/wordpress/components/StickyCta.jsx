"use client";

import WhatsappButton from "./WhatsappButton";

// Fixed bottom bar, mobile only. Primary scrolls to the hero form; WhatsApp opens chat.
export default function StickyCta() {
  const scrollToForm = () => {
    const el = document.getElementById("lead");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-[#161C27]/95 backdrop-blur border-t border-[#2E3446] px-4 py-3 flex items-center gap-3">
      <button
        onClick={scrollToForm}
        className="softles-primary-button flex-1 justify-center !py-3 text-sm"
      >
        Talk to a WordPress Expert
      </button>
      <WhatsappButton className="softles-secondary-button !px-4 !py-3 shrink-0">
        <span className="sr-only">WhatsApp</span>
      </WhatsappButton>
    </div>
  );
}
