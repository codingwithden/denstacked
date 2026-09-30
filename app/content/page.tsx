import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import PageShell from "@/components/layout/PageShell";
import SectionPlaceholder from "@/components/layout/SectionPlaceholder";
import { HEROES, SECTIONS } from "@/content/pages";

export const metadata: Metadata = { title: "Content Creator — Denisse Medina Flores" };

export default function ContentPage() {
  return (
    <PageShell page="content">
      <PageHero
        hero={HEROES.content}
        art={
          <div className="flex h-full items-end justify-center">
            <Image
              className="hero-img -mr-[30px] h-[min(330px,75%)] w-auto -rotate-[8deg]"
              style={{ animationDelay: "-2s" }}
              src="/images/drink-matcha.png"
              alt=""
              width={277}
              height={423}
            />
            <Image
              className="hero-img relative z-[2] h-[min(400px,90%)] w-auto"
              src="/images/drink-cold-brew.png"
              alt=""
              width={261}
              height={396}
              priority
            />
            <Image
              className="hero-img -ml-[30px] h-[min(330px,75%)] w-auto rotate-[8deg]"
              style={{ animationDelay: "-4s" }}
              src="/images/drink-caramel-macchiato.png"
              alt=""
              width={292}
              height={421}
            />
          </div>
        }
      />
      {SECTIONS.content.map((s) => (
        <SectionPlaceholder key={s.kicker} {...s} />
      ))}
    </PageShell>
  );
}
