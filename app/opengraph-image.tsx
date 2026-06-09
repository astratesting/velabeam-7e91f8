import { ImageResponse } from "next/og";

export const alt = "VelaBeam — AI websites for local businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FAF6EF 0%, #EDE8FE 100%)",
          position: "relative",
        }}
      >
        {/* Decorative prism shape */}
        <div
          style={{
            position: "absolute",
            right: 80,
            top: 120,
            display: "flex",
          }}
        >
          <svg width="280" height="300" viewBox="0 0 280 300" fill="none">
            <defs>
              <linearGradient id="prism" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6E4FF2" />
                <stop offset="50%" stopColor="#FF6F61" />
                <stop offset="100%" stopColor="#F5B947" />
              </linearGradient>
            </defs>
            <polygon
              points="140,20 260,260 20,260"
              fill="url(#prism)"
              opacity="0.9"
            />
            <polygon
              points="140,60 220,240 60,240"
              fill="white"
              opacity="0.15"
            />
          </svg>
        </div>

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "0 100px",
            maxWidth: "750px",
          }}
        >
          <p
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: "#FF6F61",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              marginBottom: 16,
              fontFamily: "sans-serif",
            }}
          >
            AI Websites for Local Business
          </p>
          <h1
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: "#1B1530",
              lineHeight: 1.1,
              marginBottom: 24,
              fontFamily: "sans-serif",
            }}
          >
            A real website for every shop on the block.
          </h1>
          <p
            style={{
              fontSize: 20,
              color: "#5A5470",
              lineHeight: 1.6,
              fontFamily: "sans-serif",
            }}
          >
            VelaBeam finds local businesses without a site and generates one in
            their industry — in under 60 seconds.
          </p>
        </div>

        {/* Brand mark */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 100,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <svg width="28" height="28" viewBox="0 0 64 64" fill="none">
            <polygon points="32,4 58,52 6,52" fill="#6E4FF2" />
            <polygon points="32,14 50,48 14,48" fill="white" opacity="0.3" />
          </svg>
          <span
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: "#1B1530",
              fontFamily: "sans-serif",
            }}
          >
            VelaBeam
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
