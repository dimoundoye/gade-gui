import { partners } from "../data/content";
import { waHref } from "../data/site";
import { ButtonLink } from "./ui";

/** Appel à l'action placé en bas des pages. */
export function CtaBand({
  title = "Professionnels, distributeurs, partenaires : parlons de vos besoins.",
  text = "Hôtels, restaurants, grossistes, institutions ou investisseurs : notre équipe vous répond.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-ink text-white">
      <div className="wrap grid gap-10 py-20 md:py-28 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:gap-16">
        <div>
          <h2 className="type-headline text-headline">{title}</h2>
          <p className="mt-5 max-w-[52ch] text-lead text-white/75">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <ButtonLink to="/contact" variant="inverted">
            Nous contacter
          </ButtonLink>
          <ButtonLink href={waHref("Bonjour Gade Gui, ")} variant="inverted-outline">
            Écrire sur WhatsApp
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

/** Partenaires cités en texte : afficher leurs logos demanderait leur accord. */
export function PartnersStrip() {
  return (
    <section className="border-y border-line">
      <div className="wrap grid gap-8 py-12 md:grid-cols-[13rem_1fr] md:items-center md:gap-12">
        <h2 className="font-semibold">Ils accompagnent notre croissance</h2>
        <ul className="grid gap-6 sm:grid-cols-3">
          {partners.map((partner) => (
            <li key={partner.name}>
              <p className="type-title text-2xl">{partner.name}</p>
              <p className="text-sm text-ink/55">{partner.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
