import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center space-y-3">
      <h2 className="text-2xl font-bold">404 — Não encontrado</h2>
      <p className="text-[color:var(--muted)]">
        Esse post não existe (ou foi para outra página).
      </p>
      <Link className="btn" href="/">
        Voltar para Home
      </Link>
    </div>
  );
}
