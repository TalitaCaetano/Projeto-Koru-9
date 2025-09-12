"use client";

import { useEffect, useState } from "react";
import Container from "@/components/Container";
import SearchPosts from "@/components/SearchPosts";
import type { Post } from "@/lib/posts";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const [allPosts, setAllPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function loadPosts() {
      // ⚡ pega os posts fixos
      const staticPosts = await getAllPosts();

      // ⚡ pega os posts do navegador
      const saved = localStorage.getItem("custom-posts");
      const customPosts: Post[] = saved ? JSON.parse(saved) : [];

      // ⚡ junta os dois
      setAllPosts([...staticPosts, ...customPosts]);
    }

    loadPosts();
  }, []);

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-6">Diário de Projeto</h1>
      <p className="text-[color:var(--muted)] mb-8 max-w-prose">
        Um blog minimalista construído com Next.js (App Router), para praticar
        Server Components, rotas dinâmicas e um toque interatividade.
      </p>

      {allPosts.length === 0 ? (
        <p>Carregando posts...</p>
      ) : (
        <SearchPosts posts={allPosts} />
      )}
    </Container>
  );
}
