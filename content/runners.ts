// Runner's Hub, ported verbatim from reference/prototype/Runners.dc.html.
// Keep [BRACKET] placeholders until Den fills them.

export type DistanceId = "5k" | "10k" | "half" | "full";

export interface RaceDistance {
  id: DistanceId;
  label: string;
  km: number;
  /** Goal-time slider range and default, in minutes. */
  min: number;
  max: number;
  def: number;
}

export interface LabTool {
  name: string;
  desc: string;
  stage: string;
}

export const DISTANCES: RaceDistance[] = [
  {
    id: "5k",
    label: "5K",
    km: 5,
    min: 15,
    max: 50,
    def: 28,
  },
  {
    id: "10k",
    label: "10K",
    km: 10,
    min: 32,
    max: 100,
    def: 58,
  },
  {
    id: "half",
    label: "HALF",
    km: 21.0975,
    min: 70,
    max: 210,
    def: 130,
  },
  {
    id: "full",
    label: "MARATHON",
    km: 42.195,
    min: 150,
    max: 390,
    def: 275,
  },
];

/** Den's marathon goal: 4:35 (275 min). */
export const GOAL_NOTE = {
  dist: "full" as DistanceId,
  minutes: 275,
  text: "That is my 4:35 marathon goal. Locked in.",
};

export const PACE = {
  kicker: "01 · TOOL",
  title: "Pace ",
  em: "calculator",
  distance: "DISTANCE",
  goal: "Goal time: ",
  perMile: "PER MILE",
  perKm: "PER KM",
  hint: "Drag the slider to set your goal.",
};

export const SPLITS = {
  kicker: "02 · TOOL",
  title: "Race-day ",
  em: "splits",
  every: " · every 5K",
  strategies: [
    { id: "even", label: "EVEN", note: "Even split: same pace the whole way." },
    { id: "neg", label: "NEGATIVE", note: "Negative split: start 2% easy, finish strong." },
  ],
  finish: "FINISH",
};

export const LAB_COPY = {
  kicker: "03 · IN THE LAB",
  title: "Tools in ",
  em: "progress",
  notify: "NOTIFY ME",
  joined: "ON THE LIST ✓",
  toast: "Noted! You will hear about it first.",
};

export const LAB: LabTool[] = [
  {
    name: "[TOOL YOU ARE BUILDING]",
    desc: "[What it does for runners, in one line.]",
    stage: "IN BUILD",
  },
  {
    name: "[SECOND TOOL]",
    desc: "[What problem it solves.]",
    stage: "PROTOTYPE",
  },
  {
    name: "[THIRD TOOL]",
    desc: "[Who it is for.]",
    stage: "IDEA",
  },
];

export const COUNTDOWN_LABEL = "DAYS TO NOV 7, 2027";
