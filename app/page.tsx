import Container from "@/components/Container";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export default async function HomePage(){
  const posts = await getAllPosts();
  return(
    <Container>
      <h1 className="text-3xl font-bold mb-6">Diário de Projeto</h1>
      <p className="text-[color:var(--muted)] mb-8 max-w-prose">Um blog minimalista construído com Next.js (App Router), para praticar Serve Components, rotas dinâmicas e um toque interatividade.</p>
      <section className="grind gap-5">
        {posts.map((p) => (<PostCard key={p.slug} post={p}/>
      ))}
      </section>
    </Container>
  );
}
