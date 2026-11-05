import type { ReactNode } from "react";
import { Link } from "react-router";

type Variant = "primary" | "secondary" | "inverted" | "inverted-outline";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-deep",
  secondary: "text-ink ring-1 ring-ink/25 ring-inset hover:ring-ink",
  inverted: "bg-white text-ink hover:bg-chaux",
  "inverted-outline": "text-white ring-1 ring-white/45 ring-inset hover:ring-white",
};

/** Bouton : `to` pour une page du site, `href` pour un lien externe (nouvel onglet). */
export function ButtonLink({
  children,
  variant = "primary",
  className = "",
  to,
  href,
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  to?: string;
  href?: string;
}) {
  const cls = `inline-flex items-center justify-center rounded-md px-5 py-3 text-[0.9375rem] font-semibold transition-colors ${variants[variant]} ${className}`;
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className={cls}>
      {children}
    </Link>
  );
}

/** Lien texte souligné, pour les renvois discrets (« Toutes nos activités »). */
export function TextLink({
  children,
  to,
  href,
  inverted = false,
  className = "",
}: {
  children: ReactNode;
  to?: string;
  href?: string;
  inverted?: boolean;
  className?: string;
}) {
  const cls = inverted
    ? `font-semibold text-white underline decoration-white/40 decoration-2 underline-offset-4 transition-colors hover:decoration-white ${className}`
    : `link ${className}`;
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className={cls}>
      {children}
    </Link>
  );
}

export function SectionHeading({
  title,
  intro,
  inverted = false,
  className = "",
}: {
  title: ReactNode;
  intro?: ReactNode;
  inverted?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <h2 className={`type-headline text-headline ${inverted ? "text-white" : "text-ink"}`}>{title}</h2>
      {intro && <p className={`mt-5 max-w-[58ch] text-lead ${inverted ? "text-white/75" : "text-ink/70"}`}>{intro}</p>}
    </div>
  );
}
