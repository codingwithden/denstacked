"use client";

import { useState } from "react";
import { DISTANCES, GOAL_NOTE, PACE, SPLITS, type DistanceId } from "@/content/runners";
import { fiveKSplits, fmt, pacePerKm, pacePerMile } from "@/lib/runners";

type Strategy = "even" | "neg";

/** 01 Pace calculator + 02 Race-day splits. Both read the same distance and goal time. */
export default function RaceTools() {
  const [distId, setDistId] = useState<DistanceId>("full");
  const [goal, setGoal] = useState(275);
  const [strategy, setStrategy] = useState<Strategy>("even");

  const d = DISTANCES.find((x) => x.id === distId)!;
  const splits = fiveKSplits(goal, d, strategy);
  const note = distId === GOAL_NOTE.dist && goal === GOAL_NOTE.minutes ? GOAL_NOTE.text : PACE.hint;

  return (
    <>
      <section
        id="pace"
        className="flex w-full max-w-[1120px] scroll-mt-24 flex-col gap-[22px] px-4 pt-[120px]"
      >
        <div className="flex flex-col gap-2">
          <span className="kicker opacity-80">{PACE.kicker}</span>
          <h2 className="headline m-0">
            {PACE.title}
            <em>{PACE.em}</em>
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-7 rounded-[22px] bg-cream p-6 text-deep sm:p-8">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold tracking-[.16em]">{PACE.distance}</span>
            <div role="group" aria-label="Distance" className="flex flex-wrap gap-2">
              {DISTANCES.map((x) => {
                const on = x.id === distId;
                return (
                  <button
                    key={x.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => {
                      setDistId(x.id);
                      setGoal(x.def);
                    }}
                    className={`min-h-11 rounded-full border-[1.5px] px-[13px] text-xs font-semibold tracking-[.04em] transition-transform hover:-translate-y-px ${
                      on ? "border-wine bg-wine text-cream" : "border-deep bg-transparent text-deep"
                    }`}
                  >
                    {x.label}
                  </button>
                );
              })}
            </div>
            <label htmlFor="goal" className="text-sm">
              {PACE.goal}
              <strong className="vg text-[40px]">{fmt(goal)}</strong>
            </label>
            <input
              id="goal"
              type="range"
              min={d.min}
              max={d.max}
              step={1}
              value={goal}
              onChange={(e) => setGoal(parseInt(e.target.value, 10))}
              aria-valuetext={fmt(goal)}
              className="h-7 w-full accent-wine"
            />
            <div className="flex justify-between text-[11px] opacity-70">
              <span>{fmt(d.min)}</span>
              <span>{fmt(d.max)}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 content-center gap-3" aria-live="polite">
            {[
              [PACE.perMile, fmt(pacePerMile(goal, d))],
              [PACE.perKm, fmt(pacePerKm(goal, d))],
            ].map(([k, v]) => (
              <div key={k} className="rounded-[14px] bg-wine/10 p-[18px]">
                <div className="text-[11px] font-bold tracking-[.14em]">{k}</div>
                <div className="retro-ink text-[clamp(30px,4vw,40px)]">{v}</div>
              </div>
            ))}
            <div className="col-span-full text-sm leading-relaxed">{note}</div>
          </div>
        </div>
      </section>

      <section
        id="splits"
        className="flex w-full max-w-[1120px] scroll-mt-24 flex-col gap-[22px] px-4 pt-[120px]"
      >
        <div className="flex flex-col gap-2">
          <span className="kicker opacity-80">{SPLITS.kicker}</span>
          <h2 className="headline m-0">
            {SPLITS.title}
            <em>{SPLITS.em}</em>
          </h2>
        </div>
        <div className="flex flex-col gap-5 rounded-[22px] bg-deep p-6 text-cream outline-[1.5px] -outline-offset-[1.5px] outline-cream/25 outline-solid sm:p-[30px]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-sm">
              {d.label} in {fmt(goal)}
              {SPLITS.every}
            </span>
            <div role="group" aria-label="Split strategy" className="flex gap-1.5">
              {SPLITS.strategies.map((s) => {
                const on = s.id === strategy;
                return (
                  <button
                    key={s.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setStrategy(s.id as Strategy)}
                    className={`min-h-11 rounded-full px-3.5 text-xs font-bold tracking-[.1em] transition-transform hover:-translate-y-0.5 ${
                      on ? "bg-cream text-deep" : "border border-cream/40 bg-transparent text-cream"
                    }`}
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>
          </div>
          <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(110px,1fr))] gap-2.5 p-0">
            {splits.map((s, i) => (
              <li
                key={`${distId}-${strategy}-${s.mark}`}
                className={`fade-up rounded-[14px] p-3.5 ${s.isFinish ? "bg-cream text-deep" : "bg-cream/[.06]"}`}
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                <div className="text-[11px] font-bold tracking-[.14em] opacity-75">
                  {s.isFinish ? SPLITS.finish : `${s.mark}K`}
                </div>
                <div className={`${s.isFinish ? "retro-ink" : "retro"} text-2xl`}>{fmt(s.elapsed)}</div>
                <div className="text-[11px] opacity-70">{fmt(s.pace)} /km</div>
              </li>
            ))}
          </ol>
          <span className="text-xs opacity-70">{SPLITS.strategies.find((s) => s.id === strategy)?.note}</span>
        </div>
      </section>
    </>
  );
}
