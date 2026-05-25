"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Instagram, 
  Facebook, 
  Menu, 
  X, 
  ArrowRight,
  ShieldCheck,
  Syringe,
  Eye,
  Sparkles 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/Button";
import { ColorPaletteSwitcher } from "@/components/ColorPaletteSwitcher";

/**
 * HOME V4: "The Original"
 * Refatorada para ser 100% dinâmica via CSS Variables.
 */
const HomeV4 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-background min-h-screen font-body text-on-surface selection:bg-brand selection:text-on-brand" style={{"--font-display": "var(--font-opensans)", "--font-body": "var(--font-opensans)", "--radius-custom": "0.25rem"}}>
      <ColorPaletteSwitcher />

      {/* EXCLUSIVE HEADER V4 */}
      <header className="border-b border-border bg-surface">
        <div className="container-pad py-8 flex flex-col items-center gap-6">
          <Link href="/" className="flex flex-col items-center group text-center">
            <div className="w-24 h-24 mb-4">
              <img src="https://static.wixstatic.com/media/c844cd_d49e99dd301e4679974e1f26f0ab757c~mv2.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-brand uppercase">THE DOG CLUB</h1>
          </Link>

          <nav className="hidden md:flex items-center gap-10 border-t border-border pt-6 w-full justify-center text-[12px] font-bold uppercase tracking-widest text-on-surface/40">
            {["Services", "About", "Book Online", "Members"].map((item) => (
              <Link key={item} href="/" className="hover:text-brand transition-colors">{item}</Link>
            ))}
          </nav>

          <button type="button" onClick={() => setIsMenuOpen(true)} className="md:hidden p-2 text-on-surface cursor-pointer"><Menu size={32} /></button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center justify-center bg-on-surface overflow-hidden">
        <img src="https://static.wixstatic.com/media/c844cd_413ab93cd67e4eb2a75ceb3afc5cf3de~mv2.jpg" alt="Dogs" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="container-pad relative z-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-5xl md:text-[90px] font-bold text-white uppercase tracking-tighter mb-10 leading-none">Welcome to <br /> THE DOG CLUB</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/book-online"><Button className="h-16 px-12 bg-brand text-on-brand border-none rounded-sm font-bold uppercase tracking-widest text-base shadow-xl">Book a Tour</Button></Link>
              <Link href="/application"><Button variant="secondary" className="h-16 px-12 border-2 border-white text-white hover:bg-white hover:text-on-surface rounded-sm font-bold uppercase tracking-widest text-base transition-all bg-transparent">Join the Club</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reception Hours Section */}
      <section className="py-24 bg-surface">
         <div className="container-pad max-w-5xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-14 text-on-surface uppercase tracking-tight">Our reception opening hours are:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-y border-border py-20 text-on-surface">
               <div>
                  <h4 className="text-brand font-black uppercase text-sm tracking-[0.3em] mb-8">Check In</h4>
                  <p className="text-2xl font-bold mb-4 italic">Monday to Friday: 7am - 9:30am</p>
                  <p className="text-2xl font-bold italic opacity-30">Weekends & Holidays: 8am - 9:30am</p>
               </div>
               <div>
                  <h4 className="text-brand font-black uppercase text-sm tracking-[0.3em] mb-8">Check Out</h4>
                  <p className="text-2xl font-bold mb-4 italic">Monday to Friday: 3pm - 6:30pm</p>
                  <p className="text-2xl font-bold italic opacity-30">Weekends & Holidays: 3pm - 4:30pm</p>
               </div>
            </div>
         </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background border-b border-border">
         <div className="container-pad grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-surface p-16 shadow-lg border border-border group transition-all">
               <div className="h-72 mb-10 overflow-hidden"><img src="https://static.wixstatic.com/media/c844cd_6d8b2d8563c74e01bd19219b52fa06a3~mv2.jpg" alt="Daycare" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" /></div>
               <h4 className="text-3xl font-bold mb-6 text-on-surface">Doggy Daycare</h4>
               <p className="opacity-60 text-lg leading-relaxed mb-10 text-on-surface">Our large indoor and outdoor premises boasts a state-of-the-art pure rubber floor. Perfect for water play!</p>
               <Link href="/daycare" className="text-brand font-black uppercase text-sm tracking-widest hover:underline flex items-center gap-2">Learn more <ArrowRight size={16}/></Link>
            </div>
            <div className="bg-surface p-16 shadow-lg border border-border group transition-all">
               <div className="h-72 mb-10 overflow-hidden"><img src="https://static.wixstatic.com/media/c844cd_b86ffdb1a21543f080b3075ce50bcee7~mv2.jpeg" alt="Boarding" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" /></div>
               <h4 className="text-3xl font-bold mb-6 text-on-surface">Dog Boarding</h4>
               <p className="opacity-60 text-lg leading-relaxed mb-10 text-on-surface">During the day your dog plays with friends. At night, we ensure they are well cared for.</p>
               <Link href="/boarding" className="text-brand font-black uppercase text-sm tracking-widest hover:underline flex items-center gap-2">Learn more <ArrowRight size={16}/></Link>
            </div>
         </div>
      </section>

      {/* Safety Section */}
      <section className="py-24 bg-surface">
         <div className="container-pad text-center text-on-surface">
            <h2 className="text-5xl font-bold uppercase tracking-tight mb-20 text-on-surface">Safety is our <span className="text-brand">#1 Priority.</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-on-surface">
               {[
                 { icon: <Sparkles />, title: "Hygiene", desc: "Strict cleaning schedule." },
                 { icon: <ShieldCheck />, title: "Screening", desc: "Behaviour assessments." },
                 { icon: <Syringe />, title: "Vaccines", desc: "Full records required." },
                 { icon: <Eye />, title: "Supervised", desc: "24H on-site team." }
               ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                     <div className="text-brand mb-6 border-2 border-brand p-6 rounded-full">{item.icon}</div>
                     <h4 className="font-bold uppercase mb-2 text-on-surface">{item.title}</h4>
                     <p className="text-xs opacity-40 font-bold uppercase tracking-widest text-on-surface">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Gallery & Quote */}
      <section className="py-24 bg-background border-y border-border text-on-surface">
         <div className="container-pad">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
               {[
                 "https://static.wixstatic.com/media/c844cd_8b7f951024e4457f9b52e7bf41b53f4d~mv2.jpg",
                 "https://static.wixstatic.com/media/c844cd_efdd650d274d4775ac652e50f8a6db08~mv2.jpg",
                 "https://static.wixstatic.com/media/c844cd_4b509a99c5d4405db7c382f8be1287d2~mv2.jpg",
                 "https://static.wixstatic.com/media/c844cd_db316b95c9ae47bba0a9f5f852cc2a99~mv2.jpg"
               ].map((url, i) => (
                  <div key={i} className="aspect-square overflow-hidden border border-surface shadow-sm"><img src={url} className="w-full h-full object-cover" /></div>
               ))}
            </div>
            <div className="max-w-4xl mx-auto text-center border-l-8 border-brand pl-12 text-on-surface">
               <blockquote className="text-2xl md:text-3xl font-bold italic opacity-60 leading-relaxed text-on-surface">
                  "A happy dog is one that has been physically and mentally stimulated, just like people."
               </blockquote>
            </div>
         </div>
      </section>

      {/* Footer V4 */}
      <footer className="bg-on-surface text-surface py-24 border-t-8 border-brand">
        <div className="container-pad">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-center md:text-left border-b border-surface/5 pb-20 text-surface">
            <div>
              <p className="font-bold text-brand uppercase tracking-widest mb-8 text-sm">Club Hours</p>
              <p className="text-sm leading-loose opacity-60">Monday to Friday: 7am - 6:30pm<br />Weekends & Holidays: 8am - 4:30pm</p>
              <p className="text-[11px] italic text-brand/60 mt-6 uppercase font-black tracking-widest">Check in by 9:30am</p>
            </div>
            <div>
              <p className="font-bold text-brand uppercase tracking-widest mb-8 text-sm">Location</p>
              <p className="text-sm leading-loose opacity-60">62b Morrin Road, St Johns<br />Auckland, New Zealand</p>
              <p className="text-sm mt-6 font-bold">09-574 5125</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-10">
              <div className="flex gap-6">
                <Link href="#" className="w-12 h-12 bg-surface/5 rounded-full flex items-center justify-center hover:bg-brand transition-all"><Instagram size={20} /></Link>
                <Link href="#" className="w-12 h-12 bg-surface/5 rounded-full flex items-center justify-center hover:bg-brand transition-all"><Facebook size={20} /></Link>
              </div>
              <div className="flex flex-col items-end">
                 <span className="text-2xl font-bold tracking-tighter text-brand">THE DOG CLUB</span>
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-20">Established 2011</span>
              </div>
            </div>
          </div>
          <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-bold uppercase tracking-widest opacity-20 text-center">
            <p>© 2026 THE DOG CLUB NEW ZEALAND</p>
            <Link href="https://systechdev.com.br" target="_blank" className="hover:text-brand transition-colors">Digital Framework by Systech</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeV4;