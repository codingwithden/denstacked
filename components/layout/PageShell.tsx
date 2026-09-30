import type { ReactNode } from "react";
import type { PageId } from "@/content/types";
import Footer from "./Footer";
import UpNext from "./UpNext";

/** Common page frame: nav clearance, page sections, Up next card, footer. */
export default function PageShell({ page, children }: { page: PageId; children: ReactNode }) {
  return (
    <>
      <main className="flex w-full flex-col items-center overflow-x-clip pt-[70px]">
        {children}
        <UpNext page={page} />
      </main>
      <Footer page={page} />
    </>
  );
}
