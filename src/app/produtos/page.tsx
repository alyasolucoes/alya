import { PageHero } from "@/components/page-sections";
import { ProductsSection } from "@/components/sections";
import { CTA } from "@/components/footer";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Produtos Alya",
  "Conheça AlyaChat e Telefonia: produtos Alya para comunicação e operações empresariais.",
  "/produtos",
);
export default function Products() {
  return (
    <>
      <PageHero
        label="Produtos Alya"
        title="Produtos desenvolvidos para operações empresariais."
        description="Tecnologia própria para organizar a comunicação, conectar equipes e dar continuidade aos processos da sua empresa."
        cta="Encontre o produto para sua operação"
      />
      <ProductsSection heading={false} />
      <CTA />
    </>
  );
}
