// Hero and section headings for each page, ported verbatim from reference/prototype.
import type { Link, PageId } from "./types";

export interface Heading {
  before: string;
  /** Pinyon Script accent word. */
  em?: string;
  after?: string;
}

export interface Hero {
  kicker: string;
  title: string;
  script: string;
  intro: string;
  links: (Link & { primary?: boolean })[];
}

export interface SectionCopy {
  id?: string;
  kicker: string;
  heading?: Heading;
  /** What still needs building here (shown in the placeholder). */
  todo: string;
}

export const HEROES: Record<PageId, Hero> = {
  work: {
    kicker: "PORTFOLIO · APM / PM · NEW YORK CITY",
    title: "Order up.",
    script: "¡Orden lista!",
    intro:
      "I'm Denisse, a born-and-raised New Yorker from the Bronx, founder of Work & Brew and a full-stack builder. I solve ambiguous problems, lead small teams and ship measurable value, and I'm looking to join a product team in 2027.",
    links: [
      { label: "SEE THE TICKET", href: "#ticket", primary: true },
      { label: "BOOK A COFFEE CHAT", href: "#chat" },
    ],
  },
  about: {
    kicker: "ABOUT ME · JUST FOR FUN",
    title: "Off the clock.",
    script: "Fuera de turno.",
    intro:
      "The part that doesn't fit on a resume: the miles, the causes I show up for and the small daily rituals that keep a Bronx founder on pace.",
    links: [
      { label: "THE MARATHON", href: "#run" },
      { label: "GIVING BACK", href: "#give" },
      { label: "DAILY RITUALS", href: "#habits" },
      { label: "TYPING TEST", href: "#type" },
      { label: "THE SHELF", href: "#shelf" },
    ],
  },
  kitchen: {
    kicker: "03 · THE KITCHEN · YES, CHEF",
    title: "The",
    script: "Kitchen",
    intro:
      "Culinary school, large-scale corporate catering and a camp kitchen of my own. The kitchen taught me pace, prep and how to stay calm when every ticket is due at once.",
    links: [
      { label: "THE LINE", href: "#line" },
      { label: "KITCHEN HISTORY", href: "#history" },
    ],
  },
  content: {
    kicker: "04 · CONTENT · DENSDIGITALDIARY",
    title: "Content",
    script: "Creator",
    intro:
      "It started on Lemon8. Now it's DensDigitalDiary across TikTok, YouTube, Instagram and Lemon8, plus UGC for startups like Love8 and xTiles.",
    links: [
      { label: "THE DRINK MENU", href: "#drinks" },
      { label: "CREATOR ERA", href: "#creator" },
      { label: "CREATOR HISTORY", href: "#history" },
    ],
  },
  running: {
    kicker: "05 · RUNNING · RACE-DAY TOOLS",
    title: "Race",
    script: "day.",
    intro:
      "Tools for the long run: a mile-by-mile pace plan, the TCS NYC Marathon course profile and a certified course checker. Built while I train for my first marathon, November 7, 2027.",
    links: [
      { label: "PACE PLAN", href: "#pacing", primary: true },
      { label: "THE COURSE", href: "#course" },
      { label: "CERTIFIED COURSES", href: "#certified" },
    ],
  },
};

