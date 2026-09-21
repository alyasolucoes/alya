import { Icon } from "./ui";
export function OrbitVisual() {
  return (
    <div
      className="orbit-visual"
      role="img"
      aria-label="Software Alya conectado a APIs, dados, automação e inteligência artificial."
    >
      <div className="orbit-grid" />
      <svg
        className="orbit-network"
        viewBox="0 0 620 520"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="310" cy="260" r="218" />
        <circle cx="310" cy="260" r="176" />
        <circle cx="310" cy="260" r="129" />
        <path d="M310 42V478M92 260H528" />
        <path
          className="orbit-link"
          d="M173 117H208Q245 117 245 167V217M447 142H411Q374 142 374 189V225M166 403H208Q249 403 249 356V305M450 414H412Q373 414 373 357V307"
        />
        <path
          className="orbit-pulse"
          d="M173 117H208Q245 117 245 167V217M447 142H411Q374 142 374 189V225M166 403H208Q249 403 249 356V305M450 414H412Q373 414 373 357V307"
        />
        <g className="orbit-points">
          <circle cx="310" cy="42" r="3" />
          <circle cx="92" cy="260" r="3" />
          <circle cx="528" cy="260" r="3" />
          <circle cx="310" cy="436" r="3" />
        </g>
      </svg>
      <div className="orbit-core">
        <strong>alya</strong>
        <span>SOFTWARE</span>
      </div>
      <div className="orbit-panel orbit-api">
        <Icon name="code" size={31} />
        <strong>APIs</strong>
        <span>Sistemas conectados</span>
      </div>
      <div className="orbit-panel orbit-data">
        <Icon name="database" size={31} />
        <strong>Dados</strong>
        <span>Informação estruturada</span>
      </div>
      <div className="orbit-panel orbit-auto">
        <Icon name="workflow" size={31} />
        <strong>Automação</strong>
        <span>Processos integrados</span>
      </div>
      <div className="orbit-panel orbit-ai">
        <Icon name="sparkles" size={31} />
        <strong>Inteligência</strong>
        <span>IA aplicada à operação</span>
      </div>
    </div>
  );
}
export function ServiceGraphic({ icon }: { icon: string }) {
  return (
    <div className={`service-graphic graphic-${icon}`} aria-hidden="true">
      <svg viewBox="0 0 190 160" fill="none">
        <path d="M18 42H54Q68 42 68 57V79H122V108Q122 122 139 122H174M96 15V56M95 109V150M125 70H160V32" />
        <rect x="12" y="34" width="14" height="14" rx="3" />
        <rect x="154" y="21" width="14" height="14" rx="3" />
        <rect x="165" y="115" width="14" height="14" rx="3" />
      </svg>
      <span className="service-graphic-icon">
        <Icon name={icon} size={44} />
      </span>
    </div>
  );
}
