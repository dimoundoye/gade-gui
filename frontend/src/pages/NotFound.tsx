import Seo from "../components/Seo";
import { ButtonLink } from "../components/ui";

export default function NotFound() {
  return (
    <>
      <Seo title="Page introuvable" />
      <section className="py-20 md:py-32">
        <div className="wrap">
          <h1 className="type-display max-w-4xl text-page">Cette page n'existe pas ou a changé d'adresse.</h1>
          <p className="mt-6 max-w-[52ch] text-lead text-ink/75">
            Le site a été refait : certaines anciennes adresses ne mènent plus nulle part. Repartez de l'accueil ou
            écrivez-nous.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink to="/">Retour à l'accueil</ButtonLink>
            <ButtonLink to="/contact" variant="secondary">
              Nous contacter
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
