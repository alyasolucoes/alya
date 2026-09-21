import { notFound } from "next/navigation";
import { products } from "@/data/content";
import { PageHero, Capabilities } from "@/components/page-sections";
import { ChatVisual, PhoneVisual } from "@/components/visuals";
import { SectionHeading } from "@/components/ui";
import { CTA } from "@/components/footer";
import { pageMetadata } from "@/lib/seo";
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = products.find((p) => p.slug === slug);
  if (!p) return {};
  return pageMetadata(p.name, p.description, `/produtos/${p.slug}`);
}
const featureText: Record<string, string> = {
  "Atendimento multiusuário":
    "Organize o trabalho de diferentes atendentes em uma plataforma centralizada.",
  Departamentos:
    "Separe filas e responsabilidades conforme a estrutura da empresa.",
  Chatbot:
    "Estruture etapas de triagem e respostas para rotinas de atendimento.",
  Automações: "Conecte ações de atendimento às etapas do processo.",
  Campanhas:
    "Organize comunicações com contatos conforme a estratégia da operação.",
  Agendamentos:
    "Planeje os próximos contatos e organize a continuidade das conversas.",
  Indicadores: "Acompanhe informações sobre a operação de atendimento.",
  "Gestão de conversas":
    "Mantenha os atendimentos organizados por equipe e contexto.",
  "PABX em nuvem":
    "Centralize a estrutura de voz em uma plataforma de telefonia em nuvem.",
  URA: "Direcione chamadas de acordo com o departamento escolhido.",
  Ramais: "Organize os pontos de atendimento de pessoas e equipes.",
  Transferências:
    "Encaminhe a ligação para quem pode dar continuidade ao atendimento.",
  "Gravação de chamadas":
    "Consulte registros de voz conforme as políticas de acesso e retenção definidas.",
  Relatórios:
    "Acompanhe informações da operação de voz em relatórios centralizados.",
  "Gestão centralizada":
    "Administre a estrutura de telefonia em um único ambiente.",
  Portabilidade:
    "Avalie a migração dos números existentes conforme a viabilidade do serviço.",
};
export default async function Product({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = products.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <>
      <PageHero
        label={p.name}
        title={p.headline}
        description={p.description}
        cta={`Conversar sobre ${p.name}`}
      >
        {p.kind === "chat" ? <ChatVisual /> : <PhoneVisual />}
      </PageHero>
      <section className="section">
        <div className="container split" data-reveal>
          <SectionHeading label="O desafio" title={p.problem} />
          <div>
            <span className="eyebrow">A solução</span>
            <p className="lead">{p.solution}</p>
          </div>
        </div>
      </section>
      <Capabilities
        label="Funcionalidades"
        title={
          p.kind === "chat"
            ? "Atendimento organizado, do início à continuidade."
            : "Uma estrutura completa para a comunicação de voz."
        }
        items={p.features.map((title) => ({
          title,
          text:
            featureText[title] ||
            `Organize ${title.toLowerCase()} no contexto da sua operação.`,
          icon: p.kind,
        }))}
      />
      <section className="section soft-section">
        <div className="container split" data-reveal>
          <SectionHeading
            label="Como funciona"
            title="A tecnologia se encaixa na sua rotina."
          />
          <ol className="numbered-list">
            {p.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section">
        <div className="container split" data-reveal>
          <SectionHeading
            label="Para quem é"
            title="Para equipes que precisam operar juntas."
          />
          <ul className="audience-list">
            {p.audience.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container" data-reveal>
          <SectionHeading
            label="A experiência"
            title={
              p.kind === "chat"
                ? "Uma visão central da conversa."
                : "Da entrada da ligação à equipe certa."
            }
            text="Representação ilustrativa do fluxo de operação. Converse com a Alya para conhecer o produto."
          />
          <div className="product-detail-interface">
            {p.kind === "chat" ? <ChatVisual /> : <PhoneVisual />}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
