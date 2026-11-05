import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import { ProductTile } from "../components/cards";
import { ButtonLink, SectionHeading, TextLink } from "../components/ui";
import { activities, img, products } from "../data/content";
import { waHref } from "../data/site";

export default function Produits() {
  const groups = activities.map((activity) => ({
    activity,
    items: products.filter((product) => product.activity === activity.slug),
  }));

  return (
    <>
      <Seo
        title="Nos produits"
        description="Dégué-Ji, Café Touba, œufs de table, poulets de chair, moutons de Tabaski et viande bovine : les produits Gade Gui."
      />
      <PageHero
        title="Des produits du quotidien, signés Gade Gui."
        intro="De l'arachide à la ferme avicole, nos produits portent le savoir-faire sénégalais jusqu'à votre table."
        image={img.arachides}
      />

      {/* Dégué-Ji, le produit phare */}
      <section className="pb-20 md:pb-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl bg-chaux">
            <img src={img.degueJi.src} alt={img.degueJi.alt} className="aspect-square w-full object-cover" />
          </div>
          <div>
            <h2 className="type-display text-headline">Dégué-Ji</h2>
            <p className="mt-2 font-medium text-ink/55">Pâte d'arachide</p>
            <blockquote className="mt-8">
              <p className="type-title text-2xl text-brand md:text-3xl">« Dégué nii la wara méel »</p>
              <footer className="mt-2 text-sm text-ink/50">Le slogan de la marque, en wolof.</footer>
            </blockquote>
            <p className="mt-6 max-w-[54ch] text-lead text-ink/75">
              La pâte d'arachide signée Gade Gui, un produit traditionnel sénégalais pour réussir mafés, sauces et recettes
              du quotidien.
            </p>
            <ButtonLink href={waHref("Bonjour Gade Gui, je souhaite commander du Dégué-Ji.")} className="mt-8">
              Commander du Dégué-Ji sur WhatsApp
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Catalogue par filière */}
      {groups.map(({ activity, items }, index) => (
        <section
          key={activity.slug}
          id={activity.slug}
          className={`scroll-mt-24 py-16 md:py-24 ${index % 2 === 0 ? "bg-chaux" : ""}`}
        >
          <div className="wrap grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:pr-10">
              <h2 className="type-headline text-headline">{activity.name}</h2>
              <p className="mt-2 font-medium text-ink/55">{activity.kicker}</p>
              <p className="mt-5 max-w-[46ch] text-ink/75">{activity.summary}</p>
              <TextLink to={`/activites/${activity.slug}`} className="mt-6 inline-block">
                {activity.cta}
              </TextLink>
            </div>
            {items.map((product) => (
              <ProductTile key={product.slug} product={product} order />
            ))}
          </div>
        </section>
      ))}

      {/* Professionnels */}
      <section className="bg-ink text-white">
        <div className="wrap grid gap-10 py-20 md:py-28 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:gap-16">
          <SectionHeading
            inverted
            title="Hôtels, restaurants, distributeurs : approvisionnez-vous chez Gade Gui."
            intro="Parlons de vos volumes, de la livraison et de conditions adaptées à votre activité."
          />
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <ButtonLink to="/contact" variant="inverted">
              Demander un devis
            </ButtonLink>
            <ButtonLink
              href={waHref("Bonjour Gade Gui, je suis un professionnel et je souhaite connaître vos conditions.")}
              variant="inverted-outline"
            >
              Écrire sur WhatsApp
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
