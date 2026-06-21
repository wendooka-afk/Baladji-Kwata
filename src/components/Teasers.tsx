import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Content } from "@/i18n/content";
import Reveal from "./Reveal";
import { Arrow } from "./Icons";

export default function Teasers({ locale, t }: { locale: Locale; t: Content["home"] }) {
  return (
    <section className="section-pad bg-[var(--color-bg)]">
      <div className="container-x">
        <Reveal className="mb-10">
          <p className="eyebrow mb-3">{t.exploreLabel}</p>
          <h2 className="display text-4xl md:text-5xl">{t.exploreTitle}</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.teasers.map((card, i) => (
            <Reveal key={card.seg} delay={i * 80}>
              <Link
                href={`/${locale}/${card.seg}`}
                className="group block relative aspect-[3/4] rounded-2xl overflow-hidden border border-[var(--color-line)]"
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <h3 className="display text-2xl mb-1 group-hover:text-[var(--color-gold)] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)]">{card.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm text-[var(--color-gold)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    {t.exploreLabel} <Arrow className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
