import { ShieldCheck } from "lucide-react";

import { SKILL_ICONS } from "@/lib/skill-icons";
import { cn } from "@/lib/utils";

type Skill = {
  label: string;
  /** Key into SKILL_ICONS. Omit for tools without a brand icon. */
  icon?: string;
};

type SkillGroup = {
  title: string;
  skills: Skill[];
};

const GROUPS: SkillGroup[] = [
  {
    title: "AI / LLM",
    skills: [
      { label: "Claude Code", icon: "claude" },
      { label: "Anthropic API", icon: "anthropic" },
      { label: "Gemini Live API", icon: "googlegemini" },
      { label: "MCP", icon: "modelcontextprotocol" },
      { label: "Presidio" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { label: "Python", icon: "python" },
      { label: "TypeScript", icon: "typescript" },
      { label: "JavaScript", icon: "javascript" },
      { label: "HTML", icon: "html5" },
      { label: "CSS", icon: "css" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { label: "Next.js", icon: "nextdotjs" },
      { label: "React", icon: "react" },
      { label: "Node.js", icon: "nodedotjs" },
      { label: "Express", icon: "express" },
      { label: "FastAPI", icon: "fastapi" },
      { label: "Tailwind CSS", icon: "tailwindcss" },
    ],
  },
  {
    title: "Data & Tools",
    skills: [
      { label: "Supabase", icon: "supabase" },
      { label: "MongoDB", icon: "mongodb" },
      { label: "Vercel", icon: "vercel" },
      { label: "Fly.io", icon: "flydotio" },
      { label: "Git", icon: "git" },
      { label: "GitHub Actions", icon: "githubactions" },
    ],
  },
];

function SkillTile({ label, icon }: Skill) {
  const data = icon ? SKILL_ICONS[icon] : undefined;
  // Icons carry their brand color; the cards around them stay in the zinc
  // palette. Near-black brand marks (hex: null) use the theme foreground.
  const iconClass = cn(
    "size-7 transition-transform duration-200 group-hover:scale-110",
    data?.hex ? "text-(--brand)" : "text-foreground",
  );

  return (
    <li
      className="group flex flex-col items-center gap-3 rounded-lg border border-transparent bg-muted/50 px-2 py-4 transition-colors duration-200 hover:border-foreground/20 hover:bg-muted"
      style={
        data?.hex ? ({ "--brand": data.hex } as React.CSSProperties) : undefined
      }
    >
      {data ? (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="currentColor"
          className={iconClass}
        >
          <path d={data.path} />
        </svg>
      ) : (
        <ShieldCheck
          aria-hidden="true"
          className={iconClass}
          strokeWidth={1.5}
        />
      )}
      <span className="text-center font-mono text-[11px] text-muted-foreground transition-colors group-hover:text-foreground">
        {label}
      </span>
    </li>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="w-full px-6 py-24 sm:px-8 sm:py-32 md:px-12"
    >
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Skills
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/30"
            >
              <h3 className="text-sm font-semibold tracking-tight text-foreground">
                {group.title}
              </h3>
              <ul className="mt-5 grid grid-cols-3 gap-2">
                {group.skills.map((skill) => (
                  <SkillTile key={skill.label} {...skill} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
