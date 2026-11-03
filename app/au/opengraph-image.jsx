import { ImageResponse } from "next/og";

// Link preview for /au, drawn in the AU brand kit. Swap for the LinkedIn cover
// (as app/au/opengraph-image.png) once that file is final.
export const alt = "Your store is leaking sales. Softles, Shopify specialists for Australian brands.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SANS_TEXT = "Your store is leaking softles.in/au Free leak check Shopify specialists for Australian brands";
const ACCENT = "sales.";

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
  const [grotesk, serif] = await Promise.all([
    googleFont("Space+Grotesk:wght@700", SANS_TEXT),
    googleFont("Instrument+Serif:ital@1", ACCENT),
  ]);
  const fonts = [
    grotesk && { name: "Space Grotesk", data: grotesk, weight: 700, style: "normal" },
    serif && { name: "Instrument Serif", data: serif, weight: 400, style: "italic" },
  ].filter(Boolean);

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
          backgroundColor: "#0E1016",
          color: "#FFFFFF",
          fontFamily: "Space Grotesk, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: "26px", color: "#A9AFBC" }}>
          Shopify specialists for Australian brands
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: "116px", lineHeight: 0.98, letterSpacing: "-4px" }}>
          <div style={{ display: "flex" }}>Your store is</div>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span style={{ marginRight: "30px" }}>leaking</span>
            <span style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400, letterSpacing: "0px" }}>
              sales
            </span>
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontFamily: "Instrument Serif, serif",
                fontStyle: "italic",
                color: "#FF4D57",
              }}
            >
              .
            </span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "28px" }}>
          <div style={{ display: "flex", color: "#F3EFE8" }}>softles.in/au</div>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", color: "#A9AFBC" }}>
            <div style={{ display: "flex", width: "14px", height: "14px", borderRadius: "0 50% 50% 50%", backgroundColor: "#FF4D57", transform: "rotate(45deg)" }} />
            Free leak check
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
