# CLAUDE.md — dkoike.com Personal Site

This document tells Claude Code how to build this site. Read this fully before starting any task.

---

## 1. Project Context

**Owner:** Daiki Koike — MS Align CS student at Northeastern University (Oakland), graduating Dec 2026. Background in Physics (B.A., SFSU, Magna Cum Laude).

**Purpose:** Personal portfolio site for job/co-op applications (Anthropic, OpenAI, Google, Stripe, Bay Area AI startups) and long-term personal branding.

**Live URL:** https://dkoike.com  
**Vercel:** https://dkoike.vercel.app (redirects to dkoike.com)  
**Repo:** https://github.com/Daiki007121/dkoike

**Positioning:** Engineer and entrepreneur. Physics → CS. Privacy-first AI from first principles.

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

1. **Navigation bar** — sticky top, links to anchors (#about, #projects, #contact)
2. **Hero** — full viewport height ideally
3. **About** — short bio + profile photo
4. **Projects** — 3 cards
5. **Contact** — CTA + links
6. **Footer** — copyright + tech stack

---

## 4. Content Specifications

### 4.1 Hero (CONFIRMED — do not change wording)

```
H1: Engineer and entrepreneur. Physics → CS.
Sub: MS Align @ Northeastern '26. Building privacy-first AI 
     from first principles. Based in the Bay Area.
```

### 4.2 About (PLACEHOLDER — do not write final copy)

Place this exact placeholder. Daiki will rewrite later:

```
Physics undergrad turned CS grad student, building privacy-first 
AI tools. More to come.

{/* TODO: rewrite when ready */}
```

Include a profile photo on the side or above the text. Use `/public/profile.jpg`. Render as a rounded square or circle (whichever fits the layout better).

### 4.3 Projects (3 cards, confirmed)

#### Card 1: MaskLM

- **Status badge:** `In Progress` `2026`
- **Headline:** Privacy-first PII detection that runs in your browser.
- **Description:** Middleware for individuals and small startups that can't route sensitive data through servers. Detects and masks PII client-side via browser-based SLM, with optional API backend.
- **Tech tags:** `FastAPI` · `TypeScript` · `Vite` · `Fly.io` · `Vercel` · `Supabase`
- **Links:**
  - Live: https://mask-lm.vercel.app/
  - GitHub: https://github.com/Daiki007121/maskLM
  - Blog: https://medium.com/@daiki007121/shipping-a-privacy-first-llm-middleware-with-claude-code-48c2c69dff44
  - Demo: https://www.youtube.com/watch?v=Om9reVlevMA&t=6s

#### Card 2: Digital Entrepreneurs

- **Status badge:** `Completed` `2026`
- **Headline:** Real-time AI voice interviewer for Mom Test validation.
- **Description:** Helps founders validate startup ideas through automated customer discovery interviews. Uses Gemini Live API for low-latency voice interaction, with auto-termination and turn detection.
- **Tech tags:** `Next.js 14` · `Gemini Live API` · `WebSocket` · `Supabase` · `Fly.io`
- **Links:**
  - Live: https://digital-entrepreneurs-ai-powered-mo.vercel.app/
  - GitHub: https://github.com/Daiki007121/Digital-Entrepreneurs-AI-Powered-Mom-Test-Validation
  - Blog: https://medium.com/@daiki007121/building-an-ai-powered-mom-test-interviewer-real-time-voice-ai-for-startup-validation-53a79292e0ce
  - Demo: https://www.youtube.com/watch?v=9v_44T3XTT0

#### Card 3: 3.6 Million Routes, One Perfect Day

- **Status badge:** `Completed` `2026`
- **Headline:** A TSP study on real Bay Area transit data.
- **Description:** Compared BFS exhaustive search, Greedy Nearest Neighbor, and A* with MST heuristic across 11 Bay Area landmarks using Google Maps transit API. A* matched BFS optimum (23,775s) with 2,101× fewer states explored.
- **Tech tags:** `Python` · `Google Maps API` · `A*` · `MST heuristic`
- **Links:**
  - GitHub: https://github.com/Daiki007121/bay-area-tsp
  - Slides: https://docs.google.com/presentation/d/1I8J8MFFtrBSqMfICpipxWAqf-vwIQ-i1u2u26cWlopc/edit?usp=sharing

### 4.4 Contact

```
Open to Summer 2026 co-op opportunities and full-time roles 
starting Dec 2026. SWE, AI research, or product. Bay Area preferred.
```

Links (as buttons or icon links):
- **Email:** Gmail compose URL — https://mail.google.com/mail/?view=cm&fs=1&to=daiki007121@gmail.com (opens in new tab; avoids broken `mailto:` for users without a configured default mail client). Below the button row, render a visible "or copy: daiki007121@gmail.com" line as a click-to-copy fallback (Lucide Copy → Check swap, 2s reset) so Outlook / Apple Mail / ProtonMail users aren't locked out by the Gmail login wall.
- **LinkedIn:** https://www.linkedin.com/in/daiki-koike-48781116b/
- **GitHub:** https://github.com/Daiki007121
- **Resume:** `/daiki-koike-resume.pdf` (download)

### 4.5 Footer

```
© 2026 Daiki Koike
Built with Next.js + Tailwind. Deployed on Vercel.
```

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

Use shadcn's default Zinc palette (already configured in `globals.css`). Avoid introducing new colors arbitrarily. If accent is needed, use a single subtle color (e.g., a muted blue or green).

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
5. **About** — placeholder copy + profile photo placeholder
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
  description: "MS Align CS @ Northeastern '26. Building privacy-first AI from first principles. Based in the Bay Area.",
  metadataBase: new URL("https://dkoike.com"),
  openGraph: {
    title: "Daiki Koike",
    description: "Engineer and entrepreneur. Physics → CS. Building privacy-first AI.",
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

- ❌ Don't rewrite the About copy. Use the exact placeholder. Daiki will write it later.
- ❌ Don't change the Hero H1 or Sub wording.
- ❌ Don't add external services (analytics, comment widgets, chatbots) in v1.
- ✅ Blog is now in scope (added post-v1). Self-hosted MDX at `/blog`, articles in English, content in `src/content/blog/*.mdx`. Existing Medium posts stay as external links; new posts are written here. See `src/lib/blog.ts` for the content layer.
- ❌ Don't add complex animations (Framer Motion, GSAP) in v1. Subtle CSS transitions only.
- ❌ Don't add a contact form. Email link is sufficient.
- ❌ Don't introduce a new color palette beyond shadcn's Zinc base.
- ❌ Don't use stock photos or illustrations.

---

## 12. Open Items (Manual by Daiki)

These are NOT for Claude Code to handle:

- [ ] Write final About copy (Daiki will do this when ready)
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
- **MaskLM** (active): privacy-first PII middleware, browser-SLM
- **Anthropic Fellows** (applied April 2026, awaiting result)
- **Co-op search** (Summer 2026): targeting Salesforce, Stripe, Anthropic, etc.

This site is part of a broader job-search and personal-branding effort. Treat it accordingly: professional, sharp, no fluff.
