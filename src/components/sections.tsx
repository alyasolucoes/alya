import Link from "next/link";
import { OrbitVisual, ServiceGraphic } from "./brand-visuals";
import { ArrowUpRight } from "lucide-react";
import {
  services,
  products,
  cases,
  processSteps,
  technologies,
} from "@/data/content";
import { Button, FeatureList, Icon, SectionHeading } from "./ui";
import { ChatVisual, PhoneVisual, VisionVisual, FlowDiagram } from "./visuals";
export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1>
            Software para
            <br className="hero-break" /> operações que
            <br className="hero-break" /> precisam <em>ir além.</em>
          </h1>
          <p>
            Desenvolvemos sistemas, produtos digitais e automações que conectam
            processos, pessoas e tecnologia.
          </p>
          <div className="actions">
            <Button href="#solucoes">Conheça nossas soluções</Button>
            <Button href="/contato" variant="ghost">
              Fale sobre seu projeto
            </Button>
          </div>
        </div>
        <OrbitVisual />
      </div>
      <div className="container hero-track">
        {[
          ["code", "Software"],
          ["layers", "SaaS"],
          ["network", "Integrações"],
          ["cpu", "IA"],
          ["workflow", "Automação"],
        ].map(([icon, label]) => (
          <div key={label}>
            <Icon name={icon} size={25} />
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className="container hero-baseline">
        <span>TECNOLOGIA QUE FAZ PARTE DA OPERAÇÃO.</span>
        <span>
          Explore as possibilidades <span aria-hidden="true">↓</span>
        </span>
      </div>
    </section>
  );
}
export function Positioning() {
  return (
    <section className="section positioning">
      <div className="container" data-reveal>
        <div className="split-heading">
          <SectionHeading
            label="Da complexidade à clareza"
            title="Transformamos operações em software."
          />
          <p>
            A Alya desenvolve tecnologia para empresas que precisam digitalizar
            processos, integrar sistemas e criar novas formas de operar.
          </p>
        </div>
        <FlowDiagram
          steps={[
            "Operação",
            "Software",
            "Integrações",
            "Automação",
            "Inteligência",
          ]}
        />
      </div>
    </section>
  );
}
export function Solutions() {
  return (
    <section id="solucoes" className="section solutions">
      <div className="container" data-reveal>
        <SectionHeading
          label="O que construímos"
          title="Tecnologia construída para cada operação."
        />
        <div className="service-grid">
          {services.map((s, i) => (
            <Link href={`/${s.slug}`} className="service-card" key={s.slug}>
              <div className="card-top">
                <Icon name={s.icon} size={29} />
                <span>0{i + 1}</span>
              </div>
              <ServiceGraphic icon={s.icon} />
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <div className="service-tags">
                {s.items.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <span className="card-link">
                {s.cta}
                <ArrowUpRight size={18} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
export function CustomDevelopment() {
  return (
    <section className="section development-section">
      <div className="container split" data-reveal>
        <div>
          <SectionHeading
            label="Software sob demanda"
            title="Tecnologia construída para a realidade da sua empresa."
            text="Nem toda operação pode ser resolvida por um software pronto. Desenvolvemos sistemas personalizados para processos que exigem regras, integrações e experiências específicas."
          />
          <Button href="/contato" variant="ghost">
            Fale sobre seu projeto
          </Button>
        </div>
        <ol className="development-steps">
          {[
            "Entendemos a operação",
            "Desenhamos a solução",
            "Desenvolvemos",
            "Integramos",
            "Evoluímos",
          ].map((s, i) => (
            <li key={s}>
              <span>0{i + 1}</span>
              <h3>{s}</h3>
              <ArrowUpRight size={18} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
export function ProductsSection({ heading = true }: { heading?: boolean }) {
  return (
    <section className="section products-section">
      <div className="container" data-reveal>
        {heading && (
          <div className="split-heading">
            <SectionHeading
              label="Produtos Alya"
              title="Tecnologia pronta para acelerar operações."
            />
            <Button href="/produtos" variant="ghost">
              Todos os produtos
            </Button>
          </div>
        )}
        <div className="products-list">
          {products.map((product) => (
            <article
              className={`product-row product-${product.kind}`}
              key={product.slug}
            >
              <div className="product-copy">
                <span className="product-name">
                  <Icon name={product.kind} />
                  {product.name}
                </span>
                <h3>{product.headline}</h3>
                <p>{product.description}</p>
                <FeatureList items={product.features} />
                <Button href={`/produtos/${product.slug}`} variant="ghost">
                  Conhecer {product.name}
                </Button>
              </div>
              {product.kind === "chat" ? <ChatVisual /> : <PhoneVisual />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export const automationFeatures = [
  ["network", "Integrações", "Conectamos sistemas e plataformas."],
  ["workflow", "Workflows", "Automatizamos processos operacionais."],
  [
    "sparkles",
    "Inteligência Artificial",
    "Aplicamos IA em atividades onde ela consegue gerar ganho operacional real.",
  ],
  [
    "database",
    "Dados",
    "Transformamos informações dispersas em processos estruturados.",
  ],
];
export function AutomationSection({ detail = false }: { detail?: boolean }) {
  return (
    <section className="section automation-section">
      <div className="container" data-reveal>
        <div className="split-heading">
          <SectionHeading
            label="Automação e inteligência"
            title="Menos tarefas manuais. Mais operação inteligente."
          />
          <div>
            <p>
              Conectamos sistemas, dados e processos para automatizar atividades
              repetitivas e permitir que equipes trabalhem com mais eficiência.
            </p>
            <Button href={detail ? "/contato" : "/automacao"} variant="ghost">
              {detail ? "Converse sobre seu processo" : "Conhecer automações"}
            </Button>
          </div>
        </div>
        <div className="automation-grid">
          {automationFeatures.map(([icon, title, text]) => (
            <article key={title}>
              <Icon name={icon} size={28} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <FlowDiagram
          steps={["Evento", "Integração", "Processamento", "Ação"]}
          dark
        />
      </div>
    </section>
  );
}
export function IndustrialSection() {
  return (
    <section className="section industrial-section">
      <div className="container" data-reveal>
        <div className="split">
          <div>
            <SectionHeading
              label="Automação Industrial"
              title="Do software ao ambiente físico."
              text="Tecnologia também pode transformar processos fora da tela."
            />
            <p>
              Desenvolvemos soluções que conectam software, sensores,
              equipamentos e inteligência artificial para monitoramento,
              inspeção e automação de processos industriais.
            </p>
            <FeatureList
              items={[
                "Visão computacional e Machine Vision",
                "Processamento de imagens",
                "Integração com equipamentos",
                "Monitoramento e dados industriais",
              ]}
            />
            <Button href="/automacao-industrial" variant="ghost">
              Conhecer soluções industriais
            </Button>
          </div>
          <VisionVisual />
        </div>
        <FlowDiagram
          steps={[
            "Câmera",
            "Captura",
            "Processamento",
            "IA",
            "Validação",
            "Resultado",
          ]}
        />
      </div>
    </section>
  );
}
export function CasesSection({ full = false }: { full?: boolean }) {
  return (
    <section className="section cases-section">
      <div className="container" data-reveal>
        <div className="split-heading">
          <SectionHeading
            label="Aplicações de tecnologia"
            title="Tecnologia aplicada a problemas reais."
            text="Exemplos de aplicação. Clientes e resultados serão apresentados em cases validados."
          />
          {!full && (
            <Button href="/cases" variant="ghost">
              Explorar aplicações
            </Button>
          )}
        </div>
        <div className="case-grid">
          {cases.map((c, i) => (
            <article className="case-card" key={c.slug}>
              <div className={`case-diagram case-diagram-${i}`}>
                <Icon
                  name={i === 0 ? "scan" : i === 1 ? "workflow" : "chat"}
                  size={40}
                />
                <span>
                  {i === 0
                    ? "CAPTURAR / ANALISAR / VALIDAR"
                    : i === 1
                      ? "PROCESSOS / DADOS / SOFTWARE"
                      : "EQUIPES / CANAIS / CONEXÕES"}
                </span>
              </div>
              <div className="case-copy">
                <span className="eyebrow">{c.category}</span>
                <h3>{c.title}</h3>
                <p>{c.description}</p>
                {full && (
                  <>
                    <h4>Desafio</h4>
                    <p>{c.challenge}</p>
                    <h4>Abordagem</h4>
                    <p>{c.solution}</p>
                  </>
                )}
                <Button href={c.href} variant="ghost">
                  Explorar a solução
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function ProcessSection() {
  return (
    <section className="section process-section">
      <div className="container" data-reveal>
        <SectionHeading
          label="Como trabalhamos"
          title="Da operação à tecnologia."
        />
        <ol className="process-grid">
          {processSteps.map(([title, text], i) => (
            <li key={title}>
              <span className="process-index">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
export function CompanySection({ detail = false }: { detail?: boolean }) {
  return (
    <section className="section company-section">
      <div className="container split" data-reveal>
        <SectionHeading
          label="Conheça a Alya"
          title="Engenharia por trás de cada solução."
        />
        <div>
          <p className="lead">
            A Alya é uma empresa brasileira de software especializada no
            desenvolvimento de soluções digitais para operações empresariais.
          </p>
          <p>
            Criamos desde sistemas personalizados e produtos SaaS até projetos
            que combinam software, inteligência artificial e automação.
          </p>
          <p>
            Nosso trabalho começa entendendo a operação e termina entregando
            tecnologia preparada para fazer parte dela.
          </p>
          <Button href={detail ? "/contato" : "/empresa"} variant="ghost">
            {detail ? "Converse com a Alya" : "Conheça a empresa"}
          </Button>
        </div>
      </div>
      <div className="container technology-strip">
        {technologies.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </section>
  );
}
