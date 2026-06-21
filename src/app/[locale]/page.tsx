import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getContent, VIDEOS, SPOTIFY_ARTIST_ID, PRESS, PARTNERS } from "@/i18n/content";
import { seoAlternates, musicGroupJsonLd } from "@/i18n/seo";
import Hero from "@/components/Hero";
import Teasers from "@/components/Teasers";
import AlbumPromo from "@/components/AlbumPromo";
import Marquee from "@/components/Marquee";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import LiteYouTube from "@/components/LiteYouTube";
import { Arrow } from "@/components/Icons";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return { alternates: seoAlternates((isLocale(locale) ? locale : "fr") as Locale, "") };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getContent(locale as Locale);
  const featured = VIDEOS.slice(0, 4);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(musicGroupJsonLd()) }}
      />
      <Hero locale={locale as Locale} t={t.hero} />

      {/* stats band */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-bg-2)]">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--color-line)]">
          {t.home.stats.map((s) => (
            <div key={s.label} className="py-8 px-4 text-center">
              <div className="display text-3xl md:text-4xl text-gold-grad">{s.value}</div>
              <div className="text-xs md:text-sm text-[var(--color-muted)] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Teasers locale={locale as Locale} t={t.home} />

      <AlbumPromo locale={locale as Locale} t={t.home} />

      <Marquee title={t.home.pressTitle} items={PRESS} />

      {/* featured music */}
      <section className="section-pad bg-[var(--color-bg)]">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="eyebrow mb-3">{t.music.label}</p>
              <h2 className="display text-4xl md:text-5xl">{t.home.featuredTitle}</h2>
            </div>
            <Link href={`/${locale}/musique`} className="inline-flex items-center gap-2 text-[var(--color-gold)] hover:gap-3 transition-all">
              {t.home.featuredCta} <Arrow className="w-4 h-4" />
            </Link>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-6">
            <Reveal className="lg:col-span-1">
              <iframe
                title="Baladji Kwata on Spotify"
                src={`https://open.spotify.com/embed/artist/${SPOTIFY_ARTIST_ID}?utm_source=generator&theme=0`}
                width="100%"
                height="100%"
                style={{ minHeight: 380, borderRadius: 16 }}
                frameBorder={0}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </Reveal>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
              {featured.map((v, i) => (
                <Reveal key={v.id} delay={i * 50}>
                  <LiteYouTube id={v.id} title={v.title} year={v.year} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Marquee title={t.home.partnersTitle} items={PARTNERS} />

      <CtaBanner locale={locale as Locale} t={t.home} />
    </main>
  );
}
