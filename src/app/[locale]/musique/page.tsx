import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getContent } from "@/i18n/content";
import { seoAlternates } from "@/i18n/seo";
import PageHeader from "@/components/PageHeader";
import Music from "@/components/Music";
import Discography from "@/components/Discography";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getContent((isLocale(locale) ? locale : "fr") as Locale);
  return {
    title: `${t.pageHeaders.music.title} — Baladji Kwata`,
    description: t.pageHeaders.music.subtitle,
    alternates: seoAlternates((isLocale(locale) ? locale : "fr") as Locale, "musique"),
  };
}

export default async function MusiquePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getContent(locale as Locale);
  return (
    <main>
      <PageHeader {...t.pageHeaders.music} />
      <Music t={t.music} />
      <Discography t={t.discography} />
    </main>
  );
}
