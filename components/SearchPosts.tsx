"use client";

import { useState } from "react";
import type { Post } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function SearchPosts({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      {/* Campo de busca */}
      <input
        type="text"
        placeholder="Buscar posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full mb-8 px-4 py-2 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--fg)] focus:outline-none focus:ring-2 focus:ring-brand-400"
      />

      {/* Lista filtrada */}
      {filtered.length === 0 ? (
        <p className="text-[color:var(--muted)]">Nenhum post encontrado.</p>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </section>
      )}
    </div>
  );
}
