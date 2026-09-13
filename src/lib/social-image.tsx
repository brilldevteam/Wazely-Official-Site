import { ImageResponse } from "next/og";

type SocialImageOptions = {
  eyebrow: string;
  title: string;
  description: string;
  accent: string;
};

export const socialImageSize = { width: 1200, height: 630 };
export const socialImageContentType = "image/png";

export function createSocialImage({
  eyebrow,
  title,
  description,
  accent,
}: SocialImageOptions) {
  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: "#081426",
        color: "#f8fafc",
        display: "flex",
        height: "100%",
        padding: "68px 76px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          background: `radial-gradient(circle, ${accent}55 0%, transparent 68%)`,
          display: "flex",
          height: 620,
          position: "absolute",
          right: -120,
          top: -180,
          width: 620,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ alignItems: "center", display: "flex", gap: 15 }}>
          <div
            style={{
              alignItems: "center",
              background: "linear-gradient(135deg, #20c8d4, #8b5cf6)",
              borderRadius: 15,
              display: "flex",
              fontSize: 28,
              fontWeight: 800,
              height: 52,
              justifyContent: "center",
              width: 52,
            }}
          >
            W
          </div>
          <div style={{ fontSize: 30, fontWeight: 700 }}>wazely</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#45e4ed",
              fontSize: 19,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              fontSize: 68,
              fontWeight: 750,
              letterSpacing: -3,
              lineHeight: 1.03,
              marginTop: 20,
              maxWidth: 960,
            }}
          >
            {title}
          </div>
          <div
            style={{
              color: "#b9c6d8",
              fontSize: 25,
              lineHeight: 1.45,
              marginTop: 24,
              maxWidth: 900,
            }}
          >
            {description}
          </div>
        </div>

        <div style={{ color: "#8fa0b8", display: "flex", fontSize: 20 }}>
          wazely.io
        </div>
      </div>
    </div>,
    socialImageSize,
  );
}
