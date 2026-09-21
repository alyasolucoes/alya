import { PageHero, Capabilities } from "@/components/page-sections";
import { CompanySection, ProcessSection } from "@/components/sections";
import { CTA } from "@/components/footer";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Empresa",
  "Conheça a Alya Soluções, empresa brasileira de software especializada em soluções digitais para operações empresariais.",
  "/empresa",
);
export default function Company() {
  return (
    <>
      <PageHero
        label="Alya Soluções"
        title="Entender a operação. Construir a tecnologia."
        description="Software sob demanda, produtos próprios e automação: diferentes formas de aproximar engenharia e necessidades reais de negócio."
      />
      <CompanySection detail />
      <Capabilities
        label="Como pensamos"
        title="Engenharia com propósito operacional."
        items={[
          {
            title: "Entender antes de construir",
            text: "O problema, as pessoas e as regras da operação orientam as decisões de produto e tecnologia.",
            icon: "blocks",
          },
          {
            title: "Conectar as partes",
            text: "Sistemas, dados e equipes fazem parte do mesmo processo. A arquitetura precisa considerar essas relações.",
            icon: "network",
          },
          {
            title: "Preparar para evoluir",
            text: "Uma solução deve acompanhar as mudanças da empresa, com organização, manutenção e evolução planejadas.",
            icon: "layers",
          },
        ]}
      />
      <ProcessSection />
      <CTA />
    </>
  );
}
