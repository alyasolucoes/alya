import { Button } from "@/components/ui";
export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <span className="eyebrow">404 / Caminho não encontrado</span>
        <h1>Essa página não existe.</h1>
        <p>Explore as soluções Alya a partir da página inicial.</p>
        <Button href="/">Voltar para o início</Button>
      </div>
    </section>
  );
}
