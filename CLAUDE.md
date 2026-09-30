# denstacked — Project Brief for Claude Code

Personal portfolio website for **Denisse Medina Flores** (Den), targeting **APM / PM (and product marketing) roles in NYC, 2027**.
Repo: `denstacked`. This file is the source of truth. Read it fully before writing code.

---

## 1. What exists already

A complete, clickable **prototype** was designed and iterated in Claude (4 pages). It lives in `reference/prototype/`:

| File | Page | Nav label |
|---|---|---|
| `Main.dc.html` | Home / PM work | 01 Work |
| `About.dc.html` | Personal (off the clock) | 02 About |
| `Kitchen.dc.html` | Culinary | 03 Kitchen |
| `Content.dc.html` | Content creator | 04 Content |

**How to read the prototype files**
- They use a proprietary template format (`{{holes}}`, `<sc-for>`, `<sc-if>`, `<x-dc>`). Do **not** try to run them. Treat them as a visual + content spec.
- **All copy and data** live in the JS arrays at the bottom of each file (e.g. `PROJECTS`, `STOPS`, `MENU`, `CAFES`, `PUNCHES`, `WORDS`, `STICKERS`, `STEPS`, `TOOLS`, `DRINKS`, `STORIES`, `HISTORY`, `LEGS`, `CAUSES`, `SHIFTS`, `BOOKS`). Port this copy **verbatim** into typed content files.
- The CSS in each file's `<helmet><style>` defines every animation (keyframes: `printIn`, `float`, `steam`, `scan`, `marquee`, `ride`, `fadeUp`, `tapPulse`, `spin`, `type`, etc.). Reuse the timing and feel.

Images (backgrounds already removed, transparent PNG) are in `public/images/`.

---

## 2. Stack

- **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion**, deployed on **Vercel**.
- Content in typed files: `content/projects.ts`, `content/timeline.ts`, etc. No CMS.
- Fonts via `next/font/google` (see §4).
- Contact form: Next.js route handler + **Resend** (or Formspree if simpler).
- Must be responsive (phone → desktop, 16px gutters, no horizontal page scroll) and respect `prefers-reduced-motion`.
- Accessibility: real `<button>`/`<a>`, visible focus rings, 44px touch targets, WCAG AA contrast.

---

## 3. Colors — ONLY these three

| Token | Hex | Use |
|---|---|---|
| `wine` | `#5B0F18` | Page background, stamps, accents, ink on cream |
| `deep` | `#3E000D` | Cards/surfaces on wine, footer, darkest end of ombre |
| `cream` | `#F8F1E7` | Paper, text on dark, outlines |

Only allowed extras: transparent versions of these three (e.g. `rgba(248,241,231,.3)`) and black-alpha drop shadows. No other hues anywhere.

**Scroll ombre (site-wide):** fixed background layer, horizontal gradient (≈100deg), lighter wine on the left (wine mixed with ~22% cream) → wine → deep on the right. As scroll progress `p` goes 0→1 the whole gradient darkens toward deep, and a soft cream radial glow slides left→right along the top. A 4px cream **scroll progress bar** fills across the top. (Reference: `scrollVals()` in any prototype file.)

---

## 4. Typography

| Role | Prototype font (free stand-in) | Intended paid font | Where |
|---|---|---|---|
| Big playful display | **Bagel Fat One** | Stay Retro | "Order up.", "Off the clock.", "The Kitchen", "Content", "Let's grab a coffee.", sticker fronts |
| Section titles | **Gloock** | Modern Aesthetic | Every section `h2` (class `headline`) |
| Accent word inside titles | **Pinyon Script** | (Old Money-style script) | `<em>` words in headlines, "¡Orden lista!", "Creator" |
| Didone caps | **Abril Fatface** | The Choed | Name on ticket, "TOTAL", ticker, counters, nav monogram |
| Vogue editorial | **Bodoni Moda** (italic) | Vogue / Bodoni FLF | Quote lines, stats, "Denisse", "the file" |
| Serif body accents | **Playfair Display** | The Seasons | Card titles, numbers |
| Body / UI | **Montserrat** | — | All body text, labels, buttons |
| Receipt / code | **IBM Plex Mono** | — | Ticket, laptop code, typing test |
| Handwriting | **Caveat** | — | Notes, diary, doodles |

Rules: **no stacked/double-layer text effects** (the user removed the 3D shadow; keep text flat). If Den licenses the paid fonts, swap them in via `next/font/local`.

---

## 5. Site map & sections

A fixed, frosted pill nav appears on every page: `DMF · 01 Work · 02 About · 03 Kitchen · 04 Content` (active page = cream pill). Each page ends with an **"Up next" card** (Work → About → Kitchen → Content → Work) with an arrow that swings on hover.

**Separation rule:** Work = PM/tech only. Cooking lives on Kitchen. Content creation lives on Content. Personal life lives on About. Don't mix.

