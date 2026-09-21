import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { RevealObserver } from "@/components/reveal";
import { company } from "@/config/company";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";
import "./redesign.css";
export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "Alya Soluções | Software, SaaS e Automação",
    template: "%s | Alya Soluções",
  },
  description:
    "Desenvolvimento de software sob demanda, produtos SaaS, integrações, inteligência artificial e automação para operações empresariais.",
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <RevealObserver />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: company.name,
              legalName: company.legalName,
              url: company.url,
              telephone: company.phone,
              logo: company.url + "/alya-dark.png",
            }),
          }}
        />
      </body>
    </html>
  );
}
