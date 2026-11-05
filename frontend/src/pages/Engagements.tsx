import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import { CtaBand } from "../components/sections";
import { SectionHeading } from "../components/ui";
import { img } from "../data/content";

const quality = [
  {
    title: "Méthode HACCP",
    text: "Nos équipes sont formées à la méthode HACCP et l'appliquent sur toute la chaîne de production.",
  },
  { title: "Traçabilité", text: "L'origine de nos produits est suivie, de nos fermes jusqu'à votre table." },
  {
    title: "Cahier des charges",
    text: "Un cahier des charges strict, partagé avec nos partenaires, de la production à la distribution.",
  },
  {
    title: "Environnement",
    text: "Le respect des normes environnementales, avec une attention particulière à la prévention des pollutions.",
  },
];

const people = [
  { title: "Jeunes et femmes", text: "Créer des emplois pour les jeunes et les femmes, en particulier en milieu rural." },
  { title: "Entrepreneuriat rural", text: "Promouvoir l'entrepreneuriat dans les zones rurales, au plus près des filières." },
  { title: "Formation", text: "Former nos équipes aux métiers de l'agro-industrie et aux règles d'hygiène HACCP." },
];

export default function Engagements() {
  return (
    <>
      <Seo
        title="Nos engagements"
        description="Qualité et sécurité alimentaire, emploi des jeunes et des femmes, Fondation Gade Gui : les engagements du groupe."
      />
      <PageHero
        title="Bien produire, et faire grandir ceux qui produisent."
        intro="Qualité, emploi et action sociale : trois engagements qui guident le développement du groupe."
        image={img.mainsPoussins}
      />

      {/* Qualité */}
      <section id="qualite" className="scroll-mt-24 pb-20 md:pb-28">
        <div className="wrap">
          <SectionHeading
            title="Des standards stricts, de la ferme à votre table."
            intro="La qualité, la sécurité et le respect de l'environnement sont au cœur de nos métiers."
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {quality.map((item) => (
              <div key={item.title} className="border-t-2 border-brand pt-6">
                <h3 className="type-title text-xl">{item.title}</h3>
                <p className="mt-3 text-ink/75">{item.text}</p>
              </div>
            ))}
          </div>
          <blockquote className="mt-16 max-w-4xl border-l-4 border-brand pl-6 md:pl-8">
            <p className="type-title text-2xl md:text-3xl">
              Pour vous garantir des produits frais et de bonne qualité, nous appliquons un cahier des charges strict sur
              toute la chaîne de production, de conservation et de distribution.
            </p>
            <footer className="mt-4 text-ink/60">La garantie Gade Gui</footer>
          </blockquote>
        </div>
      </section>

      {/* Emploi */}
      <section id="emploi" className="scroll-mt-24 bg-chaux py-20 md:py-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <img src={img.equipe.src} alt={img.equipe.alt} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
          <div>
            <SectionHeading title="L'emploi au cœur du modèle." />
            <p className="mt-6 max-w-[58ch] text-ink/75">
              En 2021 déjà, l'activité de transformation de l'arachide accueillait jusqu'à cent saisonniers, en majorité des
              femmes. Le groupe se fixe aujourd'hui un cap : créer plus de 5 000 emplois en dix ans, en investissant dans des
              activités rentables à forte valeur ajoutée.
            </p>
            <ul className="mt-8 border-t border-line">
              {people.map((item) => (
                <li key={item.title} className="border-b border-line py-4">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-ink/70">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Fondation */}
      {/* TODO client : détailler « Une Famille Une Vache » (principe, nombre de familles, zones, photos). */}
      <section id="fondation" className="scroll-mt-24 py-20 md:py-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <h2 className="type-display text-headline">Une Famille Une Vache.</h2>
            <p className="mt-2 font-medium text-ink/55">Un projet de la Fondation Gade Gui</p>
            <p className="mt-8 max-w-[52ch] text-lead text-ink/75">
              L'action sociale est au cœur des préoccupations du groupe. À travers la Fondation Gade Gui, le projet
              « Une Famille Une Vache » porte cet engagement auprès des familles.
            </p>
          </div>
          <img src={img.zebu.src} alt={img.zebu.alt} loading="lazy" className="aspect-[4/5] w-full rounded-xl object-cover" />
        </div>
      </section>

      <CtaBand
        title="Partenaires, institutions, investisseurs : rejoignez nos projets."
        text="Emploi, sécurité alimentaire, développement rural : parlons des projets que nous pouvons porter ensemble."
      />
    </>
  );
}
