import PostCard from "./PostCard";
import type { Post } from "@/lib/posts";

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </section>
  );
}