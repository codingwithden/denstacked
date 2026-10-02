"use client";

import { MUSIC } from "@/content/music";
import { EqBars, PlayIcon, useMusic } from "./MusicProvider";

/** Intro button: "Play music" until pressed, then "Now playing". Pressing again pauses. */
export default function MusicButton({ className = "" }: { className?: string }) {
  const { available, status, toggle } = useMusic();
  if (!available) return null;
  const playing = status === "playing";

  return (
    <button
      type="button"
      className={className}
      onClick={toggle}
      aria-pressed={playing}
      aria-label={playing ? `${MUSIC.playing}. ${MUSIC.pause}` : MUSIC.resume}
    >
      {playing ? <EqBars /> : <PlayIcon />}
      <span className={playing ? "" : "hidden sm:inline"}>{playing ? MUSIC.playing : MUSIC.play}</span>
      {!playing && <span className="sm:hidden">MUSIC</span>}
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
