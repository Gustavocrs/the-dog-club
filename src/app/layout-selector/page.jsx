"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Sparkles, Award, ArrowRight, Monitor, Smartphone, TreePine, History } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";

/**
 * Layout Selector - Página Principal de Apresentação.
 * Foco: Cards compactos e Design Profissional.
 */
const LayoutSelector = () => {
  const layouts = [
    {
      id: "v1",
      title: "Playful & Vibrant",
      path: "/home-v1",
      icon: <Sparkles className="text-[#FF7A00]" size={20} />,
      desc: "High-energy, organic shapes and bubbly animations. Perfect for a friendly club vibe.",
      color: "bg-[#FF7A00]/5",
      tag: "DYNAMIC"
    },
    {
      id: "v2",
      title: "Premium & Minimalist",
      path: "/home-v2",
      icon: <Award className="text-[#D4AF37]" size={20} />,
      desc: "Sophisticated typography and clean lines. Emphasises exclusivity and bespoke care.",
      color: "bg-[#D4AF37]/5",
      tag: "ELITE"
    },
    {
      id: "v3",
      title: "Trust & Safety",
      path: "/home-v3",
      icon: <ShieldCheck className="text-[#0A2540]" size={20} />,
      desc: "Structured, professional and credible. Focussed on protocols and Auckland standards.",
      color: "bg-[#0A2540]/5",
      tag: "OFFICIAL"
    },
    {
      id: "v4",
      title: "The Original Wix",
      path: "/home-v4",
      icon: <History className="text-[#38B6FF]" size={20} />,
      desc: "A faithful reconstruction of the classic website design and original brand identity.",
      color: "bg-[#38B6FF]/5",
      tag: "AUTHENTIC"
    },
    {
      id: "v5",
      title: "Nature & Outdoors",
      path: "/home-v5",
      icon: <TreePine className="text-[#2D6A4F]" size={20} />,
      desc: "Earthy tones and adventurous layout. Highlights freedom and spacious play areas.",
      color: "bg-[#2D6A4F]/5",
      tag: "FRESH"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Presentation Header */}
      <header className="py-16 border-b border-slate-200 bg-white">
        <div className="container-pad text-center">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 shadow-lg">
              DC
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              The Dog Club <span className="text-slate-300">/</span> Concept Review
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto font-bold uppercase tracking-[0.2em]">
              Strategic Digital Identity Presentation
            </p>
          </motion.div>
        </div>
      </header>

      {/* Concept Grid */}
      <main className="py-20 container-pad">
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {layouts.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] group"
            >
              <div className="h-full border border-slate-200 rounded-2xl p-8 flex flex-col hover:border-blue-600 hover:shadow-2xl transition-all duration-300 bg-white relative overflow-hidden">
                <div className={`absolute top-0 right-0 px-4 py-1.5 ${item.color} text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-bl-xl`}>
                   {item.tag}
                </div>

                <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-black mb-3 group-hover:text-blue-600 transition-colors tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-1 font-medium italic">
                  "{item.desc}"
                </p>

                <Link href={item.path}>
                  <Button wfull className="h-12 gap-2 text-xs font-black uppercase tracking-widest rounded-xl bg-slate-900 hover:bg-blue-600 text-white border-none shadow-lg">
                    Launch Concept <ArrowRight size={14} />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer Presentation */}
      <footer className="py-12 bg-white border-t border-slate-200">
        <div className="container-pad flex flex-col md:flex-row items-center justify-between gap-6 opacity-30">
          <div className="flex items-center gap-10">
             <div className="flex items-center gap-2">
                <Monitor size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Cross-Platform</span>
             </div>
             <div className="flex items-center gap-2 text-blue-600 opacity-100">
                <Smartphone size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Mobile First</span>
             </div>
          </div>
          <Link href="https://systechdev.com.br" target="_blank" className="text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors">
            Systech Creative Framework 2026
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default LayoutSelector;