# VelaBeam — Marketing Site Build Plan

## 1. PRODUCT

VelaBeam is an AI-powered website generation platform that scans for local businesses without web presence and auto-produces industry-specific starter sites (plumbers, dentists, salons, etc.). This deliverable is the **public marketing landing page** that explains that promise in one screen, earns the click into the waitlist, and gives three distinct audiences — freelance devs, small agencies, and local business owners — a tailored reason to sign up. Pain solved: those three audiences either can't find a fast supply of qualified leads (devs/agencies) or can't get a credible site without paying $2k+ to an agency (owners), and VelaBeam collapses both sides of that market onto one warm, fast landing experience.

## 2. WHO IT'S FOR

Three ICPs from the brief, each addressed by a segmented waitlist form on the same page:

- **Freelance web developers** — want a steady pipeline of pre-qualified local-business leads. Copy cue: "Stop cold-pitching. Get warm leads delivered weekly."
- **Small agencies** — want throughput and a margin to resell. Copy cue: "White-label sites in minutes, not sprints."
- **Local business owners** — want a credible site without a $3k invoice. Copy cue: "A real website for your shop, by Friday."

Tone: warm, plainspoken, confident without being hypey. No "10x your revenue" garbage. The page is a single long-scroll experience plus a modal waitlist; tone is the same across all sections, but the segmented form swaps headline + value bullets to match the audience choice.

## 3. LOOK & FEEL

**Vibe & positioning:** Warm SaaS with editorial polish. Feels like Linear met a neighborhood bakery — confident geometry softened by rounded corners, generous whitespace, and a hand-illustrated prism motif that recurs as a brand anchor. Not "tech bro dark mode." Bright, optimistic, daylight.

**Color palette (Tailwind tokens, defined in `tailwind.config.ts`):**
- `brand.violet` — `#6E4FF2` (primary, links, primary CTA)
- `brand.violet-soft` — `#EDE8FE` (section tints, hover)
- `brand.coral` — `#FF6F61` (secondary accent, illustration pop, warm CTAs)
- `brand.honey` — `#F5B947` (highlights, prism gradient stop, badges)
- `brand.ink` — `#1B1530` (headings, body text)
- `brand.ink-soft` — `#5A5470` (secondary text)
- `brand.cream` — `#FAF6EF` (page background)
- `brand.surface` — `#FFFFFF` (cards)
- `brand.success` — `#3CB371` (form success)

