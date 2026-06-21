import type { Metadata } from "next";
import { locales, type Locale } from "./config";
import { SOCIALS, ALBUM } from "./content";

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
