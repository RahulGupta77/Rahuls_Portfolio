import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Rahul Gupta — Software Engineer at rahulspace.com";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(145deg, #0b0c10 0%, #12141a 55%, #1a1d26 100%)",
          color: "#eeeae3",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 28,
            letterSpacing: "0.04em",
            color: "#7eb8da",
          }}
        >
          rahulspace.com
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            Rahul Gupta
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "#9a9ea8",
              letterSpacing: "-0.02em",
            }}
          >
            Software Engineer
          </div>
          <div
            style={{
              marginTop: 8,
              fontSize: 24,
              color: "#9a9ea8",
              maxWidth: 820,
              lineHeight: 1.4,
            }}
          >
            System design · Microservices · Distributed systems
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#9a9ea8",
          }}
        >
          <span>Bangalore · from Mumbai</span>
          <span style={{ color: "#7eb8da" }}>rahul@rahulspace.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
