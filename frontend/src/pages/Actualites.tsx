import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import { NewsRow } from "../components/cards";
import { SectionHeading } from "../components/ui";
import { news } from "../data/content";
import { site } from "../data/site";

export default function Actualites() {
  return (
    <>
      <Seo title="Actualités" description="Annonces, articles de presse et vidéos sur le groupe Gade Gui." />
      <PageHero title="Gade Gui dans l'actualité." intro="Annonces, presse et vidéos : suivez le développement du groupe." />

      <section className="pb-20 md:pb-28">
        <div className="wrap">
          <ul className="border-b border-line">
            {news.map((item) => (
              <NewsRow key={item.url} item={item} />
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-chaux py-20 md:py-24">
        <div className="wrap grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <SectionHeading
            title="Journalistes, parlons de Gade Gui."
            intro="Pour une demande d'information, d'interview ou de visuels, écrivez-nous."
          />
          <div className="lg:text-right">
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Demande presse")}`}
              className="inline-flex rounded-md bg-brand px-5 py-3 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-brand-deep"
            >
              Écrire à {site.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
