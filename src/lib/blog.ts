import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

// Posts live as .mdx (or .md) files with YAML frontmatter. This module is the
// single source of truth for reading and parsing them; it is server-only
// (uses node:fs) and must never be imported into a client component.

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export type PostFrontmatter = {
  title: string;
  description: string;
  /** ISO date, e.g. "2026-06-02". Used for sorting and display. */
  date: string;
  /** When true, hidden in production but visible in dev. */
  draft?: boolean;
  tags?: string[];
};

export type PostMeta = PostFrontmatter & {
  slug: string;
  readingMinutes: number;
};

export type Post = PostMeta & {
  /** MDX body with frontmatter already stripped. */
  content: string;
};

function readingMinutes(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function parseFile(filename: string): Post {
  const slug = filename.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  const fm = data as PostFrontmatter;
  return {
    slug,
    title: fm.title,
    description: fm.description,
    date: fm.date,
    draft: fm.draft ?? false,
    tags: fm.tags ?? [],
    readingMinutes: readingMinutes(content),
    content,
  };
}

// Drafts are visible while developing so they can be previewed, but excluded
// from any production build (and therefore from the static export and sitemap).
const isPublished = (post: Post): boolean =>
  process.env.NODE_ENV === "development" || !post.draft;

/** All published posts, newest first. Returns metadata only (no body). */
export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => /\.mdx?$/.test(file))
    .map(parseFile)
    .filter(isPublished)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((post) => {
      const { content: _body, ...meta } = post;
      void _body;
      return meta;
    });
}

/** A single published post by slug, or null if missing/unpublished. */
export function getPost(slug: string): Post | null {
  const candidate = ["mdx", "md"]
    .map((ext) => `${slug}.${ext}`)
    .find((file) => fs.existsSync(path.join(BLOG_DIR, file)));
  if (!candidate) return null;
  const post = parseFile(candidate);
  return isPublished(post) ? post : null;
}

export function formatDate(iso: string): string {
  // Fixed UTC so server and client render identically (no hydration drift).
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
