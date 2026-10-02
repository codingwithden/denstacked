// Intro carousel ("pick a drink"), ported verbatim from reference/prototype/Intro.dc.html.

export interface Door {
  title: string;
  desc: string;
  href: string;
  img: string;
  cta: string;
  /** Not open yet: show a toast instead of navigating. */
  soon?: boolean;
}

export const INTRO = {
  title: "Denisse's",
  script: "Portfolio",
  founderOf: ["Work & Brew", "Seven Solace Co.", "DensDigitalDiary Agency"],
  role: "Product & Project Manager",
  spinning: "now brewing…",
  quickGlance: "QUICK GLANCE",
  replay: "↻ REPLAY",
  skip: "SKIP INTRO →",
  soonToast: "Seven Solace Co. is opening soon: handmade charms, coming to a shop near you.",
};

export const DOORS: Door[] = [
  {
    title: "Go to website",
    desc: "The full portfolio: product work, case studies and the order ticket.",
    href: "/work",
    img: "/images/iced-latte.png",
    cta: "ENTER THE WEBSITE",
  },
  {
    title: "Work & Brew",
    desc: "The café platform I founded: research, the MVP and a café-finder demo.",
    href: "/work",
    img: "/images/drink-cold-brew.png",
    cta: "VISIT WORK & BREW",
  },
  {
    title: "DensDigitalDiary Agency",
    desc: "Social media, content and UGC for startups and brands.",
    href: "/content",
    img: "/images/drink-caramel-macchiato.png",
    cta: "VISIT THE AGENCY",
  },
  {
    title: "Seven Solace Co.",
    desc: "Handmade charms, from matcha chasen charms to balloon banners.",
    href: "#",
    img: "/images/drink-matcha.png",
    cta: "OPENING SOON",
    soon: true,
  },
  {
    title: "Runner's Hub",
    desc: "The tools I am building for runners: pace math, race-day splits and more.",
    href: "/running",
    img: "/images/drink-tiramisu-latte.png",
    cta: "OPEN RUNNER'S HUB",
  },
  {
    title: "Free Resources",
    desc: "The free tools I used to build my startup, site and small business. Yours for an email.",
    href: "/resources",
    img: "/images/drink-mocha.png",
    cta: "GET THE FREE KIT",
  },
  {
    title: "Denisse's Personal Life",
    desc: "Marathon miles, volunteering and daily rituals.",
    href: "/about",
    img: "/images/iced-latte.png",
    cta: "SAY HI",
  },
  {
    title: "The Kitchen",
    desc: "Culinary school, corporate catering and camp kitchens.",
    href: "/kitchen",
    img: "/images/drink-iced-latte.png",
    cta: "STEP INTO THE KITCHEN",
  },
];
