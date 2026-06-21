import type { Content } from "@/i18n/content";
import Reveal from "./Reveal";

export default function History({ t }: { t: Content["history"] }) {
  return (
    <section id="history" className="section-pad bg-[var(--color-bg-2)] border-y border-[var(--color-line)]">
      <div className="container-x">
        <Reveal className="max-w-2xl mb-12">
          <p className="eyebrow mb-3">{t.label}</p>
          <h2 className="display text-4xl md:text-5xl mb-4">{t.title}</h2>
          <p className="text-[var(--color-muted)] leading-relaxed">{t.intro}</p>
        </Reveal>

        <ol className="relative ml-3 md:ml-4 space-y-10 border-l border-[var(--color-line)]">
          {t.events.map((e, i) => (
            <Reveal as="li" key={e.year} delay={i * 70} className="relative pl-8 md:pl-12">
              <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full bg-[var(--color-gold)] ring-4 ring-[var(--color-bg-2)]" />
              <div className="display text-2xl md:text-3xl text-gold-grad leading-none">{e.year}</div>
              <h3 className="mt-2 mb-1 text-lg font-semibold">{e.title}</h3>
              <p className="max-w-2xl text-[var(--color-muted)] leading-relaxed">{e.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
