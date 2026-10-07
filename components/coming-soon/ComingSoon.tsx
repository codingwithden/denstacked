import LanyardBadge from "@/components/about/LanyardBadge";
import { COVER, COVER_BADGE } from "@/content/comingSoon";

/** Full-screen "launching soon" cover: Den's photo ID badge on the left, name and roles on the right. */
export default function ComingSoon() {
  return (
    <main className="cover">
      <section className="cover-inner">
        <LanyardBadge info={COVER_BADGE} photo={COVER.photo} photoAlt={COVER.photoAlt} />
        <div className="cover-copy fade-up">
          <h1 className="cover-name">
            {COVER.name}
            <span className="cover-handle">{COVER.handle}</span>
          </h1>
          <p className="cover-roles">{COVER.roles}</p>
          <p className="cover-soon">
            {COVER.soon}
            <span className="cover-dots" aria-hidden="true">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </p>
          <a className="cover-mail" href={`mailto:${COVER.email}`}>
            {COVER.emailLabel} → {COVER.email}
          </a>
        </div>
      </section>
    </main>
  );
}
