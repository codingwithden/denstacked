// Free Resources page, ported verbatim from reference/prototype/Resources.dc.html.
// Keep [BRACKET] placeholders until Den fills them.

export type ToolCategory = "DESIGN" | "BUILD" | "OPS" | "GROW";

export interface Original {
  type: string;
  name: string;
  desc: string;
}

export interface FreeTool {
  cat: ToolCategory;
  name: string;
  what: string;
  how: string;
  url: string;
}

export const KIT = {
  kicker: "THE STARTER KIT",
  title: "Build it for ",
  em: "free.",
  body: "My templates and checklists, plus the full resource list below. Drop your email and the kit unlocks.",
  emailLabel: "YOUR EMAIL",
  placeholder: "you@email.com",
  submit: "UNLOCK THE KIT",
  fine: "No spam. Unsubscribe anytime.",
  error: "Add a valid email to unlock the kit.",
  stamp: "KIT UNLOCKED",
  welcome: "Welcome in. Your starter kit is open below.",
  toast: "Kit unlocked. Check your inbox soon!",
  lockedLabel: "UNLOCK WITH EMAIL",
  getIt: "GET IT [LINK] →",
};

export const ORIGINALS: Original[] = [
  {
    type: "NOTION TEMPLATE",
    name: "[Your founder dashboard]",
    desc: "[What is inside and who it helps.]",
  },
  {
    type: "CHECKLIST",
    name: "[Your launch checklist]",
    desc: "[The steps you used to launch.]",
  },
  {
    type: "GUIDE",
    name: "[Your free-stack guide]",
    desc: "[How to build a site for $0.]",
  },
];

export const TOOL_CATEGORIES = ["ALL", "DESIGN", "BUILD", "OPS", "GROW"] as const;

export const FREE_TOOLS: FreeTool[] = [
  {
    cat: "DESIGN",
    name: "Canva",
    what: "Social graphics, decks, flyers and merch mockups.",
    how: "pop-up flyers and content",
    url: "https://www.canva.com",
  },
  {
    cat: "DESIGN",
    name: "Figma",
    what: "Wireframes, UI design and prototypes.",
    how: "Work & Brew screens",
    url: "https://www.figma.com",
  },
  {
    cat: "DESIGN",
    name: "Google Fonts",
    what: "Free, open-source typefaces for the web.",
    how: "the fonts on this site",
    url: "https://fonts.google.com",
  },
  {
    cat: "BUILD",
    name: "freeCodeCamp",
    what: "Free coding curriculum and certifications.",
    how: "teaching myself to code",
    url: "https://www.freecodecamp.org",
  },
  {
    cat: "BUILD",
    name: "GitHub",
    what: "Host and version your code.",
    how: "every project I ship",
    url: "https://github.com",
  },
  {
    cat: "BUILD",
    name: "Vercel",
    what: "Deploy websites with a free hobby plan.",
    how: "hosting my projects",
    url: "https://vercel.com",
  },
  {
    cat: "OPS",
    name: "Notion",
    what: "Docs, wikis and content calendars.",
    how: "my content calendar",
    url: "https://www.notion.so",
  },
  {
    cat: "OPS",
    name: "Trello",
    what: "Simple boards for tasks and projects.",
    how: "daily to-do lists",
    url: "https://trello.com",
  },
  {
    cat: "OPS",
    name: "Jira",
    what: "Sprints and backlogs, free for small teams.",
    how: "running the Work & Brew team",
    url: "https://www.atlassian.com/software/jira",
  },
  {
    cat: "GROW",
    name: "Google Analytics",
    what: "Track traffic and signup funnels.",
    how: "the Work & Brew waitlist funnel",
    url: "https://analytics.google.com",
  },
];

export const FREE_LIST = {
  usedPrefix: "How I used it: ",
  visit: "VISIT ↗",
  emptySaved: "Tap the heart to save tools to your list.",
  savedPrefix: "Saved: ",
};
