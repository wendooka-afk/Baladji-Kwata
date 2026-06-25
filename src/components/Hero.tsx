import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Content } from "@/i18n/content";
import { SOCIALS } from "@/i18n/content";
import { Spotify, YouTube, Instagram, Play, Arrow } from "./Icons";

export default function Hero({ locale, t }: { locale: Locale; t: Content["hero"] }) {
  const base = `/${locale}`;
  return (
    <section className="relative min-h-[100svh] flex items-start justify-center md:items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={t.image}
          alt={`Baladji Kwata — ${t.tagline}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_18%] origin-top animate-slowzoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/70 to-[var(--color-bg)]/55" />
        <div className="absolute inset-0 bg-[var(--color-bg)]/45" />
      </div>

      <div className="container-x relative z-10 flex flex-col items-center text-center pt-28 pb-20 md:py-32">
        <p className="eyebrow mb-4">{t.eyebrow}</p>
        <h1 className="display text-[13vw] leading-[0.85] md:text-[9rem] font-bold">
          BALADJI
          <br />
          <span className="text-gold-grad">KWATA</span>
        </h1>
        <p className="display text-xl md:text-3xl mt-5 text-[var(--color-sand)] tracking-[0.18em]">{t.tagline}</p>
        <p className="mt-6 max-w-xl mx-auto text-[var(--color-muted)] text-base md:text-lg leading-relaxed">{t.intro}</p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link href={`${base}/musique`} className="btn btn-gold">
            <Play className="w-4 h-4" />
            {t.ctaListen}
          </Link>
          <Link href={`${base}/contact`} className="btn btn-ghost">
            {t.ctaBooking}
            <Arrow className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4 text-[var(--color-muted)]">
          <a href={SOCIALS.spotify} target="_blank" rel="noopener noreferrer" aria-label="Spotify" className="hover:text-[var(--color-gold)] transition-colors">
            <Spotify className="w-6 h-6" />
          </a>
          <a href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-[var(--color-gold)] transition-colors">
            <YouTube className="w-6 h-6" />
          </a>
          <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[var(--color-gold)] transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
