import { useParams } from "react-router";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import { ActivityColumn, ProductTile } from "../components/cards";
import { CtaBand } from "../components/sections";
import { SectionHeading, TextLink } from "../components/ui";
import { activities, products } from "../data/content";
import NotFound from "./NotFound";

export default function Activite() {
  const { slug } = useParams();
  const activity = activities.find((item) => item.slug === slug);

  if (!activity) return <NotFound />;

  const related = products.filter((product) => product.activity === activity.slug);
  const others = activities.filter((item) => item.slug !== activity.slug);
  const bento = activity.gallery.length >= 3;
  // Les étapes ne sont numérotées que si elles forment un vrai processus.
  const PointList = activity.sequence ? "ol" : "ul";

  return (
    <>
      <Seo title={activity.name} description={activity.summary} />
      <PageHero title={activity.title} intro={activity.summary} image={activity.hero} />

      {/* Présentation */}
      <section className="pb-20 md:pb-28">
        <div className="wrap grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
          <div className="max-w-[62ch] space-y-6 text-lead text-ink/80">
            {activity.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {activity.highlight && (
            <aside className="self-start border-l-4 border-brand pl-6">
              <p className="type-headline text-5xl">{activity.highlight.value}</p>
              <p className="mt-3 text-ink/75">{activity.highlight.label}</p>
              <p className="mt-4 text-sm text-ink/45">Source : {activity.highlight.source}</p>
            </aside>
          )}
        </div>
      </section>

      {/* Savoir-faire */}
      <section className="bg-chaux py-20 md:py-28">
        <div className="wrap">
          <SectionHeading title={activity.pointsTitle} />
          <PointList className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {activity.points.map((point, index) => (
              <li key={point.title} className="border-t-2 border-brand pt-6">
                {activity.sequence && (
                  <p className="type-title mb-2 text-lg text-brand">{String(index + 1).padStart(2, "0")}</p>
                )}
                <h3 className="type-title text-xl">{point.title}</h3>
                <p className="mt-3 text-ink/75">{point.text}</p>
              </li>
            ))}
          </PointList>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-20 md:py-28">
        <div className={`wrap grid gap-4 md:gap-6 ${bento ? "md:grid-cols-3 md:grid-rows-2" : "md:grid-cols-2"}`}>
          {activity.gallery.map((image, index) => {
            const big = bento && index === 0;
            return (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={`w-full rounded-xl object-cover ${
                  big ? "aspect-[4/3] md:col-span-2 md:row-span-2 md:aspect-auto md:h-full" : "aspect-[4/3]"
                }`}
              />
            );
          })}
        </div>
      </section>

      {/* Produits de la filière */}
      {related.length > 0 && (
        <section className="bg-chaux py-20 md:py-28">
          <div className="wrap">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading title="Les produits de cette filière." />
              <TextLink to="/produits">Tous nos produits</TextLink>
            </div>
            <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((product) => (
                <ProductTile key={product.slug} product={product} order />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Autres métiers */}
      <section className="py-20 md:py-28">
        <div className="wrap">
          <SectionHeading title="Nos autres métiers." />
          <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-8">
            {others.map((item) => (
              <ActivityColumn key={item.slug} activity={item} wide />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
