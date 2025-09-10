import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import type { Post } from "@/lib/posts";
export default function PostCard({ post }: { post: Post }) {
  return (
    <article
      className="card p-5 hover:shadow-2xl hover:shadow-black/30
transition"
    >
      <header className="mb-3">
        <h2 className="text-xl font-semibold mb-1">
          <Link href={`/posts/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>
        <p
          className="text-sm text-[color:var(--
muted)]"
        >
          {formatDate(post.date)} • {post.author}
        </p>
      </header>
      <p className="text-[15px] text-white/90">{post.excerpt}</p>
      <div className="mt-4">
        <Link className="btn" href={`/posts/${post.slug}`}>
          Ler post →
        </Link>
      </div>
    </article>
  );
}
