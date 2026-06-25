import type { Metadata } from "next";
import { locales, type Locale } from "./config";
import { SOCIALS, ALBUM, CONTACT } from "./content";

/** Canonical production origin. Update if the domain changes. */
export const SITE_URL = "https://baladjikwata.com";

/**
 * Build canonical + hreflang alternates for a page.
 * `path` = segment(s) after the locale, e.g. "" (home), "musique", "groupe/meknel".
 * URLs are relative; Next resolves them against `metadataBase` (set in the layout).
 */
export function seoAlternates(locale: Locale, path: string): Metadata["alternates"] {
  const sub = path ? `/${path}` : "";
  const languages: Record<string, string> = { "x-default": `/fr${sub}` };
  for (const l of locales) languages[l] = `/${l}${sub}`;
  return { canonical: `/${locale}${sub}`, languages };
}

/**
 * Full page metadata: title, description, canonical/hreflang, Open Graph and
 * Twitter card — all page-specific. Without this, pages only inherited the
 * generic homepage OG title/description/image, so every shared link (Music,
 * Palmarès, Contact...) showed the same social-share card.
 */
export function pageMetadata({
  locale,
  path,
  title,
  description,
  image,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  image: string;
}): Metadata {
  const fullTitle = `${title} — Baladji Kwata`;
  return {
    title: fullTitle,
    description,
    alternates: seoAlternates(locale, path),
    openGraph: {
      title: fullTitle,
      description,
      url: path ? `/${locale}/${path}` : `/${locale}`,
      siteName: "Baladji Kwata",
      type: "website",
      locale: locale === "fr" ? "fr_CM" : "en_US",
      images: [{ url: image, width: 1200, height: 1500 }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

/** Person JSON-LD for a member bio page — helps both rich results and AI/GEO citations. */
export function personJsonLd(
  member: { slug: string; name: string; role: string; img: string; metaDescription: string },
  locale: Locale,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    description: member.metaDescription,
    image: `${SITE_URL}${member.img}`,
    url: `${SITE_URL}/${locale}/groupe/${member.slug}`,
    memberOf: { "@type": "MusicGroup", name: "Baladji Kwata", url: SITE_URL },
  };
}

/** BreadcrumbList JSON-LD — site hierarchy for rich results and AI crawlers. */
export function breadcrumbJsonLd(locale: Locale, items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}/${locale}${it.path ? `/${it.path}` : ""}`,
    })),
  };
}

/** Official trophy names — identical strings in FR/EN, kept here to avoid a locale dependency. */
const AWARD_TITLES = [
  "Cameroon Music Evolution 2023",
  "Castel Beer Talent 2023",
  "Garaya d'Or 2023",
  "Garaya d'Or 2024",
  "Sahel Award 2023",
  "Sahel Award 2024",
  "Afrique Créa 2023",
];

/** Locale-independent JSON-LD describing the band (schema.org/MusicGroup). */
export function musicGroupJsonLd() {
  const members = [
    "Meknel",
    "Dogui le Baladjien",
    "Monsieur Muss",
    "Blek",
    "Devas",
  ];
  return {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "Baladji Kwata",
    alternateName: "BLDK Industrie",
    url: SITE_URL,
    image: `${SITE_URL}/images/hero/officiel.jpeg`,
    genre: ["Urban", "Afrobeat", "Hip-Hop", "Afropop"],
    foundingDate: "2007",
    foundingLocation: {
      "@type": "Place",
      name: "Ngaoundéré, Adamaoua, Cameroun",
    },
    member: members.map((name) => ({ "@type": "Person", name })),
    award: AWARD_TITLES,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "booking",
      email: CONTACT.email,
      telephone: CONTACT.phone1,
      areaServed: "CM",
    },
    album: {
      "@type": "MusicAlbum",
      name: `${ALBUM.title} (${ALBUM.subtitle})`,
      datePublished: ALBUM.releaseDate,
      numTracks: ALBUM.tracks,
      url: ALBUM.storeUrl,
      image: `${SITE_URL}${ALBUM.cover}`,
    },
    sameAs: Object.values(SOCIALS),
  };
}
