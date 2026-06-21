import type { Locale } from "./config";

/* ------------------------------------------------------------------ */
/*  Shared (locale-independent) data                                   */
/* ------------------------------------------------------------------ */

export const SOCIALS = {
  spotify: "https://open.spotify.com/artist/52F1m6IR0ZxpWnRqiMB0Fa",
  appleMusic: "https://music.apple.com/ca/artist/baladji-kwata/1611008818",
  youtube: "https://www.youtube.com/c/BALADJIKWATAindustrie",
  instagram: "https://www.instagram.com/baladjikwata/",
  facebook: "https://www.facebook.com/bldkindustrie/",
  tiktok: "https://www.tiktok.com/@baladji_kwata",
};

export const SPOTIFY_ARTIST_ID = "52F1m6IR0ZxpWnRqiMB0Fa";

export const CONTACT = {
  phone1: "+237 697 857 770",
  phone2: "+237 693 951 771",
  city: "Ngaoundéré, Adamaoua — Cameroun",
};

// Navigation routes (segment after /[locale])
export const ROUTES = [
  { seg: "groupe", key: "group" },
  { seg: "musique", key: "music" },
  { seg: "palmares", key: "achievements" },
  { seg: "concerts", key: "concerts" },
  { seg: "galerie", key: "gallery" },
  { seg: "contact", key: "contact" },
] as const;

// YouTube clips officiels (id = identifiant vidéo YouTube)
export const VIDEOS: { id: string; title: string; year?: string }[] = [
  { id: "D2p9IR-ZTPk", title: "On est venu gagner", year: "2025" },
  { id: "O1uobXdZN6s", title: "Sembé", year: "2025" },
  { id: "fB4fYPaF7tU", title: "Le Son du Peuple", year: "2025" },
  { id: "4ELZZVwbDHU", title: "Iyendé (feat. Eldine)", year: "2025" },
  { id: "cHQ1YDWUcnc", title: "Travailler", year: "2023" },
  { id: "Ehbcxnn4Xv8", title: "Côte d'Ivoire on arrive (feat. Zota)" },
  { id: "lEPNwKk6N10", title: "Tramol Wodaï" },
  { id: "teYb0gQ2q4I", title: "Papa Super-Héros (feat. Vanister Enama)", year: "2025" },
];

// Galerie (photos groupe)
export const GALLERY: string[] = [
  "/images/hero/officiel.jpeg",
  "/images/group/group-6.jpg",
  "/images/group/group-bw-vintage.jpg",
  "/images/group/group-jerseys-flag.jpg",
  "/images/group/group-orange-vests.jpg",
  "/images/hero/groupe_can_maillots.jpg",
  "/images/group/group-jerseys-red.jpg",
  "/images/group/group_tv-1.jpg",
  "/images/group/group-11.jpg",
  "/images/group/group-tuned.jpg",
  "/images/group/group-studio.jpg",
  "/images/hero/groupe_maillots_drapeau.jpg",
  "/images/group/group-1.jpg",
];

// Affiches / events
export const POSTERS: string[] = [
  "/images/posters/poster_spectacle-geants.jpg",
  "/images/posters/poster_media-tour-1.jpg",
  "/images/posters/poster_prime2.jpg",
  "/images/posters/poster_maroua.jpg",
  "/images/posters/poster_concert-toulou.jpg",
  "/images/posters/poster_je-serai.jpg",
  "/images/posters/poster_06fevrier-1.jpg",
  "/images/posters/poster_monsieur-muss-birthday.jpg",
  "/images/posters/poster_baladji-concert.jpg",
  "/images/posters/poster_live-baladji.jpg",
  "/images/posters/poster_media-tour-2.jpg",
  "/images/posters/poster_concert-24dec.jpg",
];

// Presse & partenaires (bandeaux défilants)
export const PRESS = [
  "Cameroon Tribune",
  "Africa24 TV",
  "Music In Africa",
  "Laura Dave Media",
  "Afrik sur Seine",
  "Sports & Culture Network",
  "CRTV",
  "Wawacité",
];

export const PARTNERS = [
  "Coca-Cola",
  "MTN",
  "Orange",
  "Manie Musicale",
  "X-Maleya",
  "Vanister Enama",
  "BLDK Industrie",
];