export const SECTIONS: Record<PageId, SectionCopy[]> = {
  work: [
    {
      id: "ticket",
      kicker: "THE TICKET",
      todo: "Phase 3: printer + receipt ticket, audio greeting, filter pills, 5 stamped line items, case-study drawer, Special Instructions form, totals and barcode.",
    },
    {
      kicker: "01 · WHO'S DENISSE? TAP A WORD",
      todo: "Phase 3: outlined words (Founder, Builder, Analyst, Leader, Speaker) that fill in and show a line.",
    },
    {
      kicker: "02 · HOW I BUILD",
      heading: { before: "From bean to ", em: "cup" },
      todo: "Phase 3: three portafilters, Discover → Build → Ship.",
    },
    {
      kicker: "03 · THE DESK",
      heading: { before: "Tools of the ", em: "trade" },
      todo: "Phase 3: six tech tools, laptop screen types code + lesson card.",
    },
    {
      kicker: "04 · THE MENU",
      heading: { before: "What I bring to the ", em: "table" },
      todo: "Phase 3: chalkboard tabs (Espresso Bar, Matcha Bar, House Tools).",
    },
    {
      id: "file",
      kicker: "05 · THE FILE",
      heading: { before: "Everything I almost ", em: "gatekept" },
      todo: "Phase 3: closed folder cover that opens into Founder Diary and To-Ship List.",
    },
    {
      kicker: "06 · THE ROUTE",
      heading: { before: "The route to ", em: "product" },
      todo: "Phase 3: subway-line career timeline with a sliding train.",
    },
    {
      id: "finder",
      kicker: "07 · TASTE TEST · WORK & BREW",
      heading: { before: "Find a café you can ", em: "actually", after: " work from" },
      todo: "Phase 3: café-finder demo with illustrative map and amenity filters (sample data only).",
    },
    {
      kicker: "08 · REGULARS ONLY",
      heading: { before: "Loyalty card & ", em: "off the clock" },
      todo: "Phase 3: Learning Loyalty Card (8 certification stamps) + teaser card to About.",
    },
    {
      kicker: "09 · STICKER SHEET",
      heading: { before: "Peel a ", em: "sticker" },
      todo: "Phase 3: 8 round stickers that flip to facts.",
    },
  ],
  about: [
    {
      id: "run",
      kicker: "01 · THE LONG RUN",
      heading: { before: "My first ", em: "marathon" },
      todo: "Phase 4: countdown to Nov 7, 2027, pace calculator (goal 4:35) and tappable 5-borough route.",
    },
    {
      id: "give",
      kicker: "02 · GIVING BACK",
      heading: { before: "Volunteer & ", em: "community" },
      todo: "Phase 4: flip cards (Team for Kids, Pop-Up No. 001, Steve's Camp, CARA).",
    },
    {
      id: "habits",
      kicker: "03 · DAILY RITUALS",
      heading: { before: "Opening & ", em: "closing", after: " shift" },
      todo: "Phase 4: opening / closing shift checklists, progress ring and stamp.",
    },
    {
      id: "type",
      kicker: "04 · FUN FACT",
      heading: { before: "I type 108 WPM. ", em: "Your turn." },
      todo: "Phase 4: typing test against Den's 108 WPM.",
    },
    {
      id: "shelf",
      kicker: "05 · THE SHELF",
      heading: { before: "Currently reading & ", em: "into" },
      todo: "Phase 4: PM books to pull off the shelf, hobbies, link to Content.",
    },
  ],
  kitchen: [
    {
      id: "line",
      kicker: "01 · THE LINE",
      heading: { before: "Kitchen ", em: "hands" },
      todo: "Phase 4: six kitchen tools that open recipe cards (lesson + Method).",
    },
    {
      id: "history",
      kicker: "02 · KITCHEN HISTORY",
      heading: { before: "Behind the ", em: "pass" },
      todo: "Phase 4: accordion of culinary school, Jitjatjo, Steve's Camp and Food Protection cert.",
    },
  ],
  content: [
    {
      id: "drinks",
      kicker: "01 · THE DRINK MENU",
      heading: { before: "Pick a drink, get a ", em: "series" },
      todo: "Phase 4: six drinks that each pour a DensDigitalDiary series.",
    },
    {
      id: "creator",
      kicker: "02 · CREATOR ERA",
      heading: { before: "It all started on ", em: "Lemon8" },
      todo: "Phase 4: phone-frame stories (Lemon8 → Love8 → xTiles) with autoplay, pause, like.",
    },
    {
      id: "history",
      kicker: "03 · CREATOR HISTORY",
      heading: { before: "Behind the ", em: "camera" },
      todo: "Phase 4: creator history accordion.",
    },
    {
      kicker: "04 · THE PASTRY CASE",
      heading: { before: "Growth & ", em: "creative" },
      todo: "Phase 4: growth & creative skill cards.",
    },
  ],
  running: [
    {
      id: "course",
      kicker: "02 · THE COURSE",
      heading: { before: "Know every ", em: "hill" },
      todo: "Coming next: TCS NYC Marathon elevation profile with the 2026 Bronx reroute (miles 20–21). Waiting on elevation data.",
    },
    {
      id: "certified",
      kicker: "03 · CERTIFIED COURSES",
      heading: { before: "Does my race ", em: "count?" },
      todo: "Coming next: searchable list of World Athletics certified road courses. Waiting on the course data.",
    },
  ],
};
