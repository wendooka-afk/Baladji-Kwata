import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getContent } from "@/i18n/content";
import { pageMetadata, breadcrumbJsonLd } from "@/i18n/seo";
import PageHeader from "@/components/PageHeader";
import PressKit from "@/components/PressKit";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const loc = (isLocale(locale) ? locale : "fr") as Locale;
  const t = getContent(loc);
  return pageMetadata({
    locale: loc,
    path: "presse",
    title: t.pageHeaders.press.title,
    description: t.pageHeaders.press.metaDescription,
    image: t.pageHeaders.press.image,
  });
}

export default async function PressePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getContent(locale as Locale);
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd(locale as Locale, [
              { name: t.nav.home, path: "" },
              { name: t.pageHeaders.press.title, path: "presse" },
            ]),
          ),
        }}
      />
      <PageHeader {...t.pageHeaders.press} />
      <PressKit locale={locale as Locale} t={t.press} bare />
    </main>
  );
}
