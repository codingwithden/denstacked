import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import PageShell from "@/components/layout/PageShell";
import FreeToolList from "@/components/resources/FreeToolList";
import StarterKit from "@/components/resources/StarterKit";
import { HEROES } from "@/content/pages";

export const metadata: Metadata = { title: "Free Resources — Denisse Medina Flores" };

export default function ResourcesPage() {
  return (
    <PageShell page="resources">
      <PageHero
        hero={HEROES.resources}
        art={
          <div className="flex h-full items-end justify-center">
            <Image
              className="hero-img h-[min(340px,85%)] w-auto -rotate-6"
              src="/images/drink-iced-latte.png"
              alt=""
              width={273}
              height={436}
              priority
            />
            <Image
              className="hero-img -ml-10 h-auto w-[min(230px,55%)]"
              style={{ animationDelay: "-3s" }}
              src="/images/portafilter-grounds.png"
              alt=""
              width={620}
              height={303}
            />
          </div>
        }
      />
      <StarterKit />
      <FreeToolList />
    </PageShell>
  );
}
