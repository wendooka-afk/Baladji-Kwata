import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getContent } from "@/i18n/content";
import { seoAlternates } from "@/i18n/seo";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import Members from "@/components/Members";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getContent((isLocale(locale) ? locale : "fr") as Locale);
  return {
    title: `${t.pageHeaders.group.title} — Baladji Kwata`,
    description: t.pageHeaders.group.subtitle,
    alternates: seoAlternates((isLocale(locale) ? locale : "fr") as Locale, "groupe"),
  };
}

export default async function GroupePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getContent(locale as Locale);
  return (
    <main>
      <PageHeader {...t.pageHeaders.group} />
      <About t={t.about} />
      <Members locale={locale as Locale} t={t.members} />
    </main>
  );
}
