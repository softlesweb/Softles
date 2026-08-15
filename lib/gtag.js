// Lightweight Google Analytics (GA4) event helper.
// Fires only when the gtag base code has loaded (window.gtag exists).
export const trackEvent = (name, params = {}) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
};
