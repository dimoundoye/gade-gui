import { useEffect } from "react";
import { site } from "../data/site";

/** Met à jour le titre de l'onglet et la description de chaque page. */
export default function Seo({ title, description }: { title?: string; description?: string }) {
  useEffect(() => {
    document.title = title ? `${title} · ${site.name}` : `${site.name} · ${site.tagline}`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description ?? site.description);
  }, [title, description]);

  return null;
}
