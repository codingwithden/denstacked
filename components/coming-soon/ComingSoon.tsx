import LanyardBadge from "@/components/about/LanyardBadge";
import CoverMusicButton from "@/components/music/CoverMusicButton";
import { COVER, COVER_BADGE } from "@/content/comingSoon";

/**
 * Full-screen "launching soon" cover: a wine panel with Den's photo ID badge
 * on the left, her name and roles on cream to the right (stacks on phones).
 */
export default function ComingSoon() {
  return (
    <main className="cover">
      <section className="cover-badge">
        <LanyardBadge info={COVER_BADGE} photo={COVER.photo} photoAlt={COVER.photoAlt} />
        <CoverMusicButton />
        <span className="cover-side" aria-hidden="true">
          {COVER.side}
        </span>
      </section>
      <section className="cover-copy fade-up">
        <h1 className="cover-name">
          <span className="cover-first">{COVER.first}</span>
          <span className="cover-last">{COVER.last}</span>
          <span className="cover-handle">{COVER.handle}</span>
        </h1>
        <p className="cover-roles">{COVER.roles}</p>
        <p className="cover-soon">
          <span className="cover-dot" aria-hidden="true" />
          {COVER.soon}
        </p>
      </section>
    </main>
  );
}
