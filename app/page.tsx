import type { Metadata } from "next";
import IntroCarousel from "@/components/intro/IntroCarousel";

export const metadata: Metadata = { title: "Denisse's Portfolio — Pick a Drink" };

export default function IntroPage() {
  return <IntroCarousel />;
}
