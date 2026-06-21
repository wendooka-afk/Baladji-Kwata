"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

export default function LangSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  function swap(target: Locale) {
    if (!pathname) return `/${target}`;
    const parts = pathname.split("/");
    parts[1] = target;
    return parts.join("/") || `/${target}`;
  }

  return (
    <div className="flex items-center gap-1 text-sm font-semibold">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="mx-1 text-[var(--color-line)]">/</span>}
          <Link
            href={swap(l)}
            className={
              l === locale
                ? "text-[var(--color-gold)]"
                : "text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors"
            }
            aria-current={l === locale ? "true" : undefined}
          >
            {l.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
