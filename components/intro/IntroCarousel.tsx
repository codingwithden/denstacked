"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type MouseEvent, type WheelEvent } from "react";
import { DOORS, INTRO } from "@/content/intro";

const N = DOORS.length;
const pad = (i: number) => `0${i}`;

// Intrinsic sizes of the cut-out PNGs (for next/image).
const SIZES: Record<string, [number, number]> = {
  "/images/iced-latte.png": [700, 967],
  "/images/drink-cold-brew.png": [261, 396],
  "/images/drink-caramel-macchiato.png": [292, 421],
  "/images/drink-matcha.png": [277, 423],
  "/images/drink-tiramisu-latte.png": [297, 414],
  "/images/drink-mocha.png": [313, 418],
  "/images/drink-iced-latte.png": [273, 436],
};

/** Cup height and carousel step for the viewport (same math as the prototype). */
function measure(w: number, h: number) {
  const fit = Math.max(260, h - (w < 700 ? 360 : 330));
  const cup = w < 700 ? Math.round(Math.min(320, w * 0.8, fit)) : Math.round(Math.min(520, fit));
  return { cup, step: Math.round(cup * (w < 700 ? 0.36 : 0.4)) };
}

export default function IntroCarousel() {
  const [active, setActive] = useState(0);
  const [spinning, setSpinning] = useState(true);
  const [hover, setHover] = useState(-1);
  const [toast, setToast] = useState("");
  const [size, setSize] = useState(() => measure(1440, 960));
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const lastWheel = useRef(0);

  const go = useCallback((i: number) => setActive(((i % N) + N) % N), []);

  // Slot-machine spin: two full turns that slow down and land on "Go to website".
  // Only schedules timers; state changes happen in their callbacks.
  const schedule = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      timers.current.push(setTimeout(() => setSpinning(false), 0));
      return;
    }
    const k = N * 2;
    let t = 0;
    for (let j = 1; j <= k; j++) {
      t += 55 + 480 * Math.pow(j / k, 2.6);
      timers.current.push(
        setTimeout(() => {
          setActive(j % N);
          setSpinning(j < k);
        }, 900 + t),
      );
    }
  }, []);

  const replay = () => {
    setHover(-1);
    setActive(0);
    setSpinning(true);
    schedule();
  };

  useEffect(() => {
    const onResize = () => setSize(measure(window.innerWidth, window.innerHeight));
    const frame = requestAnimationFrame(onResize);
    schedule();
    window.addEventListener("resize", onResize);
    const pending = timers;
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      pending.current.forEach(clearTimeout);
      clearTimeout(toastTimer.current);
    };
  }, [schedule]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (spinning) return;
      if (e.key === "ArrowRight") go(active + 1);
      if (e.key === "ArrowLeft") go(active - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, spinning, go]);

  const showToast = (msg: string) => {
    clearTimeout(toastTimer.current);
    setToast(msg);
    toastTimer.current = setTimeout(() => setToast(""), 3200);
  };

  const onWheel = (e: WheelEvent) => {
    if (spinning) return;
    const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    const now = Date.now();
    if (now - lastWheel.current < 420 || Math.abs(d) < 8) return;
    lastWheel.current = now;
    go(active + (d > 0 ? 1 : -1));
  };

  const { cup: H, step: W } = size;
  const door = DOORS[active];
  const dur = spinning ? ".16s linear" : ".65s cubic-bezier(.2,.9,.2,1)";

  return (
    <div className="intro-bg relative flex min-h-screen w-full flex-col items-center overflow-hidden px-4 pt-3.5 pb-[18px]">
      <div className="flex w-full max-w-[1240px] items-center justify-between gap-3">
        <span className="choed text-[15px] tracking-[.06em]">DMF</span>
        <div className="flex gap-2">
          <button type="button" className="intro-ghost" onClick={replay}>
            {INTRO.replay}
          </button>
          <Link className="intro-ghost" href="/work">
            {INTRO.skip}
          </Link>
        </div>
      </div>

      <header className="relative z-[3] mt-0.5 flex flex-col items-center gap-1.5 text-center">
        <h1
          className="intro-drop m-0 flex flex-wrap items-baseline justify-center gap-x-[.35em] leading-none"
          style={{ animationDelay: ".3s" }}
        >
          <span className="vg text-[clamp(38px,4.6vw,64px)] tracking-[-.02em]">{INTRO.title}</span>
          <span className="script text-[clamp(44px,5.2vw,72px)]">{INTRO.script}</span>
        </h1>
        <div
          className="intro-drop flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5"
          style={{ animationDelay: ".9s" }}
        >
          <span className="text-[clamp(12px,1.2vw,14px)] opacity-90">
            Founder of{" "}
            {INTRO.founderOf.map((name, i) => (
              <span key={name}>
                {i > 0 && " · "}
                <strong>{name}</strong>
              </span>
            ))}
          </span>
          <span className="choed rounded-full border border-cream/40 px-3 py-[5px] text-xs tracking-[.06em]">
            {INTRO.role}
          </span>
        </div>
      </header>

      {/* carousel */}
      <div className="relative mt-1 flex w-screen max-w-[1240px] items-center justify-center">
        <button
          type="button"
          className="intro-arrow left-3"
          onClick={() => !spinning && go(active - 1)}
          aria-label="Previous order"
        >
          <Chevron d="m15 6-6 6 6 6" />
        </button>
        <div
          className="intro-track relative w-full overflow-hidden"
          style={{ height: H + 30 }}
          onWheel={onWheel}
        >
          <span aria-hidden="true" className="intro-glow" />
          {DOORS.map((d, i) => {
            let off = (((i - active) % N) + N) % N;
            if (off > N / 2) off -= N;
            const a = Math.abs(off);
            const scale = off === 0 ? 1 : Math.max(0.56, 0.8 - (a - 1) * 0.12);
            let op = off === 0 ? 1 : a === 1 ? 0.5 : a === 2 ? 0.22 : a === 3 ? 0.08 : 0;
            const faded = !spinning && hover !== -1 && hover !== i;
            if (faded) op *= 0.4;
            const blur = a * 1.2 + (faded ? 2.5 : 0);
            const [iw, ih] = SIZES[d.img] ?? [300, 450];
            return (
              <button
                key={d.title}
                type="button"
                className={`intro-slot${off === 0 && !spinning ? " is-center" : ""}`}
                aria-label={`${off === 0 ? "Current order" : "Show order"} #${pad(i + 1)}: ${d.title}`}
                tabIndex={a > 1 ? -1 : 0}
                onClick={() => !spinning && go(i)}
                onMouseEnter={() => !spinning && setHover(i)}
                onMouseLeave={() => setHover(-1)}
                onFocus={() => !spinning && setHover(i)}
                onBlur={() => setHover(-1)}
                style={{
                  transform: `translate(-50%,-50%) translateX(${off * W}px) rotateY(${off * -12}deg) scale(${scale})`,
                  opacity: op,
                  filter: `blur(${blur}px)${faded ? " saturate(.6)" : ""}`,
                  zIndex: hover === i ? 20 : 10 - a,
                  transition: `transform ${dur}, opacity ${dur}, filter ${dur}`,
                  pointerEvents: a > 2 ? "none" : "auto",
                }}
              >
                <span className="intro-cup">
                  <Image
                    src={d.img}
                    alt=""
                    width={iw}
                    height={ih}
                    priority={i === 0}
                    style={{ height: H, width: "auto", maxWidth: Math.round(H * 0.8) }}
                  />
                </span>
              </button>
            );
          })}
        </div>
        <button
          type="button"
          className="intro-arrow right-3"
          onClick={() => !spinning && go(active + 1)}
          aria-label="Next order"
        >
          <Chevron d="m9 6 6 6-6 6" />
        </button>
      </div>

      {/* cup label */}
      <div
        className="relative z-[5] -mt-1.5 flex min-h-24 w-full max-w-[760px] flex-col items-center text-center"
        aria-live="polite"
      >
        {spinning ? (
          <span className="script text-[40px] leading-none">{INTRO.spinning}</span>
        ) : (
          <div key={active} className="intro-fade-up flex flex-col items-center gap-2">
            <div className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-2">
              <span className="choed rounded-full border border-cream/45 px-3 py-[5px] text-[13px] tracking-[.06em]">
                Order #{pad(active + 1)} <span className="opacity-55">/ #{pad(N)}</span>
              </span>
              <span className="vg text-[clamp(26px,3vw,38px)] leading-none">{door.title}</span>
              {door.soon ? (
                <a
                  className="intro-go"
                  href="#"
                  onClick={(e: MouseEvent) => {
                    e.preventDefault();
                    showToast(INTRO.soonToast);
                  }}
                >
                  {door.cta}{" "}
                  <span className="intro-go-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              ) : (
                <Link className="intro-go" href={door.href}>
                  {door.cta}{" "}
                  <span className="intro-go-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              )}
            </div>
            <span className="max-w-[560px] text-sm leading-normal opacity-85">{door.desc}</span>
          </div>
        )}
      </div>

      {/* quick glance */}
      <nav
        aria-label="Quick glance"
        className="mt-2.5 flex w-full max-w-[1100px] flex-wrap items-center justify-center gap-1.5"
      >
        <span className="mr-1.5 text-[11px] font-bold tracking-[.2em]">
          {INTRO.quickGlance}{" "}
          <span className="intro-bob inline-block" aria-hidden="true">
            →
          </span>
        </span>
        {DOORS.map((d, i) => {
          const on = i === active && !spinning;
          return (
            <button
              key={d.title}
              type="button"
              className={`intro-chip${on ? " is-on" : ""}`}
              aria-current={on ? "true" : undefined}
              onClick={() => !spinning && go(i)}
            >
              <span className="font-bold opacity-60">#{pad(i + 1)}</span> {d.title}
            </button>
          );
        })}
      </nav>

      {toast && (
        <div className="pointer-events-none fixed inset-x-0 bottom-7 z-[60] flex justify-center px-4">
          <div
            role="status"
            className="intro-fade-up w-[420px] max-w-full rounded-xl bg-cream px-5 py-3.5 text-center text-[13px] font-semibold text-deep shadow-[0_14px_30px_rgba(0,0,0,.4)]"
          >
            {toast}
          </div>
        </div>
      )}
    </div>
  );
}

function Chevron({ d }: { d: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
