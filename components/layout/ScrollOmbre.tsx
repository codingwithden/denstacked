"use client";

import { useEffect, useState } from "react";

const WINE = "#5B0F18";
const DEEP = "#3E000D";
const CREAM = "#F8F1E7";

function mix(a: string, b: string, t: number) {
  const pa = [1, 3, 5].map((i) => parseInt(a.slice(i, i + 2), 16));
  const pb = [1, 3, 5].map((i) => parseInt(b.slice(i, i + 2), 16));
  return `rgb(${pa.map((v, i) => Math.round(v + (pb[i] - v) * t)).join(",")})`;
}

/**
 * Site-wide fixed background + 4px progress bar. As scroll progress p goes
 * 0 → 1 the gradient darkens toward deep and a cream glow slides left → right.
 * Same math as scrollVals() in the prototype.
 */
export default function ScrollOmbre() {
  const [p, setP] = useState(0);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const d = document.documentElement;
      const max = Math.max(1, d.scrollHeight - window.innerHeight);
      const next = Math.min(1, Math.max(0, window.scrollY / max));
      setP((prev) => (Math.abs(next - prev) > 0.004 || next === 0 || next === 1 ? next : prev));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const base = mix(WINE, DEEP, p * 0.75);
  const light = mix(WINE, CREAM, 0.22 * (1 - p));
  const mid = Math.round(45 - p * 30);
  const glow = (0.1 * (1 - p)).toFixed(3);

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background: `radial-gradient(ellipse at ${Math.round(p * 100)}% 0%, rgba(248,241,231,${glow}), transparent 60%), linear-gradient(100deg, ${light} 0%, ${base} ${mid}%, ${DEEP} 100%)`,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-50 h-1 rounded-r"
        style={{
          width: `${(p * 100).toFixed(2)}%`,
          background: "linear-gradient(90deg, rgba(248,241,231,.35), #F8F1E7)",
        }}
      />
    </>
  );
}
