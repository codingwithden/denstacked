// Background music for the site, used with the owner's permission.
// Plays only after the visitor presses play. Drop the track at public/audio/music.mp3
// and redeploy; the music button appears by itself once the file exists.

export const MUSIC = {
  file: "music.mp3",
  /** Where "Now playing" sends people: the original video. */
  youtube: "https://www.youtube.com/watch?v=Yu7zZvH60ag",
  /** 0–1, so it sits under the page instead of over it. */
  volume: 0.5,
  play: "PLAY MUSIC",
  playing: "NOW PLAYING",
  openVideo: "Now playing. Open the song on YouTube (new tab)",
  pause: "Pause music",
  resume: "Play music",
};
