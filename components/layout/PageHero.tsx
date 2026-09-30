import type { ReactNode } from "react";
import type { Hero } from "@/content/pages";

/** Page intro: kicker, big retro title with a script line, intro copy and jump links. */
export default function PageHero({ hero, art }: { hero: Hero; art?: ReactNode }) {
  return (
    <section className="flex w-full max-w-[1120px] flex-wrap items-center gap-8 px-4 pt-14">
      <div className="fade-up flex flex-[1_1_460px] flex-col gap-5">
        <span className="kicker">{hero.kicker}</span>
        <h1 className="retro m-0 text-[clamp(56px,7.5vw,100px)] leading-[.92]">
          {hero.title}
          <br />
          <span className="script">{hero.script}</span>
        </h1>
        <p className="m-0 max-w-[520px] text-base leading-[1.7] text-cream/90">{hero.intro}</p>
        <div className="flex flex-wrap gap-2.5">
          {hero.links.map((l) =>
            l.primary ? (
              <a
                key={l.href}
                href={l.href}
                className="brew inline-flex min-h-12 items-center rounded-full bg-cream px-6 py-3.5 text-[13px] font-bold tracking-[.08em] text-deep no-underline"
              >
                {l.label}
              </a>
            ) : (
              <a key={l.href} href={l.href} className="ghost-btn">
                {l.label}
              </a>
            ),
          )}
        </div>
      </div>
      {art && (
        <div className="relative flex h-[360px] min-w-0 flex-[1_1_380px] items-center justify-center sm:h-[440px]">
          {art}
        </div>
      )}
    </section>
  );
}
