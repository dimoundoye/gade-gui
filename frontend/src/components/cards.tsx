import { Link } from "react-router";
import type { Activity, News, Product } from "../data/content";
import { waHref } from "../data/site";
import { formatDate } from "../lib/format";
import { TextLink } from "./ui";

/** Un métier du groupe : photo, nom, sous-titre et renvoi vers sa page. */
export function ActivityColumn({ activity, wide = false }: { activity: Activity; wide?: boolean }) {
  const to = `/activites/${activity.slug}`;
  return (
    <article>
      <Link to={to} tabIndex={-1} aria-hidden="true" className="block overflow-hidden rounded-xl">
        <img
          src={activity.card.src}
          alt=""
          loading="lazy"
          className={`w-full object-cover ${wide ? "aspect-[16/10]" : "aspect-[4/5]"}`}
        />
      </Link>
      <h3 className="type-title mt-6 text-2xl">
        <Link to={to} className="transition-colors hover:text-brand">
          {activity.name}
        </Link>
      </h3>
      <p className="mt-1 text-sm font-medium text-ink/55">{activity.kicker}</p>
      <p className="mt-4 max-w-[46ch] text-ink/75">{activity.summary}</p>
      <TextLink to={to} className="mt-5 inline-block text-[0.9375rem]">
        {activity.cta}
      </TextLink>
    </article>
  );
}

/** Un produit : photo sur fond chaux, nom, catégorie, description et commande WhatsApp. */
export function ProductTile({ product, order = false }: { product: Product; order?: boolean }) {
  return (
    <article className="flex flex-col">
      <div className="overflow-hidden rounded-xl bg-chaux">
        <img src={product.image.src} alt={product.image.alt} loading="lazy" className="aspect-square w-full object-cover" />
      </div>
      <h3 className="type-title mt-5 text-xl">{product.name}</h3>
      <p className="mt-0.5 text-sm text-ink/55">{product.category}</p>
      <p className="mt-3 text-[0.9375rem] text-ink/75">{product.description}</p>
      {order && (
        <a
          href={waHref(`Bonjour Gade Gui, je souhaite des informations sur : ${product.name}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="link mt-4 self-start text-[0.9375rem]"
        >
          Commander sur WhatsApp
        </a>
      )}
    </article>
  );
}

/** Une actualité en ligne de liste : date et source, titre et résumé, vignette. */
export function NewsRow({ item }: { item: News }) {
  return (
    <li className="border-t border-line">
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group grid gap-4 py-8 md:grid-cols-[10rem_1fr_13rem] md:gap-10"
      >
        <p className="text-sm text-ink/60">
          <time dateTime={item.date} className="block font-semibold text-ink">
            {formatDate(item.date)}
          </time>
          {item.tag}, {item.source}
        </p>
        <div>
          <h3 className="type-title text-xl transition-colors group-hover:text-brand md:text-2xl">{item.title}</h3>
          <p className="mt-3 max-w-[62ch] text-ink/70">{item.excerpt}</p>
          <span className="link mt-4 inline-block text-[0.9375rem]">Lire sur {item.source}</span>
        </div>
        <img
          src={item.image.src}
          alt=""
          loading="lazy"
          className="hidden aspect-[4/3] w-full rounded-lg object-cover md:block"
        />
      </a>
    </li>
  );
}
