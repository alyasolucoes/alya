"use client";
import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { interests, validateContact } from "@/lib/contact";
import { whatsappLink } from "@/config/company";
export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const busy = useRef(false);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy.current) return;
    const form = e.currentTarget;
    const input = Object.fromEntries(new FormData(form));
    const result = validateContact(input);
    if (result.error) {
      setStatus("error");
      setMessage(result.error);
      return;
    }
    busy.current = true;
    setStatus("loading");
    setMessage("Abrindo o WhatsApp…");
    const whatsappMessage = [
      `Olá! Meu nome é ${input.name}.`,
      `Empresa: ${input.company}.`,
      `Interesse: ${input.interest}.`,
      `Telefone: ${input.phone}.`,
      `E-mail: ${input.email}.`,
      `Projeto: ${input.message}`,
    ].join("\n");
    window.open(
      whatsappLink(whatsappMessage),
      "_blank",
      "noopener,noreferrer",
    );
    setStatus("success");
    setMessage("O WhatsApp foi aberto com os dados do seu projeto.");
    form.reset();
    busy.current = false;
  }
  return (
    <form
      className="contact-form"
      onSubmit={submit}
      aria-busy={status === "loading"}
    >
      <div className="form-grid">
        <label className="field">
          Nome
          <input
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
            placeholder="Seu nome"
          />
        </label>
        <label className="field">
          Empresa
          <input
            name="company"
            autoComplete="organization"
            required
            minLength={2}
            maxLength={150}
            placeholder="Nome da empresa"
          />
        </label>
        <label className="field">
          E-mail
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="voce@empresa.com.br"
          />
        </label>
        <label className="field">
          Telefone
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            required
            minLength={10}
            maxLength={30}
            placeholder="(00) 00000-0000"
          />
        </label>
        <label className="field full">
          Como podemos ajudar?
          <select name="interest" required defaultValue="">
            <option value="" disabled>
              Selecione uma solução
            </option>
            {interests.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </label>
        <label className="field full">
          Conte um pouco sobre seu projeto
          <textarea
            name="message"
            required
            minLength={10}
            maxLength={5000}
            placeholder="O que sua empresa precisa melhorar?"
          />
        </label>
      </div>
      <label className="honeypot" aria-hidden="true">
        Não preencha este campo
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <p className="form-note">
        Usaremos os dados informados para responder à sua solicitação. Consulte
        a <Link href="/privacidade">Política de Privacidade</Link>.
      </p>
      <button
        className="button button-primary"
        disabled={status === "loading"}
        type="submit"
      >
        {status === "loading" ? "Enviando…" : "Enviar mensagem"}
        {status === "loading" ? (
          <LoaderCircle size={17} />
        ) : (
          <ArrowUpRight size={17} />
        )}
      </button>
      <div aria-live="polite" aria-atomic="true">
        {status !== "idle" && (
          <div className={`form-status ${status}`}>
            <p>{message}</p>
            {status === "error" && (
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Continuar pelo WhatsApp
              </a>
            )}
          </div>
        )}
      </div>
    </form>
  );
}
