/**
 * Contenus du site Gade Gui.
 *
 * Règle : chaque fait chiffré vient d'une source publique (voir `sources`) ou de l'ancien site du client.
 * Les photos d'animaux, de produits et de paysages sont libres de droits (licence Unsplash) en attendant
 * un shooting professionnel ; les photos d'équipe et du Dégué-Ji viennent de Gade Gui.
 */

export type Img = { src: string; alt: string };

export const img = {
  hero: { src: "/images/hero-troupeau.jpg", alt: "Troupeau de zébus sur une piste de latérite, sous un grand ciel bleu" },
  baobab: { src: "/images/baobab.jpg", alt: "Baobab isolé dans la savane" },
  zebus: { src: "/images/elevage-zebus.jpg", alt: "Troupeau de zébus aux longues cornes" },
  zebu: { src: "/images/zebu.jpg", alt: "Portrait d'un zébu blanc" },
  moutons: { src: "/images/moutons.jpg", alt: "Berger guidant un troupeau de moutons dans une lumière dorée" },
  poussins: { src: "/images/poussins.jpg", alt: "Poussins dans un bâtiment d'élevage équipé de mangeoires et d'abreuvoirs" },
  pondeuses: { src: "/images/pondeuses.jpg", alt: "Poules pondeuses rousses autour d'une mangeoire" },
  oeufsPlateaux: { src: "/images/oeufs-plateaux.jpg", alt: "Main saisissant un œuf sur une pile de plateaux d'œufs" },
  oeufs: { src: "/images/oeufs.jpg", alt: "Œufs bruns alignés dans un plateau" },
  mainsPoussins: { src: "/images/mains-poussins.jpg", alt: "Mains tenant délicatement des poussins" },
  arachides: { src: "/images/arachides.jpg", alt: "Arachides en coque" },
  cafe: { src: "/images/cafe-touba.jpg", alt: "Tasse posée sur des grains de café torréfiés" },
  torrefaction: { src: "/images/torrefaction.jpg", alt: "Grains de café en cours de torréfaction" },
  savane: { src: "/images/savane.jpg", alt: "Coucher de soleil sur la savane" },
  equipe: { src: "/images/equipe-gadegui.webp", alt: "L'équipe Gade Gui devant un bâtiment d'élevage avicole" },
  degueJi: { src: "/images/degue-ji.png", alt: "Seau de pâte d'arachide Dégué-Ji de Gade Gui" },
} satisfies Record<string, Img>;

export const sources = {
  proparco2025: "https://proparco.fr/en/news/senegal-gade-gui-launches-table-egg-production-support-proparco",
  proparco2021: "https://proparco.fr/en/ressources/choose-africa-senegal-adama-sene-cisse-journey-cofounder-gade-gui",
  billionaires: "https://www.billionaires.africa/2025/11/11/senegal-adama-sene-cisse-4-6m-gade-gui-egg-expansion-2/",
  seneweb:
    "https://www.seneweb.com/fr/news/Societe/senegal-gade-gui-se-lance-dans-la-production-doeufs-de-table-avec-le-soutien-de-proparco_n_473643.html",
};

/* ------------------------------------------------------------------ */
/* Activités                                                           */
/* ------------------------------------------------------------------ */

export type ActivitySlug = "aviculture" | "elevage" | "transformation";

export type Activity = {
  slug: ActivitySlug;
  name: string;
  cta: string;
  kicker: string;
  title: string;
  summary: string;
  card: Img;
  hero: Img;
  intro: string[];
  highlight?: { value: string; label: string; source: string };
  pointsTitle: string;
  /** Vrai si les points forment une suite d'étapes (ils sont alors numérotés). */
  sequence?: boolean;
  points: { title: string; text: string }[];
  gallery: Img[];
};

