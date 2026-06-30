// Lightweight Meta Pixel event helper.
// Fires only when the Pixel base code has loaded (window.fbq exists).
export const trackPixel = (event, params = {}) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", event, params);
  }
};
