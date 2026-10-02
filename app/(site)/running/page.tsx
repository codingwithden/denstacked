import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import PageShell from "@/components/layout/PageShell";
import SectionPlaceholder from "@/components/layout/SectionPlaceholder";
import PaceCalculator from "@/components/running/PaceCalculator";
import { HEROES, SECTIONS } from "@/content/pages";

export const metadata: Metadata = { title: "Race day — Denisse Medina Flores" };

export default function RunningPage() {
  return (
    <PageShell page="running">
      <PageHero
        hero={HEROES.running}
        art={
          <Image
            className="hero-img h-[min(400px,90%)] w-auto max-w-full object-contain"
            src="/images/drink-tiramisu-latte.png"
            alt="Tiramisu latte"
            width={297}
            height={414}
            priority
          />
        }
      />
      <section id="pacing" className="flex w-full max-w-[1120px] scroll-mt-24 flex-col gap-5 px-4 pt-[120px]">
        <div className="flex flex-col gap-2">
          <span className="kicker opacity-80">01 · PACE PLAN</span>
          <h2 className="headline m-0">
            Plan every <em>mile</em>
          </h2>
          <p className="m-0 max-w-[640px] text-[15px] leading-relaxed text-cream/80">
            Pick a goal time and a strategy to get your split for every mile or kilometer.
          </p>
        </div>
        <PaceCalculator />
      </section>
      {SECTIONS.running.map((s) => (
        <SectionPlaceholder key={s.kicker} {...s} />
      ))}
    </PageShell>
  );
}
