import Image from "next/image";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <Image src={image} alt={title} fill priority sizes="100vw" className="object-cover object-[center_18%] opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)]/45 via-[var(--color-bg)]/70 to-[var(--color-bg)]" />
      </div>
      <div className="container-x relative z-10">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h1 className="display text-5xl md:text-7xl">{title}</h1>
        {subtitle && <p className="mt-4 text-[var(--color-muted)] text-lg max-w-2xl">{subtitle}</p>}
        <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-[var(--color-gold)] to-transparent" />
      </div>
    </section>
  );
}
