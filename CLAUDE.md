# CLAUDE.md — dkoike.com Personal Site

This document tells Claude Code how to build this site. Read this fully before starting any task.

---

## 1. Project Context

**Owner:** Daiki Koike — MS Align CS student at Northeastern University (Oakland), graduating Dec 2026. Background in Physics (B.A., SFSU, Magna Cum Laude).

**Purpose:** Personal portfolio site for job/co-op applications (Anthropic, OpenAI, Google, Stripe, Bay Area AI startups) and long-term personal branding.

**Live URL:** https://dkoike.com  
**Vercel:** https://dkoike.vercel.app (redirects to dkoike.com)  
**Repo:** https://github.com/Daiki007121/dkoike

**Positioning:** Engineer and entrepreneur. Physics → CS. Solving social problems with technology and the power of the market; currently building privacy-first AI.

---

## 2. Tech Stack (Already Installed)

- **Framework:** Next.js 16.2.6 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui with `Nova` preset (Radix primitives)
- **Font:** Geist Sans + Geist Mono (Vercel)
- **Icons:** Lucide React
- **Deploy:** Vercel (auto-deploy on `git push origin main`)

Do NOT add unrelated dependencies. If a new dependency is genuinely needed, ask first.

---

## 3. Site Structure

**Single-page scrolling layout.** All sections live on `/`. No multi-page routing in v1.

Section order (top to bottom):

