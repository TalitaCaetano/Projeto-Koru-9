import Container from "@/components/Container";
import LikeButton from "@/components/LikeButton";
import { formatDate } from "@/lib/formatDate";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

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

export default async function PostPage({params}: {params: { slug:string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  const paragraphs = post.content.split("\n\n");

  return(
    <Container>
      <article className="prose max-w-nome">
        <h1>{post.title}</h1>
        <p className="!mt-0 text-sm text-[color:var(--muted)]">
          {formatDate(post.date)} • {post.author}
        </p>
        {paragraphs.map((p, i)=>(
          <p key={i}>{p}</p>
        ))}
      </article>

      <div className="mt-6">
        <LikeButton postId={post.slug}/>
      </div>

      <div className="mt-10">
        <a className="btn" href="/">← Voltar para Home </a>
      </div>
    </Container>
  );
}
