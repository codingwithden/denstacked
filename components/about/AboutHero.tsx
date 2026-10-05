"use client";

import { useState, useSyncExternalStore } from "react";
import { BIG_NAME, LANGS, OFF_SHIFT } from "@/content/about";
import { HEROES } from "@/content/pages";
import LanyardBadge from "./LanyardBadge";

const subscribeClock = (cb: () => void) => {
  const id = setInterval(cb, 1000);
  return () => clearInterval(id);
};
const nycTime = () =>
  new Date().toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
    hour: "numeric",
    minute: "2-digit",
  });

/** About hero: lanyard badge (left), "Off the clock" intro (right), big name wordmark below. */
export default function AboutHero() {
  const hero = HEROES.about;
  const time = useSyncExternalStore(subscribeClock, nycTime, () => "");
  const [lang, setLang] = useState(0);
  const l = LANGS[lang];

  return (
    <>
      <div className="flex w-full max-w-[1120px] justify-end px-4 pt-5">
        <div className="flex items-center gap-2.5 rounded-full border-[1.5px] border-cream/35 px-4 py-2.5 text-xs tracking-[.08em]">
          <span className="live-dot block h-2 w-2 rounded-full bg-cream" />
          {OFF_SHIFT} {time}
        </div>
      </div>

      <section className="flex w-full max-w-[1120px] flex-wrap items-center gap-8 px-4 pt-6">
        <LanyardBadge />
        <div className="fade-up flex min-w-0 flex-[1_1_460px] flex-col gap-5">
          <span className="kicker">{hero.kicker}</span>
          <h1 className="retro m-0 text-[clamp(52px,7vw,88px)] leading-[.95] tracking-[-.02em]">
            {hero.title}
            <br />
            <span className="script">{hero.script}</span>
          </h1>
          <p className="m-0 max-w-[520px] text-base leading-[1.7] text-cream/90">{hero.intro}</p>
          <button
            type="button"
            onClick={() => setLang((i) => (i + 1) % LANGS.length)}
            aria-label="Say hello in another language"
            className="flex min-h-[60px] items-center gap-4 self-start rounded-[14px] border-[1.5px] border-dashed border-cream/45 bg-cream/[.06] px-5 py-3.5 text-cream transition-transform hover:scale-[1.03] hover:-rotate-[1.5deg] hover:bg-cream/10"
          >
            <span key={lang} className="fade-up flex items-baseline gap-3.5">
              <span lang={["en", "es", "it"][lang]} className="seasons text-[34px] font-bold italic">
                {l.hi}
              </span>
              <span className="flex flex-col gap-0.5 text-left">
                <span className="text-[11px] font-bold tracking-[.16em]">{l.name}</span>
                <span className="text-xs text-cream/75">{l.level}</span>
              </span>
            </span>
            <span className="text-[11px] tracking-[.14em] text-cream/60">TAP ↻</span>
          </button>
          <div className="flex flex-wrap gap-2.5">
            {hero.links.map((x) => (
              <a key={x.href} href={x.href} className="ghost-btn">
                {x.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="big-name" aria-hidden="true">
        {BIG_NAME}
      </div>
    </>
  );
}
