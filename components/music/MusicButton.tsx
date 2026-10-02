"use client";

import { MUSIC } from "@/content/music";
import { PauseIcon, PlayIcon, useMusic } from "./MusicProvider";

/** Play / pause the background music. Nothing plays until this is pressed. */
export default function MusicButton({ className = "" }: { className?: string }) {
  const { status, toggle, warm } = useMusic();
  const playing = status === "playing";
  const label = status === "loading" ? MUSIC.loading : playing ? MUSIC.pause : MUSIC.play;

  return (
    <button
      type="button"
      className={className}
      onClick={toggle}
      onPointerEnter={warm}
      onFocus={warm}
      aria-pressed={playing}
      aria-label={label}
    >
      {playing ? <PauseIcon /> : <PlayIcon />}
      <span className="hidden sm:inline">{label}</span>
      <span className="sm:hidden">MUSIC</span>
    </button>
  );
}
