import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { ALBUM, SOCIALS } from "@/i18n/content";
import type { Content } from "@/i18n/content";
import Reveal from "./Reveal";
import { Cart, Play } from "./Icons";

export default function AlbumPromo({ locale, t }: { locale: Locale; t: Content["home"] }) {
  return (
    <section className="relative section-pad overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/12 via-[var(--color-bg)] to-[var(--color-bg)]" />
      <div className="container-x relative z-10">
        <Reveal>
          <div className="card overflow-hidden grid md:grid-cols-2 items-stretch">
            <div className="relative aspect-square">
              <Image
                src={ALBUM.cover}
                alt={`${ALBUM.title} — ${ALBUM.subtitle}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
                className="object-contain"
              />
            </div>
            <div className="p-7 md:p-10 flex flex-col justify-center">
              <p className="eyebrow mb-3">{t.albumKicker}</p>
              <h2 className="display text-4xl md:text-5xl leading-none">
                {ALBUM.title}
              </h2>
              <p className="display text-xl text-[var(--color-sand)] tracking-[0.2em] mt-1">
                ({ALBUM.subtitle})
              </p>
              <p className="text-[var(--color-muted)] mt-5 max-w-md">{t.albumDesc}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={ALBUM.storeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                  <Cart className="w-4 h-4" /> {t.albumBuy}
                </a>
                <Link href={`/${locale}/musique`} className="btn btn-ghost">
                  <Play className="w-4 h-4" /> {t.albumListen}
                </Link>
              </div>

              <div className="mt-5 flex items-center gap-4 text-[var(--color-muted)] text-sm">
                <a href={SOCIALS.spotify} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-gold)] transition-colors">Spotify</a>
                <span className="text-[var(--color-line)]">·</span>
                <a href={SOCIALS.appleMusic} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-gold)] transition-colors">Apple Music</a>
                <span className="text-[var(--color-line)]">·</span>
                <a href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-gold)] transition-colors">YouTube</a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
