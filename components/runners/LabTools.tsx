"use client";

import { useRef, useState } from "react";
import { LAB, LAB_COPY } from "@/content/runners";

/**
 * 03 In the lab: upcoming tools with a "Notify me" toggle.
 * Note: sign-ups aren't stored or sent anywhere yet (backend comes later).
 */
export default function LabTools() {
  const [joined, setJoined] = useState<number[]>([]);
  const [toast, setToast] = useState("");
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const toggle = (i: number) => {
    const on = joined.includes(i);
    setJoined(on ? joined.filter((x) => x !== i) : [...joined, i]);
    if (!on) {
      clearTimeout(toastTimer.current);
      setToast(LAB_COPY.toast);
      toastTimer.current = setTimeout(() => setToast(""), 3200);
    }
  };

  return (
    <section id="lab" className="flex w-full max-w-[1120px] scroll-mt-24 flex-col gap-[22px] px-4 pt-[120px]">
      <div className="flex flex-col gap-2">
        <span className="kicker opacity-80">{LAB_COPY.kicker}</span>
        <h2 className="headline m-0">
          {LAB_COPY.title}
          <em>{LAB_COPY.em}</em>
        </h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[18px]">
        {LAB.map((l, i) => {
          const on = joined.includes(i);
          return (
            <div
              key={i}
              className="lift relative flex flex-col gap-3 rounded-[20px] bg-cream p-[26px] text-deep"
            >
              <span className="-rotate-3 self-start border-2 border-wine px-2.5 py-1.5 text-[11px] font-bold tracking-[.14em]">
                {l.stage}
              </span>
              <span className="vg text-[28px] leading-[1.1]">{l.name}</span>
              <span className="text-sm leading-relaxed">{l.desc}</span>
              <button
                type="button"
                aria-pressed={on}
                onClick={() => toggle(i)}
                className={`mt-auto min-h-11 self-start rounded-full px-[18px] text-xs font-bold tracking-[.1em] ${
                  on ? "border-0 bg-wine text-cream" : "border-[1.5px] border-deep bg-transparent text-deep"
                }`}
              >
                {on ? LAB_COPY.joined : LAB_COPY.notify}
              </button>
            </div>
          );
        })}
      </div>

      {toast && (
        <div className="pointer-events-none fixed inset-x-0 bottom-7 z-[60] flex justify-center px-4">
          <div
            role="status"
            className="fade-up w-[400px] max-w-full rounded-xl bg-cream px-5 py-3.5 text-center text-[13px] font-semibold text-deep shadow-[0_14px_30px_rgba(0,0,0,.4)]"
          >
            {toast}
          </div>
        </div>
      )}
    </section>
  );
}