export const activities: Activity[] = [
  {
    slug: "aviculture",
    name: "Aviculture",
    cta: "Découvrir l'aviculture",
    kicker: "Poulets de chair & œufs de table",
    title: "L'aviculture, cœur de métier du groupe.",
    summary:
      "Reconnu pour sa production de poulets de chair, Gade Gui construit une ferme de poules pondeuses pour produire des œufs de table au Sénégal.",
    card: img.poussins,
    hero: img.pondeuses,
    intro: [
      "Gade Gui compte parmi les entreprises majeures de la filière avicole sénégalaise, reconnue pour sa production de poulets de chair.",
      "En 2025, le groupe s'est lancé dans les œufs de table avec une ferme de poules pondeuses. L'œuf est la source de protéines animales la plus abordable : le produire localement, c'est rendre une alimentation de qualité accessible au plus grand nombre.",
    ],
    highlight: {
      value: "80 M+",
      label: "œufs de qualité à pleine capacité de la ferme de pondeuses",
      source: "Proparco, novembre 2025",
    },
    pointsTitle: "De la poulette à l'œuf conditionné",
    sequence: true,
    points: [
      { title: "Élevage", text: "Les poulettes sont élevées dans des bâtiments adaptés jusqu'à leur entrée en ponte." },
      {
        title: "Ponte",
        text: "Des installations fournies par NTD France, spécialiste des équipements avicoles, qui assure aussi l'appui technique.",
      },
      { title: "Tri", text: "Les œufs sont triés avant de quitter la ferme." },
      { title: "Conditionnement", text: "Les œufs sont emballés pour être livrés frais à nos clients." },
    ],
    gallery: [img.oeufsPlateaux, img.mainsPoussins, img.oeufs],
  },
  {
    slug: "elevage",
    name: "Élevage",
    cta: "Découvrir l'élevage",
    kicker: "Bovins & ovins",
    title: "Un élevage conduit dans le respect de l'animal.",
    summary:
      "Bovins et moutons élevés avec une attention portée au bien-être animal et à l'alimentation, pour une viande de qualité et des moutons de Tabaski.",
    card: img.zebus,
    hero: img.moutons,
    intro: [
      "Le pôle élevage de Gade Gui réunit bovins et ovins. Il applique la même exigence que les autres métiers du groupe : un cahier des charges suivi par des équipes formées.",
      "Pour la Tabaski, le groupe propose des moutons sélectionnés dans le cadre de son opération dédiée.",
    ],
    pointsTitle: "Nos principes d'élevage",
    points: [
      { title: "Bien-être animal", text: "Des conditions d'élevage pensées pour la santé et le confort des animaux." },
      { title: "Alimentation suivie", text: "Une alimentation maîtrisée, pour une viande tendre et savoureuse." },
      { title: "Moutons de Tabaski", text: "Des moutons sélectionnés pour la fête : renseignez-vous auprès de nos équipes." },
      { title: "Engagement social", text: "L'élevage au service des familles avec le projet « Une Famille Une Vache »." },
    ],
    gallery: [img.zebu, img.zebus],
  },
  {
    slug: "transformation",
    name: "Transformation",
    cta: "Découvrir la transformation",
    kicker: "Dégué-Ji & Café Touba",
    title: "Le goût du terroir, transformé au Sénégal.",
    summary:
      "La pâte d'arachide Dégué-Ji et le Café Touba : des produits du quotidien sénégalais, transformés avec des équipements modernes.",
    card: img.arachides,
    hero: img.torrefaction,
    intro: [
      "La transformation de l'arachide fait partie de l'histoire de Gade Gui. En 2021, l'entreprise y employait huit salariés permanents et accueillait jusqu'à cent saisonniers, en majorité des femmes.",
      "Aujourd'hui, le pôle transformation valorise des produits locaux sous la marque Gade Gui, de la pâte d'arachide Dégué-Ji au Café Touba.",
    ],
    highlight: {
      value: "100",
      label: "saisonniers accueillis au maximum en 2021, en majorité des femmes",
      source: "Proparco, juin 2021",
    },
    pointsTitle: "Nos savoir-faire",
    points: [
      { title: "Dégué-Ji", text: "Notre pâte d'arachide, un produit traditionnel sénégalais pour réussir mafés et sauces." },
      { title: "Café Touba", text: "Le café épicé emblématique du Sénégal, parfumé au djar (poivre de Guinée)." },
      { title: "Équipements modernes", text: "Des outils de transformation récents pour une qualité constante." },
      { title: "Produits dérivés", text: "D'autres produits issus des filières du groupe." },
    ],
    gallery: [img.cafe, img.degueJi, img.arachides],
  },
];

/* ------------------------------------------------------------------ */
/* Produits                                                            */
/* ------------------------------------------------------------------ */

export type Product = {
  slug: string;
  name: string;
  category: string;
  activity: ActivitySlug;
  description: string;
  image: Img;
};

