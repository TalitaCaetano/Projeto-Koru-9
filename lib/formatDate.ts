export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}
