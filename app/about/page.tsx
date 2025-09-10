import Container from "@/components/Container";

export default function AboutPage() {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-4">Sobre</h1>
      <div className="prose max-w-none">
        <p>
          Olá! Eu sou <strong>Talita Guimarães</strong> e este é meu blog em
          formato de diário, onde registro decisões, aprendizados e pequenos
          avanços enquanto construo projetos web.
        </p>
        <p>
          Tecnologias favoritas no momento: Next.js, TypeScript e Tailwind CSS.
          Curto interfaces que respeitam o leitor: tipografia gentil, contraste correto e microinterações que acolhem.
        </p>
        <h3>Contato</h3>
        <ul>
          <li>GitHub: <a href="https://github.com" target="_blank">https://github.com/TalitaCaetano</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/" target="_blank">linkedin.com/in/talita-caetano-guimarães</a></li>
          <li>Email: guimaraestalita19@gmail.com</li>
        </ul>
      </div>
    </Container>
  );
}
