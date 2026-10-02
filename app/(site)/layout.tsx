import type { ReactNode } from "react";
import ScrollOmbre from "@/components/layout/ScrollOmbre";
import SiteNav from "@/components/layout/SiteNav";

/** Every page except the intro: scroll ombre, progress bar and the pill nav. */
export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollOmbre />
      <SiteNav />
      {children}
    </>
  );
}
