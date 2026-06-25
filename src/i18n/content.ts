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
  phone2: "+237 682 559 152",
  email: "bldkindustrie@gmail.com",
  city: "Ngaoundéré, Adamaoua — Cameroun",
};

// Navigation routes (segment after /[locale])
export const ROUTES = [
  { seg: "groupe", key: "group" },
  { seg: "musique", key: "music" },
  { seg: "palmares", key: "achievements" },
  { seg: "concerts", key: "concerts" },
  { seg: "galerie", key: "gallery" },
  { seg: "presse", key: "press" },
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
  "/images/group/group-1.jpg",
  "/images/group/011.jpg",
  "/images/group/20241226_130021-1.jpg",
  "/images/group/20250820_141040.jpg",
  "/images/group/DSC06302.jpg",
  "/images/group/DSC07665.png",
  "/images/group/DSC07813.jpg",
  "/images/group/DSC07925.jpg",
  "/images/group/DSC07965.jpg",
  "/images/group/IMG_5839.jpg",
  "/images/group/Kwata-1.jpg",
  "/images/group/kwta-2.jpg",
  "/images/group/PXL_20250102_204625876.jpg",
  "/images/group/PXL_20250211_163620208.MP.jpg",
  "/images/group/PXL_20250713_023038595.NIGHT.jpg",
  "/images/group/PXL_20250713_023149665.NIGHT.jpg",
  "/images/DSC07820.jpg",
  "/images/DSC07840-Recovered.jpg",
  "/images/DSC07845.jpg",
  "/images/ggg.jpg",
  "/images/IMG-20250809-WA0043.jpg",
  "/images/IMG_1714.jpg",
  "/images/IMG_1725.jpg",
  "/images/IMG_2506.jpg",
  "/images/PXL_20240618_171840262.MP.jpg",
  "/images/PXL_20240618_171941711.MP.jpg",
  "/images/PXL_20240618_172111358-2.MP.jpg",
  "/images/PXL_20241120_191403413.MP.jpg",
  "/images/PXL_20250211_165132732.MP.jpg",
  "/images/PXL_20260112_085804781.jpg",
  "/images/PXL_20260112_085818710.jpg",
  "/images/PXL_20260112_085849398.jpg",
  "/images/PXL_20260228_074810254.MP.jpg",
  "/images/PXL_20260228_075810111.MP.jpg",
  "/images/PXL_20260313_115406968.jpg",
  "/images/concerts/IMG-20250603-WA0024.jpg",
  "/images/concerts/IMG-20250603-WA0027.jpg",
  "/images/concerts/IMG-20250603-WA0037.jpg",
  "/images/concerts/IMG-20250603-WA0038.jpg",
  "/images/concerts/IMG-20250603-WA0046.jpg",
  "/images/concerts/IMG-20250603-WA0049.jpg",
  "/images/concerts/IMG-20250603-WA0056.jpg",
  "/images/concerts/IMG-20250603-WA0063.jpg",
  "/images/concerts/IMG-20250603-WA0069.jpg",
  "/images/concerts/IMG-20250603-WA0071.jpg",
  "/images/concerts/IMG-20250603-WA0073.jpg",
  "/images/concerts/IMG-20250603-WA0073-2.jpg",
  "/images/concerts/IMG-20250809-WA0047.jpg",
  "/images/concerts/IMG_4972.jpg",
  "/images/concerts/IMG_4992.jpg",
  "/images/concerts/IMG_4995.jpg",
  "/images/press/PXL_20250820_125039645.PORTRAIT.ORIGINAL.jpg",
  "/images/press/PXL_20250820_130626017.MP.jpg",
  "/images/press/PXL_20250820_160921177.MP.jpg",
];

// Affiches / events
export const POSTERS: string[] = [
  "/images/posters/poster_spectacle-geants.jpg",
  "/images/posters/poster_media-tour-1.jpg",
  "/images/posters/poster_prime2.jpg",
  "/images/posters/poster_maroua.jpg",
  "/images/posters/poster_concert-toulou.jpg",
  "/images/posters/poster_je-serai.jpg",
  "/images/posters/poster_live-baladji.jpg",
  "/images/posters/poster_concert-24dec.jpg",
  "/images/posters/poster_festival.jpg",
  "/images/posters/poster_tele-pidgi.jpg",
];

