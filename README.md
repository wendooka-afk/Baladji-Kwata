# Site officiel — Baladji Kwata

Site vitrine bilingue (FR/EN) du groupe de musique urbaine **Baladji Kwata** (Ngaoundéré, Cameroun).
Objectif : image / crédibilité pro (médias, sponsors, booking).

## Stack
- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4**
- i18n FR/EN maison (segment `[locale]` + middleware de redirection)
- Composants serveur + quelques composants client (nav, galerie lightbox, formulaire, facades YouTube)

## Démarrer
```bash
npm install
npm run dev      # http://localhost:3000  (redirige vers /fr)
npm run build    # build de production
npm run start    # sert le build
```

## Structure (site MULTI-PAGES)
```
src/
  app/[locale]/            layout (fonts, SEO, nav, footer)
    page.tsx               Accueil (hero, stats, teasers, presse, extrait musique, partenaires, CTA)
    groupe/page.tsx        Le groupe (histoire + membres)
    musique/page.tsx       Musique (Spotify + clips YouTube) + discographie
    palmares/page.tsx      Palmarès + preuves presse
    concerts/page.tsx      Affiches concerts/événements
    galerie/page.tsx       Galerie (lightbox)
    contact/page.tsx       Booking (formulaire mailto + tél + réseaux)
  app/globals.css          design system (thème sombre/doré, @layer components)
  i18n/config.ts           locales (fr, en)
  i18n/content.ts          TOUT le contenu bilingue + routes + listes (membres, vidéos, galerie, affiches, presse, partenaires)
  middleware.ts            redirection / -> /fr selon Accept-Language
  components/              Nav (routes + état actif), Hero, PageHeader, Teasers, Marquee, CtaBanner,
                          About, Members, Music, LiteYouTube, Achievements, Discography, Posters, Gallery, Contact, Footer
public/images/             group/ members/ covers/ posters/ hero/ press/
```

## Pages
Accueil · `/groupe` · `/groupe/[membre]` (bio par membre) · `/musique` · `/palmares` · `/concerts` · `/galerie` · `/contact` — chacune en FR et EN.
Nav route-based avec état actif ; sections internes réutilisables (prop `bare` pour éviter les doublons de titre sous le PageHeader).

## Album en vente
« DJé Mōne (Pour Vous) » est vendu sur Colorfol (1000 FCFA) : https://store.colorfol.com/album/3312
Pochette officielle : `public/images/covers/dje-mone-official.jpg`. Bouton d'achat sur l'accueil (`AlbumPromo`) et la page Musique (`Discography`). URL/prix centralisés dans `ALBUM` (`src/i18n/content.ts`).

## Déploiement (recommandé : Vercel)
Pousser le repo, importer sur Vercel, build auto. Aucune variable d'env requise.
