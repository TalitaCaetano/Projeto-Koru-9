// app/edit/[slug]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import type { Post } from "@/lib/posts";

export default function EditPostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [post, setPost] = useState<Post | null>(null);
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;

  useEffect(() => {
    if (!slug) return;

    const saved = localStorage.getItem("custom-posts");
    const posts: Post[] = saved ? JSON.parse(saved) : [];
    const postToEdit = posts.find((p) => p.slug === slug);

    if (postToEdit) {
      setPost(postToEdit);
      setTitle(postToEdit.title);
      setContent(postToEdit.content);
    } else {
      // Opcional: redirecionar se o post não for encontrado ou não for customizado
      router.push("/");
    }
  }, [slug, router]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!post) return;

    const updatedPost: Post = {
      ...post,
      title,
      content,
      excerpt: content.slice(0, 100) + "...",
    };

    const saved = localStorage.getItem("custom-posts");
    const posts: Post[] = saved ? JSON.parse(saved) : [];
    const updatedPosts = posts.map((p) =>
      p.slug === slug ? updatedPost : p
    );

    localStorage.setItem("custom-posts", JSON.stringify(updatedPosts));
    router.push(`/posts/${slug}`);
  }

  if (!post) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Editar Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="border px-3 py-2 rounded bg-transparent"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border px-3 py-2 rounded bg-transparent"
          placeholder="Conteúdo"
          rows={8}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          type="submit"
          className="btn bg-blue-600 text-white hover:bg-blue-700"
        >
          Salvar Alterações
        </button>
      </form>
    </div>
  );
}