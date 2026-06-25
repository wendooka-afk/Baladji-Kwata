"use client";

import { useState } from "react";
import type { Content } from "@/i18n/content";
import { SOCIALS, CONTACT } from "@/i18n/content";
import Reveal from "./Reveal";
import { Phone, Mail, Spotify, Apple, YouTube, Instagram, Facebook, TikTok, Arrow } from "./Icons";

export default function Contact({ t, bare }: { t: Content["contact"]; bare?: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Booking — ${name || "Demande"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  }

  const socials = [
    { href: SOCIALS.spotify, icon: Spotify, label: "Spotify" },
    { href: SOCIALS.appleMusic, icon: Apple, label: "Apple Music" },
    { href: SOCIALS.youtube, icon: YouTube, label: "YouTube" },
    { href: SOCIALS.instagram, icon: Instagram, label: "Instagram" },
    { href: SOCIALS.facebook, icon: Facebook, label: "Facebook" },
    { href: SOCIALS.tiktok, icon: TikTok, label: "TikTok" },
  ];

  const phoneHref = (p: string) => `tel:${p.replace(/\s/g, "")}`;

  return (
    <section id="contact" className={`${bare ? "pb-[clamp(4rem,9vw,7.5rem)] pt-4" : "section-pad"} bg-[var(--color-bg-2)]`}>
      <div className="container-x grid md:grid-cols-2 gap-12 items-start">
        <div>
          <Reveal>
            {!bare && (
              <>
                <p className="eyebrow mb-3">{t.label}</p>
                <h2 className="display text-4xl md:text-5xl mb-4">{t.title}</h2>
              </>
            )}
            <p className="text-[var(--color-muted)] max-w-md">{t.intro}</p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 space-y-3">
              <div className="text-sm text-[var(--color-muted)]">{t.phoneLabel}</div>
              <a href={phoneHref(CONTACT.phone1)} className="flex items-center gap-3 hover:text-[var(--color-gold)] transition-colors">
                <Phone className="w-5 h-5 text-[var(--color-gold)]" /> {CONTACT.phone1}
              </a>
              <a href={phoneHref(CONTACT.phone2)} className="flex items-center gap-3 hover:text-[var(--color-gold)] transition-colors">
                <Phone className="w-5 h-5 text-[var(--color-gold)]" /> {CONTACT.phone2}
              </a>
              <div className="text-sm text-[var(--color-muted)] pt-1">{t.emailLabel}</div>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 hover:text-[var(--color-gold)] transition-colors">
                <Mail className="w-5 h-5 text-[var(--color-gold)]" /> {CONTACT.email}
              </a>
              <div className="text-sm text-[var(--color-muted)] pt-1">{CONTACT.city}</div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8">
              <div className="text-sm text-[var(--color-muted)] mb-3">{t.followLabel}</div>
              <div className="flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 grid place-items-center rounded-full border border-[var(--color-line)] text-[var(--color-muted)] hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] transition-colors"
                  >
                    <s.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <form onSubmit={submit} className="card p-6 space-y-4">
            <div>
              <label className="text-sm text-[var(--color-muted)]">{t.formName}</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 w-full rounded-lg bg-[var(--color-bg)] border border-[var(--color-line)] px-4 py-3 outline-none focus:border-[var(--color-gold)] transition-colors"
              />
            </div>
            <div>
              <label className="text-sm text-[var(--color-muted)]">{t.formEmail}</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full rounded-lg bg-[var(--color-bg)] border border-[var(--color-line)] px-4 py-3 outline-none focus:border-[var(--color-gold)] transition-colors"
              />
            </div>
            <div>
              <label className="text-sm text-[var(--color-muted)]">{t.formMessage}</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="mt-1 w-full rounded-lg bg-[var(--color-bg)] border border-[var(--color-line)] px-4 py-3 outline-none focus:border-[var(--color-gold)] transition-colors resize-none"
              />
            </div>
            <button type="submit" className="btn btn-gold w-full justify-center">
              <Mail className="w-4 h-4" /> {t.formSend} <Arrow className="w-4 h-4" />
            </button>
            <p className="text-xs text-[var(--color-muted)]">{t.formNote}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
