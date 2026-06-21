import type { Content } from "@/i18n/content";
import { VIDEOS, SOCIALS, SPOTIFY_ARTIST_ID } from "@/i18n/content";
import Reveal from "./Reveal";
import LiteYouTube from "./LiteYouTube";
import { Spotify, Apple, YouTube, Arrow } from "./Icons";

export default function Music({ t }: { t: Content["music"] }) {
  return (
    <section id="music" className="section-pad bg-[var(--color-bg)]">
      <div className="container-x">
        <Reveal className="max-w-2xl mb-10">
          <p className="eyebrow mb-3">{t.label}</p>
          <h2 className="display text-4xl md:text-5xl mb-4">{t.title}</h2>
          <p className="text-[var(--color-muted)]">{t.intro}</p>
        </Reveal>

        {/* streaming buttons */}
        <Reveal className="flex flex-wrap gap-3 mb-10">
          <a href={SOCIALS.spotify} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-sm">
            <Spotify className="w-4 h-4 text-[#1DB954]" /> Spotify
          </a>
          <a href={SOCIALS.appleMusic} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-sm">
            <Apple className="w-4 h-4" /> Apple Music
          </a>
          <a href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-sm">
            <YouTube className="w-4 h-4 text-[#FF0000]" /> YouTube
          </a>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Spotify player */}
          <Reveal className="lg:col-span-1">
            <iframe
              title="Baladji Kwata on Spotify"
              src={`https://open.spotify.com/embed/artist/${SPOTIFY_ARTIST_ID}?utm_source=generator&theme=0`}
              width="100%"
              height="100%"
              style={{ minHeight: 420, borderRadius: 16 }}
              frameBorder={0}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </Reveal>

          {/* video grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {VIDEOS.map((v, i) => (
              <Reveal key={v.id} delay={i * 50}>
                <LiteYouTube id={v.id} title={v.title} year={v.year} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <a href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[var(--color-gold)] hover:gap-3 transition-all">
            {t.watchAll} <Arrow className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
