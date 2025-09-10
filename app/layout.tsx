import type { Metadata} from "next";
import Link  from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog Pessoal - Diário de Projeto",
  description: "Um blog minimalista com Next.js App Ruter",
};

export default function RootLayout ({ children }: { children: React.ReactNode}) {
  return(
  <html lang="pt-BR">
    <body>
      <header className="sticky top-0 z-50 backdrop-blr border-b border-[color:var(--border)]/80 bg-black/20">
      <nav className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">Meu Blog ✍️</Link>
        <div className="flex items-center gap-2 text-sm">
          <Link className="navlink" href="/">Home</Link>
          <Link className="navlink" href="/about">Sobre</Link>
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>
      <footer className="mt-12 border-t bolder-[color:var(--border)]/80 py-8 text-center text-sm text-[color:var (--muted)]">Projeto Koru - 9 • {new Date().getFullYear(2025)}
      </footer>

    </body>
  </html>
  );
}
