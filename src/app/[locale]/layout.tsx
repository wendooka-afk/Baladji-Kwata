import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getContent } from "@/i18n/content";
import { SITE_URL } from "@/i18n/seo";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-oswald", display: "swap" });

export const viewport: Viewport = {
  themeColor: "#0a0908",
  colorScheme: "dark",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const fr = locale !== "en";
  const title = "Baladji Kwata — " + (fr ? "Les étoiles du Sahel" : "The stars of the Sahel");
  const description = fr
    ? "Site officiel de Baladji Kwata, groupe de musique urbaine de Ngaoundéré (Cameroun). Demi-finalistes Manie Musicale 2024. Écoutez, regardez, réservez le groupe."
    : "Official website of Baladji Kwata, urban music group from Ngaoundéré (Cameroon). Manie Musicale 2024 semi-finalists. Listen, watch, book the band.";
  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title,
      description,
      type: "website",
      images: ["/images/hero/officiel.jpeg"],
      locale: fr ? "fr_CM" : "en_US",
    },
    twitter: { card: "summary_large_image", title, description },
    appleWebApp: { capable: true, title: "Baladji Kwata", statusBarStyle: "black-translucent" },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getContent(locale as Locale);

  return (
    <html lang={locale} className={`${inter.variable} ${oswald.variable}`}>
      <body className="bg-texture">
        <Nav locale={locale as Locale} t={t.nav} />
        {children}
        <Footer locale={locale as Locale} />
      </body>
    </html>
  );
}
