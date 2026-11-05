import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import { CtaBand } from "../components/sections";
import { SectionHeading } from "../components/ui";
import { facts, img, leadership, partners, pillars, timeline, values } from "../data/content";

export default function Groupe() {
  return (
    <>
      <Seo
        title="Le Groupe"
        description="Histoire, vision, gouvernance et partenaires de Gade Gui, groupe agro-industriel sénégalais."
      />
      <PageHero
        title="Une ambition agro-industrielle, née au Sénégal."
        intro="De la transformation de l'arachide aux œufs de table, Gade Gui construit pas à pas un groupe au service de la sécurité alimentaire."
        image={img.baobab}
      />

      {/* Qui sommes-nous et fiche d'identité */}
      <section className="pb-20 md:pb-28">
        <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading title="Investir dans ce qui nourrit le pays." />
            <div className="mt-6 max-w-[60ch] space-y-5 text-ink/75">
              <p>
                Gade Gui est une entreprise sénégalaise de l'agroalimentaire. Ses activités couvrent l'aviculture, avec les
                poulets de chair et désormais les œufs de table, l'élevage bovin et ovin, et la transformation de produits
                locaux comme la pâte d'arachide et le Café Touba.
              </p>
              <p>
                Sa vision : bâtir une institution agroalimentaire de référence, fondée sur un modèle de financement
                participatif et inclusif, avec deux horizons : l'emploi et l'autosuffisance alimentaire.
              </p>
            </div>
          </div>
          <div>
            <h3 className="type-title text-xl">Le groupe en bref</h3>
            <dl className="mt-5 border-t border-line">
              {facts.map((fact) => (
                <div key={fact.label} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                  <dt className="font-semibold">{fact.label}</dt>
                  <dd className="text-ink/75">
                    {fact.value}
                    {fact.source && <span className="mt-1 block text-sm text-ink/45">Source : {fact.source}</span>}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Vision, mission, objectif */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="wrap">
          <SectionHeading inverted title="Une vision, une mission, un objectif." />
          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
            {pillars.map((pillar) => (
              <div key={pillar.label} className="border-t border-white/20 pt-6">
                <p className="text-sm font-semibold text-white/60">{pillar.label}</p>
                <h3 className="type-title mt-3 text-2xl">{pillar.title}</h3>
                <p className="mt-4 text-white/75">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-20 md:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              title="De l'arachide aux œufs de table."
              intro="Les grandes étapes du groupe, telles que les rapportent ses partenaires financiers."
            />
            <img
              src={img.equipe.src}
              alt={img.equipe.alt}
              loading="lazy"
              className="mt-10 aspect-[4/3] w-full rounded-xl object-cover"
            />
          </div>
          <ol className="border-t border-line">
            {timeline.map((step) => (
              <li key={step.title} className="grid gap-2 border-b border-line py-8 sm:grid-cols-[9rem_1fr] sm:gap-8">
                <p className="type-headline text-4xl text-brand">{step.year}</p>
                <div>
                  <h3 className="type-title text-xl">{step.title}</h3>
                  <p className="mt-3 max-w-[58ch] text-ink/75">{step.text}</p>
                  {step.source && <p className="mt-3 text-sm text-ink/45">Source : {step.source}</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Gouvernance */}
      <section className="bg-chaux py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeading title="Une direction issue de la finance et de l'entrepreneuriat." />
          <div className="space-y-12">
            {leadership.map((person) => (
              <article key={person.name} className="border-t border-ink/20 pt-8">
                <h3 className="type-title text-3xl">{person.name}</h3>
                <p className="mt-1 font-medium text-ink/60">{person.role}</p>
                <p className="mt-6 max-w-[60ch] text-lead text-ink/80">{person.bio}</p>
                <p className="mt-5 text-sm text-ink/45">Sources : {person.sources}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 md:py-28">
        <div className="wrap">
          <SectionHeading title="Ce qui guide nos décisions." />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="border-t-2 border-brand pt-6">
                <h3 className="type-title text-2xl">{value.title}</h3>
                <p className="mt-3 text-ink/75">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="bg-chaux py-20 md:py-28">
        <div className="wrap">
          <SectionHeading
            title="Ils accompagnent notre croissance."
            intro="Des institutions financières et un industriel de référence soutiennent le développement du groupe."
          />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {partners.map((partner) => (
              <div key={partner.name} className="border-t border-ink/20 pt-6">
                <h3 className="type-title text-2xl">{partner.name}</h3>
                <p className="mt-1 text-sm font-medium text-ink/55">{partner.role}</p>
                <p className="mt-4 text-ink/75">{partner.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
