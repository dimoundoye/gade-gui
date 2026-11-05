import type { ComponentType, SVGProps } from "react";
import { site, type SocialKey } from "../data/site";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

const stroke = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const Facebook: Icon = (props) => (
  <svg {...stroke} {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram: Icon = (props) => (
  <svg {...stroke} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

const Youtube: Icon = (props) => (
  <svg {...stroke} {...props}>
    <rect x="2" y="5" width="20" height="14" rx="4" />
    <path d="m10 9 5 3-5 3z" />
  </svg>
);

const XLogo: Icon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93zM17.61 20.64h2.04L6.49 3.24H4.3z" />
  </svg>
);

const Linkedin: Icon = (props) => (
  <svg {...stroke} {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const icons: Record<SocialKey, { label: string; Icon: Icon }> = {
  facebook: { label: "Facebook", Icon: Facebook },
  instagram: { label: "Instagram", Icon: Instagram },
  youtube: { label: "YouTube", Icon: Youtube },
  x: { label: "X", Icon: XLogo },
  linkedin: { label: "LinkedIn", Icon: Linkedin },
};

/** Icônes des réseaux sociaux : seules celles dont le lien est renseigné dans `site.socials` s'affichent. */
export default function SocialIcons({ className = "" }: { className?: string }) {
  const keys = (Object.keys(icons) as SocialKey[]).filter((key) => site.socials[key]);
  if (keys.length === 0) return null;

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {keys.map((key) => {
        const { label, Icon } = icons[key];
        return (
          <li key={key}>
            <a
              href={site.socials[key]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid size-10 place-items-center rounded-full text-white/80 ring-1 ring-white/20 transition hover:bg-white hover:text-ink"
            >
              <Icon className="size-4" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
