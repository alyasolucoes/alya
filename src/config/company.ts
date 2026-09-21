export const company = {
  name: "Alya Soluções",
  legalName: "Alya Soluções em Tecnologia LTDA",
  cnpj: "46.825.533/0001-03",
  url: "https://www.alyasolucoes.com",
  phone: "(62) 3142-6603",
  phoneHref: "tel:+556231426603",
  whatsapp: "https://wa.me/556231426603",
  email: null,
  address: null,
  socials: [],
} as const;
export const whatsappLink = (
  message = "Olá! Gostaria de conversar sobre uma solução para minha empresa.",
) => `${company.whatsapp}?text=${encodeURIComponent(message)}`;
