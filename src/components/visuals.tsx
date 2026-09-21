import {
  ArrowDown,
  ArrowRight,
  Check,
  MessageSquare,
  Phone,
  MoreHorizontal,
} from "lucide-react";
import { Icon } from "./ui";
export function SystemVisual() {
  return (
    <div
      className="system-visual"
      role="img"
      aria-label="Diagrama ilustrativo: APIs e dados conectados ao software Alya, distribuindo automação e inteligência artificial."
    >
      <div className="system-caption">
        <span>ECOSSISTEMA ALYA</span>
        <span>SOFTWARE EM CONEXÃO</span>
      </div>
      <div className="system-canvas">
        <svg
          className="system-lines"
          viewBox="0 0 560 430"
          fill="none"
          aria-hidden="true"
        >
          <path d="M90 116H215Q280 116 280 185M460 116H350Q280 116 280 185M280 240V286Q280 310 240 310H90V343M280 240V343M280 240V286Q280 310 330 310H470V343" />
          <path
            className="moving-line"
            d="M90 116H215Q280 116 280 210V286Q280 310 330 310H470V343"
          />
        </svg>
        <div className="system-node node-api">
          <Icon name="code" />
          <div>
            <strong>APIs</strong>
            <span>Sistemas conectados</span>
          </div>
        </div>
        <div className="system-node node-data">
          <Icon name="database" />
          <div>
            <strong>Dados</strong>
            <span>Informação estruturada</span>
          </div>
        </div>
        <div className="core-node">
          <Icon name="layers" size={32} />
          <strong>
            alya<span>Software</span>
          </strong>
        </div>
        <div className="system-node node-operation">
          <Icon name="blocks" />
          <strong>Operação</strong>
        </div>
        <div className="system-node node-auto">
          <Icon name="workflow" />
          <strong>Automação</strong>
        </div>
        <div className="system-node node-ai">
          <Icon name="sparkles" />
          <strong>Inteligência</strong>
        </div>
        <div className="system-orbit" />
      </div>
      <div className="system-footer">
        <span>Uma arquitetura. Múltiplas possibilidades.</span>
        <ArrowUpRightIcon />
      </div>
    </div>
  );
}
function ArrowUpRightIcon() {
  return <ArrowRight size={16} />;
}
export function FlowDiagram({
  steps,
  dark = false,
}: {
  steps: readonly string[];
  dark?: boolean;
}) {
  return (
    <ol className={`flow-diagram ${dark ? "flow-dark" : ""}`}>
      {steps.map((step, i) => (
        <li key={step}>
          <span className="flow-number">{String(i + 1).padStart(2, "0")}</span>
          <strong>{step}</strong>
          {i < steps.length - 1 && (
            <ArrowRight className="flow-arrow" size={18} aria-hidden="true" />
          )}
        </li>
      ))}
    </ol>
  );
}
export function ChatVisual() {
  return (
    <div className="chat-visual">
      <div className="mockup-top">
        <span>
          <MessageSquare size={16} /> AlyaChat
        </span>
        <span>Interface ilustrativa</span>
      </div>
      <div className="chat-body">
        <aside>
          <span className="mockup-label">CAIXA DE ENTRADA</span>
          <div className="chat-tab active">Atendimentos</div>
          <div className="chat-tab">Departamentos</div>
          <div className="chat-tab">Agendamentos</div>
          <div className="chat-tab">Indicadores</div>
          <div className="team-mark">
            AC<span>Equipe comercial</span>
          </div>
        </aside>
        <div className="conversation">
          <div className="conversation-head">
            <div className="avatar">C</div>
            <div>
              <strong>Conversa de exemplo</strong>
              <span>Comercial · Em atendimento</span>
            </div>
            <MoreHorizontal size={17} />
          </div>
          <div className="messages">
            <span className="day-label">Hoje</span>
            <div className="bubble incoming">
              Olá! Gostaria de conhecer as soluções da Alya.
            </div>
            <div className="bubble outgoing">
              Olá! Vamos entender o que sua operação precisa?
              <Check size={12} />
            </div>
            <div className="bubble incoming">
              Precisamos centralizar o atendimento da nossa equipe.
            </div>
            <div className="assigned">Conversa direcionada ao Comercial</div>
          </div>
          <div className="message-field">
            Sua próxima conversa começa aqui.
            <MessageSquare size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
export function PhoneVisual() {
  return (
    <div className="phone-visual">
      <div className="mockup-top">
        <span>
          <Phone size={16} /> Telefonia Alya
        </span>
        <span>Fluxo ilustrativo</span>
      </div>
      <div className="call-flow">
        <div className="call-entry">
          <Phone size={21} />
          <strong>Entrada de ligação</strong>
        </div>
        <ArrowDown className="call-arrow" />
        <div className="call-ura">
          <Icon name="workflow" />
          <div>
            <strong>URA</strong>
            <span>Direcionamento inteligente</span>
          </div>
        </div>
        <div className="call-branches" aria-hidden="true" />
        <div className="departments">
          {["Comercial", "Suporte", "Financeiro"].map((item) => (
            <div key={item}>
              <Phone size={17} />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <p>Uma operação de voz. Equipes conectadas.</p>
      </div>
    </div>
  );
}
export function VisionVisual() {
  return (
    <div className="vision-visual">
      <div className="mockup-top">
        <span>
          <Icon name="scan" size={17} /> Visão computacional
        </span>
        <span>Processo ilustrativo</span>
      </div>
      <div className="vision-body">
        <div className="scan-area">
          <div className="scan-corner tl" />
          <div className="scan-corner tr" />
          <div className="scan-corner bl" />
          <div className="scan-corner br" />
          <Icon name="scan" size={74} />
          <div className="scan-laser" />
          <span>Referência → Captura → Comparação</span>
        </div>
        <div className="vision-results">
          <span>PIPELINE DE INSPEÇÃO</span>
          {[
            "Captura de imagem",
            "Processamento",
            "Análise por IA",
            "Validação",
          ].map((item, i) => (
            <div key={item}>
              <span>0{i + 1}</span>
              {item}
              <Check size={14} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
