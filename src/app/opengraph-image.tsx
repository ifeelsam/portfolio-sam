import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt =
  "Sam (@ifeelsam) — Full-stack Solana engineer & builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const chips = ["Solana", "AI Agents", "Privacy", "TypeScript"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#fafafa",
              color: "#0a0a0a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 700,
            }}
          >
            S
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#a3a3a3" }}>
            @{site.handle}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 700,
              color: "#fafafa",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Full stack Solana dev
          </div>
          <div style={{ display: "flex", fontSize: 34, color: "#a3a3a3" }}>
            Building Mortem · Arcium Fellow · 2× Superteam grants
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {chips.map((chip) => (
            <div
              key={chip}
              style={{
                display: "flex",
                fontSize: 28,
                color: "#d4d4d4",
                border: "2px solid #2e2e2e",
                borderRadius: 9999,
                padding: "10px 28px",
              }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
