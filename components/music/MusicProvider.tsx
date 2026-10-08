"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { MUSIC } from "@/content/music";

export type MusicStatus = "off" | "playing" | "paused";

interface MusicContextValue {
  /** False until public/audio/music.mp3 exists (checked at build time). */
  available: boolean;
  status: MusicStatus;
  toggle: () => void;
  /** Pause if playing. Returns true if it was playing (so the caller can resume). */
  pause: () => boolean;
  resume: () => void;
}

const MusicContext = createContext<MusicContextValue | null>(null);

export function useMusic() {
  const ctx = useContext(MusicContext);
  if (!ctx) throw new Error("useMusic must be used inside <MusicProvider>");
  return ctx;
}

/**
 * Site-wide background music from a local MP3. Lives in the root layout so it
 * keeps playing across page changes. Nothing loads or plays until the visitor
 * presses play.
 */
export default function MusicProvider({ available, children }: { available: boolean; children: ReactNode }) {
  const [status, setStatus] = useState<MusicStatus>("off");
  const audio = useRef<HTMLAudioElement | null>(null);

  const toggle = useCallback(() => {
    if (!available) return;
    if (!audio.current) {
      const a = new Audio(MUSIC.url || `/audio/${MUSIC.file}`);
      a.loop = true;
      a.volume = MUSIC.volume;
      a.onplay = () => setStatus("playing");
      a.onpause = () => setStatus("paused");
      audio.current = a;
    }
    const a = audio.current;
    if (a.paused) {
      // Soft start: begin silent and ease up to the background level.
      a.volume = 0;
      a.play().catch(() => setStatus("paused"));
      const steps = 20;
      let i = 0;
      const id = window.setInterval(() => {
        i += 1;
        a.volume = Math.min(MUSIC.volume, (MUSIC.volume * i) / steps);
        if (i >= steps || a.paused) window.clearInterval(id);
      }, (MUSIC.fadeIn * 1000) / steps);
    } else a.pause();
  }, [available]);

  const pause = useCallback(() => {
    const a = audio.current;
    if (!a || a.paused) return false;
    a.pause();
    return true;
  }, []);

  const resume = useCallback(() => {
    audio.current?.play().catch(() => {});
  }, []);

  useEffect(() => () => audio.current?.pause(), []);

  return (
    <MusicContext.Provider value={{ available, status, toggle, pause, resume }}>
      {children}
    </MusicContext.Provider>
  );
}

export function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 5v14l11-7z" />
    </svg>
  );
}

/** Little animated bars shown while music plays. */
export function EqBars() {
  return (
    <span className="greet-eq" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}
