import Image from "next/image";
import type { Content } from "@/i18n/content";
import Reveal from "./Reveal";

export default function About({ t }: { t: Content["about"] }) {
  return (
    <section id="about" className="section-pad bg-[var(--color-bg)]">
      <div className="container-x grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal className="order-2 md:order-1">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--color-line)]">
            <Image
              src={t.image}
              alt="Baladji Kwata"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="order-1 md:order-2">
          <Reveal>
            <p className="eyebrow mb-3">{t.label}</p>
            <h2 className="display text-4xl md:text-5xl mb-6">{t.title}</h2>
          </Reveal>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
            {t.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 80} as="p">
                {p}
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-9 grid grid-cols-3 gap-4">
              {t.stats.map((s) => (
                <div key={s.label} className="card p-4 text-center">
                  <div className="display text-2xl md:text-3xl text-gold-grad">{s.value}</div>
                  <div className="text-xs text-[var(--color-muted)] mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