1. **Navigation bar** — sticky top, links to anchors (#about, #projects, #skills, #contact) + /blog
2. **Hero** — full viewport height ideally
3. **About** — short bio + profile photo
4. **Projects** — 3 cards
5. **Skills** — 4 category cards of icon tiles (added Nov 2026, see 4.6)
6. **Contact** — CTA + links
7. **Footer** — copyright + tech stack

---

## 4. Content Specifications

### 4.1 Hero (CONFIRMED — do not change wording)

```
H1: Engineer and entrepreneur. Physics → CS.
Sub: Solving social problems with technology and the power of the 
     market. MS in CS @ Northeastern '26, Bay Area. Building 
     privacy-first AI and an AI voice interviewer for founders.
     (Sub updated Nov 2026 to match the About; H1 unchanged.)
```

### 4.2 About (CONFIRMED — do not change wording)

Final copy, written with Daiki in Nov 2026. Four paragraphs, rendered as separate `<p>` elements:

```
I came to the U.S. as an international student who was not able to 
speak English, and left San Francisco State with a physics degree.

In my final year I taught physics at a public high school in San 
Francisco. Some of my students spent their evenings looking after 
younger siblings. One was losing their housing. Teachers had stopped 
assigning homework because there was no time at home to do it. I 
could explain Newton's laws, but nothing I knew could change any of 
that.

That is why I moved into computer science, and why I build companies 
and not only software. I want to solve social problems with 
technology and the power of the market: build a product that helps 
people, run it as a business so it lasts, and eventually make it 
infrastructure.

For now I'm an MS student at Northeastern, learning by shipping: 
privacy-first AI tools like MaskLM, and an AI voice interviewer that 
helps founders test their ideas before they build.
```

Wording choices Daiki made deliberately (don't "improve" these):
- "was not able to speak English" — kept as is; no grades/honors (magna cum laude) in the About.
- "the power of the market" — not "market power" (economics term for monopoly pricing power).
- "so it lasts" — no "into the future"; "eventually" already carries the long-term sense.

Include a profile photo on the side or above the text. Use `/public/profile.jpg`. Render as a rounded square or circle (whichever fits the layout better).

### 4.3 Projects (3 cards, confirmed)

Layout (redesigned Nov 2026): a 2-column grid. Card 1 is `featured`: it spans both columns, with media on the left and text on the right on desktop. Cards 2 and 3 sit side by side below, media on top. On mobile all three stack.

Each card shows, in order: media (YouTube embed or cover image), a mono line with the index ("01") and year, title, headline, one large stat with a mono label, description, tech tags, links. No "Completed" status pill. The order below is Daiki's choice: Digital Entrepreneurs leads because it backs up the "entrepreneur" positioning.

#### Card 1: Digital Entrepreneurs

- **Year:** `2026`
- **Stat:** `97%` — test coverage across 243 tests
- **Headline:** Real-time AI voice interviewer for Mom Test validation.
- **Description:** Helps founders validate startup ideas through automated customer discovery interviews. Uses Gemini Live API for low-latency voice interaction, with auto-termination and turn detection.
- **Tech tags:** `Next.js 14` · `Gemini Live API` · `WebSocket` · `Supabase` · `Fly.io`
- **Links:**
  - Live: https://digital-entrepreneurs-ai-powered-mo.vercel.app/
  - GitHub: https://github.com/Daiki007121/Digital-Entrepreneurs-AI-Powered-Mom-Test-Validation
  - Blog: https://medium.com/@daiki007121/building-an-ai-powered-mom-test-interviewer-real-time-voice-ai-for-startup-validation-53a79292e0ce
  - Demo: https://www.youtube.com/watch?v=9v_44T3XTT0

#### Card 2: 3.6 Million Routes, One Perfect Day

- **Year:** `2026`
- **Stat:** `2,101×` — fewer states explored by A* than exhaustive search
- **Headline:** A TSP study on real Bay Area transit data.
- **Description:** Compared BFS exhaustive search, Greedy Nearest Neighbor, and A* with MST heuristic across 11 Bay Area landmarks using Google Maps transit API. A* matched BFS optimum (23,775s) with 2,101× fewer states explored.
- **Tech tags:** `Python` · `Google Maps API` · `A*` · `MST heuristic`
- **Links:**
  - GitHub: https://github.com/Daiki007121/bay-area-tsp
  - Slides: https://docs.google.com/presentation/d/1I8J8MFFtrBSqMfICpipxWAqf-vwIQ-i1u2u26cWlopc/edit?usp=sharing

#### Card 3: MaskLM

- **Year:** `2026`
- **Stat:** `0` — bytes of PII stored: no database, session, or request-body logs
- **Headline:** Privacy-first PII-masking middleware for LLMs.
- **Description:** Web app that masks PII in text bound for LLMs. Built for doctors, lawyers, and recruiters: a web app rather than a PyPI package, so non-technical users can use it. Stateless backend with zero PII persistence: no database, session, or request-body logging. Detection by Microsoft Presidio.
- **Tech tags:** `Next.js` · `FastAPI` · `Microsoft Presidio` · `Supabase` · `Vercel`
- **Links:**
  - Live: https://mask-lm.vercel.app/
  - GitHub: https://github.com/Daiki007121/maskLM
  - Blog: https://medium.com/@daiki007121/shipping-a-privacy-first-llm-middleware-with-claude-code-48c2c69dff44
  - Demo: https://www.youtube.com/watch?v=Om9reVlevMA&t=6s

### 4.4 Contact

```
Open to Summer 2026 co-op opportunities and full-time roles 
starting Dec 2026. SWE, AI research, or product. Bay Area preferred.
```

Links (as buttons or icon links):
- **Email:** Gmail compose URL — https://mail.google.com/mail/?view=cm&fs=1&to=koike.d@northeastern.edu (opens in new tab; avoids broken `mailto:` for users without a configured default mail client). Below the button row, render a visible "or copy: koike.d@northeastern.edu" line as a click-to-copy fallback (Lucide Copy → Check swap, 2s reset) so Outlook / Apple Mail / ProtonMail users aren't locked out by the Gmail login wall.
- **LinkedIn:** https://www.linkedin.com/in/daiki-koike-48781116b/
- **GitHub:** https://github.com/Daiki007121
- **Resume:** `/daiki-koike-resume.pdf` (download)

### 4.5 Footer

```
© 2026 Daiki Koike
Built with Next.js + Tailwind. Deployed on Vercel.
```

### 4.6 Skills (added Nov 2026)

Four category cards in a 2-column grid (1 column on mobile), each holding a 3-column grid of icon + label tiles. Data lives in `GROUPS` in `src/components/sections/Skills.tsx`; the list comes from the resume plus the project stacks.

- **AI / LLM:** Claude Code, Anthropic API, Gemini Live API, MCP, Presidio
- **Languages:** Python, TypeScript, JavaScript, HTML, CSS
- **Frameworks:** Next.js, React, Node.js, Express, FastAPI, Tailwind CSS
- **Data & Tools:** Supabase, MongoDB, Vercel, Fly.io, Git, GitHub Actions

Design decisions (Daiki chose these after comparing variants):
- Cards and tiles match the Project cards: zinc only, `rounded-xl border border-border bg-card`, mono labels. No tinted or gradient cards.
- Icons are always shown in their brand color. This is the one deliberate exception to the zinc-only rule in 6.2. Near-black brand marks (Next.js, Vercel, Anthropic, MCP, Express, Fly.io) use the theme foreground so they stay visible in dark mode.
- Icon paths are inlined in `src/lib/skill-icons.ts` (generated from Simple Icons, CC0). No icon dependency and no CDN requests. To add a skill, add its path + hex there and an entry in `GROUPS`. Tools without a brand icon (Presidio) fall back to a Lucide icon.

---

## 5. Static Assets

These files will be uploaded manually by Daiki to `/public/`:

- `/public/daiki-koike-resume.pdf` — Resume (PDF, exported from Google Docs)
- `/public/profile.jpg` — Profile photo (LinkedIn photo, square crop)

If these files don't exist yet during initial implementation, use:
- Resume link: render as button but mark as `{/* TODO: file not uploaded yet */}`
- Profile photo: use a placeholder div with `bg-zinc-200` and the user's initials `"DK"` centered

---

## 6. Design System

### 6.1 Visual direction

**Modern minimal, technical, confident.** Reference points:
- vercel.com — typography, spacing, restraint
- linear.app — gradient accents, dark mode quality
- Personal sites of senior engineers at top AI labs

NOT:
- Bootstrap-y card grids
- Generic "developer portfolio" templates
- Heavy animations / scroll effects
- Stock photos / illustrations

### 6.2 Colors

Use shadcn's default Zinc palette (already configured in `globals.css`). Avoid introducing new colors arbitrarily. If accent is needed, use a single subtle color (e.g., a muted blue or green). Exception: brand-colored icons in the Skills section (see 4.6).

### 6.3 Typography

- Headings: Geist Sans, bold, tight tracking
- Body: Geist Sans regular
- Code/tech tags: Geist Mono

Hero H1 should be large (e.g., `text-5xl md:text-7xl`) and tight (`tracking-tight`).

### 6.4 Spacing

Generous whitespace. Sections should breathe. Don't cram. Use `py-24` or `py-32` for section padding minimum.

### 6.5 Responsive

Mobile-first. Test at 375px (iPhone SE), 768px (tablet), 1280px (desktop). The site MUST look polished on mobile — many recruiters will view on phone first.

### 6.6 Dark mode

Implement light/dark mode toggle using shadcn's pattern (`next-themes` package). Default to system preference.

---

## 7. Component Architecture

Organize components in `src/components/`:

```
src/components/
├── ui/              # shadcn primitives (already exists)
├── sections/        # one file per section
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── ProjectCard.tsx  # reusable card component
├── Navbar.tsx       # sticky top nav
└── ThemeToggle.tsx  # dark/light mode switch
```

In `src/app/page.tsx`, compose sections:

```tsx
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
// ...

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
```

---

## 8. Implementation Order

Implement in this order, committing after each step:

1. **Setup** — RootLayout metadata (title, description, OG tags), Geist fonts
2. **Hero** — H1 + Sub + maybe CTA buttons (View Projects / Contact)
3. **Navbar** — sticky, transparent on hero, solid on scroll
4. **Projects** — extract `ProjectCard` component, render 3 cards
5. **About** — final copy (see 4.2) + profile photo
6. **Contact** — copy + 4 link buttons (Email / LinkedIn / GitHub / Resume)
7. **Footer**
8. **Dark mode toggle** (`next-themes`)
9. **Mobile responsiveness pass**
10. **SEO meta tags** (full set in `src/app/layout.tsx`)

Commit message convention:
```
feat(hero): add hero section with H1 and sub
feat(projects): add ProjectCard component and 3 project cards
feat(theme): add dark mode toggle
fix(mobile): fix hero text size on small screens
```

---

## 9. SEO & Metadata

In `src/app/layout.tsx`, set:

```ts
export const metadata = {
  title: "Daiki Koike — Engineer & Entrepreneur",
  description: "Engineer and entrepreneur solving social problems with technology and the power of the market. MS in CS @ Northeastern '26, building privacy-first AI.",
  metadataBase: new URL("https://dkoike.com"),
  openGraph: {
    title: "Daiki Koike",
    description: "Engineer and entrepreneur. Physics → CS. Solving social problems with technology and the power of the market.",
    url: "https://dkoike.com",
    siteName: "Daiki Koike",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daiki Koike",
    description: "Engineer and entrepreneur. Physics → CS.",
  },
};
```

OG image generation: use `next/og` to generate an OG image dynamically with the H1 text. File at `src/app/opengraph-image.tsx`.

---

## 10. Quality Bar

Before considering implementation done:

- [ ] All sections render correctly at 375px, 768px, 1280px
- [ ] Dark/light mode both look clean
- [ ] Navbar anchor links scroll smoothly to sections
- [ ] All external links open in new tabs (`target="_blank" rel="noopener noreferrer"`)
- [ ] Resume link triggers download (not opens in tab)
- [ ] Lighthouse score on Vercel: Performance > 95, Accessibility 100, SEO 100
- [ ] No console errors in browser
- [ ] No TypeScript errors (`npm run build` succeeds)
- [ ] OG image renders correctly (test with https://www.opengraph.xyz/)

---

## 11. Things NOT to Do

- ❌ Don't change the About copy. It is final (see 4.2); edit only when Daiki asks.
- ❌ Don't change the Hero H1 or Sub wording.
- ❌ Don't add external services (analytics, comment widgets, chatbots) in v1.
- ✅ Blog is now in scope (added post-v1). Self-hosted MDX at `/blog`, articles in English, content in `src/content/blog/*.mdx`. Existing Medium posts stay as external links; new posts are written here. See `src/lib/blog.ts` for the content layer.
- ❌ Don't add complex animations (Framer Motion, GSAP) in v1. Subtle CSS transitions only.
- ❌ Don't add a contact form. Email link is sufficient.
- ❌ Don't introduce a new color palette beyond shadcn's Zinc base (only exception: brand-colored Skills icons, see 4.6).
- ❌ Don't use stock photos or illustrations.
- ❌ Don't edit the contents of any PDF (e.g. `/public/daiki-koike-resume.pdf`), and don't make edited copies of one. Daiki maintains the resume in Google Docs and re-exports it himself. If a PDF's content is outdated, say so and stop there; only swap the file when Daiki provides a new export.

---

## 12. Open Items (Manual by Daiki)

These are NOT for Claude Code to handle:

- [x] Write final About copy (done Nov 2026, see 4.2)
- [ ] Upload `/public/daiki-koike-resume.pdf`
- [ ] Upload `/public/profile.jpg`
- [ ] Verify all external links work after deploy

---

## 13. Git Workflow

Branch: `main` (auto-deploys to production via Vercel)

For larger changes, optional feature branches:
```bash
git checkout -b feat/section-name
# make changes
git push origin feat/section-name
# Vercel creates a preview deploy
# merge to main when ready
```

For incremental sections, direct commits to `main` are fine.

---

## 14. Reference: Project Memory

Daiki's other ongoing projects (for cross-linking awareness):
- **MaskLM**: privacy-first PII-masking middleware for LLMs (Next.js, FastAPI, Microsoft Presidio)
- **Anthropic Fellows** (applied April 2026, awaiting result)
- **Co-op search** (Summer 2026): targeting Salesforce, Stripe, Anthropic, etc.

This site is part of a broader job-search and personal-branding effort. Treat it accordingly: professional, sharp, no fluff.
