import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
export const metadata = {
  ...pageMetadata(
    "Termos de Uso",
    "Informações básicas sobre o uso do site institucional da Alya Soluções.",
    "/termos",
  ),
  robots: { index: false, follow: true },
};
export default function Terms() {
  return (
    <section className="section">
      <div className="container editorial-copy">
        <h1>Termos de Uso</h1>
        <div className="legal-note">
          Versão básica para futura revisão jurídica. Este texto deve ser
          validado antes da publicação definitiva.
        </div>
        <h2>Sobre este site</h2>
        <p>
          O site apresenta a Alya Soluções, suas áreas de atuação e produtos. As
          informações têm caráter institucional e não substituem uma proposta
          comercial ou contrato específico.
        </p>
        <h2>Produtos e projetos</h2>
        <p>
          Escopo, disponibilidade, condições de implantação e recursos
          aplicáveis à sua operação devem ser confirmados diretamente com a
          Alya.
        </p>
        <h2>Representações ilustrativas</h2>
        <p>
          Interfaces e diagramas representam fluxos de software. Os exemplos de
          aplicação não constituem afirmações sobre clientes ou resultados
          comprovados.
        </p>
        <h2>Contato</h2>
        <p>
          Para esclarecer informações ou conversar sobre um projeto, acesse a{" "}
          <Link href="/contato">página de contato</Link>.
        </p>
      </div>
    </section>
  );
}
