// Deterministic CSS skyline, ported from makeSkyline() in the prototype.
// Seeded so server and client render the same buildings.

export function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export interface Building {
  width: number;
  height: number;
  spire: boolean;
  tower: boolean;
  spireHeight: number;
  /** Negative animation delay for the twinkling windows, in seconds. */
  twinkleDelay: string;
}

export function makeSkyline(seed: number, count: number, maxH: number): Building[] {
  const r = rng(seed);
  const out: Building[] = [];
  for (let i = 0; i < count; i++) {
    const width = 34 + Math.floor(r() * 52);
    const height = 50 + Math.floor(r() * maxH);
    const spire = r() > 0.8;
    const tower = !spire && r() > 0.72;
    const twinkleDelay = (r() * 5).toFixed(2);
    const spireHeight = 22 + Math.floor(r() * 30);
    out.push({ width, height, spire, tower, spireHeight, twinkleDelay });
  }
  return out;
}
