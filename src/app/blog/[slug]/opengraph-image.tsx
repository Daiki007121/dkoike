import { ImageResponse } from "next/og";
import { getAllPosts, getPost } from "@/lib/blog";

// Node runtime (not edge): this reads post files via node:fs through getPost.
export const alt = "Daiki Koike — Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  const title = post?.title ?? "Daiki Koike";

  // OG previews don't honor dark mode, so this is fixed dark-on-white to match
  // the site's root OG image (src/app/opengraph-image.tsx).
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "#71717a",
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            Daiki Koike · Blog
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              color: "#09090b",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              maxWidth: "1040px",
            }}
          >
            {title}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            fontSize: 24,
            color: "#a1a1aa",
            fontWeight: 500,
          }}
        >
          dkoike.com
        </div>
      </div>
    ),
    { ...size },
  );
}
