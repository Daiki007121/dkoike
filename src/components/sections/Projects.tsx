import { ProjectCard, type ProjectCardProps } from "@/components/ProjectCard";

const PROJECTS: ProjectCardProps[] = [
  {
    title: "Digital Entrepreneurs",
    year: "2026",
    headline: "Real-time AI voice interviewer for Mom Test validation.",
    stat: { value: "97%", label: "test coverage across 243 tests" },
    description:
      "Helps founders validate startup ideas through automated customer discovery interviews. Uses Gemini Live API for low-latency voice interaction, with auto-termination and turn detection.",
    tech: ["Next.js 14", "Gemini Live API", "WebSocket", "Supabase", "Fly.io"],
    links: [
      {
        label: "Live",
        href: "https://digital-entrepreneurs-ai-powered-mo.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/Daiki007121/Digital-Entrepreneurs-AI-Powered-Mom-Test-Validation",
      },
      {
        label: "Blog",
        href: "https://medium.com/@daiki007121/building-an-ai-powered-mom-test-interviewer-real-time-voice-ai-for-startup-validation-53a79292e0ce",
      },
      {
        label: "Demo",
        href: "https://www.youtube.com/watch?v=9v_44T3XTT0",
      },
    ],
    video: { id: "9v_44T3XTT0" },
  },
  {
    title: "3.6 Million Routes, One Perfect Day",
    year: "2026",
    headline: "A TSP study on real Bay Area transit data.",
    stat: { value: "2,101×", label: "fewer states explored by A* than exhaustive search" },
    description:
      "Compared BFS exhaustive search, Greedy Nearest Neighbor, and A* with MST heuristic across 11 Bay Area landmarks using Google Maps transit API. A* matched BFS optimum (23,775s) with 2,101× fewer states explored.",
    tech: ["Python", "Google Maps API", "A*", "MST heuristic"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Daiki007121/bay-area-tsp",
      },
      {
        label: "Slides",
        href: "https://docs.google.com/presentation/d/1I8J8MFFtrBSqMfICpipxWAqf-vwIQ-i1u2u26cWlopc/edit?usp=sharing",
      },
    ],
    cover: {
      src: "/projects/bay-area-tsp.png",
      alt: "Title slide: 3,628,800 possible tours, one optimal day",
      href: "https://docs.google.com/presentation/d/1I8J8MFFtrBSqMfICpipxWAqf-vwIQ-i1u2u26cWlopc/edit?usp=sharing",
    },
  },
  {
    title: "MaskLM",
    year: "2026",
    headline: "Privacy-first PII-masking middleware for LLMs.",
    stat: { value: "0", label: "bytes of PII stored: no database, session, or request-body logs" },
    description:
      "Web app that masks PII in text bound for LLMs. Built for doctors, lawyers, and recruiters: a web app rather than a PyPI package, so non-technical users can use it. Stateless backend with zero PII persistence: no database, session, or request-body logging. Detection by Microsoft Presidio.",
    tech: ["Next.js", "FastAPI", "Microsoft Presidio", "Supabase", "Vercel"],
    links: [
      { label: "Live", href: "https://mask-lm.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Daiki007121/maskLM" },
      {
        label: "Blog",
        href: "https://medium.com/@daiki007121/shipping-a-privacy-first-llm-middleware-with-claude-code-48c2c69dff44",
      },
      {
        label: "Demo",
        href: "https://www.youtube.com/watch?v=Om9reVlevMA&t=6s",
      },
    ],
    video: { id: "Om9reVlevMA", start: 6 },
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="w-full px-6 py-24 sm:px-8 sm:py-32 md:px-12"
    >
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Projects
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={i + 1}
              featured={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
