import {
  Hero,
  Positioning,
  Solutions,
  CustomDevelopment,
  ProductsSection,
  AutomationSection,
  IndustrialSection,
  CasesSection,
  ProcessSection,
  CompanySection,
} from "@/components/sections";
import { CTA } from "@/components/footer";
import { pageMetadata } from "@/lib/seo";
export const metadata = {
  ...pageMetadata(
    "Software, SaaS e Automação",
    "Desenvolvimento de software sob demanda, produtos SaaS, integrações, inteligência artificial e automação para operações empresariais.",
    "/",
  ),
  title: { absolute: "Alya Soluções | Software, SaaS e Automação" },
};
export default function Home() {
  return (
    <>
      <Hero />
      <Positioning />
      <Solutions />
      <CustomDevelopment />
      <ProductsSection />
      <AutomationSection />
      <IndustrialSection />
      <CasesSection />
      <ProcessSection />
      <CompanySection />
      <CTA />
    </>
  );
}
