import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import { MessageCircle } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { waHref } from "../data/site";

/** Remonte en haut à chaque changement de page, ou descend jusqu'à l'ancre (#section) demandée. */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}

/** Bouton WhatsApp flottant : il apparaît une fois le premier écran passé, pour ne pas masquer l'ouverture. */
function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={waHref("Bonjour Gade Gui, ")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Écrire à Gade Gui sur WhatsApp"
      aria-hidden={!visible}
      tabIndex={visible ? undefined : -1}
      className={`fixed right-4 bottom-4 z-30 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-black/20 transition duration-300 hover:shadow-xl md:right-6 md:bottom-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

export default function Layout() {
  return (
    <>
      <ScrollManager />
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Aller au contenu
      </a>
      <Header />
      <main id="contenu">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
