"use client";

import { useMemo, useState } from "react";
import { PACING } from "@/content/running";
import { buildPlan, formatClock, parseTime, type StrategyId, type Unit } from "@/lib/pacing";

const ZONE_LABEL = { easy: "EASY", goal: "GOAL", push: "PUSH" } as const;

function Toggle<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { id: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((o) => {
        const on = o.id === value;
        return (
          <button
            key={o.id}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(o.id)}
            className={`min-h-11 rounded-full border-[1.5px] px-4 text-xs font-bold tracking-[.08em] transition-colors ${
              on ? "border-wine bg-wine text-cream" : "border-deep text-deep hover:bg-wine/10"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

export default function PaceCalculator() {
  const [goalText, setGoalText] = useState(PACING.defaultGoal);
  const [strategy, setStrategy] = useState<StrategyId>("zones");
  const [unit, setUnit] = useState<Unit>("mi");

  const goal = parseTime(goalText);
  const plan = useMemo(() => (goal ? buildPlan(goal, strategy, unit) : null), [goal, strategy, unit]);
  const note = PACING.strategies.find((s) => s.id === strategy)?.note;

  return (
    <div className="grid gap-6 rounded-[18px] bg-cream p-6 text-deep shadow-[0_18px_40px_rgba(0,0,0,.3)] sm:p-8 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
      <div className="flex flex-col gap-5">
        <label className="flex flex-col gap-2">
          <span className="text-[11px] font-bold tracking-[.2em]">GOAL FINISH TIME (H:MM:SS)</span>
          <input
            className="mono min-h-12 w-full min-w-0 rounded border-[1.5px] border-dashed border-deep/50 bg-transparent px-3 text-2xl text-deep"
            inputMode="numeric"
            value={goalText}
            onChange={(e) => setGoalText(e.target.value)}
            aria-invalid={!goal}
            aria-describedby="goal-help"
          />
          <span id="goal-help" className="text-xs text-wine">
            {goal ? "Marathon, 26.2 mi / 42.195 km." : "Use h:mm:ss, like 4:35:00."}
          </span>
        </label>

        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-bold tracking-[.2em]">STRATEGY</span>
          <Toggle label="Strategy" options={PACING.strategies} value={strategy} onChange={setStrategy} />
          <p className="m-0 text-sm leading-relaxed">{note}</p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-bold tracking-[.2em]">SPLITS</span>
          <Toggle
            label="Units"
            options={[
              { id: "mi" as Unit, label: "MILES" },
              { id: "km" as Unit, label: "KILOMETERS" },
            ]}
            value={unit}
            onChange={setUnit}
          />
        </div>

        {plan && (
          <dl className="m-0 grid grid-cols-2 gap-3 border-t-[1.5px] border-dashed border-deep/40 pt-4">
            {[
              ["GOAL PACE", `${formatClock(plan.goalPace)} /${unit}`],
              ["FINISH", formatClock(plan.splits.at(-1)!.elapsed, true)],
              ["FIRST HALF", formatClock(plan.firstHalf, true)],
              ["SECOND HALF", formatClock(plan.secondHalf, true)],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1">
                <dt className="text-[11px] font-bold tracking-[.14em] text-wine">{k}</dt>
                <dd className="choed m-0 text-2xl normal-case">{v}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      <div className="min-w-0">
        {plan ? (
          <div className="max-h-[520px] overflow-y-auto rounded border-[1.5px] border-deep/20">
            <table className="mono w-full border-collapse text-sm">
              <caption className="sr-only">
                Split-by-split race plan in {unit === "mi" ? "miles" : "kilometers"}
              </caption>
              <thead className="sticky top-0 bg-cream">
                <tr className="text-left text-[11px] tracking-[.14em] text-wine">
                  <th className="px-3 py-2 font-bold">{unit.toUpperCase()}</th>
                  <th className="px-3 py-2 font-bold">SPLIT</th>
                  <th className="px-3 py-2 font-bold">PACE</th>
                  <th className="px-3 py-2 font-bold">ELAPSED</th>
                  <th className="px-3 py-2 font-bold">
                    <span className="sr-only">Zone</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {plan.splits.map((s) => (
                  <tr key={s.n} className="border-t border-deep/10">
                    <td className="px-3 py-2">{s.len < 0.999 ? s.at.toFixed(1) : s.n}</td>
                    <td className="px-3 py-2">{formatClock(s.seconds)}</td>
                    <td className="px-3 py-2">{formatClock(s.pace)}</td>
                    <td className="px-3 py-2 font-semibold">{formatClock(s.elapsed, true)}</td>
                    <td className="px-3 py-2 text-right">
                      <span
                        className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold tracking-[.1em] ${
                          s.zone === "push"
                            ? "bg-wine text-cream"
                            : s.zone === "easy"
                              ? "border border-wine text-wine"
                              : "text-deep/50"
                        }`}
                      >
                        {ZONE_LABEL[s.zone]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="m-0 text-sm">Enter a goal time to see your splits.</p>
        )}
      </div>
    </div>
  );
}