// Album en vente (Colorfol)
export const ALBUM = {
  title: "DJé Mōne",
  subtitle: "Pour Vous",
  price: "1000 FCFA",
  releaseDate: "2026-02-06",
  storeUrl: "https://store.colorfol.com/album/3312",
  cover: "/images/covers/dje-mone-official.jpg",
  tracks: 16,
};

// Slugs des pages membres (ordre = affichage)
export const MEMBER_SLUGS = ["meknel", "dogui", "monsieur-muss", "blek", "devas"] as const;

/* ------------------------------------------------------------------ */
/*  Localized content                                                  */
/* ------------------------------------------------------------------ */

export type Content = ReturnType<typeof getContent>;

export function getContent(locale: Locale) {
  const fr = locale === "fr";

  return {
    nav: {
      home: fr ? "Accueil" : "Home",
      group: fr ? "Le groupe" : "The band",
      music: fr ? "Musique" : "Music",
      achievements: fr ? "Palmarès" : "Achievements",
      concerts: fr ? "Concerts" : "Concerts",
      gallery: fr ? "Galerie" : "Gallery",
      contact: "Booking",
      contactLink: "Contact",
      listen: fr ? "Écouter" : "Listen",
    },

    hero: {
      eyebrow: fr ? "Ngaoundéré · Cameroun" : "Ngaoundéré · Cameroon",
      title: "BALADJI KWATA",
      tagline: fr ? "Les étoiles du Sahel" : "The stars of the Sahel",
      intro: fr
        ? "Du quartier Baladji à la scène internationale — la musique urbaine du Nord-Cameroun qui fait vibrer tout un peuple."
        : "From the Baladji neighborhood to the international stage — the urban sound of Northern Cameroon moving an entire people.",
      ctaListen: fr ? "Écouter la musique" : "Listen now",
      ctaBooking: fr ? "Booking / Contact" : "Booking / Contact",
      image: "/images/hero/officiel.jpeg",
    },

    // En-têtes de page (bannières)
    pageHeaders: {
      group: {
        eyebrow: fr ? "Le collectif" : "The collective",
        title: fr ? "Le groupe" : "The band",
        subtitle: fr ? "Une famille, une voix, un quartier." : "One family, one voice, one neighborhood.",
        image: "/images/hero/officiel.jpeg",
      },
      music: {
        eyebrow: fr ? "La musique" : "The music",
        title: fr ? "Musique" : "Music",
        subtitle: fr ? "Clips, sons et album — partout en streaming." : "Videos, tracks and album — everywhere on streaming.",
        image: "/images/hero/officiel.jpeg",
      },
      achievements: {
        eyebrow: fr ? "Reconnaissance" : "Recognition",
        title: fr ? "Palmarès" : "Track record",
        subtitle: fr ? "Des victoires qui dépassent les frontières." : "Wins that cross borders.",
        image: "/images/hero/officiel.jpeg",
      },
      concerts: {
        eyebrow: fr ? "Sur scène" : "On stage",
        title: fr ? "Concerts & événements" : "Concerts & events",
        subtitle: fr ? "Une bête de scène, du Nord au reste du pays." : "A live powerhouse, from the North across the country.",
        image: "/images/hero/officiel.jpeg",
      },
      gallery: {
        eyebrow: fr ? "En images" : "In pictures",
        title: fr ? "Galerie" : "Gallery",
        subtitle: fr ? "Le groupe, en coulisses et en lumière." : "The band, backstage and in the spotlight.",
        image: "/images/hero/officiel.jpeg",
      },
      contact: {
        eyebrow: "Booking",
        title: fr ? "Réservez le groupe" : "Book the band",
        subtitle: fr ? "Concerts, festivals, partenariats de marque." : "Concerts, festivals, brand partnerships.",
        image: "/images/hero/officiel.jpeg",
      },
    },

    home: {
      exploreLabel: fr ? "Explorer" : "Explore",
      exploreTitle: fr ? "Découvrir Baladji Kwata" : "Discover Baladji Kwata",
      teasers: [
        {
          seg: "groupe",
          title: fr ? "Le groupe" : "The band",
          desc: fr ? "L'histoire, les membres, l'ADN." : "The story, the members, the DNA.",
          img: "/images/hero/officiel.jpeg",
        },
        {
          seg: "musique",
          title: fr ? "La musique" : "The music",
          desc: fr ? "Clips, sons et album DJé Mone." : "Videos, tracks and the album DJé Mone.",
          img: "/images/hero/officiel.jpeg",
        },
        {
          seg: "palmares",
          title: fr ? "Le palmarès" : "Track record",
          desc: fr ? "Manie Musicale, CAN 2025, Coca-Cola." : "Manie Musicale, AFCON 2025, Coca-Cola.",
          img: "/images/hero/officiel.jpeg",
        },
        {
          seg: "concerts",
          title: fr ? "Sur scène" : "On stage",
          desc: fr ? "Concerts, tournées, événements." : "Concerts, tours, events.",
          img: "/images/hero/officiel.jpeg",
        },
      ],
      // bande de chiffres
      stats: [
        { value: "2007", label: fr ? "Depuis" : "Since" },
        { value: "1/2", label: fr ? "Manie Musicale 2024" : "Manie Musicale 2024" },
        { value: "x3", label: fr ? "Coca-Cola Caravane" : "Coca-Cola Caravane" },
        { value: "100%", label: fr ? "Made in Ngaoundéré" : "Made in Ngaoundéré" },
      ],
      pressTitle: fr ? "Ils parlent de nous" : "As seen in",
      partnersTitle: fr ? "Partenaires & collaborations" : "Partners & collaborations",
      featuredTitle: fr ? "À écouter maintenant" : "Listen now",
      featuredCta: fr ? "Toute la musique" : "All the music",
      albumKicker: fr ? "Nouvel album · Disponible" : "New album · Out now",
      albumDesc: fr
        ? "« DJé Mōne (Pour Vous) » — 16 titres. Soutenez le groupe, procurez-vous l'album officiel."
        : "\"DJé Mōne (Pour Vous)\" — 16 tracks. Support the band, get the official album.",
      albumBuy: fr ? "Acheter — 1000 FCFA" : "Buy — 1000 FCFA",
      albumListen: fr ? "Écouter un extrait" : "Listen to a preview",
      ctaTitle: fr ? "Programmez Baladji Kwata" : "Book Baladji Kwata",
      ctaText: fr
        ? "Pour vos concerts, festivals et activations de marque — l'énergie qui remplit les stades."
        : "For your concerts, festivals and brand activations — the energy that fills stadiums.",
      ctaBtn: fr ? "Demander un devis" : "Request a quote",
    },

    about: {
      label: fr ? "Le groupe" : "The band",
      title: fr ? "Une histoire née dans le quartier" : "A story born in the streets",
      paragraphs: fr
        ? [
            "Baladji Kwata est un groupe de musique urbaine basé à Ngaoundéré, dans la région de l'Adamaoua. Le nom vient de « Baladji », le quartier le plus célèbre de la ville — un quartier populaire qui a vu naître les membres fondateurs.",
            "Fondé en 2007 autour de son leader Meknel, le collectif mêle rap, afro et sonorités du Nord pour porter des messages forts : travail, dignité, fierté et cohésion. Une véritable famille, sans ego, devenue la voix d'une génération.",
            "Porté par la structure créative BLDK Industrie, le groupe écrit, compose, réalise ses clips et bâtit son image de A à Z.",
          ]
        : [
            "Baladji Kwata is an urban music group based in Ngaoundéré, in Cameroon's Adamaoua region. The name comes from \"Baladji\", the city's most famous neighborhood — a working-class district where the founding members grew up.",
            "Formed in 2007 around its leader Meknel, the collective blends rap, afro and Northern sounds to carry strong messages: hard work, dignity, pride and unity. A true family, ego-free, now the voice of a generation.",
            "Driven by the creative house BLDK Industrie, the group writes, composes, directs its own videos and builds its image from the ground up.",
          ],
      image: "/images/hero/officiel.jpeg",
      stats: [
        { value: "2007", label: fr ? "Année de création" : "Founded" },
        { value: "1/2", label: fr ? "finale Manie Musicale 2024" : "finalist, Manie Musicale 2024" },
        { value: "x3", label: fr ? "Coca-Cola Caravane du Bonheur" : "Coca-Cola Caravane du Bonheur" },
      ],
    },

    history: {
      label: fr ? "Parcours" : "Journey",
      title: fr ? "L'histoire du groupe" : "The band's story",
      intro: fr
        ? "Du quartier Baladji à la scène nationale : les étapes clés d'un collectif né dans la rue."
        : "From the Baladji neighborhood to the national stage: the key milestones of a collective born in the streets.",
      events: [
        {
          year: "2007",
          title: fr ? "Naissance à Baladji" : "Born in Baladji",
          text: fr
            ? "Le groupe voit le jour dans le quartier Baladji, à Ngaoundéré, autour de Meknel et des premiers membres fondateurs. Le nom du quartier devient celui du collectif."
            : "The group is born in the Baladji neighborhood of Ngaoundéré, around Meknel and the first founding members. The neighborhood's name becomes the collective's name.",
        },
        {
          year: "2023",
          title: fr ? "« Travailler »" : "“Travailler”",
          text: fr
            ? "Le clip « Travailler » installe l'ADN du groupe : un message de dignité et d'effort qui parle à toute une jeunesse du Nord."
            : "The video “Travailler” sets the group's DNA: a message of dignity and hard work that speaks to a whole generation in the North.",
        },
        {
          year: "2024",
          title: fr ? "Manie Musicale & Coca-Cola" : "Manie Musicale & Coca-Cola",
          text: fr
            ? "Demi-finalistes de la Manie Musicale 2024 — où ils éliminent des poids lourds comme Black M et Amir — et trois participations à la Coca-Cola Caravane du Bonheur."
            : "Semi-finalists of Manie Musicale 2024 — knocking out heavyweights like Black M and Amir — plus three appearances at the Coca-Cola Caravane du Bonheur.",
        },
        {
          year: "2025",
          title: fr ? "L'hymne de la CAN" : "The AFCON anthem",
          text: fr
            ? "« On est venu gagner » devient virale comme hymne de la CAN 2025, portant la voix de Baladji Kwata bien au-delà des frontières du Cameroun."
            : "“On est venu gagner” goes viral as an AFCON 2025 anthem, carrying Baladji Kwata's voice well beyond Cameroon's borders.",
        },
        {
          year: "2026",
          title: fr ? "L'album « DJé Mōne »" : "The album “DJé Mōne”",
          text: fr
            ? "Sortie de l'album officiel « DJé Mōne (Pour Vous) », 16 titres : l'aboutissement de près de vingt ans de travail collectif."
            : "Release of the official album “DJé Mōne (Pour Vous)”, 16 tracks: the culmination of nearly twenty years of collective work.",
        },
      ],
    },

    members: {
      label: fr ? "Le collectif" : "The collective",
      title: fr ? "Les membres" : "The members",
      note: fr
        ? "Un noyau de talents complémentaires, unis comme une famille. Cliquez sur un membre pour découvrir son profil."
        : "A core of complementary talents, united like a family. Click a member to discover their profile.",
      viewBio: fr ? "Voir le profil" : "View profile",
      bioTitle: fr ? "Biographie" : "Biography",
      memberOf: fr ? "Membre de Baladji Kwata" : "Member of Baladji Kwata",
      back: fr ? "Retour au groupe" : "Back to the band",
      // NOTE: photo↔name mapping et bios à affiner avec le groupe.
      list: [
        {
          slug: "meknel",
          name: "Meknel",
          role: fr ? "Leader · Fondateur · Chant & Rap" : "Leader · Founder · Vocals & Rap",
          img: "/images/members/meknel.webp",
          bio: fr
            ? [
                "Meknel est le leader et l'un des membres fondateurs de Baladji Kwata, qu'il crée en 2007 dans le quartier Baladji à Ngaoundéré. C'est lui qui tient le groupe à bout de bras à travers les années et les changements de line-up.",
                "Artiste complet, il ne se limite pas à la musique : peinture, sérigraphie, graphisme, photographie et montage vidéo font partie de son arsenal. Au sein de BLDK Industrie, il écrit, compose et réalise — il façonne l'identité visuelle et sonore du groupe de A à Z.",
              ]
            : [
                "Meknel is the leader and one of the founding members of Baladji Kwata, which he created in 2007 in the Baladji neighborhood of Ngaoundéré. He is the one who has carried the group through the years and the line-up changes.",
                "A complete artist, he is not limited to music: painting, screen printing, graphic design, photography and video editing are all part of his toolkit. Within BLDK Industrie, he writes, composes and directs — shaping the group's visual and sonic identity from the ground up.",
              ],
        },
        {
          slug: "dogui",
          name: "Dogui le Baladjien",
          role: fr ? "Rappeur" : "Rapper",
          img: "/images/members/dogui.webp",
          bio: fr
            ? [
                "Dogui le Baladjien porte le nom du quartier dans son blaze : pur produit de Baladji, il incarne l'énergie de rue et le flow brut du collectif.",
                "Sur scène comme en freestyle, il fait partie des voix qui donnent à Baladji Kwata sa rage et sa fierté du terroir.",
              ]
            : [
                "Dogui le Baladjien carries the neighborhood's name in his stage name: a pure product of Baladji, he embodies the street energy and raw flow of the collective.",
                "On stage and in freestyle, he is one of the voices that give Baladji Kwata its grit and local pride.",
              ],
        },
        {
          slug: "monsieur-muss",
          name: "Monsieur Muss",
          role: fr ? "Chanteur" : "Singer",
          img: "/images/members/monsieur-muss.webp",
          bio: fr
            ? [
                "Monsieur Muss apporte la mélodie au groupe. Sa voix se retrouve sur des titres plus posés et sentimentaux comme « T'aimer » ou « Mi yiddi mo ».",
                "Il est le contrepoint chanté du collectif, celui qui adoucit le rap avec des refrains qui restent en tête.",
              ]
            : [
                "Monsieur Muss brings melody to the group. His voice carries softer, more sentimental tracks like \"T'aimer\" or \"Mi yiddi mo\".",
                "He is the sung counterpoint of the collective, the one who softens the rap with hooks that stick.",
              ],
        },
        {
          slug: "blek",
          name: "Blek",
          role: fr ? "Rappeur" : "Rapper",
          img: "/images/members/blek.webp",
          bio: fr
            ? [
                "Blek est l'un des rappeurs du collectif, repéré notamment sur des freestyles marquants comme « Be wi yo mi saouti ».",
                "Technique et présence : il fait partie de l'ossature qui porte le son Baladji Kwata du Nord vers le reste du pays.",
              ]
            : [
                "Blek is one of the collective's rappers, noted in particular for standout freestyles such as \"Be wi yo mi saouti\".",
                "Technique and presence: he is part of the backbone carrying the Baladji Kwata sound from the North to the rest of the country.",
              ],
        },
        {
          slug: "devas",
          name: "Devas",
          role: fr ? "Rappeur · Performeur" : "Rapper · Performer",
          img: "/images/members/devas.webp",
          bio: fr
            ? [
                "Devas complète le noyau actuel de Baladji Kwata. Performeur dans l'âme, il fait vibrer la scène aux côtés de ses frères de groupe.",
                "Comme tout le collectif, il défend les couleurs du Cameroun et la fierté du Nord à chaque apparition.",
              ]
            : [
                "Devas completes the current core of Baladji Kwata. A performer at heart, he lights up the stage alongside his bandmates.",
                "Like the whole collective, he flies the colors of Cameroon and Northern pride at every appearance.",
              ],
        },
      ],
    },

    music: {
      label: fr ? "La musique" : "The music",
      title: fr ? "Clips & sons officiels" : "Official videos & tracks",
      intro: fr
        ? "Des hymnes qui rassemblent. Retrouvez Baladji Kwata sur toutes les plateformes."
        : "Anthems that bring people together. Find Baladji Kwata on every platform.",
      streamOn: fr ? "Streaming" : "Stream on",
      watchAll: fr ? "Voir toute la chaîne" : "See the full channel",
    },

    achievements: {
      label: fr ? "Reconnaissance" : "Recognition",
      title: fr ? "Le palmarès" : "Track record",
      image: "/images/hero/officiel.jpeg",
      items: [
        {
          title: fr ? "Manie Musicale 2024 — Demi-finale" : "Manie Musicale 2024 — Semi-final",
          desc: fr
            ? "Demi-finalistes du concours international de la chanson francophone (USA), avec « Travailler ». Éliminent Black M, Amir et Ouidad face à ~5000 établissements votants."
            : "Semi-finalists of the international Francophone song contest (USA) with \"Travailler\". Beat Black M, Amir and Ouidad, voted on by ~5,000 schools.",
        },
        {
          title: fr ? "« On est venu gagner » — CAN 2025" : "\"On est venu gagner\" — AFCON 2025",
          desc: fr
            ? "Hymne viral des supporters des Lions Indomptables pendant la CAN 2025, enregistré en 6 heures. Chanté dans les stades et les fan-zones."
            : "Viral anthem for the Indomitable Lions fans during AFCON 2025, recorded in just 6 hours. Sung in stadiums and fan-zones.",
        },
        {
          title: fr ? "Coca-Cola Caravane du Bonheur — x3" : "Coca-Cola Caravane du Bonheur — x3",
          desc: fr
            ? "Vainqueurs trois fois consécutives au niveau régional (catégorie rap & karaoké)."
            : "Three-time consecutive regional winners (rap & karaoke category).",
        },
        {
          title: fr ? "MTN Make the Music — Vice-champions" : "MTN Make the Music — Runners-up",
          desc: fr
            ? "2e place au niveau national."
            : "2nd place at national level.",
        },
      ],
      pressTitle: fr ? "Preuves & presse" : "Proof & press",
      press: [
        { img: "/images/press/maniemusicale2024_bracket.jpg", cap: fr ? "Bracket Manie Musicale 2024" : "Manie Musicale 2024 bracket" },
        { img: "/images/press/maniemusicale2024_classement.jpg", cap: fr ? "Classement officiel" : "Official ranking" },
        { img: "/images/press/lauradave_visuel_usa.png", cap: fr ? "« Le drapeau flotte aux USA »" : "\"The flag flies in the USA\"" },
      ],
    },

    discography: {
      label: fr ? "Discographie" : "Discography",
      title: fr ? "L'album du moment" : "The album of the moment",
      albumTitle: "DJé Mōne",
      albumSubtitle: fr ? "Pour Vous" : "Pour Vous",
      albumMeta: fr ? "Album · 16 titres · 2026" : "Album · 16 tracks · 2026",
      albumCover: "/images/covers/dje-mone-official.jpg",
      outNow: fr ? "Disponible maintenant" : "Out now",
      buyLabel: fr ? "Acheter l'album" : "Buy the album",
      priceNote: fr ? "Seulement 1000 FCFA · sur Colorfol" : "Only 1000 FCFA · on Colorfol",
      singlesTitle: fr ? "Singles marquants" : "Notable singles",
      singles: [
        "On est venu gagner (2025)",
        "Sembé (2025)",
        "Le Son du Peuple (2025)",
        "Iyendé feat. Eldine (2025)",
        "Papa Super-Héros feat. Vanister Enama (2025)",
        "Travailler (2023)",
        "Djouldé",
        "Tchi-Tchi",
        "Côte d'Ivoire on arrive feat. Zota",
        "War Djabou feat. X-Maleya",
      ],
    },

    gallery: {
      label: fr ? "En images" : "In pictures",
      title: fr ? "Galerie" : "Gallery",
    },

    posters: {
      label: fr ? "Sur scène" : "On stage",
      title: fr ? "Concerts & événements" : "Concerts & events",
      intro: fr
        ? "Une bête de scène, présente sur les plus grands événements de la région et au-delà."
        : "A powerhouse on stage, present at the region's biggest events and beyond.",
    },

    contact: {
      label: "Booking",
      title: fr ? "Réservez le groupe" : "Book the band",
      intro: fr
        ? "Concerts, festivals, événements privés, partenariats de marque — contactez l'équipe de Baladji Kwata."
        : "Concerts, festivals, private events, brand partnerships — get in touch with the Baladji Kwata team.",
      phoneLabel: fr ? "Téléphone / WhatsApp" : "Phone / WhatsApp",
      followLabel: fr ? "Suivez-nous" : "Follow us",
      formName: fr ? "Nom" : "Name",
      formEmail: "Email",
      formMessage: fr ? "Votre message" : "Your message",
      formSend: fr ? "Envoyer la demande" : "Send request",
      formNote: fr
        ? "Ce formulaire ouvre votre messagerie avec la demande pré-remplie."
        : "This form opens your email app with the request pre-filled.",
    },

    footer: {
      tagline: fr ? "Musique urbaine · Ngaoundéré, Cameroun" : "Urban music · Ngaoundéré, Cameroon",
      rights: fr ? "Tous droits réservés." : "All rights reserved.",
      navTitle: fr ? "Navigation" : "Navigation",
      followTitle: fr ? "Suivre" : "Follow",
    },
  };
}
