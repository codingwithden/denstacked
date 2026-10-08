// Background music for the site, used with the owner's permission.
// Plays only after the visitor presses play. Either drop the track at
// public/audio/music.mp3, or (for big files) host it elsewhere and paste its
// direct link into `url`. The music button appears once either is set.

export const MUSIC = {
  file: "music.mp3",
  /** Direct link to a hosted MP3 (e.g. Vercel Blob). Leave empty to use the local file. */
  url: "",
  /** Where "Now playing" sends people: the original video. */
  youtube: "https://www.youtube.com/watch?v=Yu7zZvH60ag",
  /** 0–1, so it sits under the page instead of over it. */
  volume: 0.5,
  play: "PLAY MUSIC",
  playing: "NOW PLAYING",
  openVideo: "Now playing. Open the song on YouTube (new tab)",
  pause: "Pause music",
  pauseLabel: "PAUSE MUSIC",
  resume: "Play music",
};