// Presse & partenaires (bandeaux défilants)
export const PRESS = [
  "RFI",
  "TV5MONDE",
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
  "World-Cola",
  "Boissons du Cameroun",
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
      press: fr ? "Presse" : "Press",
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
        image: "/images/hero/Kwata-1.jpg",
      },
      music: {
        eyebrow: fr ? "La musique" : "The music",
        title: fr ? "Musique" : "Music",
        subtitle: fr ? "Clips, sons et album — partout en streaming." : "Videos, tracks and album — everywhere on streaming.",
        image: "/images/hero/DSC07665.png",
      },
      achievements: {
        eyebrow: fr ? "Reconnaissance" : "Recognition",
        title: fr ? "Palmarès" : "Track record",
        subtitle: fr ? "Des victoires qui dépassent les frontières." : "Wins that cross borders.",
        image: "/images/hero/groupe_can_maillots.jpg",
      },
      concerts: {
        eyebrow: fr ? "Sur scène" : "On stage",
        title: fr ? "Concerts & événements" : "Concerts & events",
        subtitle: fr ? "Une bête de scène, du Nord au reste du pays." : "A live powerhouse, from the North across the country.",
        image: "/images/hero/DSC07813.jpg",
      },
      gallery: {
        eyebrow: fr ? "En images" : "In pictures",
        title: fr ? "Galerie" : "Gallery",
        subtitle: fr ? "Le groupe, en coulisses et en lumière." : "The band, backstage and in the spotlight.",
        image: "/images/hero/DSC07925.jpg",
      },
      press: {
        eyebrow: fr ? "Pour les médias" : "For the media",
        title: fr ? "Espace presse" : "Press kit",
        subtitle: fr
          ? "Biographie, palmarès, photos officielles et contacts — tout pour parler de Baladji Kwata."
          : "Biography, achievements, official photos and contacts — everything to cover Baladji Kwata.",
        image: "/images/hero/group-4.jpg",
      },
      contact: {
        eyebrow: "Booking",
        title: fr ? "Réservez le groupe" : "Book the band",
        subtitle: fr ? "Concerts, festivals, partenariats de marque." : "Concerts, festivals, brand partnerships.",
        image: "/images/hero/kwta-2.jpg",
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
          img: "/images/hero/Kwata-1.jpg",
        },
        {
          seg: "musique",
          title: fr ? "La musique" : "The music",
          desc: fr ? "Clips, sons et album DJé Mone." : "Videos, tracks and the album DJé Mone.",
          img: "/images/hero/DSC07665.png",
        },
        {
          seg: "palmares",
          title: fr ? "Le palmarès" : "Track record",
          desc: fr ? "Manie Musicale, CAN 2025, 7 trophées." : "Manie Musicale, AFCON 2025, 7 awards.",
          img: "/images/hero/groupe_can_maillots.jpg",
        },
        {
          seg: "concerts",
          title: fr ? "Sur scène" : "On stage",
          desc: fr ? "Concerts, tournées, événements." : "Concerts, tours, events.",
          img: "/images/hero/DSC07813.jpg",
        },
      ],
      // bande de chiffres
      stats: [
        { value: "2007", label: fr ? "Depuis" : "Since" },
        { value: "1/2", label: fr ? "Manie Musicale 2024" : "Manie Musicale 2024" },
        { value: "7", label: fr ? "Trophées remportés" : "Awards won" },
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
            "Baladji Kwata est un groupe de musique urbain basé au cameroun plus precisement à Ngaoundéré dans la région de l'Adamaoua. Le groupe voit le jour en 2007 par les fondateurs qui sont MEKNEL, PETIT NONO, BIG WILLY. Tous passionnés de musique et d'art en général. Baladji est le nom du quartier le plus célèbre de la ville, un quartier défavorisé qui a vu naitre les membres fondateurs du groupe. Ils acquirent une renommée dans la ville en écumant les différentes scènes des concerts scolaires avec le célèbre titre de tous les jeunes de cette époque \"sur la route de mardock\". Le groupe remporte trois fois de suite la compétition \"coca cola caravane du bonheur\" au niveau régional dans la catégorie RAP et karaoké. Le groupe continue de participer aux différentes compétitions. Ils sont 2 eme du classement national de \"MTN make the music\". Malgré la popularité, certains membres vont préférer continuer leurs études et s'engagent dans d'autres corps de métier. Meknel, le leader du groupe sera obligé de puiser dans des multiples talents artistiques comme la peinture, la sérigraphie, l'infographie, la photographie, le montage vidéo pour maintenir le groupe.",
            "Tous ce savoir-faire contribue à labélisé le groupe en BLD 74 avec l'arrivée de Chaldis, danseur de HIPHOP, acteur de cinéma et cascadeur, le Dick-Jokey Devastador, le rappeur Dogui technicien audiovisuel donnera un souffle nouveau au groupe qui somnolait déjà. En 2017, le label se transforme en BLDK Industrie, mettant en service leur multiple talent artistique. Chemin faisant, le label permettra l'éclosion des artistes et ingénieur de son comme Monsieur Muss et Blek rappeur et auteur compositeur. En dépit de toutes les difficultés que rencontrent généralement les jeunes du septentrion pour organiser des évènements, les jeunes artistes de la BLDK ont poussés pour organiser des spectacles pour promouvoir leurs travaux à l'exemple du concert du 24 décembre 2018 qui fut un succès du côté du carrefour Gabriel et le concert du 11 février 2019 au niveau de l'Alliance Française de Ngaoundéré.",
            "Afin de rehausser l'identité de la culture sahélienne, le groupe reprend ABBA DJAORO avec son célèbre titre \"argent sale\". En 2022, pendant la coupe d'Afrique des Nations de Football au Cameroun, le groupe participe à la fête à travers une collaboration avec les griots de Galim-Tignere avec le mythique titre \"VE ROU ZAUNE (vert rouge jaune). A l'entame de la compétition, un clash nait sur internet entre les ivoiriens et les camerounais. Une réplique sous fond musicale zouglou sur le titre \"HUER\" explose les compteurs sur la toile et fait découvrir le groupe Baladji Kwata sur le continent. Le plus gros succès jusqu'ici arrive avec la chanson \"TCHI-TCHI\" qui cumule plusieurs millions de vues sur les réseaux sociaux et positionne le groupe Baladji comme l'un des meilleurs groupes de musique urbain du Cameroun. Baladji devient célèbre pour son énergie déployée dans la défense des couleurs du Cameroun surfant ainsi sur l'actualité BUZZ et la fibre patriotique enchaînant plusieurs sorties artistiques tel que la reprise de la chanson SHABASSIKO de PHILL BILL, la réponse respectueuse à Longue Longue, clé 14 prenant position pour l'artiste TENOR qui l'opposait à la comédienne EUNICE, le titre PORTA PORTY qui sensibilise la jeunesse sur le phénomène de la vie facile et de luxe et le titre comique LES CELIBATAIRES.",
            "EN 2023, à la veille de la fête du ramadan, le groupe Baladji Kwata fait encore parler de lui avec le titre \"DJOULDE\" qui comptabilise déjà plusieurs milliers de vues sur youtube et une fois de plus positionne le groupe a la tete des hits septentrionnaux. Pour honnorer les Travailleurs à l'occasion de la journéé internationale du travail, le groupe Baladji Kwata va sortir le chanson intitulée \"TRAVAILLER\" en Mai 2023, cette chanson va être selectionnée pour representer le Cameroun et l'Afrique au concours international \"La Manie Musicale\" connue comme la coupe du monde de la musique Francophone se deroulant aux Etats-Unies…",
            "Baladji Kwata est une industrie d'artistes passionnés des réalisations et récompense au-delà musical. On peut noter les réalisations de la série \"SEMBE\", le film \"désillusion fatale\", Meknel qui prête sa voix pour les doublages des films animés. Baladji Kwata a été nominé dans plusieurs évènement de récompenses à l'instar des public vision awards et garaya d'or, il remporte le trophée de Cameroon music evolution dans la catégorie meilleur groupe de musique.",
            "En 2023, Baladji Kwata organise sa première tournée pendant la fête de la Tabaski nommée BALADJI DJOULDÉ TOUR qui rassemble plus 10 000 personnes cumulées dans les villes de Ngaoundéré; Garoua; Maroua; Ngong.",
            "le Groupe Baladji Kwata cumule jusqu'en Mars 2024 plusieurs trophés telsque Cameroon music Evolution 2023( meilleur groupe); Garaya d'or 2023( meilleur groupe; chanson populaire); Sahel Award 2023( chanson populaire; meilleur groupe urbain); Talent decouverte Castel 2023; et enfin finaliste du concours \"La Manie Musicale\" aux États Unis avec en face des artistes comme Maître GIMS; Black M; Soprano…",
            "Baladji Kwata a collaboré avec des entreprises telsque MTN Cameroon pour la Campagne \"débloque le continent en toi\" et \"MTN237 Boss\" et est depuis Janvier 2024 ambassadeur de la marque de boissons \"World-Cola\" une collaboration avec les Boissons du cameroun.",
            "Le label BLDK Industrie est constitué de plusieurs jeunes talentueux et patriotes avec pour slogan «tout commence par une idée, la seule règle c'est ta propre règle».",
          ]
        : [
            "Baladji Kwata is an urban music group based in Cameroon, more precisely in Ngaoundéré in the Adamaoua region. The group came into being in 2007, founded by MEKNEL, PETIT NONO, BIG WILLY. All passionate about music and art in general. Baladji is the name of the most famous neighborhood in the city, an underprivileged neighborhood that saw the birth of the group's founding members. They gained renown in the city touring the various school-concert stages with the famous song of all the young people of that era, \"sur la route de mardock\". The group won three times in a row the \"coca cola caravane du bonheur\" competition at regional level in the RAP and karaoke category. The group continues to take part in various competitions. They are 2nd in the national ranking of \"MTN make the music\". Despite the popularity, some members preferred to continue their studies and went into other lines of work. Meknel, the group's leader, would have to draw on multiple artistic talents such as painting, screen printing, graphic design, photography and video editing to keep the group going.",
            "All this know-how helped label the group as BLD 74, and with the arrival of Chaldis, a HIPHOP dancer, film actor and stuntman, the Dick-Jockey Devastador, and the rapper Dogui, an audiovisual technician, gave new life to the group, which was already dozing off. In 2017, the label became BLDK Industrie, putting their multiple artistic talents to work. Along the way, the label allowed the emergence of artists and sound engineers such as Monsieur Muss and Blek, rapper and songwriter. Despite all the difficulties young people from the North generally face organizing events, BLDK's young artists pushed to organize shows to promote their work, such as the concert of December 24, 2018, a success near the Carrefour Gabriel, and the concert of February 11, 2019, at the Alliance Française of Ngaoundéré.",
            "To enhance the identity of Sahelian culture, the group covers ABBA DJAORO's famous song \"argent sale\". In 2022, during the Africa Cup of Nations football tournament in Cameroon, the group joined the celebration through a collaboration with the griots of Galim-Tignere on the legendary song \"VE ROU ZAUNE\" (green red yellow). At the start of the competition, a clash broke out online between Ivorians and Cameroonians. A response set to zouglou music on the song \"HUER\" exploded the counters online and got the group Baladji Kwata discovered across the continent. The biggest success so far comes with the song \"TCHI-TCHI\", which has racked up several million views on social media and positions the group Baladji as one of the best urban music groups in Cameroon. Baladji became famous for the energy it puts into defending the colors of Cameroon, riding the BUZZ news and patriotic feeling, releasing several artistic works such as the cover of PHILL BILL's song SHABASSIKO, the respectful response to Longue Longue, \"clé 14\" taking a stand for the artist TENOR in his dispute with the comedian EUNICE, the song PORTA POTTY raising youth awareness about the easy and luxurious life phenomenon, and the comic song LES CELIBATAIRES.",
            "IN 2023, on the eve of the Ramadan holiday, the group Baladji Kwata made people talk about it again with the song \"DJOULDE\", which already counts several thousand views on youtube and once again positions the group at the top of Northern hits. To honor Workers on the occasion of International Workers' Day, the group Baladji Kwata released the song titled \"TRAVAILLER\" in May 2023; this song would be selected to represent Cameroon and Africa at the international competition \"La Manie Musicale\", known as the World Cup of Francophone music, held in the United States…",
            "Baladji Kwata is an industry of artists passionate about achievements and recognition beyond music. Worth noting are the productions of the series \"SEMBE\", the film \"désillusion fatale\", Meknel lending his voice for the dubbing of animated films. Baladji Kwata has been nominated at several awards events such as the public vision awards and garaya d'or, and won the Cameroon music evolution trophy in the best music group category.",
            "In 2023, Baladji Kwata organized its first tour during the Tabaski holiday, named BALADJI DJOULDÉ TOUR, which gathered more than 10,000 people combined in the cities of Ngaoundéré; Garoua; Maroua; Ngong.",
            "As of March 2024, the group Baladji Kwata has accumulated several trophies such as Cameroon music Evolution 2023 (best group); Garaya d'or 2023 (best group; popular song); Sahel Award 2023 (popular song; best urban group); Talent découverte Castel 2023; and finally finalist of the \"La Manie Musicale\" competition in the United States, up against artists such as Maître GIMS; Black M; Soprano…",
            "Baladji Kwata has partnered with companies such as MTN Cameroon for the \"débloque le continent en toi\" campaign and \"MTN237 Boss\", and has been, since January 2024, an ambassador for the drink brand \"World-Cola\", a collaboration with Boissons du Cameroun.",
            "The label BLDK Industrie is made up of several talented and patriotic young people, with the slogan «tout commence par une idée, la seule règle c'est ta propre règle» — everything starts with an idea, the only rule is your own rule.",
          ],
      images: [
        "/images/hero/officiel.jpeg",
        "/images/hero/groupe_can_maillots.jpg",
        "/images/hero/DSC07813.jpg",
        "/images/hero/DSC07665.png",
        "/images/hero/kwta-2.jpg",
      ],
      stats: [
        { value: "2007", label: fr ? "Année de création" : "Founded" },
        { value: "1/2", label: fr ? "finale Manie Musicale 2024" : "finalist, Manie Musicale 2024" },
        { value: "7", label: fr ? "Trophées remportés" : "Awards won" },
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
      list: [
        {
          slug: "meknel",
          name: "Meknel",
          role: fr ? "Leader · Fondateur · Artiste complet" : "Leader · Founder · Multi-disciplinary artist",
          img: "/images/members/meknel.jpg",
          bio: fr
            ? [
                "Né à Ngaoundere en 1987 et originaire du centre , Mekinda Mekinda nelson de son nom d'artiste MEKNEL s'intéresse très vite à l'art , et développe plusieurs aptitudes artistiques tels que la peinture , la musique , l'infographie ,la réalisation cinématographique la sérigraphie, la comédie et l'art oratoire du conte . 3 fois Vainqueur regional de la compétition caravane du bonheur dans la catégorie karaoké , vainqueur de la compétition scolaire conte et légende en 2000 dans la région de l'Adamaoua , vainqueur de la compétition d'illustration Commonwealth en 2001 à Ngaoundere. Il multiplie des actions qui exaltent sa passion artistique dans la ville de Ngaoundere ,nous pouvons noter la customisation des murs de la ville par ses graffitis qui ont redoré le secteur , la réalisation de ses premiers films à l'aide d'un téléphone , et la conception des t-shirts tel que Ngaoundere et Baladji Kwata.",
                "Cofondateur du groupe Baladji Kwata ,avec ses amis Petit Nono et Big Willy ,Meknel s'adonne profondément à sa nouvelle casquette de leader et greffe son talent au service du groupe qui s'agrandit et devient le label BLDK . Par ailleurs , il optient un diplôme professionnelle d'instructeur de Jeunesse et Animation au CENAJES de Kribi et intègre la fonction publique pour participer à l'accompagnement de la jeunesse camerounaise . Auteur de plusieurs titres à succès buzz Meknel ne cessera de nous surprendre et suit sa propre voix , il a d'ailleurs ses propres slogans qui disent , tout commence par une idée , la seule règle c'est ta propre règle .",
              ]
            : [
                "Born in Ngaoundere in 1987 and originally from the Centre region, Mekinda Mekinda nelson, stage name MEKNEL, took an interest in art very early on, and developed several artistic abilities such as painting, music, graphic design, filmmaking, screen printing, comedy and the oral art of storytelling. 3-time regional winner of the caravane du bonheur competition in the karaoke category, winner of the school storytelling and legend competition in 2000 in the Adamaoua region, winner of the Commonwealth illustration competition in 2001 in Ngaoundere. He multiplies actions that exalt his artistic passion in the city of Ngaoundere — we can note the customization of the city's walls with his graffiti which brightened up the area, the making of his first films using a phone, and the design of t-shirts such as Ngaoundere and Baladji Kwata.",
                "Co-founder of the group Baladji Kwata, with his friends Petit Nono and Big Willy, Meknel devotes himself deeply to his new role as leader and puts his talent to work for the group, which grows and becomes the label BLDK. He also obtains a professional diploma as a Youth and Animation instructor at CENAJES in Kribi and joins the civil service to take part in supporting Cameroonian youth. Author of several hit/buzz songs, Meknel will keep surprising us and follows his own voice — he has his own slogans which say, everything starts with an idea, the only rule is your own rule.",
              ],
        },
        {
          slug: "dogui",
          name: "Dogui le Baladjien",
          role: fr ? "Rappeur · Réalisateur · Beatmaker" : "Rapper · Director · Beatmaker",
          img: "/images/members/dogui.jpg",
          bio: fr
            ? [
                "De son nom de naissance Wassande Doko, né à ngaoundéré et originaire de la region de l'adamaoua ( Cameroune). Artiste- rappeur mais aussi très bon melomane, il a plusieurs corde à son arc entre autres :Realisateur, coloriste, photographe, infographe, beatmaker (C' DOGUI qui à la beat) et technicien de son. Il raconte beaucoup d'histoire avec un style musicale, avec des phases de rap très comiques et saisisantes en même temps garnies des termes et thèmes locaux( Gbaya et Foufoulde). C'est à 14 ans qu'il découvre sa passion pour les matières artistiques et en particulier le rap. Il integre le groupe Baladji Kwata en 2014 et devient membre co-fondateur du studio mixte BLDK industrie en 2016. Il a à son actif quelques singles et un ep intitulé \"RPCB\" (Rap Plus Comme Le Blanc), de 5 titres sortie en 2019.",
              ]
            : [
                "Birth name Wassande Doko, born in ngaoundéré and originally from the adamaoua region (Cameroon). An artist-rapper but also a very good music lover, he has several strings to his bow, among others: Director, colorist, photographer, graphic designer, beatmaker (it's DOGUI who's got the beat) and sound engineer. He tells a lot of stories through a musical style, with very comic and striking rap phases at the same time filled with local terms and themes (Gbaya and Fulfulde). It's at 14 that he discovers his passion for artistic subjects and rap in particular. He joins the group Baladji Kwata in 2014 and becomes a co-founding member of the mixed studio BLDK industrie in 2016. He has to his credit a few singles and a solo EP titled \"RPCB\" (Rap Plus Comme Le Blanc), 5 tracks, released in 2019.",
              ],
        },
        {
          slug: "monsieur-muss",
          name: "Monsieur Muss",
          role: fr ? "Chanteur · Arrangeur · Beatmaker" : "Singer · Arranger · Beatmaker",
          img: "/images/members/monsieur-muss.jpg",
          bio: fr
            ? [
                "De son nom d'état civil KEDAM GUISSI, Il est né en 1991 à Djerwing dans la région du Nord, plus précisément dans le Mayo-Rey à Rey-Bouba. Il découvre sa passion pour la musique en 2008 où il commence en tant que Rappeur.",
                "En 2012 Il s'inscrit dans une chorale de l'université de Ngaoundéré puis il se performe en tant que chanteur. En 2014 il suit une formation pour technicien de son et ouvre en collaboration avec ses camarades un \"home studio\" où ils vont créer un label appelé BIF ZIK.",
                "En 2017 il rejoint le label BLDK INDUSTRIE et le groupe Baladji Kwata où il est actuellement artiste Chanteur, Arrangeur, Beatmaker et Technicien de son.",
                "Vainqueur de plusieurs compétitions de chants tels que : Institut Goethe talent découverte; Nescafé One Song; Blaise B ( Le goût de ça Challenge) ; Slim Marion ( Game boy Challenge) Cameroon Music Urban Awards. Il est auteur de plusieurs singles tels que: Wamen; T'aimer; Essaie Encore; Tout donner...",
                "Monsieur Muss actuellement en résidence à Ngaoundéré.",
              ]
            : [
                "Civil name KEDAM GUISSI, He was born in 1991 in Djerwing in the Northern region, more precisely in Mayo-Rey in Rey-Bouba. He discovers his passion for music in 2008 where he starts out as a Rapper.",
                "In 2012 he enrolls in a choir at the university of Ngaoundéré then performs as a singer. In 2014 he takes training as a sound engineer and opens, in collaboration with his friends, a \"home studio\" where they go on to create a label called BIF ZIK.",
                "In 2017 he joins the label BLDK INDUSTRIE and the group Baladji Kwata where he is currently a Singer, Arranger, Beatmaker and Sound engineer artist.",
                "Winner of several singing competitions such as: Institut Goethe talent découverte; Nescafé One Song; Blaise B (Le goût de ça Challenge); Slim Marion (Game boy Challenge) Cameroon Music Urban Awards. He is the author of several singles such as: Wamen; T'aimer; Essaie Encore; Tout donner...",
                "Monsieur Muss currently resides in Ngaoundéré.",
              ],
        },
        {
          slug: "blek",
          name: "Blek",
          role: fr ? "Rappeur · Auteur-compositeur" : "Rapper · Singer-songwriter",
          img: "/images/members/blek.jpg",
          bio: fr
            ? [
                "Né en 1993 à Ngaoundéré et de son vrai nom BELKE YACK-WÉE JUNIOR ROMARIC, Blek est un rappeur, auteur, compositeur, interprète à la plume assez diversifié. Il grandit a Ngaoundéré et est passionné de musique depuis sa tendre enfance, car dès l'âge de 12ans il interprétait déjà correctement certaines chansons Hip-hop qu'il écoutait. Étant du genre très timide face au public, il se recroquevillait dans sa chambre pour écrire ses textes et les rapper. Passionné par Eminem, Booba, et La fouine. En 2012 son voisin PRINCE BEATZ avec qui il a commencé dans la musique détecte en lui de véritables qualités à poser sur des Beats qu'il lui proposait et le pousse quasiment à sortir de son cocon prouver de quoi il est capable et se lancer véritablement dans la musique. En 2013 il participe à la compétition Sloy Campus tour dans la catégorie Rap, où il fait sensation. Subjugué par son talent il est immédiatement approché par Meknel, PDG du label BLDK Industrie qui lui propose ardemment de rejoindre le label pour développer ses qualités, il prend du temps à réfléchir Mais finit par intégrer la BLDK Industrie en 2015 en tant qu'artiste rappeur solo et enfin en 2022 il intègre le groupe BALADJI KWATA. Ayant la capacité de s'adapter à plusieurs rythmes et styles tout en écrivant des textes de folies, Blek est comme qui pourrait dire l'un des jeunes rappeurs le plus complet de sa génération.",
              ]
            : [
                "Born in 1993 in Ngaoundéré, real name BELKE YACK-WÉE JUNIOR ROMARIC, Blek is a fairly versatile rapper, author, composer and performer with the pen. He grew up in Ngaoundéré and has been passionate about music since early childhood, since from the age of 12 he was already correctly performing certain Hip-hop songs he listened to. Being the very shy type in front of an audience, he would curl up in his room to write his lyrics and rap them. A fan of Eminem, Booba, and La fouine. In 2012 his neighbour PRINCE BEATZ, with whom he started out in music, detected real qualities in him for laying down verses on the Beats he offered him, and pushed him to pretty much come out of his cocoon, prove what he's capable of and truly get into music. In 2013 he took part in the Sloy Campus tour competition in the Rap category, where he caused a sensation. Captivated by his talent, he was immediately approached by Meknel, CEO of the label BLDK Industrie, who eagerly offered him to join the label to develop his qualities; he took time to think it over but ended up joining BLDK Industrie in 2015 as a solo rapper artist, and finally in 2022 he joined the group BALADJI KWATA. With the ability to adapt to several rhythms and styles while writing wild lyrics, Blek is, one might say, one of the most complete young rappers of his generation.",
              ],
        },
        {
          slug: "devas",
          name: "Devas",
          role: fr ? "DJ · Performeur" : "DJ · Performer",
          img: "/images/members/devas.jpg",
          bio: fr
            ? [
                "Assolgna Abraham Angel à l'etat civil, il a vu le jour le 10 février 1996 A nganha dans la région de l'Adamaoua. il a grandit dans la ville de Garoua où tout petit, il commence à s'intéresser à la musique et la danse. En 2008, il agence les etudes secondaire et le metier de disco joker dans les snacks. C'est en 2014 qu'il intègres le groupe Baladji Kwata.",
              ]
            : [
                "Civil name Assolgna Abraham Angel, he was born on February 10, 1996 in Nganha in the Adamaoua region. He grew up in the city of Garoua where, from a very young age, he started taking an interest in music and dance. In 2008, he combined secondary studies with the job of disco jockey in snack bars. It's in 2014 that he joins the group Baladji Kwata.",
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
      image: "/images/hero/011.jpg",
      items: [
        {
          title: fr ? "Cameroon Music Evolution 2023" : "Cameroon Music Evolution 2023",
          desc: fr ? "Meilleur groupe du Cameroun." : "Best group in Cameroon.",
        },
        {
          title: fr ? "Castel Beer Talent 2023" : "Castel Beer Talent 2023",
          desc: fr ? "Talent découverte." : "Talent discovery award.",
        },
        {
          title: fr ? "Garaya d'Or 2023" : "Garaya d'Or 2023",
          desc: fr ? "Meilleur groupe & chanson populaire." : "Best group & popular song.",
        },
        {
          title: fr ? "Garaya d'Or 2024" : "Garaya d'Or 2024",
          desc: fr ? "Meilleur groupe & chanson populaire." : "Best group & popular song.",
        },
        {
          title: fr ? "Sahel Award 2023" : "Sahel Award 2023",
          desc: fr
            ? "Meilleur groupe artiste urbain, chanson populaire & prix spécial du jury."
            : "Best urban artist group, popular song & special jury prize.",
        },
        {
          title: fr ? "Sahel Award 2024" : "Sahel Award 2024",
          desc: fr ? "Meilleur groupe." : "Best group.",
        },
        {
          title: fr ? "Afrique Créa 2023" : "Afrique Créa 2023",
          desc: fr ? "Meilleur groupe & chansons populaires." : "Best group & popular songs.",
        },
      ],
      highlightsTitle: fr ? "Autres distinctions" : "Other highlights",
      highlights: fr
        ? [
            "Finaliste de La Manie Musicale (USA) avec « Travailler », face à Maître GIMS, Black M et Soprano.",
            "« On est venu gagner » — hymne viral des supporters camerounais pendant la CAN 2025.",
            "Vice-champions nationaux du concours MTN Make the Music.",
          ]
        : [
            "Finalist at La Manie Musicale (USA) with \"Travailler\", up against Maître GIMS, Black M and Soprano.",
            "\"On est venu gagner\" — viral anthem for Cameroonian fans during AFCON 2025.",
            "National runners-up at the MTN Make the Music competition.",
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

    press: {
      label: fr ? "Pour les médias" : "For the media",
      title: fr ? "Dossier de presse" : "Press kit",
      intro: fr
        ? "Biographie complète, parcours, palmarès et visuels officiels de Baladji Kwata — tout pour préparer un article, une interview ou une programmation."
        : "Full biography, career timeline, awards and official visuals for Baladji Kwata — everything you need for an article, interview or booking.",
      downloadLabel: fr ? "Télécharger le dossier de presse" : "Download the press kit",
      fileNote: fr ? "PDF · environ 1,4 Mo" : "PDF · about 1.4 MB",
      file: "/dossier-presse-baladji-kwata.pdf",
      factsTitle: fr ? "En bref" : "At a glance",
      facts: [
        { label: fr ? "Fondation" : "Founded", value: "2007" },
        { label: fr ? "Basé à" : "Based in", value: "Ngaoundéré, Adamaoua" },
        { label: "Label", value: "BLDK Industrie" },
        { label: fr ? "Membres" : "Members", value: "5" },
        { label: fr ? "Trophées" : "Awards", value: "7" },
        { label: "Album", value: "DJé Mōne (2026)" },
      ],
      contactTitle: fr ? "Demandes presse & interviews" : "Press & interview requests",
      contactCta: fr ? "Contacter l'équipe" : "Contact the team",
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
      emailLabel: "Email",
    },

    footer: {
      tagline: fr ? "Musique urbaine · Ngaoundéré, Cameroun" : "Urban music · Ngaoundéré, Cameroon",
      rights: fr ? "Tous droits réservés." : "All rights reserved.",
      navTitle: fr ? "Navigation" : "Navigation",
      followTitle: fr ? "Suivre" : "Follow",
    },
  };
}
