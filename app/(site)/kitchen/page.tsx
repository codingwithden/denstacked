import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import PageShell from "@/components/layout/PageShell";
import SectionPlaceholder from "@/components/layout/SectionPlaceholder";
import { HEROES, SECTIONS } from "@/content/pages";

export const metadata: Metadata = { title: "The Kitchen — Denisse Medina Flores" };

export default function KitchenPage() {
  return (
    <PageShell page="kitchen">
      <PageHero
        hero={HEROES.kitchen}
        art={
          <>
            <Image
              className="hero-img absolute top-[30px] left-0 h-auto w-[min(210px,40%)] -rotate-[18deg]"
              style={{ animationDelay: "-3s" }}
              src="/images/portafilter-beans.png"
              alt=""
              width={397}
              height={336}
            />
            <Image
              className="hero-img relative z-[2] h-[min(400px,90%)] w-auto"
              src="/images/iced-latte.png"
              alt="Iced latte"
              width={700}
              height={967}
              priority
            />
            <Image
              className="hero-img absolute right-0 bottom-5 z-[3] h-auto w-[min(220px,42%)] rotate-[14deg]"
              style={{ animationDelay: "-1s" }}
              src="/images/portafilter-latte-art.png"
              alt=""
              width={426}
              height={324}
            />
          </>
        }
      />
      {SECTIONS.kitchen.map((s) => (
        <SectionPlaceholder key={s.kicker} {...s} />
      ))}
    </PageShell>
  );
}
