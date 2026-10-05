"use client";

import { useEffect, useRef, type KeyboardEvent, type PointerEvent } from "react";
import { BADGE } from "@/content/about";

interface Body {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  vr: number;
  drag: boolean;
  ox: number;
  oy: number;
}

const ANCHOR_Y = -50;
const CARD_HALF_W = 115;

/**
 * Den's staff badge hanging from a lanyard. Drag and throw it; the rope can go
 * slack but never stretches, and the card tilts with the swing. Enter / Space
 * gives it a nudge. Physics writes straight to the DOM (no re-render per frame)
 * and the loop sleeps once the badge settles.
 */
export default function LanyardBadge() {
  const stage = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const strandA = useRef<SVGPathElement>(null);
  const strandB = useRef<SVGPathElement>(null);
  const strandC = useRef<SVGPathElement>(null);
  const body = useRef<Body>({ x: 0, y: 0, vx: 0, vy: 0, r: 0, vr: 0, drag: false, ox: 0, oy: 0 });
  const wake = useRef<() => void>(() => {});

  useEffect(() => {
    const st = stage.current!;
    const b = body.current;
    let raf = 0;
    let running = false;
    let last = 0;

    const ropeLen = () => Math.min(240, Math.max(180, st.clientHeight - 360));

    const step = (dt: number) => {
      const W = st.clientWidth;
      const ax = W / 2;
      const L = ropeLen();
      if (!b.drag) {
        b.vy += 0.75 * dt;
        const damp = Math.pow(0.993, dt);
        b.vx *= damp;
        b.vy *= damp;
        b.x += b.vx * dt;
        b.y += b.vy * dt;
      }
      // Rope can go slack, but never longer than L.
      let dx = b.x - ax;
      let dy = b.y - ANCHOR_Y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d > L) {
        const nx = dx / d;
        const ny = dy / d;
        b.x = ax + nx * L;
        b.y = ANCHOR_Y + ny * L;
        const vn = b.vx * nx + b.vy * ny;
        if (vn > 0) {
          b.vx -= vn * nx * 1.05;
          b.vy -= vn * ny * 1.05;
        }
        dx = b.x - ax;
        dy = b.y - ANCHOR_Y;
      }
      // Soft walls.
      const pad = 70;
      if (b.x < pad) {
        b.x = pad;
        if (b.vx < 0) b.vx *= -0.5;
      }
      if (b.x > W - pad) {
        b.x = W - pad;
        if (b.vx > 0) b.vx *= -0.5;
      }
      if (b.y < -40) {
        b.y = -40;
        if (b.vy < 0) b.vy *= -0.4;
      }
      // The card follows the rope's angle with a little lag, plus swing from motion.
      let target = -Math.atan2(dx, Math.max(1, dy)) * 57.3;
      if (d < L * 0.92) target *= 0.4;
      b.vr += ((target - b.r) * 0.05 - b.vx * 0.05) * dt;
      b.vr *= Math.pow(0.86, dt);
      b.r = Math.max(-75, Math.min(75, b.r + b.vr * dt));
      const energy = Math.abs(b.vx) + Math.abs(b.vy) + Math.abs(b.vr) + Math.abs(target - b.r) * 0.1;
      return energy > 0.06 || d < L - 0.5;
    };

    const draw = () => {
      const W = st.clientWidth;
      const ax = W / 2;
      const L = ropeLen();
      card.current!.style.transform = `translate(${(b.x - CARD_HALF_W).toFixed(1)}px,${b.y.toFixed(1)}px) rotate(${b.r.toFixed(2)}deg)`;
      const rr = b.r / 57.3;
      const ex = b.x + Math.sin(rr) * 26;
      const ey = b.y - Math.cos(rr) * 26;
      const dx = ex - ax;
      const dy = ey - ANCHOR_Y;
      const sag = Math.max(0, L - Math.sqrt(dx * dx + dy * dy)) * 0.7;
      const top = ANCHOR_Y - 60;
      const path = (sx: number) => {
        const mx = (sx + ex) / 2;
        const my = (top + ey) / 2 + sag;
        return `M${sx.toFixed(1)} ${top} Q${mx.toFixed(1)} ${my.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`;
      };
      strandA.current!.setAttribute("d", path(ax - 44));
      strandB.current!.setAttribute("d", path(ax + 44));
      strandC.current!.setAttribute("d", path(ax - 44));
    };

    const frame = (t: number) => {
      if (!running) return;
      const dt = last ? Math.min(2.5, (t - last) / 16.67) : 1;
      last = t;
      const moving = step(dt);
      draw();
      if (moving || b.drag) raf = requestAnimationFrame(frame);
      else running = false;
    };

    wake.current = () => {
      if (running) return;
      running = true;
      last = 0;
      raf = requestAnimationFrame(frame);
    };

    // Swing in from the side on load (or hang still with reduced motion).
    const W = st.clientWidth;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      Object.assign(b, { x: W / 2, y: ropeLen(), vx: 0, vy: 0, r: 0, vr: 0 });
    } else {
      Object.assign(b, { x: W / 2 - 70, y: 150, vx: 7, vy: 0, r: 14, vr: 0 });
    }
    wake.current();

    const onResize = () => wake.current();
    window.addEventListener("resize", onResize);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    const st = stage.current;
    if (!st) return;
    e.preventDefault();
    const b = body.current;
    const rect = st.getBoundingClientRect();
    b.drag = true;
    b.ox = e.clientX - rect.left - b.x;
    b.oy = e.clientY - rect.top - b.y;
    b.vx = 0;
    b.vy = 0;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* not supported */
    }
    const move = (ev: globalThis.PointerEvent) => {
      const r = st.getBoundingClientRect();
      const nx = ev.clientX - r.left - b.ox;
      const ny = ev.clientY - r.top - b.oy;
      b.vx = b.vx * 0.5 + (nx - b.x) * 0.5;
      b.vy = b.vy * 0.5 + (ny - b.y) * 0.5;
      b.x = nx;
      b.y = ny;
    };
    const up = () => {
      b.drag = false;
      b.vx = Math.max(-38, Math.min(38, b.vx));
      b.vy = Math.max(-38, Math.min(38, b.vy));
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
      wake.current();
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    wake.current();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault();
    const b = body.current;
    b.vx += (Math.random() < 0.5 ? -1 : 1) * 16;
    b.vy -= 6;
    wake.current();
  };

  return (
    <div ref={stage} className="badge-stage">
      <svg className="badge-rope" aria-hidden="true">
        <path ref={strandA} d="" fill="none" stroke="#F8F1E7" strokeWidth="10" strokeLinecap="round" />
        <path ref={strandB} d="" fill="none" stroke="#F8F1E7" strokeWidth="10" strokeLinecap="round" />
        <path
          ref={strandC}
          d=""
          fill="none"
          stroke="#5B0F18"
          strokeWidth="1.5"
          strokeDasharray="2 5"
          opacity=".7"
        />
      </svg>
      <div
        ref={card}
        className="badge"
        role="button"
        tabIndex={0}
        aria-label={BADGE.aria}
        onPointerDown={onPointerDown}
        onKeyDown={onKeyDown}
      >
        <svg className="hook" viewBox="0 0 18 34" aria-hidden="true">
          <rect x="5" y="0" width="8" height="12" rx="3" fill="#F8F1E7" stroke="rgba(0,0,0,.35)" />
          <path
            d="M9 12 v6 a6 6 0 1 0 6 6"
            fill="none"
            stroke="#F8F1E7"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path d="M9 12 v6 a6 6 0 1 0 6 6" fill="none" stroke="rgba(0,0,0,.3)" strokeWidth="1" />
        </svg>
        <div className="sleeve">
          <div className="badge-card">
            <div className="mono flex justify-between text-[8.5px] font-semibold tracking-[.14em] opacity-75">
              <span>{BADGE.top}</span>
              <span>{BADGE.no}</span>
            </div>
            <div className="mt-2.5 leading-[.86]">
              <div className="font-headline text-[46px] tracking-[-.02em]">{BADGE.first}</div>
              <div className="mt-1 pl-1.5 font-script text-[29px] whitespace-nowrap text-wine">
                {BADGE.last}
              </div>
            </div>
            <div className="flex-1" />
            <div className="mono text-[8px] tracking-[.16em] opacity-60">{BADGE.currentlyLabel}</div>
            <div className="text-[11.5px] leading-[1.3] font-bold">
              {BADGE.currently}
              <br />
              <span className="font-medium">{BADGE.role}</span>
            </div>
            <div className="mono mt-1 text-[8px] tracking-[.16em] opacity-60">{BADGE.alsoLabel}</div>
            <div className="flex flex-wrap gap-[5px]">
              {BADGE.also.map((a, i) => (
                <span
                  key={a}
                  className={`rounded-full px-2 py-[3px] text-[8.5px] font-bold tracking-[.04em] text-cream ${i ? "bg-wine" : "bg-deep"}`}
                >
                  {a}
                </span>
              ))}
            </div>
            <div className="mt-1.5 flex items-center gap-2 border-t border-dashed border-deep/30 pt-2">
              <span aria-hidden="true" className="badge-barcode h-4 flex-1" />
              <span className="mono text-[8px] font-semibold tracking-[.12em]">{BADGE.place}</span>
            </div>
          </div>
        </div>
      </div>
      <span className="badge-hint" aria-hidden="true">
        {BADGE.hint}
      </span>
    </div>
  );
}
