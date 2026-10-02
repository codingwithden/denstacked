import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import PageShell from "@/components/layout/PageShell";
import Countdown from "@/components/runners/Countdown";
import LabTools from "@/components/runners/LabTools";
import RaceTools from "@/components/runners/RaceTools";
import { HEROES } from "@/content/pages";

export const metadata: Metadata = { title: "Runner's Hub — Denisse Medina Flores" };

export default function RunnersPage() {
  return (
    <PageShell page="running">
      <PageHero
        hero={HEROES.running}
        art={
          <div className="flex h-full flex-col items-center justify-center gap-2.5">
            <Image
              className="hero-img h-[min(300px,62%)] w-auto"
              src="/images/drink-tiramisu-latte.png"
              alt=""
              width={297}
              height={414}
              priority
            />
            <Countdown />
          </div>
        }
      />
      <RaceTools />
      <LabTools />
    </PageShell>
  );
}
