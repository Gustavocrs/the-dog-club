"use client";

import React, { useState } from "react";
import { Palette, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const palettes = [
  {
    id: "ocean",
    name: "Ocean (Brand)",
    colors: {
      brand: "#0077B6",
      brandHover: "#005F92",
      background: "#F8FAFC",
      surface: "#FFFFFF",
      onSurface: "#0F172A",
      onBackground: "#0F172A"
    }
  },
  {
    id: "original",
    name: "Original Wix",
    colors: {
      brand: "#38B6FF",
      brandHover: "#2D9CDB",
      background: "#FFFFFF",
      surface: "#F3F3F3",
      onSurface: "#333333",
      onBackground: "#333333"
    }
  },
  {
    id: "nature",
    name: "Nature & Earth",
    colors: {
      brand: "#2D6A4F",
      brandHover: "#1B4332",
      background: "#FDFBF7",
      surface: "#FFFFFF",
      onSurface: "#2D332F",
      onBackground: "#2D332F"
    }
  },
  {
    id: "sunset",
    name: "Sunset Play",
    colors: {
      brand: "#FB8500",
      brandHover: "#E36414",
      background: "#FFF8F2",
      surface: "#FFFFFF",
      onSurface: "#212529",
      onBackground: "#212529"
    }
  }
];

export const ColorPaletteSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePalette, setActivePalette] = useState("ocean");

  const applyPalette = (palette) => {
    const root = document.documentElement;
    root.style.setProperty("--color-brand", palette.colors.brand);
    root.style.setProperty("--color-brand-hover", palette.colors.brandHover);
    root.style.setProperty("--color-background", palette.colors.background);
    root.style.setProperty("--color-surface", palette.colors.surface);
    root.style.setProperty("--color-on-surface", palette.colors.onSurface);
    root.style.setProperty("--color-on-background", palette.colors.onBackground);
    
    // Injetando cores fixas de contraste para garantir legibilidade
    root.style.setProperty("--color-on-brand", "#FFFFFF");
    root.style.setProperty("--color-muted", "#64748B");
    root.style.setProperty("--color-border", "rgba(0,0,0,0.1)");
    
    setActivePalette(palette.id);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[200]">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-slate-900 text-white shadow-2xl rounded-full flex items-center justify-center hover:scale-110 transition-all cursor-pointer group"
      >
        <Palette size={24} className={isOpen ? "rotate-180" : ""} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-18 right-0 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-slate-200 rounded-2xl p-4 min-w-[220px]"
          >
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 px-2 text-center text-slate-900">Global Concept Theme</p>
            <div className="flex flex-col gap-2">
              {palettes.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => applyPalette(p)}
                  className={`flex items-center justify-between p-3 rounded-xl transition-all cursor-pointer ${activePalette === p.id ? "bg-slate-100 text-slate-900" : "hover:bg-slate-50 text-slate-500"}`}
                >
                  <div className="flex items-center gap-3 text-slate-900">
                    <div 
                      className="w-5 h-5 rounded-full border border-black/5 shadow-sm" 
                      style={{ backgroundColor: p.colors.brand }}
                    />
                    <span className="text-xs font-black uppercase tracking-tight">{p.name}</span>
                  </div>
                  {activePalette === p.id && <Check size={14} strokeWidth={3} className="text-blue-600" />}
                </button>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100">
               <p className="text-[9px] text-slate-300 font-bold uppercase text-center leading-tight px-2">
                  Update CSS variables across all concept versions
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColorPaletteSwitcher;