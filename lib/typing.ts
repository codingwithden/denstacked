// Typing test: phrase builder and scoring (ported from the About prototype).

import { TYPING_LEVELS, TYPING_TOPICS } from "@/content/about";
import type { TypingLevelId, TypingTopicId } from "@/content/types";

function shuffle<T>(a: T[]): T[] {
  const out = a.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

const cap = (x: string) => x.charAt(0).toUpperCase() + x.slice(1);

/**
 * Build a random phrase for a topic and level.
 * Easy: lowercase, no punctuation. Hard: sentences with capitals and periods.
 * Extra hard / Extreme: mixed punctuation plus "spice" phrases with numbers and symbols.
 */
export function makePhrase(topicId: TypingTopicId, levelId: TypingLevelId): string {
  const lv = TYPING_LEVELS.find((l) => l.id === levelId) ?? TYPING_LEVELS[0];
  let pool: string[] = [];
  let spice: string[] = [];
  for (const t of TYPING_TOPICS) {
    if (t.phrases && (topicId === "mix" || t.id === topicId)) {
      pool = pool.concat(t.phrases);
      spice = spice.concat(t.spice ?? []);
    }
  }

  const picks: string[] = [];
  const bag = shuffle(pool);
  let n = 0;
  while (n < lv.words && bag.length) {
    const ph = bag.shift()!;
    picks.push(ph);
    n += ph.split(" ").length;
  }
  if (lv.id === "easy") return picks.join(" ").toLowerCase();

  const ends = lv.id === "hard" ? ["."] : [".", ".", ",", "!"];
  const parts: { t: string; e: string; raw?: boolean }[] = picks.map((ph, i) => ({
    t: ph,
    e: i === picks.length - 1 ? "." : ends[Math.floor(Math.random() * ends.length)],
  }));
  for (const x of shuffle(spice).slice(0, lv.spice)) {
    const at = 1 + Math.floor(Math.random() * parts.length);
    if (parts[at - 1].e === ",") parts[at - 1].e = ".";
    parts.splice(at, 0, { t: x + (/[.!?);]$/.test(x) ? "" : "."), e: "", raw: true });
  }

  let txt = "";
  let capNext = true;
  parts.forEach((p, i) => {
    const w = p.raw ? p.t : capNext ? cap(p.t) : p.t;
    txt += (i ? " " : "") + w + p.e;
    capNext = p.raw ? true : p.e !== ",";
  });
  return txt;
}

/** Milliseconds → "m:ss.s". */
export function fmtClock(ms: number) {
  const t = Math.max(0, ms) / 1000;
  const m = Math.floor(t / 60);
  const sec = t - m * 60;
  return `${m}:${sec < 10 ? "0" : ""}${sec.toFixed(1)}`;
}

/** Characters typed correctly, position by position. */
export function correctChars(typed: string, target: string) {
  let ok = 0;
  for (let i = 0; i < typed.length; i++) if (typed[i] === target[i]) ok++;
  return ok;
}

/** Net WPM (correct characters / 5 per minute). */
export function wpm(typed: string, target: string, ms: number) {
  const min = ms / 60000;
  return min > 0.0005 ? Math.round(correctChars(typed, target) / 5 / min) : 0;
}

export function accuracy(typed: string, target: string) {
  return typed.length ? Math.round((correctChars(typed, target) / typed.length) * 100) : 100;
}

/** How long Den would take at her 108 WPM average. */
export function densTimeMs(target: string, denWpm: number) {
  return (target.length / 5 / denWpm) * 60000;
}
