export const interests = [
  "Software sob demanda",
  "AlyaChat",
  "Telefonia",
  "Automação",
  "Automação Industrial",
  "Outro",
] as const;
export type ContactData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  website?: string;
};
export function validateContact(value: unknown): {
  data?: ContactData;
  error?: string;
} {
  if (!value || typeof value !== "object" || Array.isArray(value))
    return { error: "Revise os dados informados." };
  const raw = value as Record<string, unknown>;
  const keys = [
    "name",
    "company",
    "email",
    "phone",
    "interest",
    "message",
  ] as const;
  if (keys.some((k) => typeof raw[k] !== "string"))
    return { error: "Preencha todos os campos obrigatórios." };
  const data = Object.fromEntries(
    keys.map((k) => [k, (raw[k] as string).trim()]),
  ) as ContactData;
  if (typeof raw.website === "string" && raw.website)
    return { error: "Não foi possível processar a solicitação." };
  if (
    data.name.length < 2 ||
    data.name.length > 100 ||
    data.company.length < 2 ||
    data.company.length > 150
  )
    return { error: "Informe seu nome e o nome da empresa." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length > 254)
    return { error: "Informe um e-mail válido." };
  if (
    !/^[+\d\s().-]+$/.test(data.phone) ||
    data.phone.replace(/\D/g, "").length < 10 ||
    data.phone.replace(/\D/g, "").length > 15 ||
    data.phone.length > 30
  )
    return { error: "Informe um telefone válido com DDD." };
  if (!interests.some((i) => i === data.interest))
    return { error: "Selecione como podemos ajudar." };
  if (data.message.length < 10 || data.message.length > 5000)
    return { error: "Descreva seu projeto com 10 a 5.000 caracteres." };
  return { data };
}
