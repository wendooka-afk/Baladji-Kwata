import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getContent } from "@/i18n/content";
import { seoAlternates } from "@/i18n/seo";
import PageHeader from "@/components/PageHeader";
import PressKit from "@/components/PressKit";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getContent((isLocale(locale) ? locale : "fr") as Locale);
  return {
    title: `${t.pageHeaders.press.title} — Baladji Kwata`,
    description: t.pageHeaders.press.subtitle,
    alternates: seoAlternates((isLocale(locale) ? locale : "fr") as Locale, "presse"),
  };
}

export default async function PressePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getContent(locale as Locale);
  return (
    <main>
      <PageHeader {...t.pageHeaders.press} />
      <PressKit locale={locale as Locale} t={t.press} bare />
    </main>
  );
}
