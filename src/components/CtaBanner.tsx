import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Content } from "@/i18n/content";
import Reveal from "./Reveal";
import { Arrow } from "./Icons";

export default function CtaBanner({ locale, t }: { locale: Locale; t: Content["home"] }) {
  return (
    <section className="relative section-pad overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/15 via-[var(--color-bg)] to-[var(--color-bg)]" />
      <div className="container-x relative z-10 text-center max-w-2xl mx-auto">
        <Reveal>
          <h2 className="display text-4xl md:text-6xl mb-5">{t.ctaTitle}</h2>
          <p className="text-[var(--color-muted)] text-lg mb-8">{t.ctaText}</p>
          <Link href={`/${locale}/contact`} className="btn btn-gold text-base">
            {t.ctaBtn} <Arrow className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
