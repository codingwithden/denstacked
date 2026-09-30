// Ported verbatim from reference/prototype. Keep [BRACKET] placeholders until Den fills them.
import type { DiaryEntry, FileTab, Goal, HeroStat, MenuTab, Step, Sticker, Tool, Word } from "./types";

export const HERO_STATS: HeroStat[] = [
  {
    v: "500+",
    k: "NYC CAFÉS CURATED",
  },
  {
    v: "9",
    k: "PERSON TEAM LED",
  },
  {
    v: "5 YRS",
    k: "BILINGUAL FACILITATION",
  },
  {
    v: "5",
    k: "PRODUCTS ON THE TICKET",
  },
];

// Tap the hero glass to cycle these.
export const POURS: string[] = ["Espresso", "Café con leche", "Matcha latte", "Cortado", "Cold brew"];

// Special Instructions form: drink chips.
export const ORDER_DRINKS: string[] = ["Espresso", "Matcha latte", "Café con leche", "Cold brew", "Chai"];

// 01 Who's Denisse?
export const WORDS: Word[] = [
  {
    w: "Founder",
    line: "Work & Brew, since March 2025: on-the-ground research, a team of under ten, and a café platform for remote workers.",
  },
  {
    w: "Builder",
    line: "Full-stack at BloomTech. React, SQL, REST APIs, Apps Script, and a 108 WPM habit.",
  },
  {
    w: "Analyst",
    line: "SQL-backed analytics, GA4 funnels and feedback data decide what ships next.",
  },
  {
    w: "Leader",
    line: "A cross-functional team of under ten first-gen Latinx scouts, designers and developers.",
  },
  {
    w: "Speaker",
    line: "Five years of bilingual workshops across NYC schools, in English y en español.",
  },
];

// 02 How I build: Discover → Build → Ship.
export const STEPS: Step[] = [
  {
    label: "DISCOVER",
    coffee: "The beans",
    img: "/images/portafilter-beans.png",
    body: "Start with the raw material: real users, real cafés, real friction.",
    points: [
      "On-the-ground research across NYC cafés since March 2025",
      "User interviews with remote workers, freelancers and students",
      "Hypotheses written down before anything gets built",
    ],
  },
  {
    label: "BUILD",
    coffee: "The grind",
    img: "/images/portafilter-grounds.png",
    body: "Grind it down to what matters, then build the smallest thing that proves it.",
    points: [
      "MVP scoping: cut anything that does not earn its place",
      "React + Vite front end, SQL-backed analytics, GA4 funnels",
      "Jira boards that a cross-functional team actually uses",
    ],
  },
  {
    label: "SHIP",
    coffee: "The pour",
    img: "/images/portafilter-latte-art.png",
    body: "Pour it out for real people, watch what happens and iterate.",
    points: [
      "Public MVP release and community pop-ups",
      "Funnel and feedback data decide the next experiment",
      "Iterate until it is smooth, then pour again",
    ],
  },
];

// 03 The Desk.
export const DESK_TOOLS: Tool[] = [
  {
    id: "laptop",
    station: "THE DESK",
    label: "LAPTOP",
    skill: "FULL-STACK",
    title: "Building the thing myself",
    file: "zsh",
    body: "BloomTech-trained. I built Work & Brew's web MVP in React + Vite, so I scope with engineers, not around them.",
    code: ["$ npm create vite@latest work-and-brew", "$ npm run dev", "> ready on localhost:5173"],
  },
  {
    id: "code",
    station: "THE DESK",
    label: "</> CODE",
    skill: "JS & APIS",
    title: "Reading the recipe card",
    file: "cafes.js",
    body: "JavaScript and REST APIs are how I check what's feasible before a feature gets promised.",
    code: ["const res = await fetch('/api/cafes?wifi=true');", "const cafes = await res.json();"],
  },
  {
    id: "term",
    station: "THE DESK",
    label: "TERMINAL",
    skill: "SCRIPTING",
    title: "Automate the prep work",
    file: "zsh",
    body: "Python and custom scripts, including a rule-based trading engine that runs overnight.",
    code: ["$ python engine.py --mode=overnight", "> rules loaded", "> watching triggers…"],
  },
  {
    id: "kanban",
    station: "THE DESK",
    label: "KANBAN",
    skill: "AGILE BOARDS",
    title: "Boards people actually use",
    file: "jira",
    body: "I designed the Jira boards that ran a 9-person team: Café Scouts & Ops and Marketing & Launch.",
    code: ["board.move('WBCSO-23', 'Done');", "// one more café vetted"],
  },
  {
    id: "cal",
    station: "THE DESK",
    label: "CALENDAR",
    skill: "ADMIN & OPS",
    title: "Schedules that sync themselves",
    file: "Code.gs",
    body: "Skedulo OS turns workshop assignments into calendar events with transit time and venue details attached.",
    code: [
      "CalendarApp.getDefaultCalendar()",
      "  .createEvent(workshop.title, start, end,",
      "    { location: venue.address });",
    ],
  },
  {
    id: "nfc",
    station: "THE DESK",
    label: "NFC + SHORTCUTS",
    skill: "WORKFLOW AUTOMATION",
    title: "One tap, whole routine",
    file: "shortcuts",
    body: "iOS Shortcuts and NFC tags turn repeat tasks into a single tap. Small systems, big time back.",
    code: ["onTap(nfcTag, () =>", "  runShortcut('Focus Mode'));"],
  },
];

