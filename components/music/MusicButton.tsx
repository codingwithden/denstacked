"use client";

import { MUSIC } from "@/content/music";
import { EqBars, PlayIcon, useMusic } from "./MusicProvider";

/**
 * Intro button: "Play music" until pressed. While playing it reads "Now playing ↗"
 * and links to the original video on YouTube; the site music pauses as it opens.
 */
export default function MusicButton({ className = "" }: { className?: string }) {
  const { available, status, toggle, pause } = useMusic();
  if (!available) return null;

  if (status === "playing") {
    return (
      <a
        className={className}
        href={MUSIC.youtube}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => pause()}
        aria-label={MUSIC.openVideo}
      >
        <EqBars />
        <span>{MUSIC.playing}</span>
        <span aria-hidden="true">↗</span>
      </a>
    );
  }

  return (
    <button type="button" className={className} onClick={toggle} aria-label={MUSIC.resume}>
      <PlayIcon />
      <span className="hidden sm:inline">{MUSIC.play}</span>
      <span className="sm:hidden">MUSIC</span>
    </button>
  );
}

/** Small round toggle for the site nav; only shows once music has been started. */
export function NavMusicToggle() {
  const { available, status, toggle } = useMusic();
  if (!available || status === "off") return null;
  const playing = status === "playing";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={playing}
      aria-label={playing ? MUSIC.pause : MUSIC.resume}
      title={playing ? MUSIC.pause : MUSIC.resume}
      className="ml-0.5 flex h-11 w-11 flex-none items-center justify-center rounded-full text-cream transition-colors hover:bg-cream/15"
    >
      {playing ? <EqBars /> : <PlayIcon />}
    </button>
  );
}
