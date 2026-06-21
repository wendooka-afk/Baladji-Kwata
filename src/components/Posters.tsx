import Image from "next/image";
import type { Content } from "@/i18n/content";
import { POSTERS } from "@/i18n/content";
import Reveal from "./Reveal";

export default function Posters({ t, bare }: { t: Content["posters"]; bare?: boolean }) {
  return (
    <section className={`${bare ? "pb-[clamp(4rem,9vw,7.5rem)] pt-4" : "section-pad"} bg-[var(--color-bg-2)]`}>
      <div className="container-x">
        {!bare && (
          <Reveal className="max-w-2xl mb-10">
            <p className="eyebrow mb-3">{t.label}</p>
            <h2 className="display text-4xl md:text-5xl mb-4">{t.title}</h2>
            <p className="text-[var(--color-muted)]">{t.intro}</p>
          </Reveal>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {POSTERS.map((src, i) => (
            <Reveal key={src} delay={(i % 4) * 60}>
              <div className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-[var(--color-line)]">
                <Image
                  src={src}
                  alt="Baladji Kwata — concert"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
