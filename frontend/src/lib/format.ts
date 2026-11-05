const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

/** « 2025-11-07 » → « 7 novembre 2025 » (midi pour éviter les décalages de fuseau). */
export function formatDate(isoDate: string) {
  return dateFormatter.format(new Date(`${isoDate}T12:00:00`));
}

export function formatNumber(value: number, decimals = 0) {
  return new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}
