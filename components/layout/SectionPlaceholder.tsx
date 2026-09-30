import type { SectionCopy } from "@/content/pages";

/** Stand-in for a section that hasn't been built yet. Keeps page structure and anchors in place. */
export default function SectionPlaceholder({ id, kicker, heading, todo }: SectionCopy) {
  return (
    <section id={id} className="flex w-full max-w-[1120px] scroll-mt-24 flex-col gap-2 px-4 pt-[120px]">
      <span className="kicker opacity-80">{kicker}</span>
      {heading && (
        <h2 className="headline m-0">
          {heading.before}
          {heading.em && <em>{heading.em}</em>}
          {heading.after}
        </h2>
      )}
      <p className="mono m-0 mt-4 rounded-xl border-[1.5px] border-dashed border-cream/40 p-5 text-sm text-cream/80">
        {todo}
      </p>
    </section>
  );
}
