"use client";

import { useState, useEffect } from "react";
import Container from "@/components/Container";
import type { Post } from "@/lib/posts";

export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("custom-posts");
    if (saved) {
      setPosts(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("custom-posts", JSON.stringify(posts));
  }, [posts]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newPost: Post = {
      slug: `custom-${Date.now()}`, // slug único
      title,
      date: new Date().toISOString(),
      author: "Você",
      excerpt: content.slice(0, 100) + "...",
      content,
      tags: ["atualização"],
    };

    setPosts([...posts, newPost]);
    setTitle("");
    setContent("");
  }

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-6">Nova atualização</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--fg)]"
        />
        <textarea
          placeholder="Conteúdo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={5}
          className="w-full px-4 py-2 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--fg)]"
        />
        <button type="submit" className="btn">
          Publicar
        </button>
      </form>
    </Container>
  );
}