### 01 Work (`Main.dc.html`)
1. Top ribbon: live NYC clock + "STATUS: ACTIVE PRODUCT TRIAL & TESTING", **Print Resume** button.
2. Hero: "Order up. / ¡Orden lista!", intro, CTAs (See the ticket, Book a coffee chat), stats (500+ cafés, 9-person team, 5 yrs bilingual, 5 products). Right: floating **iced latte** PNG; tap cycles drink names in a toast.
3. CSS skyline with twinkling windows + scrolling ticker (Abril Fatface).
4. **Printer + receipt ticket** (the core): prints in on load (Reprint button). Contains header, **audio greeting pill (EN/ES)**, **filter pills** (All, 0-to-1, Systems & Code, Growth & Creative, Bilingual), **5 line items with rubber stamps** → open a **case-study drawer** (01 Problem, 02 Solution, 03 Outcomes; prev/next), **Special Instructions form** (drink chips, note, email, bean-burst on send), totals ("100% READY TO SHIP AS PM"), **barcode with red-laser hover** → mailto, links.
5. 01 Who's Denisse? Outlined Bodoni/Abril words (Founder, Builder, Analyst, Leader, Speaker), tap to fill and show a line.
6. 02 How I build: 3 **portafilter** PNGs = Discover (beans) → Build (grounds) → Ship (latte art).
7. 03 The Desk: 6 tech tools → laptop screen types code + lesson card.
8. 04 Menu board: chalkboard tabs (Espresso Bar = tech, Matcha Bar = product, House Tools).
9. 05 The File: closed dark folder cover (binder clip, fanned polaroids, flip clock) → opens into tabbed folders (Founder Diary, To-Ship List with cheer hearts).
10. 06 The Route: subway-line career timeline (train slides to the selected stop).
11. 07 Taste Test: Work & Brew café-finder demo (illustrative NYC map, amenity filters, sample data only).
12. 08 Regulars Only: **Learning Loyalty Card** (8 certification stamps; tap to reveal; "x of 8 revealed" bar) + teaser card to About.
13. 09 Sticker sheet: 8 round stickers that flip to facts.
14. Footer: "Let's grab a coffee. / O un matcha. Tú eliges.", **Compliments to the chef** tip counter, skyline with a train on an elevated track.

### 02 About (`About.dc.html`)
Hero "Off the clock. / Fuera de turno." + greeting cycler (Hello / ¡Hola! / Ciao!). Sections: **The Long Run** (countdown to **Nov 7, 2027**, officially deferred from 2026; pace calculator, goal 4:35; tappable 5-borough route, Bronx = mile 20), **Giving Back** flip cards (Team for Kids, Pop-Up No. 001, Steve's Camp, CARA), **Daily Rituals** (opening/closing shift checklists + progress ring + stamp), **Typing test** (race Den's 108 WPM), **The Shelf** (PM books you can pull off a shelf, hobbies, link to Content).

### 03 Kitchen (`Kitchen.dc.html`)
Hero "The Kitchen" (iced latte + portafilters). **The Line**: 6 kitchen tools (whisk, knife, ticket rail, mise en place, timer, sauté pan) → recipe cards (lesson + "Method"). **Kitchen History** accordion: culinary school, Jitjatjo catering, Head Chef at Steve's Camp, Food Protection cert.

### 04 Content (`Content.dc.html`)
Hero "Content Creator". **Drink Menu**: 6 upright drink PNGs in a vertical menu → each pours a DensDigitalDiary series (Matcha = Project Me, Mocha = Real Talk With Den, Caramel Macchiato = Tech With Den, Iced Latte = Small Business Saturdays, Tiramisu Latte = Marathon Training, Cold Brew = 12 Wishes). **Creator Era**: phone-frame stories (Lemon8 → Love8 → xTiles) with autoplay, pause, like. **Creator History** accordion. **Pastry Case** (growth & creative skills).

---

## 6. Content rules (important)

- **Never invent metrics, quotes or results.** Anything in `[BRACKETS]` in the prototype is a placeholder Den must fill. Keep placeholders visible until she provides real data.
- **Never publish her phone number.** Email is OK: `denissemedinaflores@gmail.com`.
- Work & Brew role: "Founder (with co-founder)", since March 2025, team of under ten first-gen Latinx collaborators. "500+ curated cafés" is **pending Den's confirmation**.
- Job search: joining a team in **2027** after the Work & Brew launch; APM / PM or marketing roles.
- Languages: English & Spanish native/bilingual; Italian elementary (learning).
- Keep faith/health goals off the site unless Den asks.

---

## 7. Open items (ask Den / fill later)

- Real metrics: waitlist signups, funnel conversion, beta users, amount raised at Pop-Up No. 001, sessions delivered, hours saved (Skedulo OS), UGC results.
- Photos for every `[YOUR PHOTO]` slot (pop-up, café work session, etc.).
- URLs: LinkedIn (`linkedin.com/in/denisse-medina-flores`), GitHub, Resume PDF, credential links, Team for Kids donation link, series links.
- Issuers for Food Protection + Trained Mentor certs.
- 15-second audio greetings (EN + ES).
- 12 Wishes description; review starter copy for Real Talk / Tech With Den / Small Business Saturdays.
- Confirm: Elevate end date (2021–present vs 2021–2026), 500+ cafés.
- Paid font licenses (optional).

---

## 8. Build plan (phases)

1. **Scaffold**: Next.js + TS + Tailwind + Framer Motion; color tokens and fonts; layout with fixed pill nav, scroll ombre + progress bar, "Up next" card, footer. Deploy a skeleton to Vercel.
2. **Content layer**: port every data array from the prototype into `content/*.ts` with types.
3. **Work page**: ticket + filters + case-study drawer first (the core), then remaining sections top to bottom.
4. **About, Kitchen, Content pages.**
5. **Interactions polish**: Framer Motion for drawer, folder open, stories, flips; reduced-motion fallbacks.
6. **Backend bits**: contact form (Resend), audio files, Print-to-resume (`@media print` stylesheet that turns the ticket into a clean one-page resume).
7. **Phase 3 feature**: grade-adaptation simulator in the Elevate case study (slider 8th→12th grade rewrites a mock slide).
8. **QA**: Lighthouse, a11y audit, mobile pass, SEO/OG image, analytics (GA4 or Vercel Analytics).

Work in small, reviewable commits. After each phase, summarize what changed and what's next.
