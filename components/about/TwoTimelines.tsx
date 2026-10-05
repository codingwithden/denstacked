"use client";

import { useState } from "react";
import { TIMELINE, TIMELINE_COPY } from "@/content/about";
import type { TimelineItem } from "@/content/types";

type Filter = "both" | "career" | "personal";

function Card({ item, kind }: { item: TimelineItem; kind: "career" | "life" }) {
  return (
    <article className={`tl-card ${kind}`}>
      <span className="tl-mtag">{kind === "career" ? TIMELINE_COPY.careerTag : TIMELINE_COPY.lifeTag}</span>
      <span className="tl-when">{item.when}</span>
      <span className="tl-title">{item.title}</span>
      <span className="tl-org">{item.org}</span>
      <span className="tl-body">{item.body}</span>
      <span className="tl-tags">
        {item.tags.map((t) => (
          <span key={t} className="tl-tag">
            {t}
          </span>
        ))}
      </span>
    </article>
  );
}

/** "Two timelines, one Den": career left, personal right, on a shared year spine. */
export default function TwoTimelines() {
  const [filter, setFilter] = useState<Filter>("both");

  const rows = TIMELINE.filter(
    (r) => filter === "both" || (filter === "career" ? r.career.length : r.life.length),
  );

  return (
    <section
      id="timeline"
      className="flex w-full max-w-[1120px] scroll-mt-24 flex-col gap-[22px] px-4 pt-[110px]"
    >
      <div className="flex flex-col gap-2">
        <span className="kicker">{TIMELINE_COPY.kicker}</span>
        <h2 className="headline m-0">
          {TIMELINE_COPY.title}
          <em>{TIMELINE_COPY.em}</em>
          {TIMELINE_COPY.after}
        </h2>
        <p className="m-0 max-w-[640px] text-[15px] leading-relaxed text-cream/80">{TIMELINE_COPY.intro}</p>
      </div>

      <div role="group" aria-label="Filter timeline" className="flex flex-wrap gap-2.5">
        {TIMELINE_COPY.filters.map((f) => (
          <button
            key={f.id}
            type="button"
            className="tl-filter"
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id as Filter)}
          >
            {f.id === "career" && <span aria-hidden="true" className="tl-dot career" />}
            {f.id === "personal" && <span aria-hidden="true" className="tl-dot life" />}
            {f.label}
          </button>
        ))}
      </div>

      <div className="tl-head" aria-hidden="true">
        <span className="text-right">{TIMELINE_COPY.careerHead}</span>
        <span />
        <span>{TIMELINE_COPY.lifeHead}</span>
      </div>

      <ol className="m-0 list-none p-0">
        {rows.map((r) => {
          const career = filter === "personal" ? [] : r.career;
          const life = filter === "career" ? [] : r.life;
          return (
            <li key={r.year} className="tl-row">
              <div className="tl-y">
                <span className="tl-yr">{r.year}</span>
              </div>
              <div className="tl-c" style={filter === "personal" ? { visibility: "hidden" } : undefined}>
                {career.map((it) => (
                  <Card key={it.title} item={it} kind="career" />
                ))}
              </div>
              <div className="tl-p" style={filter === "career" ? { visibility: "hidden" } : undefined}>
                {life.map((it) => (
                  <Card key={it.title} item={it} kind="life" />
                ))}
              </div>
            </li>
          );
        })}
      </ol>
      <p className="m-0 text-center font-hand text-2xl">{TIMELINE_COPY.outro}</p>
    </section>
  );
}
