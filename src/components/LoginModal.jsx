"use client";

import { Button } from "@/components/Button";
import { AnimatePresence, motion } from "framer-motion";
import { LogIn, PawPrint, UserPlus, X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

/**
 * LoginModal - Redesenhado para um padrão Premium.
 * Focado em simplicidade e estética moderna.
 */
export const LoginModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay com Blur Progressivo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-on-background/40 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 400 }}
              className="bg-surface w-full max-w-sm rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden pointer-events-auto relative border border-border/50"
            >
              {/* Botão Fechar (X) Elegante */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2.5 text-on-surface/40 hover:text-brand hover:bg-brand/10 rounded-full transition-all duration-300 cursor-pointer group"
                aria-label="Close modal"
              >
                <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>

              <div className="p-10 pt-16 flex flex-col items-center">
                {/* Ícone de Destaque */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-brand/10 rounded-3xl rotate-12 absolute inset-0 animate-pulse" />
                  <div className="w-20 h-20 bg-brand text-on-brand rounded-3xl flex items-center justify-center relative shadow-lg shadow-brand/20">
                    <PawPrint size={40} strokeWidth={2.5} />
                  </div>
                </div>

                <h2 className="text-3xl font-display font-black text-on-surface mb-3 tracking-tighter text-center">
                  Members Area
                </h2>
                <p className="text-on-surface/50 mb-10 text-center text-sm font-medium px-4 leading-relaxed">
                  Access your dashboard or join our exclusive community today.
                </p>

                <div className="flex flex-col gap-3 w-full">
                  <Link
                    href="https://us.revelationpets.com/newbooking/widget/token/n8wiitttpn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                    onClick={onClose}
                  >
                    <Button
                      wfull
                      className="h-14 gap-3 text-base uppercase tracking-wider font-bold rounded-2xl"
                    >
                      <LogIn size={18} /> Sign In
                    </Button>
                  </Link>

                  <Link href="/application" className="w-full" onClick={onClose}>
                    <Button
                      variant="secondary"
                      wfull
                      className="h-14 gap-3 text-base uppercase tracking-wider font-bold rounded-2xl border-2 border-border hover:border-brand/30 hover:bg-brand/5 text-brand"
                    >
                      <UserPlus size={18} /> Create Account
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Assinatura Visual */}
              <div className="py-6 px-10 bg-background/50 border-t border-border flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-semantic-success animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted">
                  The Dog Club Secure Portal
                </span>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
