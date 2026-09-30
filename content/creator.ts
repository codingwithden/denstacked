// Ported verbatim from reference/prototype. Keep [BRACKET] placeholders until Den fills them.
import type { Drink, HistoryEntry, PastryItem, Story } from "./types";

// 01 The Drink Menu: each drink pours a DensDigitalDiary series.
export const DRINKS: Drink[] = [
  {
    name: "Iced Matcha Latte",
    img: "/images/drink-matcha.png",
    series: "Project Me",
    desc: "An 84-day series on TikTok, with recaps on Instagram and YouTube.",
    tags: ["TIKTOK", "IG", "YOUTUBE"],
  },
  {
    name: "Iced Mocha",
    img: "/images/drink-mocha.png",
    series: "Real Talk With Den",
    desc: "Unfiltered conversations about work, life and building.",
    tags: ["TALK", "LIFESTYLE"],
  },
  {
    name: "Caramel Macchiato",
    img: "/images/drink-caramel-macchiato.png",
    series: "Tech With Den",
    desc: "Tech, tools and building in public, from code to product.",
    tags: ["TECH", "PRODUCT"],
  },
  {
    name: "Iced Latte",
    img: "/images/drink-iced-latte.png",
    series: "Small Business Saturdays",
    desc: "Spotlighting small businesses and the people behind them.",
    tags: ["COMMUNITY", "SMALL BIZ"],
  },
  {
    name: "Tiramisu Latte",
    img: "/images/drink-tiramisu-latte.png",
    series: "Marathon Training",
    desc: "The road to the TCS NYC Marathon, November 7, 2027.",
    tags: ["RUNNING", "NYC"],
  },
  {
    name: "Cold Brew",
    img: "/images/drink-cold-brew.png",
    series: "12 Wishes",
    desc: "[WHAT 12 WISHES IS ABOUT, IN YOUR WORDS]",
    tags: ["SERIES"],
  },
];

// 02 Creator Era.
export const STORIES: Story[] = [
  {
    brand: "Lemon8",
    kicker: "CHAPTER 01 · LEMON8",
    title: "Where it all started",
    short: "My first posts, and where I found my voice as a creator.",
    body: "Lemon8 is where I first started posting and found my voice as a creator. It grew into DensDigitalDiary across TikTok, YouTube and Instagram.",
    chips: ["CREATOR", "LIFESTYLE", "TECH"],
    metric: "[FIRST POST DATE / FOLLOWERS / BEST POST]",
    kind: "lemon",
  },
  {
    brand: "Love8",
    kicker: "CHAPTER 02 · UGC · LOVE8",
    title: "Creating for startups",
    short: "UGC to help an early-stage startup reach new users.",
    body: "Brands started asking me to make content for them. With Love8, I created UGC to help an early-stage startup reach new users.",
    chips: ["UGC", "USER ACQUISITION"],
    metric: "[DELIVERABLES / RESULTS]",
    kind: "love",
  },
  {
    brand: "xTiles",
    kicker: "CHAPTER 03 · UGC · XTILES",
    title: "Content that converts",
    short: "UGC built around the conversion funnel.",
    body: "For xTiles, I made content that shows the product in real use, so viewers go from scrolling to trying it.",
    chips: ["UGC", "CONVERSION"],
    metric: "[DELIVERABLES / RESULTS]",
    kind: "tiles",
  },
];

// 03 Creator History.
export const CREATOR_HISTORY: HistoryEntry[] = [
  {
    when: "START",
    title: "First posts on Lemon8",
    org: "Where it all started",
    body: "Lemon8 is where I first started posting and found my voice as a creator. It grew into DensDigitalDiary.",
  },
  {
    when: "2024",
    title: "Independent UGC Creator",
    org: "Brand collaborator · since March 2024",
    body: "Data-driven content for brands like xTiles and Love8 to drive awareness, engagement and app downloads.",
  },
  {
    when: "2.5 YRS",
    title: "Social Media Manager & Brand Strategist",
    org: "Freelance · most recently Jan–Jun 2026",
    body: "Social presence, rollout strategy and audience engagement for independent music talent (e.g. BLACKD0G / Elyan) and independent brands.",
  },
  {
    when: "NOW",
    title: "DensDigitalDiary",
    org: "TikTok · YouTube · Instagram · Lemon8",
    body: "A lifestyle and wellness platform documenting a first-gen Latina founder navigating tech, product, fitness and lifestyle design.",
  },
];

// 04 The Pastry Case.
export const PASTRY: PastryItem[] = [
  {
    tag: "2.5Y",
    name: "Social media strategy",
    note: "Freelance SMM for independent music talent and brands.",
  },
  {
    tag: "DDD",
    name: "Content creation",
    note: "Started on Lemon8; now DensDigitalDiary on TikTok, YouTube, Instagram and Lemon8.",
  },
  {
    tag: "UGC",
    name: "UGC for startups",
    note: "Love8, xTiles: acquisition and conversion content.",
  },
  {
    tag: "IRL",
    name: "Community activations",
    note: "Work & Brew pop-up cafés with games, artist merch and postcards.",
  },
  {
    tag: "EVT",
    name: "Event marketing",
    note: "Career-center events and Canva promo at Lehman College.",
  },
  {
    tag: "EN/ES",
    name: "Bilingual storytelling",
    note: "Content and workshops in English y en español.",
  },
];
