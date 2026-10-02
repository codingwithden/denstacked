"use client";

import { useEffect, useRef, useState } from "react";
import { useMusic } from "@/components/music/MusicProvider";
import { GREETING, GREETINGS, type GreetingLang } from "@/content/greeting";

/**
 * "Hear my hello" in English, Spanish or Italian. `available` lists the languages
 * whose recording exists in public/audio (checked at build time); the others say
 * "coming soon". Background music pauses while the greeting plays.
 */
export default function GreetingPill({ available }: { available: GreetingLang[] }) {
  const [playing, setPlaying] = useState<GreetingLang | null>(null);
  const [note, setNote] = useState("");
  const audio = useRef<HTMLAudioElement | null>(null);
  const resumeMusic = useRef(false);
  const noteTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const { pause, resume } = useMusic();

  const finish = () => {
    setPlaying(null);
    if (resumeMusic.current) resume();
    resumeMusic.current = false;
  };

  const stopCurrent = () => {
    if (!audio.current) return;
    audio.current.onended = null;
    audio.current.pause();
    audio.current = null;
  };

  const play = (lang: GreetingLang) => {
    const g = GREETINGS.find((x) => x.lang === lang)!;
    if (!available.includes(lang)) {
      clearTimeout(noteTimer.current);
      setNote(g.soon);
      noteTimer.current = setTimeout(() => setNote(""), 3000);
      return;
    }
    // Tapping the one that's playing stops it.
    if (playing === lang) {
      stopCurrent();
      finish();
      return;
    }
    stopCurrent();
    if (!playing) resumeMusic.current = pause();
    const a = new Audio(`/audio/${g.file}`);
    a.onended = finish;
    a.onerror = finish;
    audio.current = a;
    setPlaying(lang);
    a.play().catch(finish);
  };

  useEffect(
    () => () => {
      audio.current?.pause();
      clearTimeout(noteTimer.current);
    },
    [],
  );

  return (
    <div className="relative flex flex-col items-center">
      <div
        role="group"
        aria-label="Audio greeting"
        className="flex items-center gap-1 rounded-full border border-cream/35 bg-deep/40 p-1 pl-3 backdrop-blur-sm"
      >
        <span className="mr-1 flex items-center gap-1.5 text-[10px] font-bold tracking-[.18em]">
          {playing ? (
            <span className="greet-eq" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </span>
          ) : (
            <MicIcon />
          )}
          {playing ? GREETING.playing : GREETING.kicker}
        </span>
        {GREETINGS.map((g) => {
          const on = playing === g.lang;
          return (
            <button
              key={g.lang}
              type="button"
              lang={g.lang}
              onClick={() => play(g.lang)}
              aria-pressed={on}
              aria-label={`${g.name} greeting: ${g.label}${available.includes(g.lang) ? "" : " (coming soon)"}`}
              className={`min-h-11 rounded-full px-3.5 text-[13px] font-semibold transition-colors ${
                on ? "bg-cream text-deep" : "text-cream hover:bg-cream/15"
              }`}
            >
              {g.label}
            </button>
          );
        })}
      </div>
      <span
        aria-live="polite"
        className={`absolute top-full z-10 mt-1.5 rounded-full bg-deep/85 px-3 py-1 text-xs whitespace-nowrap transition-opacity ${note ? "" : "opacity-0"}`}
      >
        {note}
      </span>
    </div>
  );
}

function MicIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
    </svg>
  );
}
