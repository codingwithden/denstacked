"use client";

import { MUSIC } from "@/content/music";
import { EqBars, PlayIcon, useMusic } from "./MusicProvider";

/** Play / pause pill that sits under the lanyard badge on the "launching soon" cover. */
export default function CoverMusicButton() {
  const { available, status, toggle } = useMusic();
  if (!available) return null;
  const playing = status === "playing";

  return (
    <button
      type="button"
      className="cover-music"
      onClick={toggle}
      aria-pressed={playing}
      aria-label={playing ? MUSIC.pause : MUSIC.resume}
    >
      {playing ? <EqBars /> : <PlayIcon />}
      <span>{playing ? MUSIC.pauseLabel : MUSIC.play}</span>
    </button>
  );
}
