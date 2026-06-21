import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Baladji Kwata",
    short_name: "Baladji Kwata",
    description:
      "Site officiel de Baladji Kwata, groupe de musique urbaine de Ngaoundéré (Cameroun).",
    start_url: "/fr",
    display: "standalone",
    background_color: "#0a0908",
    theme_color: "#0a0908",
    lang: "fr",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any", purpose: "any" },
    ],
  };
}
