import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import { CtaBand } from "../components/sections";
import { TextLink } from "../components/ui";
import { activities, img } from "../data/content";

export default function Activites() {
  return (
    <>
      <Seo
        title="Nos activités"
        description="Aviculture, élevage et transformation : les trois métiers du groupe agro-industriel Gade Gui."
      />
      <PageHero
        title="Trois métiers, une même exigence."
        intro="Aviculture, élevage et transformation : chaque filière du groupe applique le même cahier des charges, de l'élevage jusqu'au produit fini."
        image={img.oeufs}
      />

      {activities.map((activity, index) => (
        <section
          key={activity.slug}
          id={activity.slug}
          className={`scroll-mt-24 py-16 md:py-24 ${index % 2 === 0 ? "bg-chaux" : ""}`}
        >
          <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <img
              src={activity.card.src}
              alt={activity.card.alt}
              loading="lazy"
              className={`aspect-[4/3] w-full rounded-xl object-cover ${index % 2 === 1 ? "lg:order-2" : ""}`}
            />
            <div>
              <h2 className="type-headline text-headline">{activity.name}</h2>
              <p className="mt-2 font-medium text-ink/55">{activity.kicker}</p>
              <p className="mt-6 max-w-[56ch] text-lead text-ink/75">{activity.summary}</p>
              <ul className="mt-8 grid border-t border-line sm:grid-cols-2 sm:gap-x-8">
                {activity.points.map((point) => (
                  <li key={point.title} className="border-b border-line py-3 font-medium">
                    {point.title}
                  </li>
                ))}
              </ul>
              <TextLink to={`/activites/${activity.slug}`} className="mt-8 inline-block">
                {activity.cta}
              </TextLink>
            </div>
          </div>
        </section>
      ))}

      <CtaBand />
    </>
  );
}
