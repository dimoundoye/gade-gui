import type { ReactNode } from "react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import { site } from "../data/site";

/** Information que Gade Gui doit fournir avant la mise en ligne (surlignée pour la relecture). */
function Todo({ children = "à compléter" }: { children?: ReactNode }) {
  return <mark className="rounded-sm bg-yolk/40 px-1.5 py-0.5 text-ink">{children}</mark>;
}

export default function MentionsLegales() {
  return (
    <>
      <Seo title="Mentions légales" description="Mentions légales, données personnelles et crédits photos du site Gade Gui." />
      <PageHero title="Mentions légales" />

      <section className="pb-20 md:pb-28">
        <div className="wrap max-w-3xl space-y-12 text-ink/80 [&_h2]:type-title [&_h2]:text-2xl [&_h2]:text-ink [&_p]:mt-4">
          <div className="border-t border-line pt-8">
            <h2>Éditeur du site</h2>
            <p>
              Raison sociale : <Todo />
              <br />
              Forme juridique et capital : <Todo />
              <br />
              NINEA : <Todo />, RCCM : <Todo />
              <br />
              Siège : {site.address.street}, {site.address.city}, {site.address.country}
              <br />
              Contact : {site.email}, {site.phones[0]}
            </p>
            <p>
              Direction de la publication : <Todo />
            </p>
          </div>

          <div className="border-t border-line pt-8">
            <h2>Hébergement</h2>
            <p>
              Hébergeur : <Todo>nom, adresse et téléphone à compléter</Todo>
            </p>
          </div>

          <div className="border-t border-line pt-8">
            <h2>Propriété intellectuelle</h2>
            <p>
              Les textes, logos, marques et photographies propres à Gade Gui sont protégés. Toute reproduction sans
              autorisation écrite préalable est interdite.
            </p>
          </div>

          <div id="donnees" className="scroll-mt-28 border-t border-line pt-8">
            <h2>Données personnelles</h2>
            <p>
              Les informations envoyées par le formulaire de contact servent uniquement à répondre à votre demande. Elles ne
              sont ni vendues ni cédées à des tiers.
            </p>
            <p>
              Conformément à la loi n° 2008-12 du 25 janvier 2008 sur la protection des données à caractère personnel, vous
              pouvez accéder à vos données, les faire rectifier ou supprimer en écrivant à {site.email}. Vous pouvez aussi
              saisir la Commission de protection des données personnelles (CDP).
            </p>
            <p>
              Durée de conservation des demandes : <Todo>à définir</Todo>
            </p>
          </div>

          <div id="credits" className="scroll-mt-28 border-t border-line pt-8">
            <h2>Crédits photos</h2>
            <p>
              Photo de l'équipe et visuel du produit Dégué-Ji : Gade Gui. Autres photographies : Unsplash, sous licence
              Unsplash. Elles seront remplacées par des photos de nos sites et de nos produits.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
