import { ImageResponse } from "next/og";

// Branded link-preview card, generated at request time by next/og.
// Used for og:image (and, absent a twitter-image, twitter:image) across the site.
export const alt = "SoftLes — WordPress & Shopify web design and development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0E1219",
          backgroundImage:
            "linear-gradient(135deg, rgba(255,77,87,0.22) 0%, rgba(14,18,25,0) 42%), linear-gradient(315deg, rgba(109,94,246,0.20) 0%, rgba(14,18,25,0) 45%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              backgroundImage: "linear-gradient(135deg, #FF4D57, #FF6A3D)",
              color: "#fff",
              fontSize: "34px",
              fontWeight: 700,
            }}
          >
            S
          </div>
          <div style={{ display: "flex", fontSize: "34px", fontWeight: 700, color: "#F5F6FA", letterSpacing: "-0.5px" }}>
            SoftLes
          </div>
        </div>

        {/* Value proposition */}
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "22px",
              fontWeight: 600,
              letterSpacing: "3px",
              color: "#FF6A3D",
            }}
          >
            WORDPRESS &amp; SHOPIFY EXPERTS
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "70px",
              fontWeight: 700,
              lineHeight: 1.08,
              color: "#F5F6FA",
              letterSpacing: "-2px",
              maxWidth: "1000px",
            }}
          >
            Websites that turn visitors into customers.
          </div>
          <div style={{ display: "flex", width: "150px", height: "6px", borderRadius: "3px", backgroundImage: "linear-gradient(90deg, #FF4D57, #FF6A3D)" }} />
        </div>

        {/* Footer row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: "28px", color: "#C7CCD6" }}>softles.in</div>
          <div style={{ display: "flex", fontSize: "24px", color: "#8A92A6" }}>
            Design · Development · Automation
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
