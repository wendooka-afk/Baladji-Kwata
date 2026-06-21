import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getContent, MEMBER_SLUGS, SOCIALS } from "@/i18n/content";
import { seoAlternates } from "@/i18n/seo";
import Reveal from "@/components/Reveal";
import { Arrow, Instagram, Facebook, TikTok, YouTube } from "@/components/Icons";

export function generateStaticParams() {
  return MEMBER_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = getContent((isLocale(locale) ? locale : "fr") as Locale);
  const m = t.members.list.find((x) => x.slug === slug);
  const loc = (isLocale(locale) ? locale : "fr") as Locale;
  if (!m) return { title: "Baladji Kwata", alternates: seoAlternates(loc, "groupe") };
  return {
    title: `${m.name} — Baladji Kwata`,
    description: m.bio[0],
    alternates: seoAlternates(loc, `groupe/${slug}`),
    openGraph: { title: `${m.name} — Baladji Kwata`, description: m.bio[0], images: [m.img] },
  };
}

export default async function MemberPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const t = getContent(locale as Locale);
  const idx = t.members.list.findIndex((x) => x.slug === slug);
  if (idx === -1) notFound();
  const m = t.members.list[idx];
  const others = t.members.list.filter((x) => x.slug !== slug);

  const socials = [
    { href: SOCIALS.instagram, icon: Instagram, label: "Instagram" },
    { href: SOCIALS.facebook, icon: Facebook, label: "Facebook" },
    { href: SOCIALS.tiktok, icon: TikTok, label: "TikTok" },
    { href: SOCIALS.youtube, icon: YouTube, label: "YouTube" },
  ];

  return (
    <main className="pt-24 md:pt-28">
      <section className="section-pad !pt-8">
        <div className="container-x">
          <Link
            href={`/${locale}/groupe`}
            className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors mb-8"
          >
            <Arrow className="w-4 h-4 rotate-180" /> {t.members.back}
          </Link>

          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
            <Reveal>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[var(--color-line)]">
                <Image src={m.img} alt={m.name} fill priority sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="eyebrow mb-3">{t.members.memberOf}</p>
                <h1 className="display text-5xl md:text-7xl leading-none">{m.name}</h1>
                <p className="text-[var(--color-gold)] mt-3 text-lg">{m.role}</p>
                <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-[var(--color-gold)] to-transparent" />
              </Reveal>

              <div className="mt-8 space-y-4 text-[var(--color-muted)] leading-relaxed">
                {m.bio.map((p, i) => (
                  <Reveal key={i} delay={i * 80} as="p">
                    {p}
                  </Reveal>
                ))}
              </div>

              <Reveal delay={120}>
                <div className="mt-8 flex items-center gap-3">
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
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* autres membres */}
      <section className="pb-[clamp(4rem,9vw,7.5rem)] bg-[var(--color-bg-2)] pt-14 border-t border-[var(--color-line)]">
        <div className="container-x">
          <p className="eyebrow mb-6">{t.members.title}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {others.map((o) => (
              <Link key={o.slug} href={`/${locale}/groupe/${o.slug}`} className="group card overflow-hidden block">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src={o.img} alt={o.name} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-3 text-center">
                  <div className="display text-base leading-tight group-hover:text-[var(--color-gold)] transition-colors">{o.name}</div>
                  <div className="text-xs text-[var(--color-gold)] mt-0.5">{o.role}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
