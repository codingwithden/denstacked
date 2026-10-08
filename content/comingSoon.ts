import type { BadgeInfo } from "@/components/about/LanyardBadge";

/**
 * "Launching soon" cover.
 * While COMING_SOON is true, every page on the live site shows the cover instead.
 * To launch the full site, set this to false (or delete the line) and push.
 * To preview the full site locally while the cover is on, run:
 *   Windows (cmd):  set SHOW_FULL_SITE=true&& npm run dev
 *   Mac / Linux:    SHOW_FULL_SITE=true npm run dev
 */
export const COMING_SOON = process.env.SHOW_FULL_SITE !== "true";

export const COVER = {
  first: "Denisse",
  last: "Medina Flores",
  handle: "(Denstacked)",
  roles: "Founder @ Work & Brew, Small Business Owner & Product Manager @ DDD Social Media Agency",
  soon: "LAUNCHING SOON",
  side: "BRONX · NYC · NO. 001",
  photo: "/images/den-badge.png",
  photoAlt: "Denisse smiling and throwing up a peace sign",
};

export const COVER_BADGE: BadgeInfo = {
  top: "DENSTACKED",
  no: "NO. 001",
  first: "Denisse",
  last: "Medina Flores",
  currentlyLabel: "CURRENTLY",
  currently: "Founder @ Work & Brew",
  role: "Product Manager @ DDD Social Media Agency",
  alsoLabel: "ALSO RUNNING",
  also: ["Small Business Owner", "Hybrid Athlete Training '27"],
  place: "BRONX · NYC",
  hint: "grab my badge ↗",
  aria: "Den's ID badge. Drag it or press Enter to give it a swing.",
};
