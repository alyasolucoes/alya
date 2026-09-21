import type { Metadata } from "next";
import { company } from "@/config/company";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Alya Soluções`,
      description,
      url: company.url + path,
      type: "website",
      locale: "pt_BR",
      siteName: company.name,
    },
    twitter: { card: "summary", title, description },
  };
}