**Typography:**
- `font-display`: **Manrope** (700/800) — H1, H2, large numbers.
- `font-body`: **Source Sans 3** (400/500/600) — body, UI, form labels.
- H1: 64–72px desktop / 40px mobile, `leading-[1.05]`, `tracking-tight`.
- H2: 40–48px / 30px mobile, `leading-[1.1]`.
- Body: 18px, `leading-[1.7]` (the brief's "generous line height" — non-negotiable).
- Eyebrow text: 13px uppercase, `tracking-[0.18em]`, `font-semibold`, `text-brand-coral`.

**Spacing & layout:**
- Max content width 1200px, sections padded `py-24 md:py-32`.
- 12-col grid, `gap-6`, gutter 24px.
- Cards: `rounded-3xl` (24px), `p-8`, soft shadow `shadow-[0_8px_30px_rgba(27,21,48,0.06)]`.
- Buttons: `rounded-full`, `px-7 py-3.5`, `font-semibold`, `text-base`.

**Iconography:** Lucide icons throughout (rounded variant). Coral or violet, 1.75px stroke. No emoji as icons.

**Imagery:** A custom inline-SVG **prism** motif (the creative seed 45f080ef4f) used as: hero backdrop glow, section dividers, a small mark on the waitlist card, and a loading shimmer in the form. Three flat-style illustration panels for "How it works" steps — geometric, two-tone (violet + coral), no faces, no stock photos.

**Interaction & motion:**
- All motion via Framer Motion, `prefers-reduced-motion` respected.
- Hero: prism SVG drifts in from the right with a 600ms ease-out; headline words stagger in (40ms each).
- Scroll reveals: sections fade + `translateY(16px → 0)` at 0.6, 500ms.
- Primary CTA: subtle gradient shift violet→coral on hover (300ms).
- Waitlist card has a 1px gradient border (violet→honey) that rotates slowly on idle.
- No carousels, no autoplay video.

**Screen-by-screen layout (one route, the home page):**

1. **Sticky top nav** — 72px tall, `bg-brand-cream/80 backdrop-blur`, border-b on scroll. Left: prism logo + wordmark "VelaBeam." Center (desktop only): How it works, Features, Pricing, FAQ. Right: "Join waitlist" pill button (violet). Mobile: hamburger → slide-down sheet with same links.

2. **Hero (`#top`)** — Two-column on desktop, stacked on mobile. Left col: eyebrow "AI WEBSITES FOR LOCAL BUSINESS", H1 "A real website for every shop on the block.", one-line subhead "VelaBeam finds local businesses without a site and generates one in their industry — in under 60 seconds.", primary CTA "Join the waitlist" (→ scrolls to form), secondary text link "See how it works ↓". Right col: large prism illustration with a soft violet→honey radial glow behind it. A floating "preview card" in front of the prism showing a fake generated-site mock (restaurant hero, white card, rounded, no real brand). Below the columns: a 3-up trust strip — "For freelance devs", "For small agencies", "For local owners" — each is a small pill, not a logo.

3. **How it works** — 3 numbered cards in a row (stacked on mobile). Each card: large numeral in honey, 1-line title, 2-sentence description, small inline illustration.
   - 01 — **Scan** — We crawl local-business listings and flag the ones with no site, no social, or a dead page.
   - 02 — **Generate** — Our model assembles an industry-tuned starter site: copy, layout, color, contact form.
   - 03 — **Deliver** — You get a lead (devs/agencies) or a ready-to-edit site (owners). Both in under a minute.

4. **Features grid (6 cards, 2 rows × 3 cols on desktop)** — Each: Lucide icon, 3–5 word title, 2-sentence description.
   - **Industry-tuned templates** — 40+ verticals, copy that sounds like a human wrote it.
   - **One-click brand match** — Drop a logo or pick a palette; the site re-skins instantly.
   - **Built-in lead capture** — Contact forms, click-to-call, Google Maps, schema markup. No plugins.
   - **Accessibility by default** — WCAG AA contrast, keyboard nav, semantic HTML on every generated site.
   - **White-label exports** (devs/agencies) — Hand off a polished site under your own brand.
   - **Edit without code** (owners) — A visual editor that doesn't feel like a CMS from 2012.

5. **Audience split** — A horizontal 3-tab toggle (Devs / Agencies / Owners). Tabs swap the content below: each tab shows a tailored value prop (H3 + 3 bullets) and a small code-free mock preview. This is where the segmented messaging lives without breaking the single-page flow.

6. **Pricing teaser** — Two cards side-by-side (stacked on mobile), with a third "Talk to us" card for agencies.
   - **Starter** — Free during beta. Waitlist priority, 5 site generations/month.
   - **Pro** — $29/mo. Unlimited generations, white-label export, lead notifications.
   - **Agency** — Custom. Volume pricing, multi-seat, dedicated onboarding.
   - Under the cards: small line "Prices are placeholders for the upcoming beta. We'll confirm before billing anyone."

7. **FAQ** — 6 questions, accordion (one open at a time, smooth height). Questions cover: what gets generated, who owns the site, when the beta opens, data sources for the scan, refund policy during beta, and "can I just use this for myself?"
   - Q1: "What exactly does VelaBeam generate?"
   - Q2: "Who owns the generated site?"
   - Q3: "When does the beta open?"
   - Q4: "Where does the business data come from?"
   - Q5: "Can I get a refund during the beta?"
   - Q6: "I'm a solo owner with no tech skills — is this for me?"

8. **Final CTA / Waitlist** — Full-bleed section with a soft violet→cream gradient. Headline: "Be on the list when we open the beta." Sub: one sentence. Below: the **waitlist card** (centered, max-w 520px, white surface, rounded-3xl, gradient border). The card contains a segmented control (Dev / Agency / Owner) and a form. The audience choice swaps the H3 above the form: e.g., "Get weekly leads as a dev" vs. "Get a free site as an owner." Form fields: email (required), name (optional), and one audience-specific field (dev: "Primary stack" select; agency: "Team size" select; owner: "Business type" select). Submit button: "Reserve my spot." Success state: card morphs to a check icon, headline "You're on the list. We'll email you when beta opens." Includes a `text-xs` line: "We'll never sell your email. One launch update, no spam."

9. **Footer** — 4 columns: Product (Features, Pricing, Changelog placeholder), Company (About, Contact — both `#` placeholders), Resources (FAQ link, Docs placeholder), Legal (Privacy, Terms — both stub routes). Bottom bar: prism mark + © VelaBeam, "Made for the neighborhood web."

**Mobile adjustments:** All multi-column sections collapse to single column at `<md`. Hero illustration drops below copy. Nav collapses to hamburger. Section padding reduces to `py-16`.

## 4. USER FLOWS

**Flow A — Dev/Agency/Owner joins waitlist (primary):**
1. Land on `/` → read hero → scroll through features/audience/pricing.
2. Click "Join the waitlist" (nav or hero) → smooth-scroll to `#waitlist`.
3. Select audience tab (default: Dev).
4. Fill email + audience-specific field → submit.
5. Client-side validation (email regex, required field). On invalid: inline red helper text under field, field gets `ring-brand-coral`.
6. On submit: button enters loading state (spinner + "Reserving…"). Form fields disabled.
7. POST to `/api/waitlist` → server validates → inserts row → returns 200.
8. Card transitions to success state (300ms cross-fade). Fire `confetti` once (canvas-confetti, ~40 particles, 1s, respects reduced-motion).
9. If 500: error banner above form, "Something went wrong. Try again?" with retry button; previous values preserved.

**Flow B — FAQ exploration:**
1. User clicks question → accordion expands (height tween 200ms).
2. Auto-close any other open item.
3. Keyboard: Tab focuses each header, Enter/Space toggles, ArrowDown moves to next header.

**Flow C — Audience tab switch (Dev/Agency/Owner):**
1. User clicks tab → active tab gets `bg-brand-violet text-white`.
2. Content panel cross-fades (Framer `AnimatePresence`, 250ms).
3. Waitlist form's audience context updates to match if user has already scrolled there (controlled state lifted to page).

**Edge / empty states:**
- Waitlist success: `localStorage.setItem('vela_waitlisted', email)` so revisiting users see "You're on the list as you@…" instead of the form.
- JS disabled: form still works (server-rendered form posts to `/api/waitlist` which can return a plain HTML success page fallback). Prism SVG renders server-side.
- Email already exists in DB: return 200 with `status: 'already'`, UI shows "You're already on the list — we got you."

## 5. PAGES / ROUTES

- **`/` (`app/page.tsx`)** — The full marketing landing page. Composed of: `<NavBar />`, `<Hero />`, `<HowItWorks />`, `<FeaturesGrid />`, `<AudienceTabs />`, `<PricingTeaser />`, `<FAQ />`, `<WaitlistCTA />`, `<SiteFooter />`. Server component by default; interactive children are client components.
- **`/api/waitlist` (`app/api/waitlist/route.ts`)** — `POST` handler. Validates body, upserts into Supabase `waitlist` table, returns JSON. `GET` returns 405.
- **`/privacy` (`app/privacy/page.tsx`)** — Stub page: heading "Privacy", 2-paragraph placeholder copy with the date "Last updated: [launch date]" and a note "This page will be finalized before public launch." No fabricated policy text.
- **`/terms` (`app/terms/page.tsx`)** — Same pattern as `/privacy`.
- **`/api/health` (`app/api/health/route.ts`)** — `GET` returns `{ ok: true }`. Used for uptime check post-deploy.
- **404 (`app/not-found.tsx`)** — Branded 404 with prism mark, "Lost the signal." copy, and a "Back to home" button.

No other public routes. No dashboard, no app shell — this is a marketing site only.

## 6. CORE FEATURES

1. **Segmented waitlist form**
   - Tabbed audience selector (Dev / Agency / Owner) with state lifted to the page so the form's headline + auxiliary field track the choice.
   - Email validation via simple regex + HTML5 `type="email"`. Required.
   - Audience-specific field: Dev → `<select>` of stacks (Next.js, WordPress, Webflow, Custom); Agency → `<select>` of team size (1, 2–5, 6–20, 20+); Owner → `<select>` of business type (Restaurant, Retail, Service, Other). Required.
   - On submit: `fetch('/api/waitlist', { method: 'POST', body: JSON.stringify({ email, audience, aux }) })`.
   - Idempotent: server upserts on `email`; duplicate submissions return the same success UX.
   - Honeypot field `website` (hidden via `aria-hidden` + off-screen CSS) to drop bots. If filled, server returns 200 silently and logs.

2. **FAQ accordion**
   - 6 items defined in a typed `FAQ[]` constant.
   - Radix UI `Accordion` (or shadcn/ui) with `type="single" collapsible`. One open at a time.
   - Smooth height animation built in. ARIA-compliant.
   - Content authored in the component (not CMS) for this scope.

3. **Audience tabs**
   - Tabs component switches between three content panels with Framer `AnimatePresence`.
   - Each panel: H3, 3 bullets with Lucide check icons, and a stylized "preview" mock (an inline SVG/HTML block showing a fake site preview tailored to that audience — e.g., for Devs it shows a lead-list mock; for Owners, a generated-site mock).

4. **Pricing teaser**
   - Static cards with placeholder pricing. Bottom-of-section disclaimer about beta pricing.
   - "Join waitlist" CTA on the Pro card → scrolls to waitlist.

5. **Smooth scroll navigation**
   - Nav links use anchor jumps with `scroll-behavior: smooth` and `scroll-margin-top: 80px` on sections to clear the sticky header.
   - Active section highlighting in nav via `IntersectionObserver` (no scroll-jacking).

6. **SEO + metadata**
   - `metadata` export in `app/layout.tsx`: title "VelaBeam — AI websites for local businesses", description from the one-line value prop, OpenGraph + Twitter card using a generated OG image (static SVG rendered to PNG at build, or `next/og` dynamic route `/opengraph-image.tsx` with prism mark).
   - `robots.txt` allowing all, `sitemap.ts` listing `/`, `/privacy`, `/terms`.
   - JSON-LD `Organization` schema with name, url, logo (prism mark SVG).

7. **Analytics (privacy-respecting)**
   - Plausible script via `next/script` with `strategy="afterInteractive"`. Custom events: `waitlist_submitted`, `audience_tab_changed`, `pricing_cta_clicked`. No cookies, no PII sent.

8. **Accessibility**
   - All interactive elements keyboard-reachable. Visible focus rings (`focus-visible:ring-2 ring-brand-violet ring-offset-2`).
   - Color contrast: body text on cream ≥ 7:1, violet-on-cream ≥ 4.5:1, white-on-violet ≥ 4.5:1.
   - All images have `alt`; decorative SVGs have `aria-hidden="true"`.

## 7. DATA MODEL

**Supabase table: `waitlist`**
- `id` — `uuid`, PK, default `gen_random_uuid()`.
- `email` — `text`, not null, unique.
- `audience` — `text`, not null, check in `('dev', 'agency', 'owner')`.
- `aux_value` — `text`, nullable. Stores the audience-specific field (stack / team size / business type).
- `referrer` — `text`, nullable. `document.referrer` at submit time.
- `user_agent` — `text`, nullable, truncated to 500 chars.
- `created_at` — `timestamptz`, default `now()`.
- `updated_at` — `timestamptz`, default `now()`, trigger to auto-update.

**RLS:** table locked down — only `service_role` key (used server-side in the route) can read/write. No anon access.

**No other entities for this scope.** No users, no auth, no sessions.

## 8. AUTH

**No auth on this site.** The waitlist is anonymous. No NextAuth, no Supabase Auth, no Clerk. The Supabase connection uses a service-role key on the server only, with the row fully locked by RLS. This matches the brief: this is the public marketing page, not the app.

## 9. FILES

FILES: ["app/layout.tsx", "app/page.tsx", "app/globals.css", "app/not-found.tsx", "app/sitemap.ts", "app/robots.ts", "app/opengraph-image.tsx", "app/privacy/page.tsx", "app/terms/page.tsx", "app/api/waitlist/route.ts", "app/api/health/route.ts", "components/NavBar.tsx", "components/Hero.tsx", "components/HowItWorks.tsx", "components/FeaturesGrid.tsx", "components/AudienceTabs.tsx", "components/PricingTeaser.tsx", "components/FAQ.tsx", "components/WaitlistCTA.tsx", "components/WaitlistForm.tsx", "components/SiteFooter.tsx", "components/PrismMark.tsx", "components/PrismGlow.tsx", "components/Illustrations.tsx", "lib/supabaseAdmin.ts", "lib/validation.ts", "lib/analytics.ts", "lib/faq.ts", "lib/pricing.ts", "tailwind.config.ts", "next.config.mjs", ".env.local.example", "package.json"]

## 10. ACCEPTANCE

- [ ] `npm run build` completes with no TypeScript or ESLint errors.
- [ ] Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- [ ] All six sections (How it works, Features, Audience, Pricing, FAQ, Waitlist) render on `/` and are reachable via nav anchors.
- [ ] Sticky nav appears, gets a border on scroll, and active section updates as the user scrolls.
- [ ] Hero shows H1, subhead, primary + secondary CTA, and the prism illustration.
- [ ] All 6 feature cards render with icon, title, description; layout collapses cleanly on mobile.
- [ ] Audience tabs switch content with animation; default tab is "Dev."
- [ ] Pricing shows 3 cards (Starter, Pro, Agency) with beta disclaimer visible.
- [ ] FAQ accordion opens one item at a time, keyboard-navigable, ARIA-correct.
- [ ] Waitlist form: segmented control switches headline + auxiliary field; email + aux are required; client validation shows inline errors; honeypot present and hidden.
- [ ] Submitting the form POSTs to `/api/waitlist`, inserts a row in Supabase `waitlist`, and shows the success state with confetti.
- [ ] Duplicate email submissions show the "already on the list" success state, not an error.
- [ ] Server errors show a retry banner with preserved input.
- [ ] `localStorage` remembers waitlisted email and shows the persisted state on return visits.
- [ ] No fake testimonials, no invented customer logos, no fabricated user counts, no press logos, no star ratings, no revenue claims anywhere on the page.
- [ ] Pricing values are clearly labeled as beta placeholders.
- [ ] Privacy and Terms pages exist as honest stubs (no fabricated legal text).
- [ ] Color palette matches the spec (violet `#6E4FF2`, coral `#FF6F61`, honey `#F5B947`, cream `#FAF6EF`); typography is Manrope + Source Sans 3; line height on body copy is `1.7`.
- [ ] Prism motif appears in: logo, hero backdrop, section divider, waitlist card border, and footer.
- [ ] Site is fully responsive: layouts collapse to single column below 768px, nav becomes a hamburger sheet.
- [ ] `prefers-reduced-motion` disables scroll reveals, confetti, and animated tab transitions.
- [ ] SEO metadata, OpenGraph image, sitemap, robots, and Organization JSON-LD are present and valid.
- [ ] Plausible script loads with the three custom events firing on the right interactions.
- [ ] No console errors or warnings in production build.