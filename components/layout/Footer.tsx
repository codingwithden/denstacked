import Link from "next/link";
import { COFFEE_CHAT_HREF, FOOTER, SOCIAL, TRAIN_CARS } from "@/content/site";
import type { PageId } from "@/content/types";
import { makeSkyline } from "@/lib/skyline";
import TipJar from "./TipJar";

const SKYLINE = makeSkyline(29, 44, 130);
const BUILDING_FILL = "rgba(0,0,0,.34)";

const primaryBtn =
  "brew inline-flex min-h-12 items-center rounded-full bg-cream px-6 py-3.5 text-[13px] font-bold tracking-[.08em] text-deep no-underline";

function Credit({ text }: { text: string }) {
  return <span className="text-xs tracking-[.1em] text-cream/60">{text}</span>;
}

function Skyline() {
  return (
    <div aria-hidden="true" className="flex h-[220px] w-full items-end overflow-hidden">
      {SKYLINE.map((b, i) => (
        <div
          key={i}
          className="relative mr-[3px] rounded-t-[2px]"
          style={{ flex: `0 0 ${b.width}px`, height: b.height, background: BUILDING_FILL }}
        >
          {b.spire && (
            <div
              className="absolute bottom-full left-1/2 -ml-[3px] w-1.5"
              style={{ height: b.spireHeight, background: BUILDING_FILL }}
            />
          )}
          {b.tower && (
            <div
              className="absolute bottom-full left-2 h-[18px] w-[18px]"
              style={{
                background: BUILDING_FILL,
                clipPath: "polygon(50% 0,100% 30%,100% 100%,0 100%,0 30%)",
              }}
            />
          )}
          <div
            className="win absolute top-2.5 right-[7px] bottom-0 left-[7px]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(248,241,231,.7) 1.2px, transparent 1.8px)",
              backgroundSize: "9px 12px",
              animationDelay: `-${b.twinkleDelay}s`,
            }}
          />
        </div>
      ))}
    </div>
  );
}

function Train() {
  return (
    <div aria-hidden="true" className="relative h-[70px] w-full overflow-hidden bg-deep">
      <div className="absolute top-11 right-0 left-0 h-1.5 bg-deep" />
      <div
        className="absolute top-[50px] right-0 left-0 h-5"
        style={{ backgroundImage: "repeating-linear-gradient(90deg, #3E000D 0 6px, transparent 6px 60px)" }}
      />
      <div className="train absolute top-2 left-0 flex gap-1">
        {TRAIN_CARS.map((label) => (
          <div
            key={label}
            className="box-border flex h-[34px] w-[140px] items-center justify-around rounded-t-md rounded-b-[3px] border-b-4 border-deep bg-wine px-2"
          >
            <span className="block h-3 w-[22px] rounded-[2px] bg-cream" />
            <span className="block h-3 w-[22px] rounded-[2px] bg-cream" />
            <span
              className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-cream font-bold text-deep"
              style={{ fontSize: label.length > 1 ? 9 : 12 }}
            >
              {label}
            </span>
            <span className="block h-3 w-[22px] rounded-[2px] bg-cream" />
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkFooter() {
  const f = FOOTER.work;
  return (
    <footer className="relative mt-[140px] flex w-full flex-col items-center">
      <div className="mb-[30px] flex flex-col items-center gap-4 px-4 text-center">
        <span className="font-hand text-[34px]">{f.note}</span>
        <h2 className="retro m-0 text-[clamp(38px,5vw,60px)] leading-[1.05]">
          {f.title}
          <br />
          <span className="script">{f.script}</span>
        </h2>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <a className={primaryBtn} href={COFFEE_CHAT_HREF}>
            EMAIL ME
          </a>
          {SOCIAL.map((s) => (
            <a key={s.label} className="ghost-btn min-h-12 px-5 py-3" href={s.href}>
              {s.label}
            </a>
          ))}
        </div>
        <TipJar />
      </div>
      <Skyline />
      <Train />
      <div className="w-full bg-deep px-4 pt-[18px] pb-7 text-center text-xs tracking-[.1em] text-cream/70">
        {FOOTER.workCredit}
      </div>
    </footer>
  );
}

function AboutFooter() {
  const f = FOOTER.about;
  return (
    <footer className="mt-[130px] flex w-full flex-col items-center gap-[18px] bg-deep px-4 pt-[60px] pb-10 text-center">
      <span className="font-hand text-[34px]">{f.note}</span>
      <h2 className="headline m-0">
        {f.title} <em>{f.em}</em>
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        <Link className={primaryBtn} href="/">
          SEE MY WORK
        </Link>
        <a className="ghost-btn min-h-12 px-5 py-3" href={COFFEE_CHAT_HREF}>
          BOOK A COFFEE CHAT
        </a>
      </div>
      <span className="mt-5">
        <Credit text={FOOTER.credit} />
      </span>
    </footer>
  );
}

function SimpleFooter({ script }: { script: string }) {
  return (
    <footer className="mt-[90px] flex w-full flex-col items-center gap-3 border-t border-cream/20 px-4 pt-[50px] pb-10 text-center">
      <span className="script text-[40px]">{script}</span>
      <Credit text={FOOTER.credit} />
    </footer>
  );
}

/** Each page closes with its own footer, as in the prototype. */
export default function Footer({ page }: { page: PageId }) {
  switch (page) {
    case "work":
      return <WorkFooter />;
    case "about":
      return <AboutFooter />;
    case "kitchen":
      return <SimpleFooter script={FOOTER.kitchen.script} />;
    case "content":
      return <SimpleFooter script={FOOTER.content.script} />;
    case "running":
      return <SimpleFooter script={FOOTER.running.script} />;
  }
}
