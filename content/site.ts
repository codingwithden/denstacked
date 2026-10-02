import type { Link, NavItem, PageId, UpNextCopy } from "./types";

export const EMAIL = "denissemedinaflores@gmail.com";
export const COFFEE_CHAT_HREF = `mailto:${EMAIL}?subject=Coffee%20chat`;

// [LINK] placeholders: swap "#" for real URLs once Den confirms them.
export const SOCIAL: Link[] = [
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/denisse-medina-flores" },
  { label: "GITHUB", href: "#" },
];

export const NAV: NavItem[] = [
  { id: "work", idx: "01", label: "Work", href: "/work" },
  { id: "about", idx: "02", label: "About", href: "/about" },
  { id: "kitchen", idx: "03", label: "Kitchen", href: "/kitchen" },
  { id: "content", idx: "04", label: "Content", href: "/content" },
  { id: "running", idx: "05", label: "Runners", href: "/running" },
  { id: "resources", idx: "06", label: "Resources", href: "/resources" },
];

// Work → About → Kitchen → Content → Runners → Resources → Work
export const UP_NEXT: Record<PageId, UpNextCopy> = {
  work: {
    href: "/about",
    title: "About me",
    blurb: "Marathon miles, volunteering and daily rituals.",
  },
  about: {
    href: "/kitchen",
    title: "The kitchen",
    blurb: "Culinary school, catering and camp kitchens.",
  },
  kitchen: {
    href: "/content",
    title: "Content creator",
    blurb: "Lemon8, UGC for startups and the DensDigitalDiary menu.",
  },
  content: {
    href: "/running",
    title: "Runner's Hub",
    blurb: "The tools I am building for runners.",
  },
  running: {
    href: "/resources",
    title: "Free resources",
    blurb: "The free kit I used to build everything. Yours for an email.",
  },
  resources: {
    href: "/work",
    title: "The work",
    blurb: "Back to the ticket: product, code and case studies.",
  },
};

export const FOOTER = {
  credit: "MADE IN THE BRONX · © 2026 DENISSE MEDINA FLORES",
  workCredit: "MADE IN THE BRONX · FUELED BY CAFÉ CON LECHE · © 2026 DENISSE MEDINA FLORES",
  work: {
    note: "Next stop: your team.",
    title: "Let's grab a coffee.",
    script: "O un matcha. Tú eliges.",
    tipLabel: "COMPLIMENTS TO THE CHEF",
    tipMessages: ["MERCI!", "¡GRACIAS!", "GRAZIE!", "YES, CHEF!", "THANK YOU!"],
  },
  about: {
    note: "Break's over.",
    title: "Back to the",
    em: "ticket?",
  },
  kitchen: { script: "yes, chef." },
  content: { script: "see you on the feed." },
  running: { script: "see you at the start line." },
  resources: { script: "build something good." },
};

// Subway cars on the Work footer's elevated track.
export const TRAIN_CARS = ["D", "M", "F", "BX"];

export const TICKER = [
  "NOW BREWING: WORK & BREW",
  "500+ NYC CAFÉS CURATED",
  "MULTI-BRAND SOCIAL HUB IN BUILD",
  "SKEDULO OS: AUTOMATED",
  "BILINGUAL · EN / ES",
  "STO IMPARANDO L'ITALIANO",
  "TRAINING FOR THE 2027 TCS NYC MARATHON",
  "OPEN TO APM / PM & MARKETING ROLES · 2027",
  "108 WPM · RECORD 158",
  "HECHO EN EL BRONX",
];
