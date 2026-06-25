import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getContent } from "@/i18n/content";
import { pageMetadata, breadcrumbJsonLd } from "@/i18n/seo";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import Members from "@/components/Members";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const loc = (isLocale(locale) ? locale : "fr") as Locale;
  const t = getContent(loc);
  return pageMetadata({
    locale: loc,
    path: "groupe",
    title: t.pageHeaders.group.title,
    description: t.pageHeaders.group.metaDescription,
    image: t.pageHeaders.group.image,
  });
}

export default async function GroupePage({ params }: { params: Promise<{ locale: string }> }) {
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
              { name: t.pageHeaders.group.title, path: "groupe" },
            ]),
          ),
        }}
      />
      <PageHeader {...t.pageHeaders.group} />
      <About t={t.about} />
      <Members locale={locale as Locale} t={t.members} />
    </main>
  );
}
