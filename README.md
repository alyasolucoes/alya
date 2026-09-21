# Alya Soluções — site institucional

Site completo em português do Brasil, com posicionamento em software sob demanda, produtos SaaS, automação de processos e automação industrial.

## Executar

Requer Node.js 20.9 ou superior e npm.

```bash
npm install
npm run dev
```

Abra http://localhost:3000. Para produção:

```bash
npm run lint
npm run build
npm start
```

`npm run typecheck` permite executar a verificação de tipos separadamente. As versões estão fixadas no `package.json` e no `package-lock.json`; em integração contínua, use `npm ci`.

## Stack

- Next.js 16.3.5, App Router e TypeScript.
- React, Tailwind CSS 4 e design system próprio em CSS.
- Inter hospedada localmente via `@fontsource/inter`, sem requisições a servidores de fontes.
- Lucide para ícones.
- CSS e Intersection Observer para movimento leve, sem dependência de animação adicional.
- Componentes de servidor por padrão. JavaScript de cliente restrito ao menu, observador de entrada e formulário.

## Páginas

| URL | Conteúdo |
| --- | --- |
| `/` | Home completa, da apresentação do software até automação industrial, processo e empresa |
| `/desenvolvimento` | Sistemas, plataformas, APIs, arquitetura, integrações e processo |
| `/produtos` | Catálogo Alya |
| `/produtos/alyachat` | Produto, desafio, solução, oito recursos, público e interface ilustrativa |
| `/produtos/telefonia` | PABX, URA, ramais, oito recursos e fluxo ilustrativo de chamadas |
| `/automacao` | Workflows, APIs, eventos, dados e IA aplicada |
| `/automacao-industrial` | Captura, sensores, Machine Vision, análise, integração e rastreabilidade |
| `/cases` | Exemplos de aplicação, explicitamente identificados; sem clientes ou resultados inventados |
| `/empresa` | Posicionamento, visão e princípios de engenharia |
| `/contato` | Formulário validado, telefone e WhatsApp |
| `/privacidade` | Texto básico identificado para revisão jurídica, com `noindex` |
| `/termos` | Texto básico identificado para revisão jurídica, com `noindex` |
| Qualquer URL inexistente | 404 com identidade Alya |

O projeto também fornece `/sitemap.xml`, `/robots.txt`, favicon e `/api/contato`.

## Organização

```text
src/
  app/                 Rotas, metadata, estilos globais e API de contato
  components/
    header.tsx         Navegação desktop e diálogo móvel acessível
    footer.tsx         Footer e CTA compartilhado
    ui.tsx             Botões primary/secondary/ghost, ícones e listas
    sections.tsx       Seções reutilizáveis da home e páginas internas
    page-sections.tsx  Heroes e capacidades das páginas internas
    visuals.tsx        Diagramas e interfaces ilustrativas
    reveal.tsx         Intersection Observer
    contact-form.tsx   Formulário e seus estados
  config/
    company.ts         Dados reais e links da Alya
    analytics.ts       Configuração reservada, desativada
  data/content.ts      Serviços, produtos, cases, processo e tecnologias
  lib/
    contact.ts         Contrato e validação compartilhada do formulário
    seo.ts             Metadata por página
public/                Logos fornecidos e favicon
```

## Alterar a empresa

Edite `src/config/company.ts`. Nome, razão social, CNPJ, site, telefone e WhatsApp estão centralizados. E-mail e endereço não foram inventados. `whatsappLink()` monta os links de conversa a partir da configuração.

## Adicionar produtos

Inclua um objeto em `products`, em `src/data/content.ts`. A rota `src/app/produtos/[slug]/page.tsx` gera as páginas e a metadata a partir desse catálogo. O sitemap também acompanha o catálogo automaticamente.

O campo `kind` seleciona a representação de comunicação atual (`chat` ou `phone`). Para um produto de outra categoria, adicione sua representação em `src/components/visuals.tsx` e amplie o tipo `Product` e a seleção visual. Adicione o produto ao menu em `src/components/header.tsx` e ao footer quando necessário.

Screenshots reais podem substituir os componentes `ChatVisual` e `PhoneVisual`, preservando a moldura e a separação entre conteúdo e apresentação.

## Adicionar cases

Edite `cases`, em `src/data/content.ts`. O tipo já contém `title`, `slug`, `category`, `description`, `challenge`, `solution`, `technologies`, `result`, `image` e o link da solução relacionada.

