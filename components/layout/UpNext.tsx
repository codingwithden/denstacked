import Link from "next/link";
import { UP_NEXT } from "@/content/site";
import type { PageId } from "@/content/types";

/** End-of-page card pointing to the next page, with an arrow that swings on hover. */
export default function UpNext({ page }: { page: PageId }) {
  const next = UP_NEXT[page];

  return (
    <section className="w-full max-w-[1120px] px-4 pt-[130px]">
      <Link className="next-card" href={next.href}>
        <span className="flex flex-col gap-2.5">
          <span className="kicker opacity-75">UP NEXT</span>
          <span className="headline" style={{ fontSize: "clamp(40px, 5.5vw, 72px)" }}>
            {next.title}
          </span>
          <span className="text-[15px] opacity-80">{next.blurb}</span>
        </span>
        <span className="next-arrow">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </span>
      </Link>
    </section>
  );
}
