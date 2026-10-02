// Background music for the site. Plays only after the visitor presses play.
// Drop a track you have the rights to at public/audio/music.mp3 and redeploy;
// the music button appears by itself once the file exists.

export const MUSIC = {
  file: "music.mp3",
  /** 0–1, so it sits under the page instead of over it. */
  volume: 0.5,
  play: "PLAY MUSIC",
  playing: "NOW PLAYING",
  pause: "Pause music",
  resume: "Play music",
};
