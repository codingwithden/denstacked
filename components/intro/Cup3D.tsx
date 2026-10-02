import Image from "next/image";
import type { CSSProperties } from "react";

interface Props {
  src: string;
  /** Intrinsic PNG size, for next/image. */
  width: number;
  height: number;
  /** Rendered cup height in px. */
  cupHeight: number;
  priority?: boolean;
}

/**
 * A cut-out drink made to feel 3D: it tilts toward the pointer (via CSS vars set
 * on the carousel stage), catches a glossy highlight clipped to its own
 * silhouette, floats over a soft contact shadow and sits on a faded reflection.
 */
export default function Cup3D({ src, width, height, cupHeight, priority }: Props) {
  const imgStyle = { height: cupHeight, width: "auto", maxWidth: Math.round(cupHeight * 0.8) };
  const mask = `url(${src})`;

  return (
    <span
      className="cup3d-wrap"
      style={{ "--reflect": `${Math.round(cupHeight * 0.18)}px` } as CSSProperties}
    >
      <span className="cup3d-float">
        <span className="cup3d">
          <Image src={src} alt="" width={width} height={height} priority={priority} style={imgStyle} />
          <span
            aria-hidden="true"
            className="cup3d-sheen"
            style={{ maskImage: mask, WebkitMaskImage: mask }}
          />
        </span>
      </span>
      <span aria-hidden="true" className="cup3d-shadow" />
      <span aria-hidden="true" className="cup3d-reflect">
        <Image src={src} alt="" width={width} height={height} style={imgStyle} />
      </span>
    </span>
  );
}
