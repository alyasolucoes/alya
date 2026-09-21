import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui";
import { company, whatsappLink } from "@/config/company";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Contato",
  "Vamos conversar sobre tecnologia. Conte o que sua empresa precisa melhorar e fale com a Alya Soluções.",
  "/contato",
);
export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contato</span>
          <h1>Vamos conversar sobre tecnologia.</h1>
          <p>Conte o que sua empresa precisa melhorar.</p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <h2>O seu processo é o ponto de partida.</h2>
            <p>
              Compartilhe o desafio da sua operação. Vamos entender como
              software, produtos digitais ou automação podem fazer parte da
              solução.
            </p>
            <Button href={whatsappLink()} external>
              Conversar pelo WhatsApp
            </Button>
            <div className="contact-detail">
              <span>Telefone</span>
              <a href={company.phoneHref}>{company.phone}</a>
            </div>
            <div className="contact-detail">
              <span>Alya Soluções</span>
              <p>
                {company.legalName}
                <br />
                CNPJ {company.cnpj}
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
