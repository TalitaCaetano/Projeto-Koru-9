DevChronicles — Diário de Projeto ✍️
Um blog minimalista e moderno construído com Next.js (App Router), criado como um diário de projeto para documentar a jornada de desenvolvimento, aprendizados e decisões técnicas.
---------------------------------------#########---------------------------------------
Visão Geral
O DevChronicles é uma aplicação web que simula um blog pessoal, focando em uma experiência de usuário limpa, agradável e interativa. O projeto foi desenvolvido para explorar e praticar conceitos modernos do ecossistema React, como Server Components, rotas dinâmicas, e interatividade no lado do cliente.
---------------------------------------#########---------------------------------------
Funcionalidades
Listagem de Posts: A página inicial exibe todos os posts, combinando dados estáticos e posts criados pelo usuário, renderizados no servidor para melhor performance.

Páginas Dinâmicas: Cada post possui uma URL única e dinâmica, gerada a partir de seu slug/page.tsx].

Criação de Posts: Usuários podem criar novos posts através de um formulário simples. Os posts são salvos no localStorage do navegador, permitindo persistência de dados sem um backend complexo.
---------------------------------------#########---------------------------------------
Interatividade:

Botão de Curtir: Um botão de "Curtir" com animações fluidas e contagem de likes que persiste no localStorage.

Busca de Posts: Um campo de busca na página inicial para filtrar posts por título ou conteúdo em tempo real.

Tema Claro e Escuro: Botão para alternar entre os modos de visualização claro e escuro, сom transições suaves.
---------------------------------------#########---------------------------------------
Design e Estilo:

Interface estilizada com Tailwind CSS, seguindo uma abordagem utility-first.

Animações sutis com Framer Motion para melhorar a experiência do usuário.

Fundo animado com bolhas flutuantes para um toque visual dinâmico.
---------------------------------------#########---------------------------------------
Tecnologias Utilizadas
Framework: Next.js (com App Router)

Linguagem: TypeScript

Estilização: Tailwind CSS

Animações: Framer Motion

Gerenciamento de Tema: next-themes

Linting: ESLint
---------------------------------------#########---------------------------------------
Como Executar o Projeto
Siga os passos abaixo para rodar o projeto em seu ambiente de desenvolvimento.

Pré-requisitos:

Node.js (versão 18.18.0 ou superior)

Um gerenciador de pacotes (npm, yarn, pnpm ou bun)
---------------------------------------#########---------------------------------------
1. Clone o repositório:

Bash

git clone https://github.com/seu-usuario/projeto-koru-9.git
cd projeto-koru-9
2. Instale as dependências:
---------------------------------------#########---------------------------------------
Bash

npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
---------------------------------------#########---------------------------------------
3. Inicie o servidor de desenvolvimento:

Bash

npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
Abra http://localhost:3000 em seu navegador para ver o resultado. A página será atualizada automaticamente conforme você edita os arquivos.
---------------------------------------#########---------------------------------------
Estrutura do Projeto
/app: Contém todas as rotas, páginas e layouts, utilizando o App Router do Next.js.

/app/api: Rotas de API (se aplicável).

/app/(pages): Arquivos de páginas como about, new, etc.

/app/posts/[slug]: Rota dinâmica para exibir posts individuais.

/components: Componentes React reutilizáveis, como PostCard, LikeButton e ThemeToggle.

/lib: Funções auxiliares e a fonte de dados estática dos posts.

/public: Arquivos estáticos, como imagens e fontes.