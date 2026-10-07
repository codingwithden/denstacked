import fs from "node:fs";
import path from "node:path";
import type { Metadata, Viewport } from "next";
import ComingSoon from "@/components/coming-soon/ComingSoon";
import MusicProvider from "@/components/music/MusicProvider";
import { COMING_SOON, COVER } from "@/content/comingSoon";
import { MUSIC } from "@/content/music";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = COMING_SOON
  ? {
      title: { absolute: `${COVER.first} ${COVER.last} ${COVER.handle} · Launching soon` },
      description: COVER.roles,
    }
  : {
      title: "Denisse Medina Flores — Order Up",
      description:
        "Founder and full-stack builder going into product management. APM / PM and product marketing, NYC, 2027.",
    };

// The music button only appears once there's a track: a hosted link or a file in public/audio.
const hasMusic = !!MUSIC.url || fs.existsSync(path.join(process.cwd(), "public", "audio", MUSIC.file));

export const viewport: Viewport = {
  themeColor: "#3E000D",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontVariables} antialiased`}>
      <body>
        {COMING_SOON ? (
          <ComingSoon />
        ) : (
          <MusicProvider available={hasMusic}>{children}</MusicProvider>
        )}
      </body>
    </html>
  );
}
