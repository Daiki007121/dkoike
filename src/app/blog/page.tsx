import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { formatDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Daiki Koike",
  description:
    "Writing on privacy-first AI, physics to CS, and the engineering decisions in between.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Daiki Koike",
    description:
      "Writing on privacy-first AI, physics to CS, and the engineering decisions in between.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <section className="w-full px-6 py-24 sm:px-8 sm:py-32 md:px-12">
          <div className="mx-auto w-full max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Blog
            </h1>
            <p className="mt-4 max-w-prose text-muted-foreground">
              Notes on privacy-first AI, the move from physics to CS, and the
              engineering decisions in between.
            </p>

            {posts.length === 0 ? (
              <p className="mt-12 text-muted-foreground">
                No posts yet. Check back soon.
              </p>
            ) : (
              <ul className="mt-12 flex flex-col divide-y divide-border">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col gap-1 py-6 transition-colors"
                    >
                      <div className="flex items-baseline gap-3 font-mono text-xs text-muted-foreground">
                        <time dateTime={post.date}>
                          {formatDate(post.date)}
                        </time>
                        <span aria-hidden>·</span>
                        <span>{post.readingMinutes} min read</span>
                      </div>
                      <h2 className="text-xl font-semibold tracking-tight text-foreground underline-offset-4 group-hover:underline">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground">
                        {post.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
