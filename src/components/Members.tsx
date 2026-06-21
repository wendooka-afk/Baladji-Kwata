import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Content } from "@/i18n/content";
import Reveal from "./Reveal";
import { Arrow } from "./Icons";

export default function Members({ locale, t }: { locale: Locale; t: Content["members"] }) {
  return (
    <section id="members" className="section-pad bg-[var(--color-bg-2)]">
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow mb-3">{t.label}</p>
          <h2 className="display text-4xl md:text-5xl mb-4">{t.title}</h2>
          <p className="text-[var(--color-muted)]">{t.note}</p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {t.list.map((m, i) => (
            <Reveal key={m.slug} delay={i * 70}>
              <Link href={`/${locale}/groupe/${m.slug}`} className="group card overflow-hidden block">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 right-3 inline-flex items-center justify-center gap-1.5 text-xs text-[var(--color-gold)] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                    {t.viewBio} <Arrow className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div className="p-3 text-center">
                  <div className="display text-lg leading-tight group-hover:text-[var(--color-gold)] transition-colors">{m.name}</div>
                  <div className="text-xs text-[var(--color-gold)] mt-0.5">{m.role}</div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
