import { ImageResponse } from "next/og";

// Link preview for /au, drawn like the main site: dark page, red eyebrow line,
// Space Grotesk heading with the coral gradient on the accent words.
// Swap for the LinkedIn cover (as app/au/opengraph-image.png) once that file is final.
export const alt = "Your store is leaking sales. Softles, Shopify specialists for Australian brands.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TEXT = "Your store is leaking sales. SoftLes softles.in/au · SHOPIFY FOR AUSTRALIAN BRANDS Free leak check";

// Google Fonts serves TTF to clients without a browser user agent, which is what Satori needs.
// Subset to the characters drawn. Falls back to the default font if Google is unreachable.
async function googleFont(family, text) {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`)
    ).text();
    const src = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    return src ? await (await fetch(src)).arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const grotesk = await googleFont("Space+Grotesk:wght@700", TEXT);
  const fonts = grotesk ? [{ name: "Space Grotesk", data: grotesk, weight: 700, style: "normal" }] : [];

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
          color: "#FFFFFF",
          fontFamily: "Space Grotesk, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: "24px", letterSpacing: "5px", color: "#C7CCD6" }}>
          <div style={{ display: "flex", width: "56px", height: "3px", backgroundColor: "#FF4D57", marginRight: "22px" }} />
          SHOPIFY FOR AUSTRALIAN BRANDS
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: "112px", lineHeight: 1.02, letterSpacing: "-3px" }}>
          <div style={{ display: "flex" }}>Your store is</div>
          <div
            style={{
              display: "flex",
              backgroundImage: "linear-gradient(90deg, #FF4D57, #FF6A3D, #FF4D57)",
              backgroundClip: "text",
              color: "transparent",
              paddingBottom: "12px",
            }}
          >
            leaking sales.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "28px" }}>
          <div style={{ display: "flex", fontSize: "40px" }}>
            SoftLes<span style={{ color: "#FF4D57" }}>.</span>
          </div>
          <div style={{ display: "flex", color: "#C7CCD6" }}>softles.in/au · Free leak check</div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
