// Race-day pacing math. Distances are in miles; paces in seconds per mile.

export const MI_PER_KM = 1 / 1.609344;
export const MARATHON_MI = 42.195 * MI_PER_KM; // 26.2188…

export type StrategyId = "zones" | "even" | "negative";
export type Unit = "mi" | "km";

interface Zone {
  from: number;
  to: number;
  /** Seconds per mile added to goal pace (negative = faster). */
  delta?: number;
  /** Multiplier on goal pace. */
  factor?: number;
}

function zonesFor(strategy: StrategyId, total: number): Zone[] {
  switch (strategy) {
    case "even":
      return [{ from: 0, to: total }];
    case "zones":
      // Start 5 s/mi easy for miles 1–4, lock in goal pace for 5–22, then give the
      // same 5 s/mi back over 23–26. The two cancel, so the finish time is the goal.
      return [
        { from: 0, to: 4, delta: 5 },
        { from: 4, to: 22 },
        { from: 22, to: 26, delta: -5 },
        { from: 26, to: total },
      ];
    case "negative":
      // First half 1% slower than goal pace, second half 1% faster.
      return [
        { from: 0, to: total / 2, factor: 1.01 },
        { from: total / 2, to: total, factor: 0.99 },
      ];
  }
}

export interface Split {
  n: number;
  /** Distance at the end of this split, in the chosen unit. */
  at: number;
  /** Length of this split in the chosen unit (the last one is partial). */
  len: number;
  seconds: number;
  /** Pace in seconds per chosen unit. */
  pace: number;
  elapsed: number;
  zone: "easy" | "goal" | "push";
}

export interface Plan {
  splits: Split[];
  goalPace: number;
  firstHalf: number;
  secondHalf: number;
}

export function buildPlan(goalSeconds: number, strategy: StrategyId, unit: Unit): Plan {
  const total = MARATHON_MI;
  const base = goalSeconds / total;
  const zones = zonesFor(strategy, total);
  const paceAt = (z: Zone) => (z.factor ? base * z.factor : base + (z.delta ?? 0));

  // Time to run from mile a to mile b.
  const timeBetween = (a: number, b: number) =>
    zones.reduce((sum, z) => {
      const lo = Math.max(a, z.from);
      const hi = Math.min(b, z.to);
      return hi > lo ? sum + (hi - lo) * paceAt(z) : sum;
    }, 0);

  const step = unit === "mi" ? 1 : MI_PER_KM;
  const perUnit = unit === "mi" ? 1 : 1 / MI_PER_KM;
  const splits: Split[] = [];
  let elapsed = 0;
  for (let n = 1, a = 0; a < total - 1e-9; n++, a += step) {
    const b = Math.min(total, a + step);
    const seconds = timeBetween(a, b);
    elapsed += seconds;
    const lenMi = b - a;
    const pace = seconds / lenMi / perUnit;
    const basePace = base / perUnit;
    const zone = pace > basePace + 0.5 ? "easy" : pace < basePace - 0.5 ? "push" : "goal";
    splits.push({ n, at: b * perUnit, len: lenMi * perUnit, seconds, pace, elapsed, zone });
  }

  return {
    splits,
    goalPace: base / perUnit,
    firstHalf: timeBetween(0, total / 2),
    secondHalf: timeBetween(total / 2, total),
  };
}

/** "4:35:00" or "4:35" (h:mm) → seconds. Returns null if it can't be read. */
export function parseTime(input: string): number | null {
  const parts = input
    .trim()
    .split(":")
    .map((p) => p.trim());
  if (parts.length < 2 || parts.length > 3 || parts.some((p) => !/^\d+$/.test(p))) return null;
  const [h, m, s = 0] = parts.map(Number);
  if (m >= 60 || s >= 60) return null;
  const total = h * 3600 + m * 60 + s;
  return total > 0 ? total : null;
}

export function formatClock(seconds: number, alwaysHours = false) {
  const t = Math.round(seconds);
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = t % 60;
  const mm = h || alwaysHours ? String(m).padStart(2, "0") : String(m);
  const ss = String(s).padStart(2, "0");
  return h || alwaysHours ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}
