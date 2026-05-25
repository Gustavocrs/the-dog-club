"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Shield, 
  Clock, 
  MapPin, 
  Award, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  ArrowRight,
  ShieldCheck,
  Syringe,
  Eye,
  Sparkles 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { ColorPaletteSwitcher } from "@/components/ColorPaletteSwitcher";

/**
 * HOME V2: "Premium & Minimalist"
 * Refatorada para ser 100% dinâmica via CSS Variables.
 */
const HomeV2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-background min-h-screen font-body text-on-surface selection:bg-brand selection:text-on-brand" style={{"--font-display": "var(--font-playfair)", "--font-body": "var(--font-lato)", "--radius-custom": "0rem"}}>
      <ColorPaletteSwitcher />

      {/* EXCLUSIVE HEADER V2 */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-surface py-4 shadow-sm" : "bg-transparent py-8"}`}>
        <div className="container-pad flex items-center justify-between">
          <Link href="/" className="group">
            <span className="text-xl md:text-2xl font-display font-light uppercase tracking-[0.5em] text-on-surface group-hover:text-brand transition-colors">
              The <span className="font-bold">Club</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.4em] text-on-surface/40">
            {["Daycare", "Boarding", "Application", "Contact"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-brand transition-colors">
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-8">
            <Link href="/book-online" className="hidden sm:block">
              <Button className="h-12 px-10 rounded-none bg-on-surface text-surface hover:bg-brand hover:text-on-brand text-[10px] tracking-[0.3em] uppercase font-bold border-none transition-all shadow-xl">
                Arrange a Visit
              </Button>
            </Link>
            <button type="button" onClick={() => setIsMenuOpen(true)} className="p-2 text-on-surface hover:text-brand transition-colors cursor-pointer">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center border-b border-border overflow-hidden bg-background">
         <div className="container-pad text-center relative z-10 text-on-surface">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
               <span className="text-brand font-black tracking-[0.6em] uppercase text-[10px] mb-12 block animate-pulse">Member Exclusive Sanctuary</span>
               <h1 className="text-6xl md:text-[110px] font-display font-light leading-[0.95] tracking-tight mb-16">
                 Welcome to <br />
                 <span className="font-bold italic underline decoration-brand/30 underline-offset-[16px]">The Dog Club.</span>
               </h1>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
                  <Link href="/application">
                    <Button className="h-20 px-16 rounded-none bg-on-surface text-surface hover:bg-brand hover:text-on-brand text-sm tracking-[0.5em] uppercase font-bold border-none transition-all">
                      Enrol Today
                    </Button>
                  </Link>
                  <Link href="/boarding" className="group flex items-center gap-5 text-on-surface font-black tracking-[0.3em] uppercase text-[10px] border-b-2 border-on-surface/10 pb-2 hover:border-brand transition-all">
                    Book a Tour <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Reception Hours Section */}
      <section className="py-48 bg-surface border-b border-border">
         <div className="container-pad text-center text-on-surface">
            <h3 className="text-[10px] font-black uppercase tracking-[0.8em] text-brand mb-12">Operating Hours</h3>
            <h2 className="text-4xl md:text-6xl font-display font-light uppercase tracking-widest mb-24">Reception Schedule</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-32 max-w-5xl mx-auto">
               <div className="text-left border-l border-brand/20 pl-12 py-4 group hover:border-brand transition-colors">
                  <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-on-surface/40 mb-8">Check In</h4>
                  <ul className="space-y-6 text-xl font-light">
                     <li className="flex justify-between border-b border-border pb-4"><span>Mon - Fri</span> <span className="font-bold italic">7:00 - 9:30am</span></li>
                     <li className="flex justify-between border-b border-border pb-4"><span>Weekends</span> <span className="font-bold italic">8:00 - 9:30am</span></li>
                  </ul>
               </div>
               <div className="text-left border-l border-brand/20 pl-12 py-4 group hover:border-brand transition-colors">
                  <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-on-surface/40 mb-8">Check Out</h4>
                  <ul className="space-y-6 text-xl font-light">
                     <li className="flex justify-between border-b border-border pb-4"><span>Mon - Fri</span> <span className="font-bold italic">3:00 - 6:30pm</span></li>
                     <li className="flex justify-between border-b border-border pb-4"><span>Weekends</span> <span className="font-bold italic">3:00 - 4:30pm</span></li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* Services Section */}
      <section className="py-48 bg-background">
         <div className="container-pad">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 text-on-surface">
               <div className="flex flex-col gap-12 group">
                  <div className="h-[500px] overflow-hidden rounded-none border border-border">
                     <img src="https://static.wixstatic.com/media/c844cd_6d8b2d8563c74e01bd19219b52fa06a3~mv2.jpg" alt="Daycare" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" />
                  </div>
                  <div>
                     <h3 className="text-4xl font-display font-light uppercase tracking-widest mb-8">Daycare</h3>
                     <p className="text-on-surface/40 text-lg leading-[1.8] mb-12 font-medium">State-of-the-art pure rubber floors designed for maximum joint safety and long-term health.</p>
                     <Link href="/daycare" className="text-brand font-black uppercase text-[10px] tracking-[0.4em] border-b border-brand pb-2">The Experience</Link>
                  </div>
               </div>
               <div className="flex flex-col gap-12 group">
                  <div className="h-[500px] overflow-hidden rounded-none border border-border">
                     <img src="https://static.wixstatic.com/media/c844cd_b86ffdb1a21543f080b3075ce50bcee7~mv2.jpeg" alt="Boarding" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" />
                  </div>
                  <div>
                     <h3 className="text-4xl font-display font-light uppercase tracking-widest mb-8">Boarding</h3>
                     <p className="text-on-surface/40 text-lg leading-[1.8] mb-12 font-medium">Exclusive overnight suites with constant on-site supervision and professional care 24/7.</p>
                     <Link href="/boarding" className="text-brand font-black uppercase text-[10px] tracking-[0.4em] border-b border-brand pb-2">View the Suites</Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Safety Commitment */}
      <section className="py-48 bg-surface border-y border-border">
         <div className="container-pad text-center text-on-surface">
            <h2 className="text-5xl md:text-8xl font-display font-light uppercase tracking-tight mb-32 text-on-surface">Safety <span className="font-bold italic">Above All.</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-24">
               {[
                 { icon: <Sparkles />, title: "Hygiene", desc: "Strict sanitisation protocols." },
                 { icon: <ShieldCheck />, title: "Screening", desc: "Mandatory member assessment." },
                 { icon: <Syringe />, title: "Vaccines", desc: "Rigorous record verification." },
                 { icon: <Eye />, title: "24H Staff", desc: "Never left unattended." }
               ].map((item, idx) => (
                 <div key={idx} className="flex flex-col items-center gap-8 group">
                    <div className="text-brand/40 group-hover:text-brand group-hover:scale-110 transition-all duration-500">{React.cloneElement(item.icon, { size: 32, strokeWidth: 1 })}</div>
                    <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-on-surface">{item.title}</h3>
                    <p className="text-on-surface/30 text-xs font-bold uppercase tracking-widest">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Gallery & Quote */}
      <section className="py-48 bg-background overflow-hidden text-on-surface">
         <div className="container-pad">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-48">
               {[
                 "https://static.wixstatic.com/media/c844cd_8b7f951024e4457f9b52e7bf41b53f4d~mv2.jpg",
                 "https://static.wixstatic.com/media/c844cd_efdd650d274d4775ac652e50f8a6db08~mv2.jpg",
                 "https://static.wixstatic.com/media/c844cd_4b509a99c5d4405db7c382f8be1287d2~mv2.jpg",
                 "https://static.wixstatic.com/media/c844cd_db316b95c9ae47bba0a9f5f852cc2a99~mv2.jpg"
               ].map((url, i) => (
                  <div key={i} className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-border"><img src={url} className="w-full h-full object-cover" /></div>
               ))}
            </div>
            <div className="max-w-4xl mx-auto text-center relative">
               <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-brand/5 text-[300px] font-serif select-none pointer-events-none italic">“</div>
               <blockquote className="text-4xl md:text-6xl font-display font-light italic leading-tight text-on-surface/80 relative z-10">
                  "A happy dog is one that has been physically and mentally stimulated."
               </blockquote>
            </div>
         </div>
      </section>

      {/* Footer V2 */}
      <footer className="bg-on-surface text-surface py-32">
        <div className="container-pad">
          <div className="flex flex-col md:flex-row justify-between items-start gap-20 border-b border-surface/5 pb-24 text-surface">
             <div className="max-w-md">
                <span className="text-3xl font-display font-light uppercase tracking-[0.6em] mb-12 block">The <span className="font-bold">Club</span></span>
                <p className="text-surface/40 text-sm leading-loose tracking-[0.3em] uppercase font-bold max-w-xs">Auckland's Elite Canine Destination • Established 2011</p>
             </div>
             <div className="grid grid-cols-2 gap-x-24 gap-y-10 text-[11px] font-bold uppercase tracking-[0.4em] text-surface/30">
                <Link href="/daycare" className="hover:text-brand transition-colors">Daycare</Link>
                <Link href="/boarding" className="hover:text-brand transition-colors">Boarding</Link>
                <Link href="/contact" className="hover:text-brand transition-colors">Contact</Link>
                <Link href="/application" className="hover:text-brand transition-colors">Join Us</Link>
             </div>
          </div>
          <div className="pt-16 flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] font-bold uppercase tracking-[0.6em] text-surface/10">
             <div className="flex gap-12">
                <span>© 2026 THE DOG CLUB</span>
                <span>62B MORRIN ROAD, ST JOHNS</span>
             </div>
             <Link href="https://systechdev.com.br" target="_blank" className="text-brand/40 hover:text-brand transition-colors tracking-[0.8em]">DESIGN BY SYSTECH</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeV2;