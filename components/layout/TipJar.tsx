"use client";

import { useState } from "react";
import { FOOTER } from "@/content/site";

/** "Compliments to the chef" tip counter on the Work footer. */
export default function TipJar() {
  const [tips, setTips] = useState(0);
  const msgs = FOOTER.work.tipMessages;

  return (
    <div className="mt-[18px] flex flex-wrap items-center justify-center gap-4">
      <button
        type="button"
        onClick={() => setTips((t) => t + 1)}
        className="brew min-h-[46px] rounded-full border-[1.5px] border-cream bg-deep px-5 py-3 text-xs font-bold tracking-[.12em] text-cream hover:text-deep"
      >
        {FOOTER.work.tipLabel} · {tips}
      </button>
      <span aria-live="polite">
        {tips > 0 && (
          <span key={tips} className="retro tip-pop inline-block text-[30px]">
            {msgs[tips % msgs.length]}
          </span>
        )}
      </span>
    </div>
  );
}
