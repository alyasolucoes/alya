"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Plus, X } from "lucide-react";
const menus = [
  {
    label: "Produtos",
    links: [
      ["AlyaChat", "/produtos/alyachat"],
      ["Telefonia", "/produtos/telefonia"],
      ["Ver todos os produtos", "/produtos"],
    ],
  },
  { label: "Desenvolvimento", href: "/desenvolvimento" },
  {
    label: "Automação",
    links: [
      ["Automação de processos", "/automacao"],
      ["Automação industrial", "/automacao-industrial"],
    ],
  },
  { label: "Cases", href: "/cases" },
  { label: "Empresa", href: "/empresa" },
];
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);
  useEffect(() => {
    const d = dialog.current;
    if (open) {
      d?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      d?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const close = () => {
    setOpen(false);
    toggle.current?.focus();
  };
  return (
    <header
      className={`header ${scrolled ? "scrolled" : ""} ${path === "/" ? "header-home" : ""}`}
    >
      <div className="container header-inner">
        <Link href="/" aria-label="Alya Soluções — início" className="brand">
          <Image
            className="brand-dark-img"
            src="/alya-dark.png"
            alt="Alya Soluções"
            width={190}
            height={122}
            priority
          />
          <Image
            className="brand-white-img"
            src="/alya-white.png"
            alt=""
            width={140}
            height={49}
            priority
          />
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {menus.map((menu) =>
            menu.links ? (
              <details
                className="nav-dropdown"
                key={menu.label}
                onKeyDown={(e) => {
                  if (e.key === "Escape") e.currentTarget.open = false;
                }}
              >
                <summary>
                  {menu.label}
                  <ChevronDown size={13} />
                </summary>
                <div>
                  {menu.links.map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={(e) =>
                        e.currentTarget
                          .closest("details")
                          ?.removeAttribute("open")
                      }
                    >
                      {label}
                      <ArrowUpRight size={15} />
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link
                key={menu.href}
                href={menu.href!}
                aria-current={path === menu.href ? "page" : undefined}
              >
                {menu.label}
              </Link>
            ),
          )}
        </nav>
        <Link href="/contato" className="header-cta">
          Falar com especialista
          <ArrowUpRight size={16} />
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label="Abrir menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          Menu
          <Plus size={20} />
        </button>
      </div>
      <dialog
        ref={dialog}
        id="mobile-menu"
        className="mobile-menu"
        onCancel={() => setOpen(false)}
      >
        <div className="mobile-top">
          <span>Explore a Alya</span>
          <button onClick={close} aria-label="Fechar menu">
            <X />
          </button>
        </div>
        <nav aria-label="Navegação móvel">
          <Link href="/" onClick={close}>
            Início
          </Link>
          {menus.map((menu) => (
            <div key={menu.label}>
              {menu.links ? (
                <>
                  <span>{menu.label}</span>
                  {menu.links.map(([label, href]) => (
                    <Link key={href} href={href} onClick={close}>
                      {label}
                      <ArrowUpRight size={18} />
                    </Link>
                  ))}
                </>
              ) : (
                <Link href={menu.href!} onClick={close}>
                  {menu.label}
                  <ArrowUpRight size={18} />
                </Link>
              )}
            </div>
          ))}
          <Link href="/contato" className="mobile-contact" onClick={close}>
            Falar com especialista
            <ArrowUpRight />
          </Link>
        </nav>
      </dialog>
    </header>
  );
}
