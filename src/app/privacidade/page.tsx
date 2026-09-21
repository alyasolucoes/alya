import { company, whatsappLink } from "@/config/company";
import { pageMetadata } from "@/lib/seo";
export const metadata = {
  ...pageMetadata(
    "Política de Privacidade",
    "Informações sobre os dados utilizados no contato com a Alya Soluções.",
    "/privacidade",
  ),
  robots: { index: false, follow: true },
};
export default function Privacy() {
  return (
    <section className="section">
      <div className="container editorial-copy">
        <h1>Política de Privacidade</h1>
        <div className="legal-note">
          Versão básica para futura revisão jurídica. Este texto deve ser
          validado e atualizado antes da publicação definitiva.
        </div>
        <h2>Dados de contato</h2>
        <p>
          O formulário solicita nome, empresa, e-mail, telefone, interesse e uma
          descrição do projeto. Esses dados destinam-se ao atendimento da sua
          solicitação por {company.legalName}.
        </p>
        <h2>Envio e uso</h2>
        <p>
          O formulário informa quando o envio está indisponível. Quando o
          serviço estiver configurado, os dados serão encaminhados ao canal de
          atendimento da Alya. Evite incluir informações sensíveis ou
          confidenciais na mensagem inicial.
        </p>
        <h2>Cookies e medição</h2>
        <p>
          Esta versão do site não inclui scripts de analytics, pixels de
          publicidade ou cookies de rastreamento. Qualquer mudança deverá ser
          acompanhada da atualização desta política e dos mecanismos de
          consentimento aplicáveis.
        </p>
        <h2>Contato sobre dados</h2>
        <p>
          Para dúvidas ou solicitações relacionadas aos seus dados, entre em
          contato pelo{" "}
          <a
            href={whatsappLink(
              "Olá! Gostaria de tratar de uma solicitação sobre meus dados.",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp da Alya: {company.phone}
          </a>
          .
        </p>
        <h2>Itens para revisão</h2>
        <p>
          Os prazos de retenção, fornecedores de tratamento e procedimentos de
          atendimento deverão ser documentados conforme a operação e as
          integrações adotadas.
        </p>
      </div>
    </section>
  );
}
