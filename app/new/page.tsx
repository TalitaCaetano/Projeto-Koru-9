"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Post } from "@/lib/posts";

export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newPost: Post = {
      slug: `custom-${Date.now()}`,
      title,
      date: new Date().toISOString(),
      author: "Você",
      excerpt: content.slice(0, 100) + "...",
      content,
      tags: ["atualização"],
    };

    const saved = localStorage.getItem("custom-posts");
    const posts: Post[] = saved ? JSON.parse(saved) : [];

  
    localStorage.setItem("custom-posts", JSON.stringify([...posts, newPost]));

    router.push("/");
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Novo Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="border px-3 py-2 rounded"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border px-3 py-2 rounded"
          placeholder="Conteúdo"
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          type="submit"
          className="btn bg-blue-600 text-white hover:bg-blue-700"
        >
          Publicar
        </button>
      </form>
    </div>
  );
}

