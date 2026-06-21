"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Content } from "@/i18n/content";
import { GALLERY } from "@/i18n/content";
import Reveal from "./Reveal";
import { Close } from "./Icons";

export default function Gallery({ t, bare }: { t: Content["gallery"]; bare?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
      if (open !== null && e.key === "ArrowRight") setOpen((i) => ((i ?? 0) + 1) % GALLERY.length);
      if (open !== null && e.key === "ArrowLeft") setOpen((i) => ((i ?? 0) - 1 + GALLERY.length) % GALLERY.length);
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open !== null ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="gallery" className={`${bare ? "pb-[clamp(4rem,9vw,7.5rem)] pt-4" : "section-pad"} bg-[var(--color-bg)]`}>
      <div className="container-x">
        {!bare && (
          <Reveal className="max-w-2xl mb-10">
            <p className="eyebrow mb-3">{t.label}</p>
            <h2 className="display text-4xl md:text-5xl">{t.title}</h2>
          </Reveal>
        )}

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [&>*]:mb-4">
          {GALLERY.map((src, i) => (
            <button
              key={src}
              onClick={() => setOpen(i)}
              className="group block w-full overflow-hidden rounded-xl border border-[var(--color-line)] break-inside-avoid"
              aria-label="Open image"
            >
              <Image
                src={src}
                alt="Baladji Kwata"
                width={600}
                height={800}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm grid place-items-center p-4"
          onClick={() => setOpen(null)}
        >
          <button
            className="absolute top-5 right-5 w-11 h-11 grid place-items-center rounded-full border border-white/20 text-white hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
            onClick={() => setOpen(null)}
            aria-label="Close"
          >
            <Close className="w-6 h-6" />
          </button>
          <div className="relative w-full max-w-4xl max-h-[85vh] aspect-[4/3]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={GALLERY[open]}
              alt="Baladji Kwata"
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
