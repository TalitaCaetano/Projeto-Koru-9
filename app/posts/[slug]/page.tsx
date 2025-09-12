import Container from "@/components/Container";
import LikeButton from "@/components/LikeButton";
import { formatDate } from "@/lib/formatDate";
import { getAllSlugs, getPostBySlug, getAdjacentPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";




export async function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Post não encontrado" };
  return { title: `${post.title} — Diário` };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  const paragraphs = post.content.split("\n\n");
  const { prev, next } = getAdjacentPosts(params.slug);

  return (
    <Container>
      <article className="prose max-w-none">
        <h1>{post.title}</h1>
        <p className="!mt-0 text-sm text-[color:var(--muted)]">
          {formatDate(post.date)} • {post.author}
        </p>

        {/* ✅ TAGS */}
        {post.tags && (
          <div className="mt-2 flex gap-2 flex-wrap">
            {post.tags.map((tag) => (
              <a
                key={tag}
                href={`/tags/${tag}`}
                className="px-2 py-1 text-xs rounded-full bg-[color:var(--card)] border border-[color:var(--border)]"
              >
                #{tag}
              </a>
            ))}
          </div>
        )}

        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </article>

      <div className="mt-6">
        <LikeButton postId={post.slug} />
      </div>

      
      {/* ✅ Navegação entre posts */}
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
        <a className="btn" href="/">
          ← Voltar para Home
        </a>
      </div>
    </Container>
  );
}

