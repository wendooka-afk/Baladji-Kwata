import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getContent } from "@/i18n/content";
import { pageMetadata, breadcrumbJsonLd } from "@/i18n/seo";
import PageHeader from "@/components/PageHeader";
import Posters from "@/components/Posters";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const loc = (isLocale(locale) ? locale : "fr") as Locale;
  const t = getContent(loc);
  return pageMetadata({
    locale: loc,
    path: "concerts",
    title: t.pageHeaders.concerts.title,
    description: t.pageHeaders.concerts.metaDescription,
    image: t.pageHeaders.concerts.image,
  });
}

export default async function ConcertsPage({ params }: { params: Promise<{ locale: string }> }) {
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
              { name: t.pageHeaders.concerts.title, path: "concerts" },
            ]),
          ),
        }}
      />
      <PageHeader {...t.pageHeaders.concerts} />
      <Posters t={t.posters} bare />
    </main>
  );
}
