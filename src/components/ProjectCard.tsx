import Image from "next/image";

import { YouTubeEmbed, type YouTubeVideo } from "@/components/YouTubeEmbed";
import { cn } from "@/lib/utils";

type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectCardProps = {
  title: string;
  year: string;
  headline: string;
  description: string;
  /** The one number that sums the project up, shown large. */
  stat: { value: string; label: string };
  tech: string[];
  links: ProjectLink[];
  video?: YouTubeVideo;
  /** Static 16:9 cover shown in the media slot when there is no video. */
  cover?: { src: string; alt: string; href: string };
  /** Position in the list, shown as a mono index ("01"). */
  index?: number;
  /** Full-width card with media and text side by side on desktop. */
  featured?: boolean;
};

export function ProjectCard({
  title,
  year,
  headline,
  description,
  stat,
  tech,
  links,
  video,
  cover,
  index,
  featured = false,
}: ProjectCardProps) {
  const media = (
    <>
      {video && <YouTubeEmbed video={video} title={title} />}
      {!video && cover && (
        <a
          href={cover.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block aspect-video w-full overflow-hidden rounded-lg border border-border bg-muted transition-opacity hover:opacity-90"
        >
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(min-width: 768px) 640px, 100vw"
            className="object-cover"
          />
        </a>
      )}
    </>
  );

  return (
    <article
      className={cn(
        "flex h-full flex-col gap-6 rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/30",
        featured && "md:col-span-2 md:grid md:grid-cols-[1.15fr_1fr] md:items-center md:gap-10 md:p-8",
      )}
    >
      <div className="w-full">{media}</div>

      <div className="flex flex-1 flex-col gap-5">
        <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
          <span>{index !== undefined && String(index).padStart(2, "0")}</span>
          <span>{year}</span>
        </div>

        <div className="flex flex-col gap-2">
          <h3
            className={cn(
              "font-semibold tracking-tight text-foreground",
              featured ? "text-2xl sm:text-3xl" : "text-xl",
            )}
          >
            {title}
          </h3>
          <p className="text-sm font-medium leading-snug text-foreground">
            {headline}
          </p>
        </div>

        <div className="flex items-baseline gap-3 border-y border-border py-4">
          <span
            className={cn(
              "font-semibold tracking-tight text-foreground tabular-nums",
              featured ? "text-4xl sm:text-5xl" : "text-4xl",
            )}
          >
            {stat.value}
          </span>
          <span className="font-mono text-xs leading-snug text-muted-foreground">
            {stat.label}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

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

        <div className="flex flex-wrap gap-x-4 gap-y-2">
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
      </div>
    </article>
  );
}
