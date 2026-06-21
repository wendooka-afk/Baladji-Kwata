"use client";

import { useState } from "react";
import { Play } from "./Icons";

export default function LiteYouTube({
  id,
  title,
  year,
}: {
  id: string;
  title: string;
  year?: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <div className="group card overflow-hidden">
      <div className="relative aspect-video bg-black">
        {active ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            className="absolute inset-0 w-full h-full"
            aria-label={`Play ${title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
            <span className="absolute inset-0 grid place-items-center">
              <span className="w-16 h-16 rounded-full bg-[var(--color-gold)] text-black grid place-items-center shadow-lg transition-transform group-hover:scale-110">
                <Play className="w-7 h-7 translate-x-0.5" />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="p-3 flex items-baseline justify-between gap-2">
        <span className="font-semibold text-sm truncate">{title}</span>
        {year && <span className="text-xs text-[var(--color-muted)] shrink-0">{year}</span>}
      </div>
    </div>
  );
}
