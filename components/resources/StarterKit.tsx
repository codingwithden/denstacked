"use client";

import { useRef, useState, type FormEvent } from "react";
import { KIT, ORIGINALS } from "@/content/resources";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Email-gated starter kit: the form card plus "Den's originals", which stay
 * blurred until the kit is unlocked.
 * Note: the email isn't stored or sent anywhere yet (backend comes later).
 */
export default function StarterKit() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [toast, setToast] = useState("");
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setError(KIT.error);
      return;
    }
    setError("");
    setUnlocked(true);
    clearTimeout(toastTimer.current);
    setToast(KIT.toast);
    toastTimer.current = setTimeout(() => setToast(""), 3200);
  };

  return (
    <>
      <section id="kit" className="w-full max-w-[1120px] scroll-mt-24 px-4 pt-[110px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] items-center gap-7 rounded-[26px] bg-cream p-6 text-deep sm:p-[34px]">
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-bold tracking-[.2em]">{KIT.kicker}</span>
            <span className="headline text-[clamp(36px,4.5vw,56px)] text-deep">
              {KIT.title}
              <em className="!text-wine">{KIT.em}</em>
            </span>
            <span className="text-[15px] leading-relaxed">{KIT.body}</span>
          </div>

          {unlocked ? (
            <div className="fade-up flex flex-col items-start gap-2.5">
              <span className="punch-pop -rotate-4 border-[3px] border-wine px-3.5 py-2 font-extrabold tracking-[.14em] text-wine">
                {KIT.stamp}
              </span>
              <span className="text-[15px]">{KIT.welcome}</span>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="flex flex-col gap-2.5">
              <label htmlFor="kit-email" className="text-xs font-bold tracking-[.14em]">
                {KIT.emailLabel}
              </label>
              <div className="flex flex-wrap gap-2">
                <input
                  id="kit-email"
                  type="email"
                  autoComplete="email"
                  placeholder={KIT.placeholder}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  aria-invalid={!!error}
                  aria-describedby={error ? "kit-error" : undefined}
                  className="min-h-[50px] min-w-0 flex-[1_1_220px] rounded-full border-[1.5px] border-deep bg-transparent px-[18px] text-[15px] text-deep placeholder:text-wine/70"
                />
                <button
                  type="submit"
                  className="min-h-[50px] rounded-full bg-wine px-[22px] text-[13px] font-extrabold tracking-[.1em] text-cream"
                >
                  {KIT.submit}
                </button>
              </div>
              {error && (
                <span id="kit-error" role="alert" className="text-[13px] text-wine">
                  {error}
                </span>
              )}
              <span className="text-[11px] opacity-70">{KIT.fine}</span>
            </form>
          )}
        </div>
      </section>

      <section className="flex w-full max-w-[1120px] flex-col gap-[22px] px-4 pt-[90px]">
        <div className="flex flex-col gap-2">
          <span className="kicker opacity-80">01 · THE KIT</span>
          <h2 className="headline m-0">
            Den&apos;s <em>originals</em>
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {ORIGINALS.map((o) => (
            <div key={o.type} className="relative overflow-hidden rounded-[20px]">
              <div
                className="flex min-h-[220px] flex-col gap-2.5 bg-cream p-6 text-deep transition-[filter] duration-500"
                style={unlocked ? undefined : { filter: "blur(5px)" }}
                aria-hidden={!unlocked}
              >
                <span className="text-[11px] font-bold tracking-[.16em] opacity-75">{o.type}</span>
                <span className="vg text-[26px] leading-[1.1]">{o.name}</span>
                <span className="text-sm leading-normal opacity-85">{o.desc}</span>
                <a
                  href="#"
                  tabIndex={unlocked ? 0 : -1}
                  className="mt-auto text-xs font-bold tracking-[.1em] text-wine"
                >
                  {KIT.getIt}
                </a>
              </div>
              {!unlocked && (
                <a
                  href="#kit"
                  aria-label={`${KIT.lockedLabel}: ${o.type}`}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-deep/35 text-cream no-underline"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <rect x="5" y="11" width="14" height="10" rx="2" />
                    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                  </svg>
                  <span className="text-xs font-bold tracking-[.12em]">{KIT.lockedLabel}</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {toast && (
        <div className="pointer-events-none fixed inset-x-0 bottom-7 z-[60] flex justify-center px-4">
          <div
            role="status"
            className="fade-up w-[400px] max-w-full rounded-xl bg-cream px-5 py-3.5 text-center text-[13px] font-semibold text-deep shadow-[0_14px_30px_rgba(0,0,0,.4)]"
          >
            {toast}
          </div>
        </div>
      )}
    </>
  );
}
