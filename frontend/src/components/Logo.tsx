/** Logo provisoire (feuille aux couleurs du logo Gade Gui) : à remplacer par le fichier vectoriel officiel. */
export default function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className={`flex items-center gap-2.5 ${inverted ? "text-white" : "text-ink"}`}>
      <svg viewBox="0 0 32 32" aria-hidden="true" className="size-8 shrink-0">
        <path d="M5 27C5 15.2 13.3 6.9 26.6 5.3 25.6 18.6 17 27 5 27Z" fill="#8cc63f" />
        <path d="M5 27c5-6.8 10-10.9 16.6-14.4" stroke="#1f7a3a" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      </svg>
      <span className="type-title text-[1.375rem] leading-none">Gade Gui</span>
    </span>
  );
}
