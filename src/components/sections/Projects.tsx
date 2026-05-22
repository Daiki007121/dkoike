import { ProjectCard, type ProjectCardProps } from "@/components/ProjectCard";

const PROJECTS: ProjectCardProps[] = [
  {
    title: "MaskLM",
    status: "In Progress",
    year: "2026",
    headline: "Privacy-first PII detection that runs in your browser.",
    description:
      "Middleware for individuals and small startups that can't route sensitive data through servers. Detects and masks PII client-side via browser-based SLM, with optional API backend.",
    tech: ["FastAPI", "TypeScript", "Vite", "Fly.io", "Vercel", "Supabase"],
    links: [
      { label: "Live", href: "https://mask-lm.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Daiki007121/maskLM" },
    ],
  },
  {
    title: "Digital Entrepreneurs",
    status: "Completed",
    year: "2026",
    headline: "Real-time AI voice interviewer for Mom Test validation.",
    description:
      "Helps founders validate startup ideas through automated customer discovery interviews. Uses Gemini Live API for low-latency voice interaction, with auto-termination and turn detection.",
    tech: ["Next.js 14", "Gemini Live API", "WebSocket", "Supabase", "Fly.io"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Daiki007121/Digital-Entrepreneurs-AI-Powered-Mom-Test-Validation",
      },
      {
        label: "Blog",
        href: "https://medium.com/@daiki007121/building-an-ai-powered-mom-test-interviewer-real-time-voice-ai-for-startup-validation-53a79292e0ce",
      },
    ],
  },
  {
    title: "3.6 Million Routes, One Perfect Day",
    status: "Completed",
    year: "2026",
    headline: "A TSP study on real Bay Area transit data.",
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
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
