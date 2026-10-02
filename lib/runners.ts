// Pace and split math for the Runner's Hub. Times are in minutes.

import type { RaceDistance } from "@/content/runners";

export const KM_PER_MILE = 1.609344;

/** Minutes → "h:mm:ss" or "m:ss" (same rounding as the prototype). */
export function fmt(minutes: number) {
  let h = Math.floor(minutes / 60);
  let mm = Math.floor(minutes % 60);
  let ss = Math.round((minutes - Math.floor(minutes)) * 60);
  if (ss === 60) {
    mm++;
    ss = 0;
  }
  if (mm === 60) {
    h++;
    mm = 0;
  }
  return (h ? `${h}:${mm < 10 ? "0" : ""}` : "") + mm + ":" + (ss < 10 ? "0" : "") + ss;
}

export function pacePerKm(goal: number, d: RaceDistance) {
  return goal / d.km;
}

export function pacePerMile(goal: number, d: RaceDistance) {
  return goal / (d.km / KM_PER_MILE);
}

export interface Split {
  mark: number;
  isFinish: boolean;
  /** Elapsed minutes at this mark. */
  elapsed: number;
  /** Minutes per km since the previous mark. */
  pace: number;
}

/**
 * Elapsed time at every 5K and at the finish.
 * Negative split: first half 2% slower than goal pace, second half fast enough
 * to still finish on the goal time.
 */
export function fiveKSplits(goal: number, d: RaceDistance, strategy: "even" | "neg"): Split[] {
  const marks: number[] = [];
  for (let k = 5; k < d.km; k += 5) marks.push(k);
  marks.push(d.km);

  const base = goal / d.km;
  const half = d.km / 2;
  const slow = base * 1.02;
  const fast = (goal - slow * half) / half;
  const at = (m: number) =>
    strategy === "even" ? base * m : m <= half ? slow * m : slow * half + fast * (m - half);

  return marks.map((m, i) => {
    const prev = i ? marks[i - 1] : 0;
    const elapsed = at(m);
    return { mark: m, isFinish: m === d.km, elapsed, pace: (elapsed - at(prev)) / (m - prev) };
  });
}
