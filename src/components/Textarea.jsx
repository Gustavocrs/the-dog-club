"use client";

/**
 * Componente Textarea Simplificado Systech.
 */
export const Textarea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  disabled = false,
  required = false,
  rows = 4,
  className = "",
  ...props
}) => {
  const baseClasses = `
    block w-full px-4 py-3
    border border-border rounded-custom
    bg-surface text-on-surface
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand
    disabled:bg-background disabled:text-muted disabled:cursor-not-allowed
    placeholder:text-muted/60
    resize-none
  `;

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={name} className="block mb-1.5 text-sm font-semibold text-on-surface">
          {label}
          {required && <span className="text-semantic-error"> *</span>}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className={baseClasses}
        {...props}
      />
    </div>
  );
};

export default Textarea;
