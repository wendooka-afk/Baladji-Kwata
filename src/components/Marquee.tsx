export default function Marquee({ title, items }: { title: string; items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="py-10 border-y border-[var(--color-line)] bg-[var(--color-bg-2)]">
      <p className="eyebrow text-center mb-6">{title}</p>
      <div className="marquee">
        <div className="marquee-track">
          {row.map((it, i) => (
            <span
              key={i}
              className="display text-xl md:text-2xl text-[var(--color-muted)] px-8 whitespace-nowrap flex items-center gap-8"
            >
              {it}
              <span className="text-[var(--color-gold)]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
