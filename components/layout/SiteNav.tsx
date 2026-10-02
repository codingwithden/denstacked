"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { NavMusicToggle } from "@/components/music/MusicButton";
import { NAV } from "@/content/site";

/** Fixed frosted pill nav: DMF · 01 Work · 02 About · 03 Kitchen · 04 Content. */
export default function SiteNav() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  // On narrow screens the pill can scroll sideways; keep the current page visible.
  useEffect(() => {
    const nav = navRef.current;
    const active = nav?.querySelector<HTMLElement>(".is-active");
    if (!nav || !active || nav.scrollWidth <= nav.clientWidth) return;
    nav.scrollLeft = active.offsetLeft - (nav.clientWidth - active.offsetWidth) / 2;
  }, [pathname]);

  return (
    <nav
      ref={navRef}
      aria-label="Pages"
      className="fixed top-3.5 left-1/2 z-40 flex max-w-[calc(100%-24px)] -translate-x-1/2 items-center gap-0.5 overflow-x-auto rounded-full border border-cream/20 bg-deep/70 p-1.5 shadow-[0_12px_30px_rgba(0,0,0,.3)] backdrop-blur-[14px]"
    >
      <Link className="nav-mono" href="/work" aria-label="Denisse Medina Flores home">
        DMF
      </Link>
      {NAV.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.id}
            href={item.href}
            className={`nav-link${active ? " is-active" : ""}`}
            aria-current={active ? "page" : undefined}
          >
            <span className="nav-idx">{item.idx}</span>
            {item.label}
          </Link>
        );
      })}
      <NavMusicToggle />
    </nav>
  );
}
