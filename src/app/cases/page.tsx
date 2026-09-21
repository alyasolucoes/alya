import { PageHero } from "@/components/page-sections";
import { CasesSection } from "@/components/sections";
import { CTA } from "@/components/footer";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Cases e aplicações",
  "Explore aplicações de software sob demanda, comunicação empresarial e inspeção industrial inteligente.",
  "/cases",
);
export default function Cases() {
  return (
    <>
      <PageHero
        label="Cases e aplicações"
        title="Problemas concretos. Possibilidades digitais."
        description="Explore exemplos de aplicação da tecnologia Alya. Esta coleção está preparada para receber cases com clientes e resultados validados."
      />
      <CasesSection full />
      <CTA />
    </>
  );
}
