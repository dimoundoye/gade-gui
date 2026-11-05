import { Link } from "react-router";
import Seo from "../components/Seo";
import EggTray from "../components/EggTray";
import { ActivityColumn, NewsRow, ProductTile } from "../components/cards";
import { CtaBand, PartnersStrip } from "../components/sections";
import { ButtonLink, SectionHeading, TextLink } from "../components/ui";
import { activities, img, news, products, sources, timeline } from "../data/content";

const featuredProducts = ["degue-ji", "cafe-touba", "oeufs", "moutons"];

const commitments = [
  {
    title: "Qualité et sécurité alimentaire",
    text: "Des équipes formées à la méthode HACCP et un cahier des charges appliqué de la production à la distribution.",
  },
  {
    title: "Emploi des jeunes et des femmes",
    text: "Des emplois durables, en particulier en milieu rural. Notre ambition : 5 000 emplois en dix ans.",
  },
  {
    title: "Fondation Gade Gui",
    text: "L'action sociale au cœur du modèle, avec le projet « Une Famille Une Vache ».",
  },
];

export default function Home() {
  const aviculture = activities[0];
  const featured = products.filter((product) => featuredProducts.includes(product.slug));

  return (
    <>
      <Seo />

      {/* Ouverture : la photo en plein cadre, les textes posés dessus sur un dégradé bleu nuit pour rester lisibles. */}
      <section>
        <div className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-end overflow-hidden bg-ink">
          <img
            src={img.hero.src}
            alt={img.hero.alt}
            fetchPriority="high"
            className="absolute inset-0 -z-20 size-full object-cover object-[65%_center]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/65 to-ink/10 lg:bg-linear-to-r lg:from-ink/90 lg:via-ink/60 lg:via-45% lg:to-ink/0"
          />
          <div className="wrap pt-20 pb-12 md:pb-16">
            <h1 className="type-display max-w-5xl text-display text-white">Produire au Sénégal, pour nourrir le Sénégal.</h1>
            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,50ch)_auto] lg:items-end lg:gap-12">
            <p className="text-lead text-white/85">
              Aviculture, élevage et transformation de produits locaux : Gade Gui investit dans toute la chaîne alimentaire
              pour rendre des protéines de qualité accessibles au plus grand nombre.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink to="/groupe">Découvrir le groupe</ButtonLink>
              <ButtonLink to="/activites" variant="inverted-outline">
                Nos activités
              </ButtonLink>
            </div>
            </div>
          </div>
        </div>
        <div className="wrap">
          <Link
            to="/actualites"
            className="group flex flex-col gap-1 border-b border-line py-6 sm:flex-row sm:items-baseline sm:gap-6"
          >
            <span className="shrink-0 text-sm font-semibold">Novembre 2025</span>
            <span className="text-ink/75 transition-colors group-hover:text-ink">
              Proparco accorde 2,5 milliards FCFA à Gade Gui pour sa ferme de poules pondeuses.
            </span>
            <span className="link shrink-0 text-[0.9375rem] sm:ml-auto">Lire l'actualité</span>
          </Link>
        </div>
      </section>

      {/* Les trois métiers */}
      <section className="mt-20 bg-chaux py-20 md:mt-28 md:py-28">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              title="Trois métiers, une même exigence."
              intro="De l'élevage à la transformation, chaque filière applique le même cahier des charges et le même souci de qualité."
            />
            <TextLink to="/activites">Toutes nos activités</TextLink>
          </div>
          <div className="mt-14 grid gap-14 md:grid-cols-3 md:gap-8">
            {activities.map((activity) => (
              <ActivityColumn key={activity.slug} activity={activity} />
            ))}
          </div>
        </div>
      </section>

      {/* Signature : le plateau de 30 œufs rend concrets les 80 millions d'œufs de la nouvelle ferme. */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="wrap grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading inverted title="Une nouvelle ferme pour plus de 80 millions d'œufs." />
            <p className="mt-6 max-w-[58ch] text-lead text-white/75">
              Grâce à un prêt de long terme de 2,5 milliards FCFA (environ 4 M€) accordé par Proparco, Gade Gui construit et
              exploite une ferme de poules pondeuses. NTD France fournit les équipements et l'appui technique.
            </p>
            <ol className="mt-12 grid gap-8 border-t border-white/15 pt-10 sm:grid-cols-2">
              {aviculture.points.map((step, index) => (
                <li key={step.title} className="grid grid-cols-[2.5rem_1fr] gap-x-3">
                  <span className="type-title text-lg text-yolk">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-semibold">{step.title}</p>
                    <p className="mt-1 text-[0.9375rem] text-white/65">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-12 flex flex-wrap gap-3">
              <ButtonLink to="/activites/aviculture" variant="inverted">
                Découvrir l'aviculture
              </ButtonLink>
              <ButtonLink href={sources.proparco2025} variant="inverted-outline">
                Lire l'annonce de Proparco
              </ButtonLink>
            </div>
          </div>

          <figure className="self-center">
            <EggTray className="mx-auto w-full max-w-md" />
            <figcaption className="mx-auto mt-8 max-w-md">
              <p className="type-title text-2xl">Un plateau, 30 œufs.</p>
              <p className="mt-2 text-white/75">
                À pleine capacité, la ferme produira l'équivalent de plus de 2,6 millions de plateaux.
              </p>
              <p className="mt-4 text-sm text-white/50">Calcul : 80 millions d'œufs ÷ 30. Source : Proparco, novembre 2025.</p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Le groupe */}
      <section className="py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <img src={img.equipe.src} alt={img.equipe.alt} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
          <div>
            <SectionHeading title="Une entreprise sénégalaise qui grandit avec ses filières." />
            <ol className="mt-10 border-t border-line">
              {timeline.map((step) => (
                <li key={step.title} className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-line py-4">
                  <span className="type-title text-lg">{step.year}</span>
                  <span className="text-ink/75">{step.short}</span>
                </li>
              ))}
            </ol>
            <TextLink to="/groupe" className="mt-8 inline-block">
              Notre histoire
            </TextLink>
          </div>
        </div>
      </section>

      {/* Produits */}
      <section className="bg-chaux py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading title="Des produits du quotidien, signés Gade Gui." />
            <TextLink to="/produits">Tous nos produits</TextLink>
          </div>
          <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductTile key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="py-20 md:py-28">
        <div className="wrap">
          <SectionHeading title="Bien produire, et faire grandir ceux qui produisent." />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {commitments.map((commitment) => (
              <div key={commitment.title} className="border-t-2 border-brand pt-6">
                <h3 className="type-title text-xl">{commitment.title}</h3>
                <p className="mt-3 text-ink/75">{commitment.text}</p>
              </div>
            ))}
          </div>
          <TextLink to="/engagements" className="mt-12 inline-block">
            Nos engagements
          </TextLink>
        </div>
      </section>

      <PartnersStrip />

      {/* Actualités */}
      <section className="bg-chaux py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading title="Gade Gui dans l'actualité." />
            <TextLink to="/actualites">Toutes les actualités</TextLink>
          </div>
          <ul className="mt-12 border-b border-line">
            {news.slice(0, 3).map((item) => (
              <NewsRow key={item.url} item={item} />
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
