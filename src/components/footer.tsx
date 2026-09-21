import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { company, whatsappLink } from "@/config/company";
import { Button } from "./ui";
export function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-inner" data-reveal>
        <div>
          <span className="eyebrow">
            O próximo passo começa com uma conversa
          </span>
          <h2>
            Existe um processo na sua empresa que a tecnologia poderia fazer
            melhor?
          </h2>
          <p>
            Vamos entender sua operação e descobrir como software, integrações
            ou automação podem transformar esse processo.
          </p>
          <div className="actions">
            <Button href={whatsappLink()} external>
              Falar com a Alya
            </Button>
            <Button href="/contato" variant="secondary">
              Solicitar uma conversa
            </Button>
          </div>
        </div>
        <div className="cta-mark" aria-hidden="true">
          <ArrowUpRight size={170} strokeWidth={1} />
        </div>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="Alya Soluções — início">
              <Image
                src="/alya-white.png"
                alt="Alya Soluções"
                width={174}
                height={61}
              />
            </Link>
            <p>
              Software para operações
              <br />
              que precisam ir além.
            </p>
          </div>
          <div>
            <h3>Soluções</h3>
            <Link href="/desenvolvimento">Software sob demanda</Link>
            <Link href="/produtos">Produtos</Link>
            <Link href="/automacao">Automação</Link>
            <Link href="/automacao-industrial">Automação Industrial</Link>
          </div>
          <div>
            <h3>Produtos</h3>
            <Link href="/produtos/alyachat">AlyaChat</Link>
            <Link href="/produtos/telefonia">Telefonia</Link>
          </div>
          <div>
            <h3>Empresa</h3>
            <Link href="/empresa">Sobre</Link>
            <Link href="/cases">Cases</Link>
            <Link href="/contato">Contato</Link>
          </div>
          <div>
            <h3>Vamos conversar</h3>
            <Link href={company.phoneHref}>{company.phone}</Link>
            <Link
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp <ArrowUpRight size={14} />
            </Link>
            <Link href={company.url}>www.alyasolucoes.com</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {company.name}
            <br />
            <small>
              {company.legalName} · CNPJ {company.cnpj}
            </small>
          </span>
          <div>
            <Link href="/privacidade">Política de Privacidade</Link>
            <Link href="/termos">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
