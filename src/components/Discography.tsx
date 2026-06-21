import Image from "next/image";
import type { Content } from "@/i18n/content";
import { SOCIALS, ALBUM } from "@/i18n/content";
import Reveal from "./Reveal";
import { Spotify, Apple, Cart } from "./Icons";

export default function Discography({ t }: { t: Content["discography"] }) {
  return (
    <section className="section-pad bg-[var(--color-bg)]">
      <div className="container-x">
        <Reveal className="max-w-2xl mb-12">
          <p className="eyebrow mb-3">{t.label}</p>
          <h2 className="display text-4xl md:text-5xl">{t.title}</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-[var(--color-line)] max-w-md">
              <Image
                src={t.albumCover}
                alt={`${t.albumTitle} — ${t.albumSubtitle}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
                className="object-contain"
              />
              <span className="absolute top-4 left-4 rounded-full bg-[var(--color-gold)] text-black text-xs font-bold px-3 py-1">
                {t.outNow}
              </span>
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/90 to-transparent">
                <div className="display text-3xl leading-none">{t.albumTitle}</div>
                <div className="display text-sm text-[var(--color-sand)] tracking-[0.18em]">({t.albumSubtitle})</div>
                <div className="text-sm text-[var(--color-gold)] mt-1">{t.albumMeta}</div>
              </div>
            </div>
            <div className="max-w-md mt-5">
              <a href={ALBUM.storeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold w-full justify-center">
                <Cart className="w-4 h-4" /> {t.buyLabel}
              </a>
              <p className="text-xs text-[var(--color-muted)] text-center mt-2">{t.priceNote}</p>
              <div className="flex gap-3 mt-4">
                <a href={SOCIALS.spotify} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-sm flex-1 justify-center">
                  <Spotify className="w-4 h-4" /> Spotify
                </a>
                <a href={SOCIALS.appleMusic} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-sm flex-1 justify-center">
                  <Apple className="w-4 h-4" /> Apple
                </a>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h3 className="display text-2xl mb-5">{t.singlesTitle}</h3>
            </Reveal>
            <ul className="divide-y divide-[var(--color-line)]">
              {t.singles.map((s, i) => (
                <Reveal key={s} delay={i * 40} as="li">
                  <div className="flex items-center gap-4 py-3">
                    <span className="display text-sm text-[var(--color-muted)] w-6">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[var(--color-fg)]">{s}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
