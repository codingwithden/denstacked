import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import TwoTimelines from "@/components/about/TwoTimelines";
import TypingTest from "@/components/about/TypingTest";
import PageShell from "@/components/layout/PageShell";
import SectionPlaceholder from "@/components/layout/SectionPlaceholder";
import { SECTIONS } from "@/content/pages";

export const metadata: Metadata = { title: "Off the clock — Denisse Medina Flores" };

// Same order as the prototype: hero, timelines, run, give, habits, typing test, shelf.
const before = SECTIONS.about.filter((s) => s.id !== "shelf");
const after = SECTIONS.about.filter((s) => s.id === "shelf");

export default function AboutPage() {
  return (
    <PageShell page="about">
      <AboutHero />
      <TwoTimelines />
      {before.map((s) => (
        <SectionPlaceholder key={s.kicker} {...s} />
      ))}
      <TypingTest />
      {after.map((s) => (
        <SectionPlaceholder key={s.kicker} {...s} />
      ))}
    </PageShell>
  );
}
