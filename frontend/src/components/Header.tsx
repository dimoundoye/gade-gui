import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { activities } from "../data/content";
import { nav, site, telHref } from "../data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ferme le menu mobile à chaque changement de page.
  useEffect(() => setOpen(false), [pathname]);

  // Bloque le défilement de la page quand le menu mobile est ouvert.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative inline-flex items-center gap-1 py-2 text-[0.9375rem] font-medium transition-colors ${
      isActive
        ? "text-ink after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-brand"
        : "text-ink/65 hover:text-ink"
    }`;

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
          scrolled || open ? "shadow-[0_1px_0_var(--color-line)]" : ""
        }`}
      >
        <div className="wrap flex h-18 items-center justify-between gap-8">
          <Link to="/" aria-label="Gade Gui, retour à l'accueil" className="shrink-0">
            <Logo />
          </Link>

          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {nav.map((item) =>
                item.to === "/activites" ? (
                  <li key={item.to} className="group relative">
                    <NavLink to={item.to} className={linkClass}>
                      {item.label}
                      <ChevronDown className="size-3.5 text-ink/50" />
                    </NavLink>
                    <div className="invisible absolute top-full left-1/2 w-72 -translate-x-1/2 pt-3 opacity-0 transition-[opacity,visibility] duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                      <ul className="rounded-lg border border-line bg-white p-2 shadow-[0_16px_32px_-16px_rgb(18_41_90/0.3)]">
                        {activities.map((activity) => (
                          <li key={activity.slug}>
                            <Link
                              to={`/activites/${activity.slug}`}
                              className="block rounded-md px-3 py-2.5 transition-colors hover:bg-chaux"
                            >
                              <span className="block font-semibold">{activity.name}</span>
                              <span className="block text-sm text-ink/60">{activity.kicker}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={item.to}>
                    <NavLink to={item.to} className={linkClass}>
                      {item.label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {site.shopUrl && (
              <a
                href={site.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden text-[0.9375rem] font-medium text-ink/65 transition-colors hover:text-ink md:inline"
              >
                Boutique
              </a>
            )}
            <Link
              to="/contact"
              className="hidden rounded-md bg-brand px-4 py-2.5 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-brand-deep sm:inline-flex"
            >
              Nous contacter
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              className="grid size-11 place-items-center rounded-md text-ink transition-colors hover:bg-chaux lg:hidden"
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile : placé hors du <header> pour que sa position fixe se cale sur la fenêtre. */}
      <div
        id="menu-mobile"
        className={`fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto bg-white transition-[opacity,visibility] duration-200 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Navigation mobile" className="wrap flex min-h-full flex-col py-6">
          <ul className="border-b border-line">
            {nav.map((item) => (
              <li key={item.to} className="border-t border-line">
                <NavLink
                  to={item.to}
                  className={({ isActive }) => `type-title block py-4 text-[1.75rem] ${isActive ? "text-brand" : "text-ink"}`}
                >
                  {item.label}
                </NavLink>
                {item.to === "/activites" && (
                  <ul className="flex flex-wrap gap-x-5 gap-y-2 pb-5">
                    {activities.map((activity) => (
                      <li key={activity.slug}>
                        <Link to={`/activites/${activity.slug}`} className="link text-[0.9375rem]">
                          {activity.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-auto space-y-4 pt-10">
            <Link
              to="/contact"
              className="flex w-full items-center justify-center rounded-md bg-brand px-6 py-4 font-semibold text-white"
            >
              Nous contacter
            </Link>
            <a href={telHref(site.phones[0])} className="flex items-center gap-3 text-ink/70">
              <Phone className="size-4" />
              {site.phones[0]}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-ink/70">
              <Mail className="size-4" />
              {site.email}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
