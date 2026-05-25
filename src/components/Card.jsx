/**
 * Componente Card Unificado Systech.
 */
export const Card = ({ children, title, icon, onClick, disabled, className = "" }) => {
  const baseClasses = `
    bg-surface 
    border border-border 
    rounded-card 
    shadow-sm transition-all duration-300 
    p-6 flex flex-col gap-4
    ${disabled ? "opacity-60 grayscale cursor-not-allowed" : onClick ? "cursor-pointer hover:shadow-md hover:scale-[1.01]" : ""}
    ${className}
  `;

  return (
    <div
      className={baseClasses.trim().replace(/\s+/g, " ")}
      onClick={!disabled ? onClick : undefined}
      onKeyDown={(e) => {
        if (!disabled && onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick();
        }
      }}
      role={onClick ? "button" : undefined}
      tabIndex={onClick && !disabled ? 0 : undefined}
    >
      {" "}
      {(icon || title) && (
        <div className="flex items-center gap-4">
          {icon && <div className="text-3xl text-brand">{icon}</div>}
          {title && <h3 className="text-xl font-bold text-on-surface leading-tight">{title}</h3>}
        </div>
      )}
      <div className="text-on-surface/80 leading-relaxed">{children}</div>
    </div>
  );
};

export default Card;
