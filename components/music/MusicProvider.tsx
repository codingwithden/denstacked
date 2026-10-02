"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { MUSIC } from "@/content/music";

// Minimal slice of the YouTube IFrame Player API that we use.
interface YTPlayer {
  playVideo(): void;
  pauseVideo(): void;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  destroy(): void;
}
interface YTNamespace {
  Player: new (
    el: HTMLElement,
    opts: {
      host?: string;
      videoId: string;
      width: number;
      height: number;
      playerVars: Record<string, string | number>;
      events: {
        onReady?: (e: { target: YTPlayer }) => void;
        onStateChange?: (e: { data: number; target: YTPlayer }) => void;
      };
    },
  ) => YTPlayer;
}
declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

const YT_PLAYING = 1;
const YT_PAUSED = 2;
const YT_ENDED = 0;

let apiPromise: Promise<YTNamespace> | null = null;
/** Load the YouTube IFrame API once. */
function loadYouTubeApi(): Promise<YTNamespace> {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (!apiPromise) {
    apiPromise = new Promise((resolve) => {
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prev?.();
        resolve(window.YT!);
      };
      const s = document.createElement("script");
      s.src = "https://www.youtube.com/iframe_api";
      s.async = true;
      document.head.appendChild(s);
    });
  }
  return apiPromise;
}

export type MusicStatus = "off" | "loading" | "playing" | "paused";

interface MusicContextValue {
  status: MusicStatus;
  toggle: () => void;
  stop: () => void;
  /** Start fetching the YouTube API early (on hover/focus of a play button). */
  warm: () => void;
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
 * Site-wide background music. Lives in the root layout so it keeps playing across
 * page changes. Nothing loads or plays until the visitor presses play.
 * YouTube's terms require the player to stay visible (at least 200×200),
 * so a small "now playing" card shows while music is on.
 */
export default function MusicProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<MusicStatus>("off");
  const player = useRef<YTPlayer | null>(null);
  const mount = useRef<HTMLDivElement>(null);

  const warm = useCallback(() => {
    void loadYouTubeApi();
  }, []);

  const stop = useCallback(() => {
    player.current?.destroy();
    player.current = null;
    setStatus("off");
  }, []);

  const statusRef = useRef<MusicStatus>("off");
  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  const pause = useCallback(() => {
    if (statusRef.current !== "playing" || !player.current) return false;
    player.current.pauseVideo();
    return true;
  }, []);

  const resume = useCallback(() => {
    player.current?.playVideo();
  }, []);

  const toggle = useCallback(() => {
    if (status === "off") setStatus("loading");
    else if (status === "playing") player.current?.pauseVideo();
    else player.current?.playVideo();
  }, [status]);

  // Create the player once the card (and its mount point) is on screen.
  useEffect(() => {
    if (status !== "loading" || player.current) return;
    let cancelled = false;
    loadYouTubeApi().then((YT) => {
      if (cancelled || !mount.current) return;
      const el = document.createElement("div");
      mount.current.replaceChildren(el);
      player.current = new YT.Player(el, {
        host: "https://www.youtube-nocookie.com",
        videoId: MUSIC.videoId,
        width: 240,
        height: 200,
        playerVars: { start: MUSIC.start, autoplay: 1, playsinline: 1, rel: 0 },
        events: {
          onReady: (e) => e.target.playVideo(),
          onStateChange: (e) => {
            if (e.data === YT_PLAYING) setStatus("playing");
            else if (e.data === YT_PAUSED) setStatus("paused");
            else if (e.data === YT_ENDED) {
              e.target.seekTo(MUSIC.start, true);
              e.target.playVideo();
            }
          },
        },
      });
    });
    return () => {
      cancelled = true;
    };
  }, [status]);

  useEffect(() => () => player.current?.destroy(), []);

  return (
    <MusicContext.Provider value={{ status, toggle, stop, warm, pause, resume }}>
      {children}
      {status !== "off" && (
        <div
          role="region"
          aria-label="Music player"
          className="fade-up fixed bottom-4 left-4 z-[70] flex flex-col gap-2 rounded-2xl border border-cream/25 bg-deep/90 p-2.5 text-cream shadow-[0_18px_40px_rgba(0,0,0,.45)] backdrop-blur-md"
        >
          <div className="flex items-center justify-between gap-2 pl-1">
            <span className="flex items-center gap-2 text-[10px] font-bold tracking-[.18em]">
              <span
                className={`live-dot inline-block h-2 w-2 rounded-full bg-cream ${status === "playing" ? "" : "opacity-40 [animation:none]"}`}
              />
              {status === "loading" ? MUSIC.loading : MUSIC.nowPlaying}
            </span>
            <span className="flex gap-1">
              <button
                type="button"
                onClick={toggle}
                aria-label={status === "playing" ? MUSIC.pause : MUSIC.play}
                className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-cream/15"
              >
                {status === "playing" ? <PauseIcon /> : <PlayIcon />}
              </button>
              <button
                type="button"
                onClick={stop}
                aria-label={MUSIC.close}
                className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-cream/15"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </span>
          </div>
          <div ref={mount} className="h-[200px] w-[240px] overflow-hidden rounded-lg bg-black/40" />
        </div>
      )}
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

export function PauseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="6" y="5" width="4" height="14" />
      <rect x="14" y="5" width="4" height="14" />
    </svg>
  );
}
