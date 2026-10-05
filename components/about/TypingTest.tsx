"use client";

import { useEffect, useRef, useState, type ChangeEvent, type ClipboardEvent, type DragEvent } from "react";
import { DEN_RECORD_WPM, DEN_WPM, TYPING_COPY, TYPING_LEVELS, TYPING_TOPICS } from "@/content/about";
import type { TypingLevelId, TypingTopicId } from "@/content/types";
import { accuracy, densTimeMs, fmtClock, makePhrase, wpm } from "@/lib/typing";

/** Current time in ms (kept outside the component; only called from event handlers and timers). */
const timestamp = () => Date.now();

const START_TOPIC: TypingTopicId = "coffee";
const START_LEVEL: TypingLevelId = "extra";
// Same phrase on the server and first client paint; a random one replaces it after load.
const FIRST_PHRASE =
  (TYPING_TOPICS.find((t) => t.id === START_TOPIC)?.phrases ?? []).slice(0, 5).join(". ") + ".";

/**
 * Typing test: pick a topic and level, get a random phrase, race the clock.
 * Timer starts on the first key. Pasting is blocked.
 */
export default function TypingTest() {
  const [topic, setTopic] = useState<TypingTopicId>(START_TOPIC);
  const [level, setLevel] = useState<TypingLevelId>(START_LEVEL);
  const [target, setTarget] = useState(FIRST_PHRASE);
  const [typed, setTyped] = useState("");
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [now, setNow] = useState(0);
  const [toast, setToast] = useState("");
  const tick = useRef<ReturnType<typeof setInterval>>(undefined);
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const stopTimer = () => {
    clearInterval(tick.current);
    tick.current = undefined;
  };

  const newRound = (t: TypingTopicId, l: TypingLevelId) => {
    stopTimer();
    setTopic(t);
    setLevel(l);
    setTarget(makePhrase(t, l));
    setTyped("");
    setStart(0);
    setEnd(0);
    setNow(0);
  };

  // Swap in a random phrase once we're in the browser.
  useEffect(() => {
    const id = requestAnimationFrame(() => setTarget(makePhrase(START_TOPIC, START_LEVEL)));
    return () => {
      cancelAnimationFrame(id);
      clearInterval(tick.current);
      clearTimeout(toastTimer.current);
    };
  }, []);

  const onType = (e: ChangeEvent<HTMLInputElement>) => {
    if (end) return;
    const v = e.target.value.slice(0, target.length);
    const t = timestamp();
    const st = start || (v.length ? t : 0);
    const done = v.length === target.length;
    if (st && !tick.current && !done) tick.current = setInterval(() => setNow(timestamp()), 100);
    if (!v.length || done) stopTimer();
    setTyped(v);
    setStart(v.length ? st : 0);
    setEnd(done ? t : 0);
    setNow(t);
  };

  const blockPaste = (e: ClipboardEvent | DragEvent) => {
    e.preventDefault();
    clearTimeout(toastTimer.current);
    setToast(TYPING_COPY.noPaste);
    toastTimer.current = setTimeout(() => setToast(""), 3000);
  };

  const retry = () => {
    stopTimer();
    setTyped("");
    setStart(0);
    setEnd(0);
    setNow(0);
  };

  const elapsed = start ? (end || now || start) - start : 0;
  const lv = TYPING_LEVELS.find((l) => l.id === level)!;
  const score = start && typed.length ? wpm(typed, target, elapsed) : 0;
  const v = TYPING_COPY.verdicts;
  const verdict = !end
    ? ""
    : score >= DEN_RECORD_WPM
      ? v.record
      : score >= DEN_WPM
        ? v.beatDen
        : score >= lv.goal
          ? `${v.cleared}${score} WPM`
          : `${v.close}${lv.goal}${v.again}`;

  return (
    <section
      id="type"
      className="flex w-full max-w-[1120px] scroll-mt-24 flex-col gap-[22px] px-4 pt-[110px]"
    >
      <div className="flex flex-col gap-2">
        <span className="kicker">{TYPING_COPY.kicker}</span>
        <h2 className="headline m-0">
          {TYPING_COPY.title}
          <em>{TYPING_COPY.em}</em>
        </h2>
        <p className="m-0 max-w-[640px] text-[15px] leading-relaxed text-cream/80">{TYPING_COPY.intro}</p>
      </div>

      <div className="mono flex flex-col gap-5 rounded-2xl border-t-[6px] border-cream bg-deep p-5 text-cream sm:p-7">
        <div className="flex flex-col gap-2.5">
          <span className="text-[11px] tracking-[.2em] text-cream/70">{TYPING_COPY.pickTopic}</span>
          <div role="group" aria-label="Topic" className="flex flex-wrap gap-2">
            {TYPING_TOPICS.map((t) => (
              <button
                key={t.id}
                type="button"
                className="wpm-chip"
                aria-pressed={topic === t.id}
                onClick={() => newRound(t.id, level)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <span className="text-[11px] tracking-[.2em] text-cream/70">{TYPING_COPY.pickLevel}</span>
          <div className="wpm-lvls" role="group" aria-label="Difficulty">
            {TYPING_LEVELS.map((l) => (
              <button
                key={l.id}
                type="button"
                className="wpm-lvl"
                aria-pressed={level === l.id}
                onClick={() => newRound(topic, l.id)}
              >
                <span className="font-sans text-[13px] font-extrabold tracking-[.08em]">{l.label}</span>
                <span className="text-[10.5px] tracking-[.1em] opacity-80">GOAL {l.goal} WPM</span>
                <span className="font-hand text-[17px] tracking-normal opacity-90">{l.note}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="wpm-stats" role="status" aria-live="off">
          <div className="wpm-stat">
            {TYPING_COPY.yourTime}
            <strong>{fmtClock(elapsed)}</strong>
          </div>
          <div className="wpm-stat">
            {TYPING_COPY.yourWpm}
            <strong>{score}</strong>
          </div>
          <div className="wpm-stat">
            {TYPING_COPY.accuracy}
            <strong>{accuracy(typed, target)}%</strong>
          </div>
          <div className="wpm-stat">
            {TYPING_COPY.densTime}
            <strong>{fmtClock(densTimeMs(target, DEN_WPM))}</strong>
          </div>
        </div>

        <div aria-hidden="true" className="min-h-[68px] text-lg leading-[1.7] tracking-[.02em] sm:text-xl">
          {target.split("").map((c, i) => {
            const t = typed[i];
            const cls =
              t === undefined ? "text-cream/35" : t === c ? "text-cream" : "rounded-[2px] bg-cream text-deep";
            return (
              <span key={i} className={`${cls}${i === typed.length ? " border-l-2 border-cream" : ""}`}>
                {c}
              </span>
            );
          })}
        </div>

        <label htmlFor="typer" className="text-xs tracking-[.14em] text-cream/70">
          {TYPING_COPY.typeHere}“{target}”
        </label>
        <input
          id="typer"
          type="text"
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          value={typed}
          onChange={onType}
          onPaste={blockPaste}
          onDrop={blockPaste}
          className="mono min-h-12 w-full min-w-0 rounded-lg border-[1.5px] border-dashed border-cream/50 bg-transparent p-3.5 text-base text-cream"
        />

        <div className="flex flex-wrap items-center gap-3">
          {verdict && (
            <span className="stamp-in inline-block border-[3px] border-cream px-3.5 py-2 font-bold tracking-[.12em]">
              {verdict}
            </span>
          )}
          <button
            type="button"
            onClick={() => newRound(topic, level)}
            className="min-h-11 rounded-full border-[1.5px] border-cream bg-cream px-[18px] text-xs font-bold tracking-[.1em] text-deep"
          >
            {TYPING_COPY.newPhrase}
          </button>
          <button
            type="button"
            onClick={retry}
            className="min-h-11 rounded-full border-[1.5px] border-cream/60 px-4 text-xs tracking-[.1em] text-cream"
          >
            {TYPING_COPY.retry}
          </button>
        </div>
      </div>

      {toast && (
        <div className="pointer-events-none fixed inset-x-0 bottom-7 z-[60] flex justify-center px-4">
          <div
            role="status"
            className="fade-up w-[380px] max-w-full rounded-lg border-l-4 border-cream bg-deep px-5 py-3.5 text-center text-[13px] text-cream shadow-[0_10px_30px_rgba(0,0,0,.4)]"
          >
            {toast}
          </div>
        </div>
      )}
    </section>
  );
}
