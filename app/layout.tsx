import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Providers } from "./providers";
import ThemeToggle from "@/components/ThemeToggle";
import { Inter, Poppins } from "next/font/google";
import AnimatedBackground from "@/components/AnimatedBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "DevChronicles — Diário de Projeto",
  description: "Um blog minimalista com Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body>
        <AnimatedBackground /> {/* Adicione o componente aqui */}
        <Providers>
          <header className="sticky top-0 z-50 backdrop-blur border-b border-[color:var(--border)]/80 bg-[color:var(--card)]/60">
            <nav className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
              <Link href="/" className="text-lg font-semibold font-poppins">
                DevChronicles ✍️
              </Link>

              <div className="flex items-center gap-3 text-sm">
                <Link className="navlink" href="/">
                  Home
                </Link>
                <Link className="navlink" href="/about">
                  Sobre
                </Link>
                <Link className="navlink" href="/new">
                  Novo Post
                </Link>
                <ThemeToggle />
              </div>
            </nav>
          </header>

          <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>

          <footer className="mt-12 border-t border-[color:var(--border)]/80 py-8 text-center text-sm text-[color:var(--muted)]">
            &copy;{new Date().getFullYear()} • Feito por Talita Guimarães. Todos
            os Direitos reservados.
          </footer>
        </Providers>
      </body>
    </html>
  );
}