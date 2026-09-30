import type { StrategyId } from "@/lib/pacing";

export const PACING = {
  defaultGoal: "4:35:00",
  strategies: [
    {
      id: "zones",
      label: "THREE-ZONE",
      note: "Miles 1–4 at 5 s/mi slower than goal pace, 5–22 right on goal pace, 23–26 at 5 s/mi faster. The easy start pays for the fast finish.",
    },
    {
      id: "even",
      label: "EVEN",
      note: "The same pace every mile, start to finish.",
    },
    {
      id: "negative",
      label: "NEGATIVE SPLIT",
      note: "First half 1% slower than goal pace, second half 1% faster.",
    },
  ] satisfies { id: StrategyId; label: string; note: string }[],
};
