import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Erich Vorster — Software engineer building AI-native products.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [interRegular, interMedium] = await Promise.all([
    readFile(join(process.cwd(), "assets/Inter-Regular.ttf")),
    readFile(join(process.cwd(), "assets/Inter-Medium.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#eeeeee",
          color: "#1a1a1a",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#707070",
            letterSpacing: "-0.01em",
          }}
        >
          Erich Vorster
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 96,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            fontWeight: 500,
          }}
        >
          <span>Software engineer</span>
          <span>building AI-native</span>
          <span>products.</span>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#707070",
            letterSpacing: "-0.005em",
          }}
        >
          Frontend · Backend · AI · Cloud
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interRegular, style: "normal", weight: 400 },
        { name: "Inter", data: interMedium, style: "normal", weight: 500 },
      ],
    }
  );
}