// TODO client : formats, conditionnements et points de vente de chaque produit.
export const products: Product[] = [
  {
    slug: "degue-ji",
    name: "Dégué-Ji",
    category: "Pâte d'arachide",
    activity: "transformation",
    description: "La pâte d'arachide signée Gade Gui, pour réussir mafés, sauces et recettes du quotidien.",
    image: img.degueJi,
  },
  {
    slug: "cafe-touba",
    name: "Café Touba",
    category: "Café",
    activity: "transformation",
    description: "Le café épicé emblématique du Sénégal, au parfum de djar.",
    image: img.cafe,
  },
  {
    slug: "oeufs",
    name: "Œufs de table",
    category: "Aviculture",
    activity: "aviculture",
    description: "Des œufs produits au Sénégal, triés et conditionnés dans notre ferme de pondeuses.",
    image: img.oeufs,
  },
  {
    slug: "poulets",
    name: "Poulets de chair",
    category: "Aviculture",
    activity: "aviculture",
    description: "Le savoir-faire qui a fait la réputation de Gade Gui dans la filière avicole.",
    image: img.poussins,
  },
  {
    slug: "moutons",
    name: "Moutons de Tabaski",
    category: "Élevage",
    activity: "elevage",
    description: "Des moutons sélectionnés pour la Tabaski. Renseignez-vous auprès de nos équipes.",
    image: img.moutons,
  },
  {
    slug: "viande-bovine",
    name: "Viande bovine",
    category: "Élevage",
    activity: "elevage",
    description: "Une viande issue de notre élevage bovin, conduit dans le respect du bien-être animal.",
    image: img.zebu,
  },
];

/* ------------------------------------------------------------------ */
/* Le groupe                                                           */
/* ------------------------------------------------------------------ */

export const timeline = [
  {
    year: "2021",
    title: "Transformer l'arachide",
    short: "Transformation de l'arachide, avec jusqu'à 100 saisonniers, en majorité des femmes.",
    text: "Gade Gui transforme l'arachide avec huit salariés permanents et jusqu'à cent saisonniers, en majorité des femmes. Cofina, partenaire du programme Choose Africa, apporte son soutien financier.",
    source: "Proparco, juin 2021",
  },
  {
    year: "Puis",
    title: "S'imposer dans l'aviculture",
    short: "Un acteur reconnu du poulet de chair, puis l'élevage bovin.",
    text: "Le groupe se développe dans le poulet de chair, où il devient un acteur reconnu de la filière, et étend ses activités à l'élevage bovin.",
    source: "Proparco, novembre 2025",
  },
  {
    year: "2025",
    title: "Lancer la production d'œufs",
    short: "2,5 milliards FCFA de Proparco pour une ferme de poules pondeuses.",
    text: "Proparco accorde 2,5 milliards FCFA (environ 4 M€) pour construire une ferme de poules pondeuses équipée par NTD France. C'est sa première opération directe avec une PME d'Afrique de l'Ouest dans le cadre de sa facilité « PME en croissance ».",
    source: "Proparco, novembre 2025",
  },
  {
    year: "Demain",
    title: "Changer d'échelle",
    short: "Plus de 80 millions d'œufs à pleine capacité et 5 000 emplois visés en dix ans.",
    text: "Plus de 80 millions d'œufs à pleine capacité, et l'ambition de créer 5 000 emplois en dix ans.",
  },
];

export const pillars = [
  {
    label: "Vision",
    title: "Bâtir une institution agroalimentaire de référence",
    text: "Une entreprise sénégalaise aux standards internationaux, fondée sur un modèle de financement participatif et inclusif.",
  },
  {
    label: "Mission",
    title: "Investir là où se crée la valeur",
    text: "Développer des activités agricoles rentables et à forte valeur ajoutée, sources d'emplois durables.",
  },
  {
    label: "Objectif",
    title: "Contribuer à l'autosuffisance alimentaire",
    text: "Produire localement des protéines de qualité, accessibles au plus grand nombre.",
  },
];

export const values = [
  {
    title: "Qualité",
    text: "Des équipes formées à la méthode HACCP et un cahier des charges appliqué de la production à la distribution.",
  },
  {
    title: "Inclusion",
    text: "Un modèle de financement participatif et inclusif, et un commerce équitable pour toutes les parties prenantes.",
  },
  {
    title: "Responsabilité",
    text: "Créer des emplois pour les jeunes et les femmes, en particulier en milieu rural, et agir aux côtés des familles.",
  },
];

