import Container from "@/components/Container";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export default async function TagPage({ params }: { params: { tag: string } }) {
  const posts = await getAllPosts();
  const filtered = posts.filter((p) => p.tags?.includes(params.tag));

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-6">Posts com #{params.tag}</h1>
      {filtered.length === 0 ? (
        <p>Nenhum post encontrado com essa tag.</p>
      ) : (
        <section className="grid gap-5">
          {filtered.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </section>
      )}
    </Container>
  );
}
