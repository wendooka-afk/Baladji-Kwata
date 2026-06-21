import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getContent } from "@/i18n/content";
import { seoAlternates } from "@/i18n/seo";
import PageHeader from "@/components/PageHeader";
import Posters from "@/components/Posters";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getContent((isLocale(locale) ? locale : "fr") as Locale);
  return {
    title: `${t.pageHeaders.concerts.title} — Baladji Kwata`,
    description: t.pageHeaders.concerts.subtitle,
    alternates: seoAlternates((isLocale(locale) ? locale : "fr") as Locale, "concerts"),
  };
}

export default async function ConcertsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getContent(locale as Locale);
  return (
    <main>
      <PageHeader {...t.pageHeaders.concerts} />
      <Posters t={t.posters} bare />
    </main>
  );
}
