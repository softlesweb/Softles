// Arrow sitting in the seam between two overlapping step circles. It is always
// on screen, so the direction of the flow reads even when nothing is animating;
// it turns red once the flow has passed through it.
export default function StepConnector({ lit }) {
  return (
    <span
      aria-hidden="true"
      className="hidden xl:grid absolute top-1/2 -right-5 translate-x-1/2 -translate-y-1/2 h-7 w-7 place-items-center rounded-full border bg-page transition-all duration-500"
      style={{
        zIndex: 60,
        borderColor: lit ? "rgba(255,77,87,0.55)" : "#2E3446",
        color: lit ? "#FF4D57" : "#4a5164",
        boxShadow: lit ? "0 0 18px rgba(255,77,87,0.3)" : "none",
      }}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 6l6 6-6 6" />
      </svg>
    </span>
  );
}
