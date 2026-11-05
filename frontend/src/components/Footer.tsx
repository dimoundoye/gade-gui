import { Link } from "react-router";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";
import { activities } from "../data/content";
import { nav, site, telHref } from "../data/site";

const titleClass = "font-semibold text-white";
const linkClass = "text-white/65 transition-colors hover:text-white";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-deep text-white">
      <div className="wrap grid gap-12 py-16 sm:grid-cols-2 md:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Link to="/" aria-label="Gade Gui, retour à l'accueil" className="inline-block">
            <Logo inverted />
          </Link>
          <p className="mt-5 max-w-xs text-[0.9375rem] text-white/65">
            Groupe agro-industriel sénégalais : aviculture, élevage et transformation de produits locaux.
          </p>
          <SocialIcons className="mt-6" />
        </div>

        <nav aria-label="Le groupe">
          <p className={titleClass}>Le groupe</p>
          <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className={linkClass}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Nos activités">
          <p className={titleClass}>Nos activités</p>
          <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
            {activities.map((activity) => (
              <li key={activity.slug}>
                <Link to={`/activites/${activity.slug}`} className={linkClass}>
                  {activity.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/produits" className={linkClass}>
                Nos produits
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <p className={titleClass}>Nous joindre</p>
          <address className="mt-4 space-y-3 text-[0.9375rem] text-white/65 not-italic">
            <p>
              {site.address.street}
              <br />
              {site.address.city}, {site.address.country}
            </p>
            <p className="flex flex-col gap-1">
              {site.phones.map((phone) => (
                <a key={phone} href={telHref(phone)} className={linkClass}>
                  {phone}
                </a>
              ))}
            </p>
            <p>
              <a href={`mailto:${site.email}`} className={linkClass}>
                {site.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-3 py-6 pr-20 text-sm text-white/50 md:flex-row md:items-center md:justify-between md:pr-36">
          <p>© {year} Gade Gui. Tous droits réservés.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link to="/mentions-legales" className="transition-colors hover:text-white">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link to="/mentions-legales#donnees" className="transition-colors hover:text-white">
                Données personnelles
              </Link>
            </li>
            <li>
              <Link to="/mentions-legales#credits" className="transition-colors hover:text-white">
                Crédits photos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
