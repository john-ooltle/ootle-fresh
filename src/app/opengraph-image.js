import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Ootle — Senior marketing leadership and smarter execution";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", padding: "90px", background: "linear-gradient(125deg, #f7f2ff, #e5d9ff 65%, #fbe7ef)", color: "#211b41" }}>
      <div style={{ display: "flex", fontSize: 55, fontWeight: 900, letterSpacing: "-4px", color: "#6b4ce8" }}>ootle.</div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 44, fontSize: 75, fontWeight: 800, letterSpacing: "-3px", lineHeight: 1.12 }}>
        <span>Senior marketing leadership.</span><span>Smarter execution.</span>
      </div>
      <div style={{ display: "flex", marginTop: 38, fontSize: 27, color: "#585072" }}>Commercial strategy · AI-assisted workflows · Measurable progress</div>
    </div>,
    size
  );
}
