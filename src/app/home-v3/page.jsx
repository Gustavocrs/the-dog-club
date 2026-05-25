"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowRight, 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook,
  Sparkles,
  Syringe,
  Eye
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { ColorPaletteSwitcher } from "@/components/ColorPaletteSwitcher";

/**
 * HOME V3: "Trust & Safety"
 * Refatorada para ser 100% dinâmica via CSS Variables.
 */
const HomeV3 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-background min-h-screen font-body text-on-surface selection:bg-brand selection:text-on-brand" style={{"--font-display": "var(--font-montserrat)", "--font-body": "var(--font-roboto)", "--radius-custom": "0.375rem"}}>
      <ColorPaletteSwitcher />

      {/* EXCLUSIVE HEADER V3 */}
      <header className="relative z-50">
        <div className="bg-on-surface text-surface/60 py-3 hidden sm:block">
          <div className="container-pad flex justify-between items-center text-[11px] font-bold uppercase tracking-[0.2em]">
            <div className="flex gap-8">
              <span className="flex items-center gap-2 text-surface"><Phone size={14} className="text-brand" /> 09-574 5125</span>
              <span className="flex items-center gap-2 text-surface"><MapPin size={14} className="text-brand" /> Auckland, New Zealand</span>
            </div>
            <Link href="/" className="hover:text-brand transition-colors text-surface border-l border-surface/10 pl-8 ml-8">Members Access</Link>
          </div>
        </div>

        <nav className="bg-surface border-b border-border h-20 flex items-center shadow-sm">
          <div className="container-pad w-full flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-on-surface flex items-center justify-center rounded-xl shadow-lg">
                <ShieldCheck size={28} className="text-brand" />
              </div>
              <div className="flex flex-col leading-none text-on-surface">
                <span className="font-display font-black text-xl tracking-tighter">THE DOG CLUB</span>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand mt-0.5 text-center">Since 2011</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-10 text-xs font-black uppercase tracking-widest">
              {["Daycare", "Boarding", "Application", "Contact"].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`} className="text-on-surface/70 hover:text-brand transition-colors relative group">
                   {item}
                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all group-hover:w-full" />
                </Link>
              ))}
              <Link href="/book-online">
                <Button className="h-11 px-8 rounded-md bg-brand text-on-brand border-none font-bold uppercase tracking-widest text-[10px] shadow-lg shadow-brand/20">Book Assessment</Button>
              </Link>
            </div>

            <button type="button" onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2 text-on-surface cursor-pointer">
              <Menu size={28} />
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 lg:py-56 bg-on-surface overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-on-surface via-on-surface/80 to-transparent z-10" />
        <img src="https://static.wixstatic.com/media/c844cd_0e5dc2441e974a24a8a7f29656a0ea41~mv2.jpg" alt="Dogs" className="absolute inset-0 w-full h-full object-cover" />
        
        <div className="container-pad relative z-20 text-surface">
          <div className="max-w-3xl text-left">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
               <span className="text-brand font-black tracking-[0.4em] uppercase text-xs mb-8 block">Auckland's Trusted Facility</span>
               <h1 className="text-5xl md:text-[85px] font-display font-black text-white mb-10 leading-[1.05] uppercase tracking-tighter shadow-sm">
                 Welcome to <br />
                 <span className="text-brand">The Dog Club.</span>
               </h1>
               <p className="text-xl md:text-2xl text-white/70 mb-14 leading-relaxed font-medium max-w-2xl">
                 Auckland's premier daycare and boarding facility. Where safety is our #1 priority and fun is guaranteed.
               </p>
               <div className="flex flex-col sm:flex-row gap-6">
                  <Link href="/book-online"><Button className="h-16 px-12 rounded-md bg-brand text-on-brand border-none font-black uppercase tracking-widest text-base shadow-2xl shadow-brand/40 hover:scale-105 transition-all">Book a Tour</Button></Link>
                  <Link href="/application"><Button variant="secondary" className="h-16 px-12 rounded-md bg-white/5 text-white border-2 border-white/20 hover:bg-white/10 font-black uppercase tracking-widest text-base transition-all">Join the Club</Button></Link>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reception Hours */}
      <section className="py-32 bg-surface border-b border-border">
         <div className="container-pad">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 items-center text-on-surface">
               <div className="lg:col-span-1">
                  <h2 className="text-3xl font-display font-black uppercase tracking-tighter leading-none mb-6 text-on-surface">Our Reception <br />Opening Hours</h2>
                  <p className="text-on-surface/50 font-bold uppercase text-xs tracking-widest">Auckland Standard Time</p>
               </div>
               <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="bg-background p-10 border-l-4 border-brand shadow-sm">
                     <h4 className="font-black text-brand uppercase text-[10px] tracking-[0.3em] mb-4">Check In</h4>
                     <p className="font-black text-lg text-on-surface">Mon-Fri: 7:00-9:30am</p>
                     <p className="font-black text-lg text-on-surface">Wknd: 8:00-9:30am</p>
                  </div>
                  <div className="bg-background p-10 border-l-4 border-brand shadow-sm">
                     <h4 className="font-black text-brand uppercase text-[10px] tracking-[0.3em] mb-4">Check Out</h4>
                     <p className="font-black text-lg text-on-surface">Mon-Fri: 3:00-6:30pm</p>
                     <p className="font-black text-lg text-on-surface">Wknd: 3:00-4:30pm</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-background">
         <div className="container-pad grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="flex flex-col gap-10">
               <div className="rounded-xl overflow-hidden shadow-xl h-96 w-full"><img src="https://static.wixstatic.com/media/c844cd_6d8b2d8563c74e01bd19219b52fa06a3~mv2.jpg" alt="Daycare" className="h-full w-full object-cover" /></div>
               <h3 className="text-3xl font-display font-black uppercase tracking-tight text-on-surface">Doggy Daycare</h3>
               <p className="text-on-surface/60 font-medium leading-relaxed">Our large indoor and outdoor premises boasts a state-of-the-art pure rubber floor. Essential for dog safety and water play!</p>
               <Link href="/daycare" className="text-brand font-black uppercase text-xs tracking-widest flex items-center gap-2 hover:gap-4 transition-all">Learn more <ArrowRight size={16}/></Link>
            </div>
            <div className="flex flex-col gap-10">
               <div className="rounded-xl overflow-hidden shadow-xl h-96 w-full"><img src="https://static.wixstatic.com/media/c844cd_b86ffdb1a21543f080b3075ce50bcee7~mv2.jpeg" alt="Boarding" className="h-full w-full object-cover" /></div>
               <h3 className="text-3xl font-display font-black uppercase tracking-tight text-on-surface">Dog Boarding</h3>
               <p className="text-on-surface/60 font-medium leading-relaxed">Daycare play with friends, secure overnight stays with a team member always on-site to ensure they are well settled.</p>
               <Link href="/boarding" className="text-brand font-black uppercase text-xs tracking-widest flex items-center gap-2 hover:gap-4 transition-all">Explore suites <ArrowRight size={16}/></Link>
            </div>
         </div>
      </section>

      {/* Safety Section */}
      <section className="py-32 bg-on-surface text-surface">
         <div className="container-pad">
            <h2 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter mb-24 text-center text-white">Safety is our <br /> <span className="text-brand">#1 Priority.</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 text-white">
               {[
                 { icon: <Sparkles />, title: "Hygiene", desc: "Strict daily cleaning." },
                 { icon: <ShieldCheck />, title: "Triaging", desc: "Behaviour screening." },
                 { icon: <Syringe />, title: "Vaccines", desc: "Strict verification." },
                 { icon: <Eye />, title: "24H Care", desc: "Always supervised." }
               ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-6 items-center text-center">
                     <div className="w-16 h-16 bg-brand rounded-lg flex items-center justify-center shadow-2xl text-on-brand">{item.icon}</div>
                     <h4 className="font-display font-black uppercase text-lg">{item.title}</h4>
                     <p className="opacity-40 text-xs font-black uppercase tracking-widest">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Gallery & Quote */}
      <section className="py-32 bg-surface text-on-surface border-y border-border">
         <div className="container-pad">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
               {[
                 "https://static.wixstatic.com/media/c844cd_8b7f951024e4457f9b52e7bf41b53f4d~mv2.jpg",
                 "https://static.wixstatic.com/media/c844cd_efdd650d274d4775ac652e50f8a6db08~mv2.jpg",
                 "https://static.wixstatic.com/media/c844cd_4b509a99c5d4405db7c382f8be1287d2~mv2.jpg",
                 "https://static.wixstatic.com/media/c844cd_db316b95c9ae47bba0a9f5f852cc2a99~mv2.jpg"
               ].map((url, i) => (
                  <div key={i} className="aspect-square rounded-lg overflow-hidden border border-border shadow-md grayscale hover:grayscale-0 transition-all duration-1000"><img src={url} className="w-full h-full object-cover" /></div>
               ))}
            </div>
            <div className="max-w-4xl mx-auto text-center">
               <blockquote className="text-2xl md:text-4xl font-display font-black italic text-on-surface leading-snug">
                  "A happy dog is one that has been physically and mentally stimulated, just like people."
               </blockquote>
            </div>
         </div>
      </section>

      {/* Footer V3 */}
      <footer className="bg-on-surface text-surface py-24 border-t border-surface/5">
         <div className="container-pad flex flex-col md:flex-row justify-between items-start gap-20 text-surface">
            <div className="max-w-sm">
               <span className="font-display font-black text-3xl tracking-tighter uppercase block mb-8">THE DOG CLUB</span>
               <p className="opacity-40 text-sm leading-loose font-bold uppercase tracking-tight">Premier canine facility in Auckland. Dedicated to socialisation and health since 2011.</p>
            </div>
            <div className="flex gap-20">
               <nav className="flex flex-col gap-6 text-[11px] font-black uppercase tracking-widest text-brand">
                  <Link href="/daycare">Daycare</Link>
                  <Link href="/boarding">Boarding</Link>
                  <Link href="/contact">Contact</Link>
               </nav>
               <div className="flex flex-col gap-6 text-[11px] font-black uppercase tracking-widest opacity-30">
                  <Link href="#">Instagram</Link>
                  <Link href="#">Facebook</Link>
                  <Link href="https://systechdev.com.br" target="_blank" className="text-surface/60 hover:text-brand transition-colors">Design by Systech</Link>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default HomeV3;