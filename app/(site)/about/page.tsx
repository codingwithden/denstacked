import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PageShell from "@/components/layout/PageShell";
import SectionPlaceholder from "@/components/layout/SectionPlaceholder";
import { HEROES, SECTIONS } from "@/content/pages";

export const metadata: Metadata = { title: "Off the clock — Denisse Medina Flores" };

export default function AboutPage() {
  return (
    <PageShell page="about">
      <PageHero hero={HEROES.about} />
      {SECTIONS.about.map((s) => (
        <SectionPlaceholder key={s.kicker} {...s} />
      ))}
    </PageShell>
  );
}
