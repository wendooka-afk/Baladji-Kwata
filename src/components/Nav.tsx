"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { ROUTES } from "@/i18n/content";
import type { Content } from "@/i18n/content";
import LangSwitch from "./LangSwitch";
import { Menu, Close } from "./Icons";

export default function Nav({ locale, t }: { locale: Locale; t: Content["nav"] }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const base = `/${locale}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links = [
    ...ROUTES.filter((r) => r.key !== "contact").map((r) => ({
      href: `${base}/${r.seg}`,
      label: t[r.key as keyof Content["nav"]],
    })),
    { href: `${base}/contact`, label: t.contactLink },
  ];

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/85 backdrop-blur-md border-b border-[var(--color-line)]"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <nav className="container-x flex items-center justify-between h-16 md:h-20 gap-4">
        <Link href={base} className="display text-xl md:text-2xl tracking-wide shrink-0">
          BALADJI <span className="text-gold-grad">KWATA</span>
        </Link>

        <div className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition-colors ${
                isActive(l.href) ? "text-[var(--color-gold)]" : "text-[var(--color-muted)] hover:text-[var(--color-fg)]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <LangSwitch locale={locale} />
          <Link href={`${base}/contact`} className="hidden sm:inline-flex btn btn-gold !py-2.5 !px-5 text-sm">
            {t.contact}
          </Link>
          <button className="lg:hidden p-2 -mr-2" onClick={() => setOpen(true)} aria-label="Menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* mobile drawer */}
      <div className={`fixed inset-0 z-50 lg:hidden transition ${open ? "visible" : "invisible"}`} aria-hidden={!open}>
        <div
          className={`absolute inset-0 bg-black/70 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[78%] max-w-xs bg-[var(--color-bg-2)] border-l border-[var(--color-line)] p-6 flex flex-col transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button className="self-end p-2" onClick={() => setOpen(false)} aria-label="Close">
            <Close className="w-6 h-6" />
          </button>
          <div className="mt-6 flex flex-col gap-5 text-lg display">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={isActive(l.href) ? "text-[var(--color-gold)]" : "hover:text-[var(--color-gold)]"}
              >
                {l.label}
              </Link>
            ))}
            <Link href={`${base}/contact`} className="btn btn-gold mt-2 justify-center">
              {t.contact}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
