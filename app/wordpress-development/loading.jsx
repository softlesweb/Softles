export default function Loading() {
  return (
    <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-6 bg-[#0E1219]">
      {/* Branded spinner */}
      <div className="relative h-14 w-14">
        <div className="absolute inset-0 rounded-full border-[3px] border-[#2E3446]" />
        <div className="absolute inset-0 animate-spin rounded-full border-[3px] border-transparent border-t-[#FF4D57]" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5F6FA]">
          WordPress Development
        </p>
        <p className="text-xs text-[#C7CCD6]/70">Loading…</p>
      </div>
    </div>
  );
}
