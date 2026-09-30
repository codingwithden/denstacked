// Ported verbatim from reference/prototype. Keep [BRACKET] placeholders until Den fills them.
import type { HistoryEntry, Tool } from "./types";

// 01 The Line.
export const KITCHEN_TOOLS: Tool[] = [
  {
    id: "whisk",
    station: "THE LINE",
    label: "WHISK",
    skill: "ITERATION",
    title: "Blend until smooth",
    file: "recipe.js",
    body: "In the kitchen you taste, adjust and whisk again. In product I fold user feedback into every release until the lumps are gone.",
    code: ["while (!smooth) {", "  const notes = taste(batch);", "  batch = whisk(batch, notes);", "}"],
  },
  {
    id: "knife",
    station: "THE LINE",
    label: "CHEF'S KNIFE",
    skill: "PRIORITIZATION",
    title: "Cut to what matters",
    file: "mvp.js",
    body: "A clean cut beats a busy plate. I scope MVPs the same way: trim anything that doesn't earn its place.",
    code: ["const mvp = backlog", "  .filter(f => f.impact > f.effort)", "  .slice(0, 3);"],
  },
  {
    id: "rail",
    station: "THE LINE",
    label: "TICKET RAIL",
    skill: "BACKLOG FLOW",
    title: "Fire in the right order",
    file: "rail.js",
    body: "Tickets on the rail go out in the order the table needs them. A backlog works the same way.",
    code: ["rail.sort(byPriority);", "rail.forEach(ticket => fire(ticket));"],
  },
  {
    id: "mise",
    station: "THE LINE",
    label: "MISE EN PLACE",
    skill: "SPRINT PLANNING",
    title: "Everything in its place",
    file: "sprint.js",
    body: "Prep before service, not during it. Clear requirements and a groomed board make a sprint feel calm.",
    code: ["sprint.plan({", "  prepFirst: true,", "  blockers: resolveBefore(kickoff),", "});"],
  },
  {
    id: "timer",
    station: "THE LINE",
    label: "KITCHEN TIMER",
    skill: "DEADLINES & PACE",
    title: "Everything is due at 7:15",
    file: "launch.js",
    body: "Service doesn't move. I learned to pace a team toward a fixed moment and still plate something good.",
    code: ["setTimeout(ship, launchDay);", "// no burnt edges"],
  },
  {
    id: "pan",
    station: "THE LINE",
    label: "SAUTÉ PAN",
    skill: "CALM UNDER HEAT",
    title: "Six pans, one pair of hands",
    file: "service.js",
    body: "Large-scale corporate catering for clients like Goldman Sachs and Google is multitasking with consequences. Now it is juggling engineering, design and community ops without dropping one.",
    code: ["await Promise.all([", "  design, engineering, communityOps", "]);"],
  },
];

// 02 Kitchen History.
export const KITCHEN_HISTORY: HistoryEntry[] = [
  {
    when: "2016",
    title: "Culinary Arts",
    org: "High School of Hospitality Management · 2016–2020",
    body: "Where the kitchen instincts started: prep, timing, food safety and working a line as a team.",
  },
  {
    when: "2022",
    title: "Culinary Arts Freelancer",
    org: "Jitjatjo · 2022–2024",
    body: "Large-scale events and corporate catering for clients like Goldman Sachs and Google.",
  },
  {
    when: "AUG ’25",
    title: "Head Chef",
    org: "Steve's Camp at Horizon Farms · Livingston Manor, NY",
    body: "Ran the kitchen for a summer camp and mentored youth along the way.",
  },
  {
    when: "CERT",
    title: "Food Protection Certification",
    org: "Kitchen-certified · yes, chef",
    body: "Food safety and kitchen operations, certified.",
  },
];
