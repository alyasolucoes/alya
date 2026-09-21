import { PageHero, Capabilities } from "@/components/page-sections";
import { VisionVisual, FlowDiagram } from "@/components/visuals";
import { SectionHeading } from "@/components/ui";
import { ProcessSection } from "@/components/sections";
import { CTA } from "@/components/footer";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Automação Industrial e visão computacional",
  "Software, sensores, processamento de imagens e inteligência artificial para monitoramento, inspeção e automação industrial.",
  "/automacao-industrial",
);
export default function Industrial() {
  return (
    <>
      <PageHero
        label="Automação Industrial"
        title="Software conectado ao ambiente industrial."
        description="Conectamos captura, processamento e inteligência para transformar dados do ambiente físico em informação para a operação."
      >
        <VisionVisual />
      </PageHero>
      <Capabilities
        label="Software além da tela"
        title="Da captura à decisão."
        items={[
          {
            title: "Captura e sensores",
            text: "Integre câmeras, sensores e equipamentos conforme a disponibilidade de interfaces e o contexto de cada processo.",
            icon: "camera",
          },
          {
            title: "Visão computacional",
            text: "Processe imagens e compare características observadas com referências digitais e critérios de inspeção.",
            icon: "scan",
          },
          {
            title: "Machine Vision",
            text: "Estruture a análise visual considerando iluminação, posicionamento, variabilidade e condições de captura.",
            icon: "cpu",
          },
          {
            title: "Análise e validação",
            text: "Conecte processamento e IA a regras de aceitação, com revisão humana nos pontos necessários.",
            icon: "sparkles",
          },
          {
            title: "Integração e monitoramento",
            text: "Leve os resultados aos sistemas e equipamentos que participam da operação.",
            icon: "network",
          },
          {
            title: "Rastreabilidade",
            text: "Associe registros de captura, contexto e resultados para acompanhar cada etapa do processo.",
            icon: "database",
          },
        ]}
      />
      <section className="section automation-section">
        <div className="container" data-reveal>
          <SectionHeading
            label="Arquitetura de inspeção"
            title="Cada imagem faz parte de um processo."
            text="Um fluxo de software organiza a captura, aplica os critérios definidos e encaminha o resultado para a operação."
          />
          <FlowDiagram
            steps={[
              "Câmera",
              "Captura",
              "Processamento",
              "IA",
              "Validação",
              "Resultado",
            ]}
            dark
          />
        </div>
      </section>
      <section className="section">
        <div className="container split" data-reveal>
          <SectionHeading
            label="Engenharia aplicada"
            title="O contexto físico orienta a solução digital."
          />
          <div>
            <p>
              A definição do projeto começa pela análise do processo, das
              condições de captura e das divergências que precisam ser
              identificadas.
            </p>
            <p>
              Amostras representativas e critérios de validação orientam o
              desenvolvimento. A integração e a implantação são planejadas
              conforme as restrições da operação.
            </p>
            <p>
              Software, dados e inteligência permanecem no centro da solução.
            </p>
          </div>
        </div>
      </section>
      <ProcessSection />
      <CTA />
    </>
  );
}
