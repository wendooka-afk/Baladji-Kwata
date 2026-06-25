import Image from "next/image";
import type { Content } from "@/i18n/content";
import Reveal from "./Reveal";

export default function About({ t }: { t: Content["about"] }) {
  const chunks: string[][] = [];
  for (let i = 0; i < t.paragraphs.length; i += 2) chunks.push(t.paragraphs.slice(i, i + 2));

  return (
    <section id="about" className="section-pad bg-[var(--color-bg)]">
      <div className="container-x">
        <Reveal className="max-w-2xl mb-12">
          <p className="eyebrow mb-3">{t.label}</p>
          <h2 className="display text-4xl md:text-5xl">{t.title}</h2>
        </Reveal>

        <div className="space-y-14 md:space-y-20">
          {chunks.map((chunk, i) => {
            const flipped = i % 2 === 1;
            const image = t.images[i % t.images.length];
            return (
              <div key={i} className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                <Reveal className={flipped ? "md:order-2" : "md:order-1"}>
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--color-line)]">
                    <Image
                      src={image}
                      alt={`Baladji Kwata — ${t.title} ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>

                <div className={`space-y-4 text-[var(--color-muted)] leading-relaxed ${flipped ? "md:order-1" : "md:order-2"}`}>
                  {chunk.map((p, j) => (
                    <Reveal key={j} delay={j * 80} as="p">
                      {p}
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-14 grid grid-cols-3 gap-4 max-w-xl">
            {t.stats.map((s) => (
              <div key={s.label} className="card p-4 text-center">
                <div className="display text-2xl md:text-3xl text-gold-grad">{s.value}</div>
                <div className="text-xs text-[var(--color-muted)] mt-1 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
