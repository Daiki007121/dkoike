import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Daiki Koike — Engineer & Entrepreneur";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// OG previews don't honor dark mode, so this is fixed white-on-near-black-text.
// Default ImageResponse font is used (Inter-style sans); embedding Geist at edge
// runtime requires fetching the TTF binary on every render, which we skipped
// for now — visual difference at 1200x630 is minimal.

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "#71717a",
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            Daiki Koike
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 84,
              color: "#09090b",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
            }}
          >
            <div style={{ display: "flex" }}>Engineer and entrepreneur.</div>
            <div style={{ display: "flex" }}>Physics → CS.</div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#52525b",
              lineHeight: 1.4,
              marginTop: "12px",
              maxWidth: "920px",
            }}
          >
            MS Align @ Northeastern &apos;26. Building privacy-first AI.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            fontSize: 24,
            color: "#a1a1aa",
            fontWeight: 500,
          }}
        >
          dkoike.com
        </div>
      </div>
    ),
    { ...size },
  );
}
