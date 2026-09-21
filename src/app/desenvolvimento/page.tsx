import { PageHero, Capabilities } from "@/components/page-sections";
import { SystemVisual, FlowDiagram } from "@/components/visuals";
import { SectionHeading } from "@/components/ui";
import { ProcessSection, CasesSection } from "@/components/sections";
import { CTA } from "@/components/footer";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Desenvolvimento de software sob demanda",
  "Sistemas empresariais, portais, plataformas e APIs desenvolvidos para as regras e necessidades da sua operação.",
  "/desenvolvimento",
);
export default function Development() {
  return (
    <>
      <PageHero
        label="Software sob demanda"
        title="Software desenvolvido para a sua operação."
        description="Sistemas personalizados para processos que exigem regras, integrações e experiências específicas."
      >
        <SystemVisual />
      </PageHero>
      <Capabilities
        label="O que desenvolvemos"
        title="O processo define a solução."
        items={[
          {
            title: "Sistemas empresariais",
            text: "Centralize rotinas, permissões e regras de negócio em uma aplicação desenhada para sua equipe.",
            icon: "blocks",
          },
          {
            title: "Portais e plataformas",
            text: "Crie experiências digitais para clientes, parceiros e equipes, conectadas ao fluxo da empresa.",
            icon: "layers",
          },
          {
            title: "APIs e integrações",
            text: "Faça os sistemas trocarem informações com contratos claros, validação e acompanhamento.",
            icon: "network",
          },
        ]}
      />
      <section className="section soft-section">
        <div className="container split" data-reveal>
          <SectionHeading
            label="Como trabalhamos"
            title="Antes do código, entendemos a operação."
          />
          <div className="editorial-copy">
            <p>
              Mapeamos quem usa o sistema, quais decisões precisam ser tomadas e
              onde as ferramentas atuais deixam lacunas.
            </p>
            <p>
              O escopo é organizado em entregas que podem ser demonstradas,
              validadas e aprimoradas com quem participa do processo.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container" data-reveal>
          <div className="split">
            <SectionHeading
              label="Integrações"
              title="Uma solução que conversa com o que já existe."
            />
            <p>
              ERPs, plataformas, bancos de dados e serviços externos podem fazer
              parte da mesma arquitetura. Avaliamos as interfaces disponíveis e
              definimos os fluxos de troca, validação e tratamento de falhas.
            </p>
          </div>
          <FlowDiagram
            steps={[
              "Sistema de origem",
              "API",
              "Regras de negócio",
              "Dados",
              "Operação",
            ]}
          />
        </div>
      </section>
      <Capabilities
        label="Engenharia"
        title="Arquitetura preparada para evoluir."
        items={[
          {
            title: "Responsabilidades claras",
            text: "Componentes e serviços organizados por domínio reduzem dependências e facilitam a manutenção.",
          },
          {
            title: "Acesso e rastreabilidade",
            text: "Permissões e registros são definidos conforme os usuários, as informações e as necessidades do projeto.",
            icon: "database",
          },
          {
            title: "Evolução contínua",
            text: "A solução é estruturada para receber novas funcionalidades e integrações de forma planejada.",
            icon: "workflow",
          },
        ]}
      />
      <ProcessSection />
      <CasesSection />
      <CTA />
    </>
  );
}
