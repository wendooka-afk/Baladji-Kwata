import Image from "next/image";
import type { Content } from "@/i18n/content";
import Reveal from "./Reveal";

export default function Achievements({ t, bare }: { t: Content["achievements"]; bare?: boolean }) {
  return (
    <section id="achievements" className={`${bare ? "pb-[clamp(4rem,9vw,7.5rem)] pt-4" : "section-pad"} bg-[var(--color-bg-2)] relative overflow-hidden`}>
      {/* Cameroon flag accent stripe */}
      {!bare && (
        <div className="absolute top-0 left-0 right-0 h-1 flex">
          <span className="flex-1 bg-[var(--color-cm-green)]" />
          <span className="flex-1 bg-[var(--color-cm-red)]" />
          <span className="flex-1 bg-[var(--color-cm-yellow)]" />
        </div>
      )}

      <div className="container-x">
        {!bare && (
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow mb-3">{t.label}</p>
            <h2 className="display text-4xl md:text-5xl">{t.title}</h2>
          </Reveal>
        )}

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-start">
          <Reveal>
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

          <div className="space-y-5">
            {t.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="card p-5 hover:border-[var(--color-gold)]/60 transition-colors">
                  <div className="flex gap-4">
                    <span className="display text-2xl text-gold-grad shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="display text-xl mb-1">{item.title}</h3>
                      <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* other highlights */}
        <Reveal className="mt-14">
          <p className="eyebrow mb-5">{t.highlightsTitle}</p>
          <ul className="grid sm:grid-cols-3 gap-3">
            {t.highlights.map((h) => (
              <li
                key={h}
                className="card p-4 text-sm text-[var(--color-muted)] leading-relaxed"
              >
                {h}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* press proofs */}
        <Reveal className="mt-14">
          <p className="eyebrow mb-5">{t.pressTitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {t.press.map((p) => (
              <figure key={p.img} className="card overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image src={p.img} alt={p.cap} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
                </div>
                <figcaption className="p-3 text-xs text-[var(--color-muted)]">{p.cap}</figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
