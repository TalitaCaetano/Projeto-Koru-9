export type Post = {
  slug: string;
  title: string;
  date: string; // ISO
  author: string;
  excerpt: string;
  content: string;
  tags?: string[];
};

export const posts: Post[] = [
  {
    slug: "dia-1-decisoes-e-setup",
    title: "Dia 1 — Decidindo o tema e criando o projeto",
    date: "2025-09-08",
    author: "Talita Guimarães",
    excerpt:
      "Comecei organizando a ideia do blog e preparando o ambiente de desenvolvimento.",
    content: `Hoje decidi que meu blog seria um diário de
aprendizagem. Quero registrar o passo a passo de como monto um
projeto com Next.js e Tailwind, incluindo os tropeços pelo
caminho.\n\nInstalei as ferramentas, criei a pasta do projeto e
rodei o create-next-app. Também já deixei o Tailwind preparado.
Pequenas vitórias importam.\n\nFechei o dia com o servidor rodando
e aquele alívio de ver a página inicial no ar.`,
    tags: ["setup", "nextjs"],
  },
  {
    slug: "dia-2-layout-e-navegacao",
    title: "Dia 2 — Layout global e navegação",
    date: "2025-09-09",
    author: "Talita Guimarães",
    excerpt:
      "Montei o layout, header fixo e links principais.Começo a cara do produto.",
    content: `Criei o layout global com um header bonito, leve e
funcional. Gosto de interfaces que somem quando não são
necessárias e aparecem quando fazem falta.\n\nAdicionei a
navegação entre Home, Sobre e Novo Post. Parece pouco, mas esse esqueleto dá segurança para evoluir.\n\nAjustei a tipografia e um gradiente de fundo para dar identidade sem exageros.`,
    tags: ["layout", "tailwind"],
  },
  {
    slug: "dia-3-lista-de-posts",
    title: "Dia 3 — Lista de posts (Server Component)",
    date: "2025-09-10",
    author: "Talita Guimarães",
    excerpt: "Implementei a listagem no servidor, com cards e datas legíveis.",
    content: `Implementei a página inicial rendendo no servidor. A lista de
posts aparece como cards limpos, com título, resumo e data.
\n\nEscolhi manter os dados em um arquivo local por enquanto. Depois posso migrar para uma API ou banco.\n\nÉ gostoso ver a Home tomando forma e já contando a história do projeto em capítulos.`,
    tags: ["posts", "server-components"],
  },
  {
    slug: "dia-4-roteamento-dinamico",
    title: "Dia 4 — Roteamento dinâmico e páginas individuais",
    date: "2025-09-11",
    author: "Talita Guimarães",
    excerpt: "Cada post agora tem sua própria URL, com conteúdo completo.",
    content: `Criei a rota dinâmica /posts/[slug]. Agora cada
texto tem sua casa.\n\nO Next faz a mágica de gerar as páginas baseadas no parâmetro da URL. Também preparei o notFound automático caso o slug não exista.\n\nPequenos detalhes de espaçamento e contraste deixam a leitura confortável no desktop e no celular.`,
    tags: ["notFound automático", "detalhes"],
  },
  {
    slug: "dia-5-curtidas-e-feedback",
    title: "Dia 5 — Botão de curtir com animação",
    date: "2025-09-12",
    author: "Talita Guimarães",
    excerpt:
      "Adicionei interatividade com Like e um microfeedback visual fofo.",
    content: `Hoje entrou o primeiro Client Component: um botão de curtir com contador e uma animação leve.\n\nArmazenei o estado no localStorage para não perder a contagem ao recarregar. É simples, mas suficiente para dar sensação de progresso ao leitor.\n\nAprendi que um toque sutil de animação melhora a experiência sem distrair.`,
    tags: ["botão curtir", "animação"],
  },
  {
    slug: "dia-6-responsividade-tipografia",
    title: "Dia 6 — Responsividade e tipografia",
    date: "2025-09-13",
    author: "Talita Guimarães",
    excerpt: "Refinei o mobile-first, altura de linha e escala de títulos.",
    content: `Passei o dia lapidando a leitura no celular. Ajustei tamanhos de fonte, altura de linha e respiros entre os blocos.\n\nO objetivo é que cada parágrafo pareça um convite, não um muro de texto.\n\nTambém preparei classes utilitárias para listas e citações — o diário merece capricho!`,
    tags: ["mobile-first", "ajustes"],
  },
  {
    slug: "dia-7-acessibilidade-e-papeis",
    title: "Dia 7 — Acessibilidade e pequenos luxos",
    date: "2025-09-14",
    author: "Talita Guimarães",
    excerpt:
      "Focus visível, contraste melhor e microdetalhes que elevam o todo.",
    content: `Reforcei o contraste de botões e links. Ajustei o
foco do teclado e testei a navegação sem mouse.\n\nFoi o dia dos
pequenos luxos: modo escuro, sombras suaves, bordas precisas, transições
discretas e acabei colocando alguns detalhes flutuantes no fundo para ter mais animações.\n\nO resultado é uma sensação de polimento — quase
imperceptível, mas muito sentida.`,
    tags: ["detalhes finais"],
  },
  {
    slug: "dia-8-entrega-e-proximos-passos",
    title: "Dia 8 — Entrega e próximos passos",
    date: "2025-09-15",
    author: "Talita Guimarães",
    excerpt:
      "O blog está pronto para evoluir com conteúdo e, quem sabe, um backend.",
    content: `Fechei a primeira versão do blog. Tudo que eu queria para
aprender o App Router está no lugar.\n\nPróximos passos: migrar os
posts para uma API, adicionar busca e talvez um sistema de tags.
\n\nGostei de manter o formato de diário — contar a jornada faz o
código ganhar alma.`,
    tags: ["entrega"],
  },
];

export async function getAllPosts(): Promise<Post[]> {
  
  return [...posts].sort((a, b) => (a.date > b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return posts.find((p) => p.slug === slug) ?? null;
}

export function getAllSlugs() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function getAdjacentPosts(slug: string) {
 
  const sorted = [...posts].sort((a, b) => (a.date > b.date ? 1 : -1));
  const index = sorted.findIndex((p) => p.slug === slug);

  if (index === -1) return { prev: null, next: null };

  const prev = index > 0 ? sorted[index - 1] : null;          
  const next = index < sorted.length - 1 ? sorted[index + 1] : null; 

  return { prev, next };
}