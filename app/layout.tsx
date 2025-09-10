import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Providers } from "./providers"; // ✅ garante que o provider está aqui
import ThemeToggle from "@/components/ThemeToggle"; // ✅ importa o botão

export const metadata: Metadata = {
  title: "Blog Pessoal — Diário de Projeto",
  description: "Um blog minimalista com Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Providers>
          <header className="sticky top-0 z-50 backdrop-blur border-b border-[color:var(--border)]/80 bg-[color:var(--card)]/60">
            <nav className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
              <Link href="/" className="text-lg font-semibold">
                Meu Blog ✍️
              </Link>

              <div className="flex items-center gap-3 text-sm">
                <Link className="navlink" href="/">
                  Home
                </Link>
                <Link className="navlink" href="/about">
                  Sobre
                </Link>
                <ThemeToggle /> {/* 👈 botão aqui */}
              </div>
            </nav>
          </header>

          <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>

          <footer className="mt-12 border-t border-[color:var(--border)]/80 py-8 text-center text-sm text-[color:var(--muted)]">
            Feito com Next.js • {new Date().getFullYear()}
          </footer>
        </Providers>
      </body>
    </html>
  );
}
