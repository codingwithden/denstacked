import {
  Abril_Fatface,
  Bagel_Fat_One,
  Bodoni_Moda,
  Caveat,
  Gloock,
  IBM_Plex_Mono,
  Montserrat,
  Pinyon_Script,
  Playfair_Display,
} from "next/font/google";

// Free stand-ins for the intended paid fonts (see CLAUDE.md §4).
// To swap in a licensed font later, replace one of these with next/font/local
// and keep the same `variable` name.

// Big playful display: "Order up.", "Off the clock.", sticker fronts. (Stay Retro)
export const bagel = Bagel_Fat_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bagel",
  display: "swap",
});

// Section titles, every h2.headline. (Modern Aesthetic)
export const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gloock",
  display: "swap",
});

// Accent word inside titles. (Old Money-style script)
export const pinyon = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pinyon",
  display: "swap",
});

// Didone caps: ticket name, TOTAL, ticker, counters, nav monogram. (The Choed)
export const abril = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-abril",
  display: "swap",
});

// Vogue editorial: quote lines, stats. (Vogue / Bodoni FLF)
export const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
  display: "swap",
});

// Serif body accents: card titles, numbers. (The Seasons)
export const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

// Body / UI.
export const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});

// Receipt / code.
export const plexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});

// Handwriting: notes, diary, doodles.
export const caveat = Caveat({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const fontVariables = [bagel, gloock, pinyon, abril, bodoni, playfair, montserrat, plexMono, caveat]
  .map((f) => f.variable)
  .join(" ");
