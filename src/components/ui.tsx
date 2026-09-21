import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  Layers3,
  Workflow,
  ScanLine,
  MessageSquare,
  Phone,
  Cpu,
  Database,
  Network,
  Sparkles,
  Camera,
  Check,
  Blocks,
} from "lucide-react";
import type { ReactNode } from "react";
const icons = {
  code: Code2,
  layers: Layers3,
  workflow: Workflow,
  scan: ScanLine,
  chat: MessageSquare,
  phone: Phone,
  cpu: Cpu,
  database: Database,
  network: Network,
  sparkles: Sparkles,
  camera: Camera,
  blocks: Blocks,
};
export function Icon({ name, size = 24 }: { name: string; size?: number }) {
  const Component = icons[name as keyof typeof icons] || Code2;
  return <Component size={size} strokeWidth={1.5} aria-hidden="true" />;
}
export function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
}) {
  return (
    <Link
      className={`button button-${variant}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {variant === "ghost" ? (
        <ArrowRight size={17} aria-hidden="true" />
      ) : (
        <ArrowUpRight size={17} aria-hidden="true" />
      )}
    </Link>
  );
}
export function SectionHeading({
  label,
  title,
  text,
}: {
  label?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      {label && <span className="eyebrow">{label}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
export function FeatureList({ items }: { items: readonly string[] }) {
  return (
    <ul className="feature-list">
      {items.map((item) => (
        <li key={item}>
          <Check size={16} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}
