"use client";

import { useEffect, useState } from "react";
import { useParams, notFound, useRouter } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import LikeButton from "@/components/LikeButton";
import ConfirmationModal from "@/components/ConfirmationModal"; 
import { formatDate } from "@/lib/formatDate";
import { posts as staticPosts, getAdjacentPosts, Post } from "@/lib/posts";

export default function PostPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [post, setPost] = useState<Post | null | undefined>(undefined);
  const [isCustomPost, setIsCustomPost] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    
    if (!slug) return;
    const saved = localStorage.getItem("custom-posts");
    const customPosts: Post[] = saved ? JSON.parse(saved) : [];
    const customPost = customPosts.find((p) => p.slug === slug);
    if (customPost) {
      setPost(customPost);
      setIsCustomPost(customPost.author.trim() === "Você");
      return;
    }
    const staticPost = staticPosts.find((p) => p.slug === slug);
    setPost(staticPost || null);
    setIsCustomPost(false);
  }, [slug]);

  
  function handleConfirmDelete() {
    if (!post || !isCustomPost) return;

    const saved = localStorage.getItem("custom-posts");
    const posts: Post[] = saved ? JSON.parse(saved) : [];
    const updatedPosts = posts.filter((p) => p.slug !== slug);

    localStorage.setItem("custom-posts", JSON.stringify(updatedPosts));
    setIsModalOpen(false);
    router.push("/");
  }

  if (post === undefined) {
    return (
      <Container>
        <div className="animate-pulse space-y-3">
          <div className="h-8 w-2/3 rounded bg-[color:var(--card)]" />
          <div className="h-4 w-1/3 rounded bg-[color:var(--card)]" />
        </div>
      </Container>
    );
  }

  if (post === null) {
    notFound();
  }

  const { prev, next } = getAdjacentPosts(slug);
  const paragraphs = post.content.split("\n\n");

  return (
    <>
      
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Confirmar Exclusão"
      >
        Tem certeza que deseja excluir este post? Esta ação não pode ser
        desfeita.
      </ConfirmationModal>

      <Container>
        <article className="prose max-w-none">
          <h1>{post.title}</h1>
          <p className="!mt-0 text-sm text-[color:var(--muted)]">
            {formatDate(post.date)} • {post.author}
          </p>

          {post.tags && (
            <div className="mt-2 flex gap-2 flex-wrap">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tags/${tag}`}
                  className="px-2 py-1 text-xs rounded-full bg-[color:var(--card)] border border-[color:var(--border)]"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          )}

          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>

        <div className="mt-8 flex items-center gap-4">
          <LikeButton postId={post.slug} />
          {isCustomPost && (
            <>
              <Link href={`/edit/${post.slug}`} className="btn">
                ✏️ Editar
              </Link>
              
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn bg-red-600/20 text-red-500 hover:bg-red-600/30"
              >
                🗑️ Excluir
              </button>
            </>
          )}
        </div>

        <div className="mt-12 flex justify-between items-center">
          {prev ? (
            <Link href={`/posts/${prev.slug}`} className="btn">
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/posts/${next.slug}`} className="btn">
              {next.title} →
            </Link>
          ) : (
            <span />
          )}
        </div>

        <div className="mt-10">
          <Link className="btn" href="/">
            ← Voltar para Home
          </Link>
        </div>
      </Container>
    </>
  );
}