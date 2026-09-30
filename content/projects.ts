// Ported verbatim from reference/prototype. Keep [BRACKET] placeholders until Den fills them.
import type { Filter, Project } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "wb",
    num: "01",
    title: "Work & Brew Platform",
    stamp: "SHIPPED",
    cats: ["zero", "code", "growth"],
    demo: true,
    sub: "0-to-1 platform matching remote workers with WFH-friendly NYC cafés",
    meta: [
      {
        k: "ROLE",
        v: "Founder (with co-founder)",
      },
      {
        k: "TEAM",
        v: "Under 10, first-gen Latinx",
      },
      {
        k: "SINCE",
        v: "March 2025",
      },
    ],
    sections: [
      {
        n: "01",
        title: "PROBLEM & USER FRICTION",
        body: "Remote workers, freelancers and students lose time café-hopping for a seat, an outlet and Wi-Fi that holds, while small-business cafés have no clear way to say laptops are welcome.",
        bullets: [
          "Personas: remote workers, freelancers, students",
          "On-the-ground research across NYC since March 2025",
          "Top pain points: [2–3 REAL QUOTES FROM INTERVIEWS]",
          "Café side: [WHAT OWNERS TOLD YOU]",
        ],
      },
      {
        n: "02",
        title: "PRODUCT SOLUTION & ARCHITECTURE",
        body: "A curated platform of 500+ trusted, work-friendly small-business cafés across NYC, scored on the things that decide whether you can actually work there.",
        bullets: [
          "Venue utility metrics: verified secure Wi-Fi, outlet availability, seating layout, restroom access, food options",
          "Web MVP in React + Vite, with a GA4 waitlist funnel instrumented to find signup friction",
          "SQL-backed analytics and hypothesis-driven experiments decide what gets built next",
          "Showcases local community artists through merch and in-app visuals",
          "Leads a cross-functional team of under ten first-gen Latinx scouts, designers and developers",
        ],
      },
      {
        n: "03",
        title: "OUTCOMES & PM COMPETENCIES",
        body: "Impact so far, and what it shows about how I work.",
        bullets: [
          "Community pop-up activations: attendee games, artist-designed merch & postcards, localized café guides",
          "[# WAITLIST SIGNUPS] · [BETA USERS] · [FUNNEL CONVERSION %]",
          "Proven: discovery, two-sided marketplace thinking, MVP scoping, cross-functional leadership",
        ],
      },
    ],
  },
  {
    id: "el",
    num: "02",
    title: "Adaptive Workshop Decks",
    stamp: "ITERATED",
    cats: ["bi"],
    sub: "Elevate Education · audience segmentation & dynamic slides",
    meta: [
      {
        k: "ROLE",
        v: "Presenter",
      },
      {
        k: "SINCE",
        v: "September 2021",
      },
      {
        k: "FORMAT",
        v: "Bilingual EN/ES",
      },
    ],
    sections: [
      {
        n: "01",
        title: "PROBLEM & USER FRICTION",
        body: "The same study-skills session has to land with an 8th grader and a senior, in classrooms that move between English and Spanish.",
        bullets: [
          "Users: diverse student bodies across NYC schools, grades 8–12",
          "Friction: [WHAT BROKE WHEN ONE DECK FIT ALL]",
          "Stakeholders: point of contact for administrators and teachers at every school",
        ],
      },
      {
        n: "02",
        title: "PRODUCT SOLUTION & ARCHITECTURE",
        body: "Segment the room, then adapt examples, pacing and language on the fly across study skills, exam prep and time management.",
        bullets: [
          "Adapted delivery to each school environment and student group",
          "Collected participation and feedback data to refine future workshops",
          "Ran a multi-site schedule with strict timing and minimal downtime",
          "[HOW YOU ADAPTED — e.g. swapped examples per grade]",
        ],
        sim: true,
      },
      {
        n: "03",
        title: "OUTCOMES & PM COMPETENCIES",
        body: "Five years of live user research, one classroom at a time.",
        bullets: [
          "[# SESSIONS DELIVERED] · [# SCHOOLS]",
          "Proven: user empathy, segmentation, iteration cadence, stakeholder communication",
        ],
      },
    ],
  },
  {
    id: "sk",
    num: "03",
    title: "Elevate Skedulo OS",
    stamp: "AUTOMATED",
    cats: ["code"],
    sub: "Google Apps Script · Skedulo assignments → enriched calendar",
    meta: [
      {
        k: "ROLE",
        v: "Creator & Developer",
      },
      {
        k: "STAGE",
        v: "Deployed",
      },
      {
        k: "STACK",
        v: "Google Apps Script",
      },
    ],
    sections: [
      {
        n: "01",
        title: "PROBLEM & USER FRICTION",
        body: "Presenters get workshop assignments in Skedulo, then hand-copy each one into a calendar and look up routes and venues one by one.",
        bullets: ["User: field presenters (me first)", "Friction: [MINUTES PER BOOKING SPENT COPYING]"],
      },
      {
        n: "02",
        title: "PRODUCT SOLUTION & ARCHITECTURE",
        body: "A web app that parses and structures Skedulo assignments and syncs them straight into the calendar.",
        bullets: [
          "Parse → structure → sync pipeline",
          "Events enriched with automated transit times, venue details and schedule logistics",
        ],
      },
      {
        n: "03",
        title: "OUTCOMES & PM COMPETENCIES",
        body: "Automating my own field operations first.",
        bullets: [
          "[HOURS SAVED PER WEEK]",
          "Proven: internal-tool thinking, automation, shipping for a real daily user",
        ],
      },
    ],
  },
  {
    id: "smm",
    num: "04",
    title: "Multi-Brand Social Media Hub",
    stamp: "IN BUILD",
    cats: ["zero", "code", "growth"],
    sub: "Seven Solace Co. · creator ops & multi-tenant UX",
    meta: [
      {
        k: "ROLE",
        v: "Founder & Builder",
      },
      {
        k: "STAGE",
        v: "In build",
      },
      {
        k: "FOCUS",
        v: "Multi-tenant UX",
      },
    ],
    sections: [
      {
        n: "01",
        title: "PROBLEM & USER FRICTION",
        body: "Social media managers running several distinct brands juggle separate logins, calendars and voices. Context-switching is the real enemy. I know because I have done the job for 2.5+ years.",
        bullets: [
          "Persona: social media managers handling multiple brands",
          "Pain points: [FROM YOUR RESEARCH]",
        ],
      },
      {
        n: "02",
        title: "PRODUCT SOLUTION & ARCHITECTURE",
        body: "One workspace that holds multiple brand identities: per-brand calendars, voice and assets under a single login.",
        bullets: ["Data model: brand → channels → posts", "[MVP FEATURE LIST & WHAT YOU CUT]"],
      },
      {
        n: "03",
        title: "OUTCOMES & PM COMPETENCIES",
        body: "Where it stands and what it proves.",
        bullets: [
          "[BETA USERS / CURRENT STATUS]",
          "Proven: MVP scoping, multi-tenant UX, competitive research",
        ],
      },
    ],
  },
  {
    id: "bot",
    num: "05",
    title: "Automated Trading Engine",
    stamp: "TESTING",
    cats: ["code"],
    sub: "Algorithmic logic & overnight rule-based execution",
    meta: [
      {
        k: "ROLE",
        v: "Solo builder",
      },
      {
        k: "STAGE",
        v: "Live testing",
      },
      {
        k: "STACK",
        v: "Python, APIs",
      },
    ],
    sections: [
      {
        n: "01",
        title: "PROBLEM & USER FRICTION",
        body: "A rule-based strategy is only as consistent as the person executing it, and people sleep.",
        bullets: [
          "User: me, as a rules-driven trader",
          "Friction: missed overnight triggers, inconsistent execution",
        ],
      },
      {
        n: "02",
        title: "PRODUCT SOLUTION & ARCHITECTURE",
        body: "An engine that turns written trading notes and market triggers into rules that execute overnight.",
        bullets: [
          "Rules codified from historical notes",
          "Staged rollout: demo account → live testing",
          "[RISK GUARDRAILS — e.g. position limits, kill switch]",
        ],
      },
      {
        n: "03",
        title: "OUTCOMES & PM COMPETENCIES",
        body: "A systems case study: spec → test → staged release.",
        bullets: ["Proven: translating requirements into logic, risk thinking, staged releases"],
      },
    ],
  },
];

export const FILTERS: Filter[] = [
  {
    id: "all",
    label: "ALL",
  },
  {
    id: "zero",
    label: "0-TO-1 PRODUCT",
  },
  {
    id: "code",
    label: "SYSTEMS & CODE",
  },
  {
    id: "growth",
    label: "GROWTH & CREATIVE",
  },
  {
    id: "bi",
    label: "BILINGUAL FACILITATION",
  },
];
