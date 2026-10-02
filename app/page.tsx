import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import IntroCarousel from "@/components/intro/IntroCarousel";
import { GREETINGS } from "@/content/greeting";

export const metadata: Metadata = { title: "Denisse's Portfolio — Pick a Drink" };

// A greeting language turns on once its recording exists in public/audio.
const available = GREETINGS.filter((g) =>
  fs.existsSync(path.join(process.cwd(), "public", "audio", g.file)),
).map((g) => g.lang);

export default function IntroPage() {
  return <IntroCarousel greetings={available} />;
}
