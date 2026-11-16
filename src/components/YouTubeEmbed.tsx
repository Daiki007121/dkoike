"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export type YouTubeVideo = {
  id: string;
  /** Start offset in seconds. */
  start?: number;
};

/**
 * Click-to-load YouTube embed. Renders only the thumbnail until the user
 * presses play, so the YouTube player (~1MB of JS) never loads on page view.
 */
export function YouTubeEmbed({
  video,
  title,
}: {
  video: YouTubeVideo;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);

  const params = new URLSearchParams({ autoplay: "1", rel: "0" });
  if (video.start) params.set("start", String(video.start));

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-muted">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?${params}`}
          title={`${title} demo video`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${title} demo video`}
          className="group absolute inset-0 h-full w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <Image
            src={`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`}
            alt=""
            fill
            sizes="(min-width: 768px) 320px, 100vw"
            className="object-cover transition-opacity group-hover:opacity-90"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/20">
            <span className="flex size-12 items-center justify-center rounded-full bg-black/70 text-white transition-transform group-hover:scale-105">
              <Play className="size-5 translate-x-px fill-current" aria-hidden />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
