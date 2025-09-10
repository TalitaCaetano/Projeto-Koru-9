"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function LikeButton({ postId }: { postId: string }) {
  const storageKey = `likes:${postId}`;
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    const stored = Number(window.localStorage.getItem(storageKey) || 0);
    setLikes(stored);
  }, [storageKey]);
  function toggle() {
    const nextLiked = !liked;
    setLiked(nextLiked);
    setLikes((prev) => {
      const next = nextLiked ? prev + 1 : Math.max(0, prev - 1);
      window.localStorage.setItem(storageKey, String(next));
      return next;
    });
  }
  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      onClick={toggle}
      className={`btn ${liked ? "ring-2 ring-brand-400/60" : ""}`}
      aria-pressed={liked}
    >
      <span aria-hidden>💙</span>
      Curtir
      <span className="text-sm text-[color:var(--muted)]">{likes}</span>
    </motion.button>
  );
}
