// Ported verbatim from reference/prototype. Keep [BRACKET] placeholders until Den fills them.
import type { Book, Cause, Language, Leg, Shift } from "./types";

// Hero greeting cycler.
export const LANGS: Language[] = [
  {
    hi: "Hello!",
    name: "ENGLISH",
    level: "Native / bilingual · born and raised in NYC",
  },
  {
    hi: "¡Hola!",
    name: "ESPAÑOL",
    level: "Native / bilingual · 5 years of bilingual facilitation",
  },
  {
    hi: "Ciao!",
    name: "ITALIANO",
    level: "Elementary · currently learning",
  },
];

// 01 The Long Run: TCS NYC Marathon, Nov 7, 2027. Goal time 4:35 (275 min).
export const MARATHON_DATE_UTC = Date.UTC(2027, 10, 7, 12, 0, 0);
export const GOAL_MINUTES = 275;

export const LEGS: Leg[] = [
  {
    name: "Staten Island",
    abbr: "SI",
    miles: "MILES 0–2",
    len: 2,
    note: "The start on the Verrazzano Bridge. Hold back, stay patient, soak it in.",
    color: "wine",
  },
  {
    name: "Brooklyn",
    abbr: "BROOKLYN",
    miles: "MILES 2–13",
    len: 11,
    note: "The longest stretch and some of the loudest crowds. Settle into goal pace here.",
    color: "deep",
  },
  {
    name: "Queens",
    abbr: "QN",
    miles: "MILES 13–15",
    len: 2,
    note: "Halfway point, then the quiet climb over the Queensboro Bridge.",
    color: "wine",
  },
  {
    name: "Manhattan",
    abbr: "MANHATTAN",
    miles: "MILES 16–20",
    len: 4,
    note: "Coming off the bridge onto First Avenue: the famous wall of sound.",
    color: "deep",
  },
  {
    name: "The Bronx",
    abbr: "BX",
    miles: "MILES 20–21",
    len: 1,
    note: "Home turf. Mile 20 is where it gets hard, and it happens in my borough.",
    color: "cream",
  },
  {
    name: "Manhattan",
    abbr: "TO THE FINISH",
    miles: "MILES 21–26.2",
    len: 5.2,
    note: "Fifth Avenue, Central Park and the finish line. Every early morning run was for this.",
    color: "deep",
  },
];

// 02 Giving Back.
export const CAUSES: Cause[] = [
  {
    kicker: "RUNNING FOR A CAUSE",
    title: "Team for Kids",
    front: "Running my first TCS NYC Marathon with Team for Kids, fundraising for youth programs.",
    back: "[WHY YOU CHOSE TEAM FOR KIDS, IN YOUR WORDS]",
    bg: "deep",
  },
  {
    kicker: "COMMUNITY POP-UP",
    title: "Social Café Pop-Up No. 001",
    front: "Work & Brew’s first pop-up doubled as a fundraiser toward a $4K goal for Team for Kids.",
    back: "Community building is the part of product work I love most: getting real people in a real room, around a good cup.",
    bg: "cream",
  },
  {
    kicker: "CAMP · SUMMER 2025",
    title: "Steve's Camp at Horizon Farms",
    front:
      "Head Chef, Summer 2025, plus mentoring youth in outdoor leadership, resilience and community building.",
    back: "[A MOMENT FROM CAMP THAT STUCK WITH YOU]",
    bg: "wine",
  },
  {
    kicker: "COLLEGE ACCESS",
    title: "CARA Youth Leader",
    front: "Guided 30+ high school students through college applications and FAFSA, one-on-one.",
    back: "[WHY HELPING STUDENTS GET TO COLLEGE MATTERS TO YOU]",
    bg: "cream",
    dashed: true,
  },
];

// 03 Daily Rituals.
export const SHIFTS: Shift[] = [
  {
    id: "am",
    label: "OPENING SHIFT · AM",
    name: "OPENING",
    stamp: "READY FOR SERVICE",
    items: [
      {
        label: "Screen-free first hour",
        sub: "Phone stays in another room",
        time: "WAKE",
      },
      {
        label: "Audio briefing from Gwen",
        sub: "The AI assistant I built for my mornings",
        time: "AM",
      },
      {
        label: "Review my Top 3 must-dos",
        sub: "Set the night before",
        time: "AM",
      },
      {
        label: "Training run or Solidcore",
        sub: "Marathon plan, 6 days a week",
        time: "AM",
      },
      {
        label: "Café work session",
        sub: "Laptop, café con leche, deep work",
        time: "MID",
      },
    ],
  },
  {
    id: "pm",
    label: "CLOSING SHIFT · PM",
    name: "CLOSING",
    stamp: "KITCHEN CLOSED",
    items: [
      {
        label: "Hit 12k+ steps",
        sub: "Every day, no exceptions",
        time: "DAY",
      },
      {
        label: "Done-list review",
        sub: "Celebrate what shipped today",
        time: "PM",
      },
      {
        label: "Journal & brain dump",
        sub: "Everything out of my head, onto paper",
        time: "PM",
      },
      {
        label: "Set tomorrow’s Top 3",
        sub: "Three must-dos, nothing more",
        time: "PM",
      },
      {
        label: "Wind down",
        sub: "Focus mode on, jazz on, screens off",
        time: "LATE",
      },
    ],
  },
];

// 04 Typing test.
export const TYPING_TARGET =
  "One café con leche, one matcha latte and a product spec with an extra shot of user empathy.";

// 05 The Shelf.
export const BOOKS: Book[] = [
  {
    title: "Inspired",
    author: "Marty Cagan",
    spine: "INSPIRED",
    note: "[YOUR BIGGEST TAKEAWAY]",
    color: "cream",
    h: 190,
  },
  {
    title: "The Lean Product Playbook",
    author: "Dan Olsen",
    spine: "LEAN PRODUCT PLAYBOOK",
    note: "[YOUR BIGGEST TAKEAWAY]",
    color: "wine",
    h: 176,
  },
  {
    title: "Cracking the PM Interview",
    author: "Gayle Laakmann McDowell & Jackie Bavaro",
    spine: "CRACKING THE PM INTERVIEW",
    note: "[YOUR BIGGEST TAKEAWAY]",
    color: "cream",
    h: 200,
  },
  {
    title: "Design for How People Learn",
    author: "Julie Dirksen",
    spine: "DESIGN FOR HOW PEOPLE LEARN",
    note: "Five years of teaching workshops made this one personal. [YOUR TAKEAWAY]",
    color: "wine",
    h: 184,
  },
];

export const SERIES: string[] = [
  "Project Me",
  "Marathon Training",
  "Tech With Den",
  "Real Talk With Den",
  "Small Business Saturdays",
];
