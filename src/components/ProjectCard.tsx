type ProjectStatus = "In Progress" | "Completed";

type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectCardProps = {
  title: string;
  status: ProjectStatus;
  year: string;
  headline: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-muted/60 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
      {children}
    </span>
  );
}

export function ProjectCard({
  title,
  status,
  year,
  headline,
  description,
  tech,
  links,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col gap-5 rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/30">
      <div className="flex justify-end gap-2">
        <Pill>{status}</Pill>
        <Pill>{year}</Pill>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="text-sm font-medium leading-snug text-foreground">
          {headline}
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>

      <ul className="mt-auto flex flex-wrap gap-1.5">
        {tech.map((t) => (
          <li
            key={t}
            className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </article>
  );
}
