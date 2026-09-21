import Link from "next/link";
import type { ReactNode } from "react";
import { Button, Icon, SectionHeading } from "./ui";
export function PageHero({
  label,
  title,
  description,
  children,
  cta = "Fale sobre seu projeto",
}: {
  label: string;
  title: string;
  description: string;
  children?: ReactNode;
  cta?: string;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumbs">
          <Link href="/">Início</Link>
          <span>/</span>
          <span>{label}</span>
        </div>
        <div className={children ? "split" : ""}>
          <div>
            <span className="eyebrow">{label}</span>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="actions">
              <Button href="/contato">{cta}</Button>
            </div>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
export function Capabilities({
  title,
  label,
  items,
}: {
  title: string;
  label?: string;
  items: { title: string; text: string; icon?: string }[];
}) {
  return (
    <section className="section">
      <div className="container" data-reveal>
        <SectionHeading title={title} label={label} />
        <div className="capability-grid">
          {items.map((item) => (
            <article key={item.title}>
              <Icon name={item.icon || "code"} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