Os exemplos atuais usam `result: null` e `image: null`. Somente preencha clientes, resultados e imagens após validação. Para publicar resultados ou imagens reais, amplie `CasesSection` para renderizar esses campos e atualize a identificação de exemplo. Não há páginas individuais de case nesta versão, pois não foram solicitadas e não há material validado para elas.

## Formulário: integração necessária

Nenhum e-mail é enviado e nenhum sucesso é simulado quando não há integração configurada. A API retorna HTTP 503 e a interface oferece WhatsApp. Os dados não são salvos no navegador ou em banco de dados desta aplicação.

1. Copie `.env.example` para `.env.local`.
2. Configure `CONTACT_WEBHOOK_URL` com um endpoint HTTPS real de atendimento ou envio de e-mail.
3. Se o endpoint exigir autenticação, configure `CONTACT_WEBHOOK_TOKEN`.
4. Configure as mesmas variáveis no ambiente de hospedagem e reinicie a aplicação.

O endpoint recebe um POST JSON:

```json
{
  "name": "Nome",
  "company": "Empresa",
  "email": "contato@exemplo.com",
  "phone": "Telefone com DDD",
  "interest": "Software sob demanda",
  "message": "Descrição do projeto"
}
```

O token, quando presente, é enviado apenas pelo servidor, como `Authorization: Bearer ...`. A API considera um status 2xx como aceitação pelo serviço; a entrega final depende do provedor. Erros, timeout e ausência de configuração têm respostas distintas. Há validação no cliente e no servidor, limite de tamanho do corpo, honeypot e checagem de origem do navegador. Para exposição pública, configure também proteção contra abuso/limites de requisição no provedor de hospedagem ou gateway do endpoint.

O deploy precisa suportar runtime Node.js para `/api/contato`; não use exportação puramente estática para esta implementação. Nenhuma credencial foi incluída. Nenhuma mensagem foi enviada a terceiros durante os testes.

## Animações e acessibilidade

- Entrada sequencial do hero e CTAs.
- Reveal único por seção com Intersection Observer.
- Entrada escalonada nos fluxos e etapas.
- Pulsos discretos em conexões, fluxo de chamada e linha de inspeção.
- Hover, active e foco visível nos controles.
- Header sticky com blur ao rolar.
- Menu móvel com diálogo nativo: contenção de foco, Escape e retorno ao botão.
- `prefers-reduced-motion` desativa animações e rolagem suave.
- Link para pular ao conteúdo, labels reais, um H1 por página e feedback `aria-live` no formulário.

## SEO e analytics

Cada página tem título, descrição, canonical e Open Graph. Organização em JSON-LD usa apenas dados fornecidos. O domínio canônico está em `company.url`. Altere-o se a implantação definitiva usar outro endereço.

Open Graph está preparado com metadados de texto; não foi criada uma imagem social não solicitada. Os únicos assets de marca usados são os logos fornecidos e o favicon.

Nenhum analytics, pixel ou banner de cookies é carregado. O arquivo `src/config/analytics.ts` reserva a configuração; a integração futura deverá incluir o mecanismo real de consentimento antes de carregar provedores.

## Validação da entrega

- `npm install`: concluído; auditoria de dependências sem vulnerabilidades reportadas.
- `npm run lint`: sem erros e sem warnings.
- `npm run build`: concluído, incluindo TypeScript e geração de páginas estáticas.
- Revisão em Chrome controlado por Playwright, pois o navegador integrado falhou ao inicializar.
- 12 páginas em 9 larguras: 320, 375, 390, 430, 768, 1024, 1280, 1440 e 1920 px.
- Rotas, H1, canonical, descrições, links internos, carregamento de logos e ausência de overflow horizontal verificados.
- Navegação móvel, Escape, retorno de foco, formulário inválido, loading, indisponibilidade real e sucesso com resposta simulada de teste verificados.
- 404 genérica, produto inexistente, sitemap, robots e rejeição de payload inválido verificados.
- Auditoria automática axe-core nas páginas: sem violações WCAG A/AA detectadas após correções de contraste. Auditoria automática não substitui avaliação manual completa de acessibilidade.
- Segunda revisão corrigiu a validação de origem local do formulário e a sobreposição de módulos no hero móvel.

O serviço externo de envio não foi testado porque não foi fornecido. A política de privacidade e os termos aguardam revisão jurídica, conforme solicitado. A publicação na hospedagem e configuração de domínio não foram realizadas.
