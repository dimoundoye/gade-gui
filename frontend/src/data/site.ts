/**
 * Coordonnées et réglages généraux du site.
 * Les lignes « TODO client » attendent une validation de Gade Gui avant la mise en ligne.
 */

export type SocialKey = "facebook" | "instagram" | "youtube" | "x" | "linkedin";

export const site = {
  name: "Gade Gui",
  tagline: "Groupe agro-industriel sénégalais",
  description:
    "Gade Gui, groupe agro-industriel sénégalais : aviculture (poulets de chair et œufs de table), élevage et transformation de produits locaux comme la pâte d'arachide Dégué-Ji et le Café Touba.",
  email: "contact@gadegui.com",
  // TODO client : l'ancien site affiche un 3e numéro incomplet (« +221 33 825 50 0 »).
  phones: ["+221 77 853 11 57", "+221 76 692 13 75"],
  // TODO client : confirmer le numéro WhatsApp Business (format international sans « + »).
  whatsapp: "221778531157",
  // TODO client : confirmer l'adresse officielle (l'ancien site indique « Dakar » et « Touba »,
  // un annuaire mentionne aussi un point de vente à Ouakam, Cité Assemblée).
  address: {
    street: "Almadies, Lot 4 Zone 13",
    city: "Dakar",
    country: "Sénégal",
  },
  // TODO client : lien de la boutique en ligne (le bouton « Boutique » s'affiche dès qu'il est renseigné).
  shopUrl: "",
  // TODO client : liens des réseaux sociaux officiels (chaque icône s'affiche dès que son lien est renseigné).
  socials: {
    facebook: "",
    instagram: "",
    youtube: "",
    x: "",
    linkedin: "",
  } satisfies Record<SocialKey, string>,
};

export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;

export const waHref = (message?: string) =>
  `https://wa.me/${site.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const nav = [
  { to: "/groupe", label: "Le Groupe" },
  { to: "/activites", label: "Activités" },
  { to: "/produits", label: "Produits" },
  { to: "/engagements", label: "Engagements" },
  { to: "/actualites", label: "Actualités" },
] as const;
