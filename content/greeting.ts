// Audio greeting recorded by Den. To add a recording, drop the file into
// public/audio/ with the name below and redeploy; that language turns on by itself.

export type GreetingLang = "en" | "es" | "it";

export interface Greeting {
  lang: GreetingLang;
  label: string;
  file: string;
  /** Read out by screen readers. */
  name: string;
  /** Shown until the recording exists. */
  soon: string;
}

export const GREETING = {
  kicker: "HEAR MY HELLO",
  playing: "PLAYING",
};

export const GREETINGS: Greeting[] = [
  {
    lang: "en",
    label: "Hello!",
    file: "greeting-en.mp3",
    name: "English",
    soon: "English greeting · audio coming soon",
  },
  {
    lang: "es",
    label: "¡Hola!",
    file: "greeting-es.mp3",
    name: "Spanish",
    soon: "Saludo en español · audio coming soon",
  },
  {
    lang: "it",
    label: "Ciao!",
    file: "greeting-it.mp3",
    name: "Italian",
    soon: "Saluto in italiano · audio coming soon",
  },
];
