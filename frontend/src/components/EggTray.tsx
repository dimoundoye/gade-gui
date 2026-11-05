import { useEffect, useRef, useState } from "react";

/** Un plateau d'œufs du marché sénégalais : 6 × 5 alvéoles. */
const CELLS = 30;

/**
 * Signature visuelle du site : un plateau de 30 œufs qui se remplit quand il devient visible.
 * C'est la seule animation automatique du site ; elle est remplacée par un plateau plein
 * si le visiteur a demandé à réduire les animations.
 */
export default function EggTray({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFilled(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Un plateau de 30 œufs"
      className={`grid aspect-[6/5] grid-cols-6 grid-rows-5 gap-[4%] rounded-2xl bg-ink-deep p-[6%] ${className}`}
    >
      {Array.from({ length: CELLS }, (_, index) => (
        <span
          key={index}
          style={filled ? { transitionDelay: `${index * 45}ms` } : undefined}
          className={`rounded-full transition-[background-color,scale] duration-500 ease-out ${
            filled ? "scale-100 bg-yolk" : "scale-90 bg-white/[0.07] ring-1 ring-white/15 ring-inset"
          }`}
        />
      ))}
    </div>
  );
}
