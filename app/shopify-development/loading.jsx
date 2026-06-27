export default function Loading() {
  return (
    <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-6 bg-[#191C26]">
      {/* Branded spinner */}
      <div className="relative h-14 w-14">
        <div className="absolute inset-0 rounded-full border-[3px] border-[#2a2e40]" />
        <div className="absolute inset-0 animate-spin rounded-full border-[3px] border-transparent border-t-[#DC4242]" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5F6FA]">
          Shopify Development
        </p>
        <p className="text-xs text-[#BCC1CA]/70">Loading…</p>
      </div>
    </div>
  );
}
