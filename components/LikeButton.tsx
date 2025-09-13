"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const random = (min: number, max: number) => Math.random() * (max - min) + min;

const Particle = ({ children }: { children: React.ReactNode }) => {
  const duration = random(0.6, 1.2);
  const x = random(-40, 40);
  const y = random(-60, -20);
  const scale = random(0.6, 1.1);
  const rotate = random(-120, 120);

  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 0, scale: 0.5, rotate: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        x,
        y,
        scale,
        rotate,
      }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration, ease: "easeOut" }}
      className="absolute"
      style={{ originX: "50%", originY: "50%" }}
    >
      {children}
    </motion.div>
  );
};

export default function LikeButton({ postId }: { postId: string }) {
  const storageKey = `likes:${postId}`;
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const likedStatus = window.localStorage.getItem(`${storageKey}:status`) === 'true';
    setLiked(likedStatus);

    const storedLikes = Number(window.localStorage.getItem(storageKey) || 0);
    setLikes(storedLikes);
  }, [storageKey]);

  function toggle() {
    const nextLiked = !liked;
    setLiked(nextLiked);

    setLikes((prev) => {
      const next = nextLiked ? prev + 1 : Math.max(0, prev - 1);
      window.localStorage.setItem(storageKey, String(next));
      window.localStorage.setItem(`${storageKey}:status`, String(nextLiked));
      return next;
    });

    if (nextLiked) {
      setShowParticles(true);
      setTimeout(() => setShowParticles(false), 1200);
    }
  }

  const heartVariants = {
    liked: {
      scale: [1, 1.3, 1],
      transition: { duration: 0.3 },
    },
    unliked: {
      scale: 1,
    },
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggle}
      className={`btn relative overflow-hidden ${liked ? "ring-2 ring-[color:var(--accent)]/60" : ""}`}
      aria-pressed={liked}
    >
      <motion.span
        aria-hidden
        variants={heartVariants}
        animate={liked ? "liked" : "unliked"}
      >
        💙
      </motion.span>
      <span>Curtir</span>
      <span className="text-sm text-[color:var(--muted)]">{likes}</span>

      <AnimatePresence>
        {showParticles && (
          
          <>
            <Particle>✨</Particle>
            <Particle>💖</Particle>
            <Particle>🎉</Particle>
            <Particle>👍</Particle>
          </>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
