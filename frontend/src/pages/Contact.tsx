import { useState, type FormEvent } from "react";
import { Link } from "react-router";
import { LoaderCircle } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import { site, telHref, waHref } from "../data/site";

type Status = "idle" | "sending" | "sent" | "error";

const profiles = [
  "Particulier",
  "Professionnel (hôtel, restaurant, distributeur)",
  "Partenaire ou investisseur",
  "Journaliste",
  "Candidat",
];

const labelClass = "mb-2 block text-sm font-semibold";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    // Champ invisible rempli : c'est un robot.
    if (data.website) return;

    // Tant que le backend n'est pas branché, on ouvre la messagerie avec le message prérempli.
    if (!endpoint) {
      const body = [
        `Nom : ${data.nom}`,
        `E-mail : ${data.email}`,
        `Téléphone : ${data.telephone || "non renseigné"}`,
        `Profil : ${data.profil}`,
        "",
        data.message,
      ].join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Demande via le site : ${data.profil}`,
      )}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Contactez Gade Gui : commandes, partenariats, presse et candidatures. Téléphone, e-mail, WhatsApp et formulaire."
      />
      <PageHero
        title="Parlons de votre projet."
        intro="Commandes, partenariats, presse ou candidature : écrivez-nous, notre équipe vous répond."
      />

      <section className="pb-20 md:pb-28">
        <div className="wrap grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <form onSubmit={handleSubmit} className="border-t border-line pt-8">
            <h2 className="type-title text-2xl">Écrire un message</h2>
            <p className="mt-2 text-sm text-ink/60">Les champs marqués d'un astérisque (*) sont obligatoires.</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className={labelClass}>Nom complet *</span>
                <input name="nom" required autoComplete="name" className="field" />
              </label>
              <label className="block">
                <span className={labelClass}>E-mail *</span>
                <input type="email" name="email" required autoComplete="email" className="field" />
              </label>
              <label className="block">
                <span className={labelClass}>Téléphone</span>
                <input type="tel" name="telephone" autoComplete="tel" placeholder="+221" className="field" />
              </label>
              <label className="block">
                <span className={labelClass}>Vous êtes *</span>
                <select name="profil" required defaultValue="" className="field">
                  <option value="" disabled>
                    Choisir…
                  </option>
                  {profiles.map((profile) => (
                    <option key={profile}>{profile}</option>
                  ))}
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className={labelClass}>Message *</span>
                <textarea name="message" required rows={6} className="field resize-y" />
              </label>

              {/* Piège à robots : invisible pour les visiteurs. */}
              <label className="hidden" aria-hidden="true">
                Site web
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>

              <label className="flex items-start gap-3 text-sm text-ink/75 sm:col-span-2">
                <input type="checkbox" name="consentement" required className="mt-1 size-4 shrink-0 accent-brand" />
                <span>
                  J'accepte que Gade Gui utilise ces informations pour répondre à ma demande.{" "}
                  <Link to="/mentions-legales#donnees" className="link">
                    En savoir plus
                  </Link>
                </span>
              </label>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-brand-deep disabled:cursor-wait disabled:opacity-60"
              >
                {status === "sending" && <LoaderCircle className="size-4 animate-spin" />}
                Envoyer le message
              </button>
              {status === "sent" && (
                <p role="status" className="font-semibold text-brand">
                  {endpoint ? "Message envoyé." : "Votre messagerie s'ouvre avec le message prêt à envoyer."}
                </p>
              )}
              {status === "error" && (
                <p role="alert" className="font-semibold text-[#a3341b]">
                  Le message n'est pas parti. Écrivez-nous directement à {site.email}.
                </p>
              )}
            </div>
          </form>

          <aside className="space-y-10">
            <div className="border-t border-line pt-8">
              <h2 className="type-title text-2xl">Nos coordonnées</h2>
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-sm font-semibold">Siège</dt>
                  <dd className="mt-1 text-ink/75">
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.country}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold">Téléphone</dt>
                  <dd className="mt-1 flex flex-col">
                    {site.phones.map((phone) => (
                      <a key={phone} href={telHref(phone)} className="text-ink/75 transition-colors hover:text-ink">
                        {phone}
                      </a>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold">E-mail</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${site.email}`} className="text-ink/75 transition-colors hover:text-ink">
                      {site.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl bg-chaux p-6">
              <h2 className="font-semibold">Une commande ?</h2>
              <p className="mt-1 text-ink/70">WhatsApp est le plus simple pour vos commandes et vos questions rapides.</p>
              <a href={waHref("Bonjour Gade Gui, ")} target="_blank" rel="noopener noreferrer" className="link mt-3 inline-block">
                Écrire sur WhatsApp
              </a>
            </div>

            <div>
              <h2 className="font-semibold">Presse et partenariats</h2>
              <p className="mt-1 text-ink/70">
                Choisissez « Journaliste » ou « Partenaire ou investisseur » dans le formulaire pour que votre demande soit
                orientée vers le bon interlocuteur.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