// 04 Menu board.
export const MENU: MenuTab[] = [
  {
    id: "espresso",
    label: "ESPRESSO BAR",
    tagline: "Technical & full-stack · pulled strong",
    items: [
      {
        name: "Modern web apps",
        tag: "JS",
        note: "Full-stack web development, BloomTech ’25",
      },
      {
        name: "REST APIs",
        tag: "API",
        note: "Designing and consuming APIs across projects",
      },
      {
        name: "Google Apps Script",
        tag: "GAS",
        note: "Elevate Skedulo OS, deployed and in use",
      },
      {
        name: "Python & scripting",
        tag: "PY",
        note: "Custom scripts and the automated trading engine",
      },
      {
        name: "React & SQL",
        tag: "SQL",
        note: "React front ends, SQL-backed product analytics",
      },
      {
        name: "Typing speed",
        tag: "108",
        note: "108 WPM average, 158 record",
      },
    ],
  },
  {
    id: "matcha",
    label: "MATCHA BAR",
    tagline: "Product & project management · whisked smooth",
    items: [
      {
        name: "Product lifecycle & MVP scoping",
        tag: "0→1",
        note: "Work & Brew from idea to public MVP",
      },
      {
        name: "User journey mapping",
        tag: "UX",
        note: "Remote workers, freelancers, students",
      },
      {
        name: "Agile board design",
        tag: "JIRA",
        note: "Ops and launch boards for a 9-person team",
      },
      {
        name: "Workflow automation",
        tag: "OPS",
        note: "Scripts, Shortcuts and NFC tags",
      },
      {
        name: "Product discovery",
        tag: "DISC",
        note: "On-the-ground research with NYC cafés and remote workers",
      },
      {
        name: "Hypothesis-driven development",
        tag: "TEST",
        note: "Experiments prioritized with SQL-backed analytics",
      },
    ],
  },
  {
    id: "tools",
    label: "HOUSE TOOLS",
    tagline: "Behind the counter",
    tools: true,
    items: [
      {
        name: "Jira",
      },
      {
        name: "Trello",
      },
      {
        name: "Notion",
      },
      {
        name: "Slack",
      },
      {
        name: "Google Workspace",
      },
      {
        name: "Microsoft 365",
      },
      {
        name: "iOS Shortcuts",
      },
      {
        name: "NFC automations",
      },
      {
        name: "Skedulo",
      },
      {
        name: "Figma",
      },
      {
        name: "SQL",
      },
      {
        name: "React",
      },
      {
        name: "Canva",
      },
      {
        name: "Excel",
      },
      {
        name: "GitHub",
      },
      {
        name: "GA4",
      },
    ],
  },
];

// 05 The File.
export const FILE_TABS: FileTab[] = [
  {
    id: "founder",
    label: "FOUNDER DIARY",
    peek: "Work & Brew, from first café visit to launch.",
    side: "left",
    tone: "cream",
  },
  {
    id: "ship",
    label: "TO-SHIP LIST",
    peek: "What I am shipping next, in work and in life.",
    side: "right",
    tone: "wine",
  },
];

export const DIARY: DiaryEntry[] = [
  {
    when: "MAR 2025",
    text: "Started researching NYC cafés with my co-founder.",
  },
  {
    when: "BUILD",
    text: "Shipped the web MVP in React + Vite, with GA4 on the waitlist.",
  },
  {
    when: "POP-UP",
    text: "Pop-Up No. 001: games, artist merch, postcards, fundraising.",
  },
  {
    when: "NEXT",
    text: "The app launch. Then we scale.",
  },
];

export const GOALS: Goal[] = [
  {
    label: "Launch the Work & Brew app",
    status: "IN PROGRESS",
  },
  {
    label: "Multi-brand social hub beta",
    status: "IN BUILD",
  },
  {
    label: "Run the TCS NYC Marathon · Nov 7, 2027",
    status: "TRAINING",
  },
  {
    label: "Conversational Italian",
    status: "LEARNING",
  },
  {
    label: "Join an NYC product team · 2027",
    status: "OPEN TO IT",
  },
];

export const BEAD_WORDS: string[] = ["HOW", "I", "SHIP", "MY", "WEEK"];

export const TRACKS: string[] = [
  "Project Me",
  "Marathon Training",
  "Tech With Den",
  "Real Talk With Den",
  "Small Business Saturdays",
];

// 09 Sticker sheet.
export const STICKERS: Sticker[] = [
  {
    f: "108 WPM",
    b: "Average typing speed. Record: 158.",
  },
  {
    f: "JIRA",
    b: "Agile with Atlassian Jira and Jira Service Management, certified.",
  },
  {
    f: "BX",
    b: "Born and raised New Yorker. The Bronx, always.",
  },
  {
    f: "¡HOLA!",
    b: "Native English & Spanish. Elementary Italian, still learning.",
  },
  {
    f: "0 → 1",
    b: "Took Work & Brew from an idea to a working MVP.",
  },
  {
    f: "SQL",
    b: "SQL-backed analytics decide which experiments run next.",
  },
  {
    f: "26.2",
    b: "TCS NYC Marathon, November 7, 2027.",
  },
  {
    f: "REACT",
    b: "The Work & Brew web MVP, built in React + Vite.",
  },
];
