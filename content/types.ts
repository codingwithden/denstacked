// Shared types for the typed content files. Copy in /content is ported verbatim
// from reference/prototype. Anything in [BRACKETS] is a placeholder Den still fills.

export type PageId = "work" | "about" | "kitchen" | "content" | "running" | "resources";

export interface NavItem {
  id: PageId;
  idx: string;
  label: string;
  href: string;
}

export interface UpNextCopy {
  href: string;
  title: string;
  blurb: string;
}

export interface Link {
  label: string;
  href: string;
}

// ------------------------------------------------------------------ Work

export type ProjectCategory = "zero" | "code" | "growth" | "bi";
export type FilterId = "all" | ProjectCategory;

export interface ProjectMeta {
  k: string;
  v: string;
}

export interface CaseSection {
  n: string;
  title: string;
  body: string;
  bullets: string[];
  /** Shows the grade-adaptation simulator slot (build plan phase 7). */
  sim?: boolean;
}

export interface Project {
  id: string;
  num: string;
  title: string;
  stamp: string;
  cats: ProjectCategory[];
  /** Links to the café finder demo from the drawer. */
  demo?: boolean;
  sub: string;
  meta: ProjectMeta[];
  sections: CaseSection[];
}

export interface Filter {
  id: FilterId;
  label: string;
}

export interface HeroStat {
  v: string;
  k: string;
}

export interface MenuItem {
  name: string;
  tag?: string;
  note?: string;
}

export interface MenuTab {
  id: string;
  label: string;
  tagline: string;
  /** House Tools renders as a tag cloud instead of a list. */
  tools?: boolean;
  items: MenuItem[];
}

export interface Stop {
  when: string;
  short: string;
  title: string;
  org: string;
  body: string;
  skills: string[];
}

export type AmenityId = "wifi" | "outlets" | "quiet" | "restroom" | "food" | "matcha";

export interface Amenity {
  id: AmenityId;
  label: string;
}

export interface Cafe {
  id: number;
  name: string;
  hood: string;
  /** Pin position on the illustrative map, in percent. */
  x: number;
  y: number;
  has: AmenityId[];
  vibe: string;
}

export interface Cert {
  short: string;
  name: string;
  issuer: string;
  covers: string;
}

export interface Tool {
  id: string;
  station: string;
  label: string;
  skill: string;
  title: string;
  file: string;
  body: string;
  code: string[];
}

export interface FileTab {
  id: string;
  label: string;
  peek: string;
  side: "left" | "right";
  /** Which of the three colors the folder tab uses. */
  tone: "cream" | "wine";
}

export interface DiaryEntry {
  when: string;
  text: string;
}

export interface Goal {
  label: string;
  status: string;
}

export interface Word {
  w: string;
  line: string;
}

export interface Sticker {
  f: string;
  b: string;
}

export interface Step {
  label: string;
  coffee: string;
  img: string;
  body: string;
  points: string[];
}

// ----------------------------------------------------------------- About

export interface Leg {
  name: string;
  abbr: string;
  miles: string;
  len: number;
  note: string;
  color: "wine" | "deep" | "cream";
}

export interface Cause {
  kicker: string;
  title: string;
  front: string;
  back: string;
  bg: "deep" | "cream" | "wine";
  dashed?: boolean;
}

export interface Habit {
  label: string;
  sub: string;
  time: string;
}

export interface Shift {
  id: "am" | "pm";
  label: string;
  name: string;
  stamp: string;
  items: Habit[];
}

export interface Book {
  title: string;
  author: string;
  spine: string;
  note: string;
  color: "cream" | "wine";
  /** Spine height in px. */
  h: number;
}

export interface Language {
  hi: string;
  name: string;
  level: string;
}

// ------------------------------------------------------ Kitchen / Content

export interface HistoryEntry {
  when: string;
  title: string;
  org: string;
  body: string;
}

export interface Drink {
  name: string;
  img: string;
  series: string;
  desc: string;
  tags: string[];
}

export interface Story {
  brand: string;
  kicker: string;
  title: string;
  short: string;
  body: string;
  chips: string[];
  metric: string;
  kind: "lemon" | "love" | "tiles";
}

export interface PastryItem {
  tag: string;
  name: string;
  note: string;
}

// ---------------------------------------------------------- About: timeline

export interface TimelineItem {
  when: string;
  title: string;
  org: string;
  body: string;
  tags: string[];
}

export interface TimelineYear {
  year: string;
  career: TimelineItem[];
  life: TimelineItem[];
}

// ------------------------------------------------------ About: typing test

export type TypingTopicId = "mix" | "coffee" | "product" | "running" | "kitchen" | "content";
export type TypingLevelId = "easy" | "hard" | "extra" | "extreme";

export interface TypingTopic {
  id: TypingTopicId;
  label: string;
  /** "Surprise me" has no phrases of its own; it mixes every topic. */
  phrases?: string[];
  /** Phrases with numbers and symbols, mixed in at harder levels. */
  spice?: string[];
}

export interface TypingLevel {
  id: TypingLevelId;
  label: string;
  /** Goal WPM for the level. */
  goal: number;
  /** Roughly how many words the phrase should have. */
  words: number;
  /** How many "spice" phrases to mix in. */
  spice: number;
  note: string;
}
