"use client";

import { useState } from "react";
import { FREE_LIST, FREE_TOOLS, TOOL_CATEGORIES } from "@/content/resources";

type Category = (typeof TOOL_CATEGORIES)[number];

/** "Tools I actually used": category filter, tool cards and a heart to save favorites. */
export default function FreeToolList() {
  const [cat, setCat] = useState<Category>("ALL");
  const [saved, setSaved] = useState<string[]>([]);

  const tools = FREE_TOOLS.filter((t) => cat === "ALL" || t.cat === cat);
  const toggle = (name: string) =>
    setSaved((s) => (s.includes(name) ? s.filter((x) => x !== name) : [...s, name]));

  return (
    <section className="flex w-full max-w-[1120px] flex-col gap-[22px] px-4 pt-[110px]">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <span className="kicker opacity-80">02 · THE FREE LIST</span>
          <h2 className="headline m-0">
            Tools I <em>actually</em> used
          </h2>
        </div>
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-1.5">
          {TOOL_CATEGORIES.map((c) => {
            const on = c === cat;
            return (
              <button
                key={c}
                type="button"
                aria-pressed={on}
                onClick={() => setCat(c)}
                className={`min-h-11 rounded-full border px-3.5 text-xs font-bold tracking-[.1em] ${
                  on ? "border-cream bg-cream text-deep" : "border-cream/40 bg-transparent text-cream"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3.5">
        {tools.map((t) => {
          const on = saved.includes(t.name);
          return (
            <div
              key={t.name}
              className="lift fade-up flex flex-col gap-2.5 rounded-[18px] bg-deep p-[22px] text-cream outline-[1.5px] -outline-offset-[1.5px] outline-cream/20 outline-solid"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full border border-cream/40 px-[9px] py-[5px] text-[10px] font-bold tracking-[.16em]">
                  {t.cat}
                </span>
                <button
                  type="button"
                  onClick={() => toggle(t.name)}
                  aria-pressed={on}
                  aria-label={`Save ${t.name}`}
                  className={`flex min-h-11 min-w-11 items-center justify-center bg-transparent transition-transform ${
                    on ? "scale-120 text-cream" : "text-cream/35"
                  }`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />
                  </svg>
                </button>
              </div>
              <span className="vg text-[28px] leading-none">{t.name}</span>
              <span className="text-sm leading-normal opacity-85">{t.what}</span>
              <span className="text-[13px] leading-normal italic opacity-75">
                {FREE_LIST.usedPrefix}
                {t.how}
              </span>
              <a
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-xs font-bold tracking-[.1em] text-cream"
              >
                {FREE_LIST.visit}
              </a>
            </div>
          );
        })}
      </div>
      <span className="text-[13px] text-cream/75" aria-live="polite">
        {saved.length ? FREE_LIST.savedPrefix + saved.join(", ") : FREE_LIST.emptySaved}
      </span>
    </section>
  );
}
