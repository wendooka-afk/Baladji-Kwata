import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Content } from "@/i18n/content";
import Reveal from "./Reveal";
import { Download, Arrow } from "./Icons";

export default function PressKit({ locale, t, bare }: { locale: Locale; t: Content["press"]; bare?: boolean }) {
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

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-8 items-start">
          <Reveal className="card p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-16 h-20 shrink-0 rounded-lg bg-gradient-to-br from-[var(--color-gold)]/30 to-transparent border border-[var(--color-gold)]/40 grid place-items-center">
              <span className="text-[10px] font-semibold tracking-wide text-[var(--color-gold)]">PDF</span>
            </div>
            <div className="flex-1">
              <h3 className="display text-xl mb-1">Baladji Kwata — Press Book</h3>
              <p className="text-sm text-[var(--color-muted)] mb-4">{t.fileNote}</p>
              <a href={t.file} download className="btn btn-gold">
                <Download className="w-4 h-4" /> {t.downloadLabel}
              </a>
            </div>
          </Reveal>

          <Reveal delay={80} className="card p-6">
            <p className="eyebrow mb-4">{t.factsTitle}</p>
            <dl className="space-y-3">
              {t.facts.map((f) => (
                <div key={f.label} className="flex items-center justify-between gap-4 text-sm">
                  <dt className="text-[var(--color-muted)]">{f.label}</dt>
                  <dd className="font-medium text-right">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-10 flex flex-wrap items-center justify-between gap-4 card p-6">
          <p className="display text-lg">{t.contactTitle}</p>
          <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 text-[var(--color-gold)] hover:gap-3 transition-all">
            {t.contactCta} <Arrow className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
