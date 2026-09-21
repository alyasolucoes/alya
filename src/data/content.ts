export const services = [
  {
    slug: "desenvolvimento",
    title: "Software sob demanda",
    description:
      "Sistemas desenvolvidos especificamente para os processos, regras e necessidades da sua empresa.",
    items: [
      "Sistemas empresariais",
      "Portais",
      "APIs",
      "Plataformas",
      "Integrações",
    ],
    cta: "Conhecer desenvolvimento",
    icon: "code",
  },
  {
    slug: "produtos",
    title: "Produtos SaaS",
    description:
      "Produtos Alya desenvolvidos para resolver desafios recorrentes de comunicação e operação empresarial.",
    items: ["AlyaChat", "Telefonia", "Novas soluções"],
    cta: "Conhecer produtos",
    icon: "layers",
  },
  {
    slug: "automacao",
    title: "Automação",
    description:
      "Integramos sistemas e processos para reduzir tarefas manuais e criar operações mais eficientes.",
    items: ["Workflows", "Integrações", "APIs", "Inteligência Artificial"],
    cta: "Conhecer automações",
    icon: "workflow",
  },
  {
    slug: "automacao-industrial",
    title: "Automação Industrial",
    description:
      "Software, dados e inteligência conectados ao ambiente físico.",
    items: [
      "Visão computacional",
      "Machine Vision",
      "Integração com equipamentos",
      "Monitoramento",
    ],
    cta: "Conhecer soluções industriais",
    icon: "scan",
  },
] as const;
export type Product = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  features: string[];
  kind: "chat" | "phone";
  problem: string;
  solution: string;
  audience: string[];
  steps: string[];
};
export const products: Product[] = [
  {
    slug: "alyachat",
    name: "AlyaChat",
    headline: "Toda a operação do WhatsApp em um só lugar.",
    description:
      "Plataforma de atendimento empresarial utilizando WhatsApp para centralizar equipes, departamentos, automações e indicadores.",
    features: [
      "Atendimento multiusuário",
      "Departamentos",
      "Chatbot",
      "Automações",
      "Campanhas",
      "Agendamentos",
      "Indicadores",
      "Gestão de conversas",
    ],
    kind: "chat",
    problem: "Quando o atendimento fica espalhado, a operação perde contexto.",
    solution:
      "Organize conversas, distribua atendimentos e conecte as etapas da jornada em uma plataforma própria da Alya.",
    audience: [
      "Equipes comerciais que precisam acompanhar oportunidades.",
      "Operações de suporte com múltiplos atendentes.",
      "Empresas que precisam organizar departamentos e rotinas.",
    ],
    steps: [
      "Estruture equipes e departamentos",
      "Organize os fluxos de atendimento",
      "Acompanhe conversas e indicadores",
    ],
  },
  {
    slug: "telefonia",
    name: "Telefonia",
    headline: "Telefonia empresarial conectada à sua operação.",
    description:
      "Centralize a comunicação de voz com PABX em nuvem, ramais e gestão de chamadas em uma operação integrada.",
    features: [
      "PABX em nuvem",
      "URA",
      "Ramais",
      "Transferências",
      "Gravação de chamadas",
      "Relatórios",
      "Gestão centralizada",
      "Portabilidade",
    ],
    kind: "phone",
    problem: "Uma ligação precisa chegar à equipe certa, com continuidade.",
    solution:
      "Organize a entrada de chamadas, direcione contatos pela URA e dê à equipe uma estrutura centralizada para atender.",
    audience: [
      "Empresas com equipes distribuídas.",
      "Operações que recebem chamadas em vários departamentos.",
      "Equipes que precisam acompanhar e organizar o atendimento por voz.",
    ],
    steps: [
      "Desenhe a estrutura de ramais",
      "Configure o direcionamento da URA",
      "Acompanhe chamadas e relatórios",
    ],
  },
];
export type Case = {
  title: string;
  slug: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  result: string | null;
  image: string | null;
  href: string;
};
export const cases: Case[] = [
  {
    title: "Inspeção industrial inteligente",
    slug: "inspecao-industrial",
    category: "Visão computacional + Software + Automação Industrial",
    description:
      "Comparação de materiais reais com referências digitais para identificar divergências automaticamente.",
    challenge:
      "Verificar materiais com critérios consistentes e manter o contexto de cada inspeção.",
    solution:
      "Conectar captura de imagens, processamento e validação em um fluxo de software.",
    technologies: ["Visão computacional", "Software", "Automação Industrial"],
    result: null,
    image: null,
    href: "/automacao-industrial",
  },
  {
    title: "Digitalização de processos",
    slug: "digitalizacao",
    category: "Software sob demanda",
    description:
      "Sistemas personalizados para substituir processos manuais e centralizar operações.",
    challenge:
      "Reunir informações e regras de negócio dispersas em rotinas manuais.",
    solution:
      "Desenvolver uma plataforma orientada ao processo, com integrações entre as etapas.",
    technologies: ["Software sob demanda", "APIs"],
    result: null,
    image: null,
    href: "/desenvolvimento",
  },
  {
    title: "Comunicação empresarial",
    slug: "comunicacao",
    category: "SaaS + Comunicação",
    description:
      "Centralização de atendimento e telefonia em plataformas para operações empresariais.",
    challenge: "Organizar o atendimento entre pessoas, canais e departamentos.",
    solution:
      "Centralizar conversas e chamadas com fluxos próprios para a operação.",
    technologies: ["SaaS", "Comunicação"],
    result: null,
    image: null,
    href: "/produtos",
  },
];
export const processSteps = [
  ["Descoberta", "Entendemos o problema, a operação e os objetivos."],
  [
    "Arquitetura",
    "Definimos como tecnologia, integrações e dados devem funcionar.",
  ],
  ["Desenvolvimento", "Construímos e validamos a solução."],
  ["Implantação", "Integramos a tecnologia à operação."],
  ["Evolução", "Acompanhamos e evoluímos o produto."],
];
export const technologies = [
  "Backend",
  "Frontend",
  "Cloud",
  "APIs",
  "Bancos de dados",
  "Inteligência Artificial",
  "Automação",
  "Visão computacional",
];
