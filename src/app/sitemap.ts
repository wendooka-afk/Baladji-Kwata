import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { ROUTES, MEMBER_SLUGS } from "@/i18n/content";
import { SITE_URL } from "@/i18n/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Path segments after /[locale]: home + top-level routes + member bio pages.
  const paths = [
    "",
    ...ROUTES.map((r) => r.seg),
    ...MEMBER_SLUGS.map((slug) => `groupe/${slug}`),
  ];

  const url = (locale: string, path: string) =>
    `${SITE_URL}/${locale}${path ? `/${path}` : ""}`;

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: url(locale, path),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, url(l, path)]),
        ),
      },
    })),
  );
}
