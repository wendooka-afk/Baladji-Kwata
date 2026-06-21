import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getContent, SOCIALS, ROUTES } from "@/i18n/content";
import { Spotify, Apple, YouTube, Instagram, Facebook, TikTok } from "./Icons";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const base = `/${locale}`;
  const socials = [
    { href: SOCIALS.spotify, icon: Spotify, label: "Spotify" },
    { href: SOCIALS.appleMusic, icon: Apple, label: "Apple Music" },
    { href: SOCIALS.youtube, icon: YouTube, label: "YouTube" },
    { href: SOCIALS.instagram, icon: Instagram, label: "Instagram" },
    { href: SOCIALS.facebook, icon: Facebook, label: "Facebook" },
    { href: SOCIALS.tiktok, icon: TikTok, label: "TikTok" },
  ];

  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-bg-2)]">
      <div className="container-x py-14 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="display text-2xl tracking-wide">
            BALADJI <span className="text-gold-grad">KWATA</span>
          </div>
          <p className="text-sm text-[var(--color-muted)] mt-3 max-w-xs">{t.footer.tagline}</p>
        </div>

        <div>
          <div className="eyebrow mb-4">{t.footer.navTitle}</div>
          <ul className="space-y-2 text-sm text-[var(--color-muted)]">
            {ROUTES.map((r) => (
              <li key={r.seg}>
                <Link href={`${base}/${r.seg}`} className="hover:text-[var(--color-gold)] transition-colors">
                  {t.nav[r.key as keyof typeof t.nav]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">{t.footer.followTitle}</div>
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 grid place-items-center rounded-full border border-[var(--color-line)] text-[var(--color-muted)] hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] transition-colors"
              >
                <s.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--color-line)]">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--color-muted)]">
          <span className="text-center sm:text-left">
            © {new Date().getFullYear()} Baladji Kwata · BLDK Industrie — {t.footer.rights}
          </span>
          <span className="font-[family-name:var(--font-inter)] text-[var(--color-fg)]">
            Conçu avec <span className="text-red-500">❤</span> par{" "}
            <a
              href="https://wendooka.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-fg)] hover:text-[var(--color-gold)] transition-colors"
            >
              wendooka
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
