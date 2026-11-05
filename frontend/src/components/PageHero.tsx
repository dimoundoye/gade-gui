import type { ReactNode } from "react";
import type { Img } from "../data/content";

/** Ouverture des pages intérieures : grand titre sur fond blanc, puis la photo en bandeau, sans voile. */
export default function PageHero({
  title,
  intro,
  image,
  children,
}: {
  title: ReactNode;
  intro?: string;
  image?: Img;
  children?: ReactNode;
}) {
  return (
    <section className="pt-12 pb-14 md:pt-20 md:pb-20">
      <div className="wrap">
        <h1 className="type-display max-w-5xl text-page">{title}</h1>
        {intro && <p className="mt-6 max-w-[56ch] text-lead text-ink/75 md:mt-8">{intro}</p>}
        {children}
      </div>
      {image && (
        <div className="wrap mt-12 md:mt-16">
          <img src={image.src} alt={image.alt} className="aspect-[4/3] w-full rounded-xl object-cover sm:aspect-[16/7]" />
        </div>
      )}
    </section>
  );
}