// Fiche d'identité du groupe (page Le Groupe), à la place d'une bande de gros chiffres.
export const facts: { label: string; value: string; source?: string }[] = [
  {
    label: "Métiers",
    value: "Aviculture (poulets de chair, œufs de table), élevage (bovins, ovins), transformation (Dégué-Ji, Café Touba)",
  },
  { label: "Siège", value: "Dakar, Sénégal" },
  { label: "Présidente", value: "Adama Sène Cissé, cofondatrice", source: "Proparco, 2025" },
  {
    label: "Financement",
    value: "2,5 milliards FCFA (environ 4 M€), prêt de long terme de Proparco en 2025",
    source: "Proparco, novembre 2025",
  },
  {
    label: "Ferme de pondeuses",
    value: "Plus de 80 millions d'œufs à pleine capacité, équipements NTD France",
    source: "Proparco, novembre 2025",
  },
  {
    label: "Emploi",
    value:
      "Jusqu'à 100 saisonniers en 2021, en majorité des femmes. Objectif : 5 000 emplois en dix ans",
    source: "Proparco, juin 2021 et Gade Gui",
  },
];

// TODO client : compléter l'équipe dirigeante (noms, fonctions, photos officielles).
export const leadership = [
  {
    name: "Adama Sène Cissé",
    role: "Présidente et cofondatrice",
    initials: "ASC",
    bio: "Avant de cofonder Gade Gui, elle a mené une carrière d'une vingtaine d'années dans la banque et la finance : EY, Citibank Sénégal, puis Ecobank, où elle a supervisé les opérations et la technologie dans huit pays avant d'en diriger les filiales en Guinée-Bissau et au Mozambique.",
    sources: "Proparco, Billionaires.Africa",
  },
];

export const partners = [
  {
    name: "Proparco",
    role: "Financement",
    text: "Filiale du groupe Agence française de développement dédiée au secteur privé. Prêt de long terme de 2,5 milliards FCFA en 2025.",
  },
  {
    name: "NTD France",
    role: "Équipement avicole",
    text: "Spécialiste des installations avicoles basé dans le Gers, il fournit les équipements et l'appui technique de la ferme de pondeuses.",
  },
  {
    name: "Cofina",
    role: "Financement",
    text: "Partenaire du programme Choose Africa, Cofina a apporté son soutien financier à Gade Gui en 2021.",
  },
];

/* ------------------------------------------------------------------ */
/* Actualités                                                          */
/* ------------------------------------------------------------------ */

export type News = {
  date: string;
  tag: string;
  source: string;
  title: string;
  excerpt: string;
  url: string;
  image: Img;
};

// TODO client : ajouter les articles de l'ancien site (« Opération mouton Tabaski avec Gade Gui »,
// « Élevage : notre projet de crowdfunding », « Dundë suuf si sur l'aviculture », « Ferme avicole Gade Gui II »).
export const news: News[] = [
  {
    date: "2025-11-07",
    tag: "Communiqué",
    source: "Proparco",
    title: "Gade Gui se lance dans la production d'œufs de table avec le soutien de Proparco",
    excerpt:
      "Un prêt structuré de long terme de 2,5 milliards FCFA finance la construction et l'exploitation d'une ferme de poules pondeuses : élevage, ponte, tri et conditionnement. À pleine capacité, plus de 80 millions d'œufs de qualité.",
    url: sources.proparco2025,
    image: img.oeufsPlateaux,
  },
  {
    date: "2025-11-11",
    tag: "Presse",
    source: "Billionaires.Africa",
    title: "Adama Sène Cissé obtient 2,5 milliards FCFA pour développer Gade Gui dans les œufs",
    excerpt:
      "Le média économique panafricain revient sur le parcours de la cofondatrice, passée par EY, Citibank et Ecobank, et sur le projet de ferme de pondeuses.",
    url: sources.billionaires,
    image: img.pondeuses,
  },
  {
    date: "2025-11-07",
    tag: "Presse",
    source: "Seneweb",
    title: "Sénégal : Gade Gui se lance dans la production d'œufs de table",
    excerpt:
      "Le portail d'information sénégalais relaie l'annonce du financement de Proparco et le partenariat technique avec NTD France.",
    url: sources.seneweb,
    image: img.oeufs,
  },
  {
    date: "2021-06-18",
    tag: "Vidéo",
    source: "Proparco",
    title: "Choose Africa : le parcours d'Adama Sène Cissé, cofondatrice de Gade Gui",
    excerpt:
      "Une vidéo consacrée à l'entreprise, alors spécialisée dans la transformation de l'arachide, et au soutien de Cofina.",
    url: sources.proparco2021,
    image: img.arachides,
  },
];
