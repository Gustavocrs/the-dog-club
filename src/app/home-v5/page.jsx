"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  TreePine, 
  Wind, 
  ArrowRight, 
  Menu, 
  X, 
  MapPin, 
  Mail, 
  Instagram, 
  Facebook,
  ShieldCheck,
  Syringe,
  Eye,
  Sparkles,
  Phone
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/Button";
import { ColorPaletteSwitcher } from "@/components/ColorPaletteSwitcher";

/**
 * HOME V5: "Nature & Outdoors"
 * Refatorada para ser 100% dinâmica via CSS Variables.
 */
const HomeV5 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-background min-h-screen font-body text-on-surface selection:bg-brand selection:text-on-brand" style={{"--font-display": "var(--font-dmserif)", "--font-body": "var(--font-inter)", "--radius-custom": "1.5rem"}}>
      <ColorPaletteSwitcher />

      {/* EXCLUSIVE HEADER V5 */}
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="container-pad h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-12 h-12 bg-brand text-on-brand flex items-center justify-center rounded-full shadow-xl">
              <TreePine size={24} />
            </div>
            <span className="font-display text-2xl tracking-tighter text-white drop-shadow-md">THE DOG CLUB</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-12 text-xs font-black uppercase tracking-[0.2em] text-white/90">
            {["Daycare", "Boarding", "Application"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-white transition-colors">{item}</Link>
            ))}
            <Link href="/contact">
              <Button className="h-11 px-10 rounded-full bg-surface text-brand border-none hover:bg-brand hover:text-on-brand shadow-xl transition-all">Contact</Button>
            </Link>
          </nav>

          <button type="button" onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2 text-white cursor-pointer"><Menu size={32} /></button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-on-surface overflow-hidden">
        <img src="https://static.wixstatic.com/media/c844cd_b87f951024e4457f9b52e7bf41b53f4d~mv2.jpg" alt="Nature" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity scale-110" />
        <div className="container-pad relative z-10 pt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
             <h1 className="text-7xl md:text-[130px] font-display text-white leading-[0.85] mb-12 tracking-tighter drop-shadow-2xl">Welcome to <br /> <span className="italic text-brand drop-shadow-none underline decoration-brand/20 underline-offset-[20px]">The Dog Club.</span></h1>
             <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-16 leading-relaxed font-medium">Auckland's premier daycare and boarding facility. Where safety is our #1 priority and fun is guaranteed.</p>
             <div className="flex flex-wrap gap-6">
                <Link href="/book-online"><Button className="h-20 px-16 bg-brand text-on-brand border-none rounded-full text-xl font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">Book a Tour</Button></Link>
                <Link href="/application"><Button variant="secondary" className="h-20 px-16 bg-white/10 text-white border-2 border-white/20 rounded-full text-xl font-black uppercase hover:bg-white/20 transition-all">Join the Club</Button></Link>
             </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-background rounded-t-[100%] scale-x-150" />
      </section>

      {/* Reception Hours Section */}
      <section className="py-40 bg-background text-on-surface">
         <div className="container-pad">
            <div className="max-w-4xl mx-auto text-center mb-24">
               <h2 className="text-5xl md:text-7xl font-display tracking-tighter mb-8 leading-none">Our Reception <br />Opening Hours</h2>
               <div className="w-20 h-1 bg-brand mx-auto opacity-20" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
               <div className="bg-brand/5 p-16 rounded-[4rem] border border-brand/5 shadow-sm text-center">
                  <h4 className="font-black text-brand uppercase tracking-[0.4em] text-[10px] mb-10 text-brand">Check In Phase</h4>
                  <p className="text-2xl font-display mb-4">Monday - Friday: 7:00 - 9:30am</p>
                  <p className="text-2xl font-display opacity-40 italic text-brand">Weekends: 8:00 - 9:30am</p>
               </div>
               <div className="bg-brand/5 p-16 rounded-[4rem] border border-brand/5 shadow-sm text-center">
                  <h4 className="font-black text-brand uppercase tracking-[0.4em] text-[10px] mb-10 text-brand">Check Out Phase</h4>
                  <p className="text-2xl font-display mb-4">Monday - Friday: 3:00 - 6:30pm</p>
                  <p className="text-2xl font-display opacity-40 italic text-brand">Weekends: 3:00 - 4:30pm</p>
               </div>
            </div>
         </div>
      </section>

      {/* Services Section */}
      <section className="py-40 bg-on-surface text-white rounded-t-[5rem]">
         <div className="container-pad flex flex-col gap-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div className="order-2 lg:order-1 text-left">
                  <h3 className="text-5xl font-display mb-10 tracking-tight text-white">Doggy Daycare</h3>
                  <p className="text-xl text-white/60 leading-relaxed mb-12 font-medium">Our large indoor and outdoor premises boasts a state-of-the-art pure rubber floor. Perfect for water play in the hotter months!</p>
                  <Link href="/daycare"><Button className="bg-brand text-on-brand border-none rounded-full px-12 h-14 font-black uppercase text-xs tracking-widest shadow-xl">Learn about Daycare</Button></Link>
               </div>
               <div className="order-1 lg:order-2 rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl"><img src="https://static.wixstatic.com/media/c844cd_6d8b2d8563c74e01bd19219b52fa06a3~mv2.jpg" alt="Daycare" className="w-full aspect-video object-cover" /></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div className="rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl"><img src="https://static.wixstatic.com/media/c844cd_b86ffdb1a21543f080b3075ce50bcee7~mv2.jpeg" alt="Boarding" className="w-full aspect-video object-cover" /></div>
               <div className="text-left">
                  <h3 className="text-5xl font-display mb-10 tracking-tight text-white">Dog Boarding</h3>
                  <p className="text-xl text-white/60 leading-relaxed mb-12 font-medium">Plays in daycare during the day, rests safely in exclusive suites at night with a team member always on-site.</p>
                  <Link href="/boarding"><Button className="bg-brand text-on-brand border-none rounded-full px-12 h-14 font-black uppercase text-xs tracking-widest shadow-xl">Explore the Suites</Button></Link>
               </div>
            </div>
         </div>
      </section>

      {/* Safety Section */}
      <section className="py-40 bg-background text-on-surface">
         <div className="container-pad">
            <h2 className="text-6xl md:text-8xl font-display tracking-tighter mb-32 text-center leading-none text-on-surface">Safety is our <br /> <span className="text-brand italic underline decoration-brand/10 underline-offset-[20px]">#1 Priority.</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
               {[
                 { icon: <Sparkles />, title: "Cleanliness", desc: "Rigorous daily sanitisation." },
                 { icon: <ShieldCheck />, title: "Screening", desc: "Expert behavioural triaging." },
                 { icon: <Syringe />, title: "Health", desc: "Mandatory vaccine records." },
                 { icon: <Eye />, title: "Care", desc: "On-site 24/7 supervision." }
               ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center group">
                     <div className="w-20 h-20 bg-brand/10 text-brand rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand group-hover:text-on-brand transition-all duration-500">{item.icon}</div>
                     <h4 className="text-2xl font-display mb-4 text-on-surface uppercase font-black tracking-tighter">{item.title}</h4>
                     <p className="font-medium opacity-40 leading-relaxed max-w-[200px] text-on-surface uppercase text-xs font-bold tracking-widest">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Gallery & Quote */}
      <section className="py-40 bg-background border-t border-border">
         <div className="container-pad">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-40">
               {[
                 "https://static.wixstatic.com/media/c844cd_8b7f951024e4457f9b52e7bf41b53f4d~mv2.jpg",
                 "https://static.wixstatic.com/media/c844cd_efdd650d274d4775ac652e50f8a6db08~mv2.jpg",
                 "https://static.wixstatic.com/media/c844cd_4b509a99c5d4405db7c382f8be1287d2~mv2.jpg",
                 "https://static.wixstatic.com/media/c844cd_db316b95c9ae47bba0a9f5f852cc2a99~mv2.jpg"
               ].map((url, i) => (
                  <div key={i} className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-surface hover:rotate-2 transition-transform duration-500"><img src={url} className="w-full h-full object-cover" /></div>
               ))}
            </div>
            <div className="max-w-4xl mx-auto text-center">
               <blockquote className="text-3xl md:text-5xl font-display leading-tight text-on-surface/90 italic">
                  "A happy dog is one that has been <span className="text-brand not-italic font-black">physically and mentally</span> stimulated, just like people."
               </blockquote>
            </div>
         </div>
      </section>

      {/* Footer Nature */}
      <footer className="bg-on-surface text-surface py-32 rounded-t-[5rem]">
         <div className="container-pad grid grid-cols-1 md:grid-cols-3 gap-24 mb-24 text-surface">
            <div className="md:col-span-2">
               <div className="flex items-center gap-4 mb-12">
                  <TreePine size={48} className="text-brand" />
                  <span className="font-display text-4xl tracking-tighter text-white uppercase">THE DOG CLUB</span>
               </div>
               <div className="flex flex-col gap-8 text-surface/60 font-medium text-xl">
                  <p className="flex items-center gap-5"><MapPin size={24} className="text-brand" /> 62b Morrin Road, St Johns, Auckland</p>
                  <p className="flex items-center gap-5"><Mail size={24} className="text-brand" /> admin@thedogclub.co.nz</p>
                  <p className="flex items-center gap-5"><Phone size={24} className="text-brand" /> 09-574 5125</p>
               </div>
            </div>
            <div className="flex flex-col gap-12">
               <nav className="flex flex-col gap-8 text-2xl font-display text-white">
                  <Link href="/daycare" className="hover:text-brand transition-colors">Daycare</Link>
                  <Link href="/boarding" className="hover:text-brand transition-colors">Boarding</Link>
                  <Link href="/contact" className="hover:text-brand transition-colors">Contact</Link>
               </nav>
               <div className="pt-12 border-t border-white/10 flex flex-col gap-4 text-[10px] font-black uppercase tracking-[0.5em] opacity-40">
                  <p>© 2026 THE DOG CLUB NZ</p>
                  <Link href="https://systechdev.com.br" target="_blank" className="hover:text-white transition-colors">Digital Design by Systech</Link>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default HomeV5;