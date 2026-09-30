// Ported verbatim from reference/prototype. Keep [BRACKET] placeholders until Den fills them.
import type { Stop } from "./types";

// The Route: subway-line career timeline. The train starts at Work & Brew (index 6).
export const STOPS: Stop[] = [
  {
    when: "2019",
    short: "CARA",
    title: "Youth Leader",
    org: "College Access: Research and Action (CARA) · 2019–2020",
    body: "Guided 30+ high school students through college applications and FAFSA, and built templates and checklists so no deadline was missed.",
    skills: ["MENTORING", "PROCESS", "EMPATHY"],
  },
  {
    when: "2020",
    short: "Lehman",
    title: "Lehman College & Peer Educator",
    org: "CUNY Lehman College · 2020–2022",
    body: "Coursework at Lehman while working as a Peer Educator at the Career Exploration & Development Center: events, Canva promo, outreach campaigns and Excel tracking.",
    skills: ["EVENTS", "OUTREACH", "DATA"],
  },
  {
    when: "2021",
    short: "Museum",
    title: "Development",
    org: "Museum of Jewish Heritage · 2021–2022",
    body: "Kept sensitive donor databases accurate and secure, built reports for senior management and automated routine data entry.",
    skills: ["DATA", "REPORTING", "AUTOMATION"],
  },
  {
    when: "2021",
    short: "Elevate",
    title: "Presenter",
    org: "Elevate Education · since 2021",
    body: "Bilingual study-skills workshops across NYC schools. Managed a multi-site schedule, was the point of contact for school staff, and used feedback data to refine every workshop.",
    skills: ["FACILITATION", "EN/ES", "USER EMPATHY"],
  },
  {
    when: "2024",
    short: "Christ the King",
    title: "Coordinator of Religious Education",
    org: "Christ the King · 2024–2025",
    body: "Ran financial operations for 300+ families, tracked progress for 300+ students across three programs and led a team of volunteers and educators.",
    skills: ["OPS", "DATA", "STAKEHOLDERS"],
  },
  {
    when: "DEC ’25",
    short: "BloomTech",
    title: "Full-Stack Web Development",
    org: "BloomTech · 2024–2025",
    body: "Graduated from the full-stack program: React, JavaScript, SQL and REST APIs.",
    skills: ["REACT", "SQL", "APIS"],
  },
  {
    when: "2025",
    short: "Work & Brew",
    title: "Founder",
    org: "Work & Brew · since March 2025",
    body: "Founded with my co-founder to connect remote workers with local cafés. I lead a team of under ten first-gen Latinx scouts, designers and developers, and use SQL-backed analytics to prioritize experiments.",
    skills: ["0→1", "LEADERSHIP", "DISCOVERY"],
  },
  {
    when: "2027",
    short: "Your team?",
    title: "APM / PM or Marketing",
    org: "NYC · after the Work & Brew launch",
    body: "Looking to join a team in 2027 where I can bring founder instincts to product leadership. This is the stop where you come in.",
    skills: ["APM", "PM", "MARKETING"],
  },
];

export const DEFAULT_STOP = 6;
