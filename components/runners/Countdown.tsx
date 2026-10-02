"use client";

import { useSyncExternalStore } from "react";
import { MARATHON_DATE_UTC } from "@/content/about";
import { COUNTDOWN_LABEL } from "@/content/runners";

// Re-check once a minute; the server render shows a dash until the client takes over.
const subscribe = (cb: () => void) => {
  const id = setInterval(cb, 60_000);
  return () => clearInterval(id);
};
const daysLeft = () => Math.max(0, Math.ceil((MARATHON_DATE_UTC - Date.now()) / 86_400_000));

/** Days until the TCS NYC Marathon, Nov 7, 2027. */
export default function Countdown() {
  const days = useSyncExternalStore(subscribe, daysLeft, () => null);

  return (
    <div className="rounded-[18px] bg-deep px-[22px] py-4 text-center text-cream outline-[1.5px] -outline-offset-[1.5px] outline-cream/25 outline-solid">
      <span className="retro block text-[54px] leading-none">{days ?? "—"}</span>
      <div className="text-[11px] font-bold tracking-[.16em] opacity-80">{COUNTDOWN_LABEL}</div>
    </div>
  );
}
