import fs from "node:fs";
import path from "node:path";
import type { Metadata, Viewport } from "next";
import MusicProvider from "@/components/music/MusicProvider";
import { MUSIC } from "@/content/music";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Denisse Medina Flores — Order Up",
  description:
    "Founder and full-stack builder going into product management. APM / PM and product marketing, NYC, 2027.",
};

// The music button only appears once the track exists in public/audio.
const hasMusic = fs.existsSync(path.join(process.cwd(), "public", "audio", MUSIC.file));

export const viewport: Viewport = {
  themeColor: "#3E000D",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontVariables} antialiased`}>
      <body>
        <MusicProvider available={hasMusic}>{children}</MusicProvider>
      </body>
    </html>
  );
}
