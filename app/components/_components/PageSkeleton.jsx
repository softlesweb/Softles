// Shape-matched placeholder shown by each route's loading.jsx while the page
// streams in: a hero block with a device on the right, then a row of cards.
// It mirrors the real layout so nothing jumps when the content lands.
export default function PageSkeleton({ label }) {
  return (
    <div className="min-h-screen w-full bg-page pt-28 pb-16" role="status" aria-label={label ? `Loading ${label}` : "Loading"}>
      <div className="service-page-container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <div className="sk h-7 w-52 rounded-full" />
            <div className="mt-7 flex flex-col gap-3.5">
              <div className="sk h-10 w-full rounded-lg sm:h-12" />
              <div className="sk h-10 w-4/5 rounded-lg sm:h-12" />
            </div>
            <div className="mt-7 flex flex-col gap-2.5">
              <div className="sk h-4 w-full rounded" />
              <div className="sk h-4 w-11/12 rounded" />
              <div className="sk h-4 w-2/3 rounded" />
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <div className="sk h-12 w-56 rounded-full" />
              <div className="sk h-12 w-40 rounded-full" />
            </div>
          </div>

          <div className="w-full">
            <div className="sk aspect-[27/16] w-full rounded-2xl" />
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border border-line bg-deep p-5">
              <div className="sk h-10 w-10 rounded-xl" />
              <div className="sk mt-4 h-4 w-3/4 rounded" />
              <div className="sk mt-2.5 h-3 w-full rounded" />
              <div className="sk mt-2 h-3 w-5/6 rounded" />
            </div>
          ))}
        </div>
      </div>
      <span className="sr-only">{label ? `Loading ${label}…` : "Loading…"}</span>
    </div>
  );
}
