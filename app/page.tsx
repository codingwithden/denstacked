import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import PageShell from "@/components/layout/PageShell";
import SectionPlaceholder from "@/components/layout/SectionPlaceholder";
import { HEROES, SECTIONS } from "@/content/pages";

export default function WorkPage() {
  return (
    <PageShell page="work">
      <PageHero
        hero={HEROES.work}
        art={
          <Image
            className="hero-img h-[min(420px,100%)] w-auto max-w-full object-contain"
            src="/images/iced-latte.png"
            alt="Iced latte with heart-shaped ice"
            width={700}
            height={967}
            priority
          />
        }
      />
      {SECTIONS.work.map((s) => (
        <SectionPlaceholder key={s.kicker} {...s} />
      ))}
    </PageShell>
  );
}
