import { PageHero, Capabilities } from "@/components/page-sections";
import { FlowDiagram } from "@/components/visuals";
import { SectionHeading } from "@/components/ui";
import { AutomationSection, ProcessSection } from "@/components/sections";
import { CTA } from "@/components/footer";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Automação de processos",
  "Workflows, APIs, integrações e inteligência artificial para conectar sistemas, dados e processos empresariais.",
  "/automacao",
);
export default function Automation() {
  return (
    <>
      <PageHero
        label="Automação de processos"
        title="Automação que conecta sistemas, dados e processos."
        description="Reduza etapas manuais e transforme eventos da operação em ações coordenadas entre ferramentas e equipes."
      />
      <AutomationSection detail />
      <Capabilities
        label="Aplicações"
        title="O fluxo certo entre cada etapa."
        items={[
          {
            title: "Workflows operacionais",
            text: "Estruture sequências de tarefas, aprovações e encaminhamentos com regras definidas pela operação.",
            icon: "workflow",
          },
          {
            title: "APIs e eventos",
            text: "Conecte plataformas e dispare ações a partir de mudanças de status, entradas de dados ou eventos.",
            icon: "network",
          },
          {
            title: "Processamento de dados",
            text: "Valide, transforme e distribua informações entre sistemas sem repetir o mesmo trabalho.",
            icon: "database",
          },
          {
            title: "IA aplicada",
            text: "Avalie classificação, extração e análise de informações em atividades com critérios claros de validação.",
            icon: "sparkles",
          },
          {
            title: "Tratamento de exceções",
            text: "Defina como falhas, dados incompletos e situações fora da regra devem retornar à equipe.",
            icon: "code",
          },
          {
            title: "Acompanhamento",
            text: "Organize registros e indicadores para entender o comportamento de cada fluxo.",
            icon: "scan",
          },
        ]}
      />
      <section className="section soft-section">
        <div className="container" data-reveal>
          <SectionHeading
            label="Um exemplo de fluxo"
            title="Do evento à ação, com contexto."
            text="Uma solicitação chega, os dados são validados e o processo encaminha a próxima atividade. A equipe acompanha os pontos que exigem decisão."
          />
          <FlowDiagram
            steps={[
              "Solicitação",
              "Validação",
              "Integração",
              "Ação",
              "Acompanhamento",
            ]}
          />
        </div>
      </section>
      <ProcessSection />
      <CTA />
    </>
  );
}
