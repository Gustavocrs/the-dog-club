"use client";

import { Loader2 } from "lucide-react";

/**
 * Componente Button Unificado Systech.
 * Consome variáveis CSS dinâmicas do Design System.
 */
export const Button = ({
  children,
  wfull = false,
  variant = "primary",
  loading = false,
  className = "",
  ...props
}) => {
  const baseClasses = `
    flex items-center justify-center h-12 px-6
    text-base font-semibold rounded-custom shadow-sm
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    cursor-pointer
  `;

  const variantClasses = {
    primary: `
      bg-brand text-on-brand
      hover:bg-brand-hover hover:shadow-md
      focus:ring-brand
    `,
    secondary: `
      bg-surface text-on-surface
      hover:bg-background hover:shadow-md
      focus:ring-border
      border border-border
    `,
    outline: `
      bg-transparent text-brand
      hover:bg-brand/10
      border border-brand
      focus:ring-brand
    `,
    ghost: `
      bg-transparent text-brand
      hover:bg-brand/5
      focus:ring-brand
    `,
  };

  const sizeClasses = wfull ? "w-full" : "w-auto";

  const finalClassName = `
    ${baseClasses}
    ${variantClasses[variant] || variantClasses.primary}
    ${sizeClasses}
    ${className}
  `;

  return (
    <button
      className={finalClassName.trim().replace(/\s+/g, " ")}
      {...props}
      disabled={loading || props.disabled}
    >
      {loading ? <Loader2 className="animate-spin h-5 w-5" /> : children}
    </button>
  );
};

export default Button;
