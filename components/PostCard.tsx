"use client";

import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import type { Post } from "@/lib/posts";
import { motion } from "framer-motion";

export default function PostCard({ post }: { post: Post }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="card group p-6 rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 ease-in-out"
    >
      <header className="mb-4">
        <h2 className="text-xl font-semibold text-[color:var(--fg)] mb-1">
          <Link
            href={`/posts/${post.slug}`}
            className="hover:underline decoration-[color:var(--accent)] hover:decoration-[color:var(--fg)] transition"
          >
            {post.title}
          </Link>
        </h2>
        <p className="text-sm text-[color:var(--muted)]">
          {formatDate(post.date)} • {post.author}
        </p>
      </header>

      <p className="text-[15px] text-[color:var(--fg)] leading-relaxed">
        {post.excerpt}
      </p>

      <div className="mt-6">
        <Link
          className="btn inline-flex items-center gap-2 text-sm font-medium"
          href={`/posts/${post.slug}`}
          aria-label={`Ler post completo: ${post.title}`}
        >
          Ler post →
        </Link>
      </div>
    </motion.article>
  );
}