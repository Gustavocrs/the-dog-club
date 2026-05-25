"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  PawPrint,
  Star,
  Heart,
  Cloud,
  ArrowRight,
  Menu,
  X,
  Instagram,
  Facebook,
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
 * HOME V1: "Playful & Vibrant"
 * Refatorada para ser 100% dinâmica via CSS Variables.
 */
const HomeV1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-background min-h-screen font-body text-on-surface selection:bg-brand selection:text-white" style={{"--font-display": "var(--font-fredoka)", "--font-body": "var(--font-quicksand)", "--radius-custom": "2.5rem"}}>
      <ColorPaletteSwitcher />

      {/* EXCLUSIVE HEADER V1 */}
      <header className="fixed top-6 left-0 w-full z-50 px-4">
        <nav className="container-pad max-w-4xl bg-surface/90 backdrop-blur-xl border-2 border-brand/20 h-16 rounded-full shadow-2xl flex items-center justify-between px-8 mx-auto group transition-all duration-500">
          <Link href="/" className="flex items-center gap-3 group/logo">
            <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-on-brand rotate-[-12deg] group-hover/logo:rotate-0 transition-transform shadow-lg shadow-brand/20">
              <PawPrint size={22} fill="currentColor" />
            </div>
            <span className="font-display font-black text-xl text-on-surface tracking-tighter hidden sm:block uppercase">
              THE <span className="text-brand">DOG</span> CLUB
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {["Daycare", "Boarding", "Application", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-sm font-black uppercase tracking-widest text-on-surface/60 hover:text-brand transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link href="/book-online" className="hidden sm:block">
              <Button className="h-10 px-8 rounded-full text-xs font-black uppercase tracking-widest bg-brand text-on-brand border-none shadow-lg hover:scale-105 transition-all">
                Book!
              </Button>
            </Link>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-brand cursor-pointer"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-brand/5">
        <div className="container-pad grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-6xl md:text-9xl font-display font-black text-on-surface leading-[0.85] tracking-tighter mb-10 uppercase">
              Welcome to <br />
              <span className="text-brand text-7xl md:text-[140px]">The Dog Club</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface/60 max-w-lg mb-12 font-bold leading-relaxed">
              Auckland's premier daycare and boarding facility. Where safety is our #1 priority and fun is guaranteed.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/book-online"><Button className="h-20 px-12 rounded-[2.5rem] text-xl font-black uppercase bg-brand text-on-brand shadow-2xl hover:scale-105 transition-all">Book a Tour</Button></Link>
              <Link href="/application"><Button variant="secondary" className="h-20 px-12 rounded-[2.5rem] text-xl font-black uppercase border-4 border-brand/20 bg-surface text-brand hover:bg-brand/5">Join the Club</Button></Link>
            </div>
          </motion.div>
          <div className="relative rounded-[4rem] overflow-hidden border-[16px] border-surface shadow-2xl rotate-3">
             <img src="https://static.wixstatic.com/media/c844cd_413ab93cd67e4eb2a75ceb3afc5cf3de~mv2.jpg" alt="Dogs" className="w-full aspect-[4/5] object-cover" />
          </div>
        </div>
      </section>

      {/* Reception Hours Section */}
      <section className="py-32 bg-surface">
         <div className="container-pad">
            <div className="text-center mb-20 text-on-surface">
               <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter mb-6 uppercase">Reception Hours</h2>
               <div className="w-24 h-4 bg-brand mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
               <div className="bg-brand/5 p-12 rounded-[3rem] border-4 border-brand/10">
                  <h3 className="text-3xl font-display font-black text-brand mb-8 uppercase tracking-tighter">Check In</h3>
                  <ul className="space-y-4 text-xl font-bold text-on-surface/70">
                     <li className="flex justify-between"><span>Mon - Fri</span> <span className="text-on-surface">7:00 - 9:30am</span></li>
                     <li className="flex justify-between"><span>Weekends</span> <span className="text-on-surface">8:00 - 9:30am</span></li>
                  </ul>
               </div>
               <div className="bg-brand/5 p-12 rounded-[3rem] border-4 border-brand/10 text-on-surface">
                  <h3 className="text-3xl font-display font-black text-brand mb-8 uppercase tracking-tighter">Check Out</h3>
                  <ul className="space-y-4 text-xl font-bold text-on-surface/70">
                     <li className="flex justify-between"><span>Mon - Fri</span> <span className="text-on-surface">3:00 - 6:30pm</span></li>
                     <li className="flex justify-between"><span>Weekends</span> <span className="text-on-surface">3:00 - 4:30pm</span></li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-background">
         <div className="container-pad flex flex-col gap-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <Card className="p-0 overflow-hidden rounded-[3rem] border-4 border-brand/10 bg-surface">
                  <img src="https://static.wixstatic.com/media/c844cd_6d8b2d8563c74e01bd19219b52fa06a3~mv2.jpg" alt="Daycare" className="h-80 w-full object-cover" />
                  <div className="p-12">
                     <h3 className="text-4xl font-display font-black mb-6 uppercase tracking-tighter text-on-surface">Doggy Daycare</h3>
                     <p className="text-xl font-bold opacity-60 mb-8 leading-relaxed text-on-surface">Our large indoor and outdoor premises boasts a state-of-the-art pure rubber floor. Perfect for water play in summer!</p>
                     <Link href="/daycare" className="inline-flex items-center gap-2 text-brand font-black text-xl hover:gap-4 transition-all uppercase tracking-tighter">Learn More <ArrowRight /></Link>
                  </div>
               </Card>
               <Card className="p-0 overflow-hidden rounded-[3rem] border-4 border-brand/10 bg-surface">
                  <img src="https://static.wixstatic.com/media/c844cd_b86ffdb1a21543f080b3075ce50bcee7~mv2.jpeg" alt="Boarding" className="h-80 w-full object-cover" />
                  <div className="p-12">
                     <h3 className="text-4xl font-display font-black mb-6 uppercase tracking-tighter text-on-surface">Dog Boarding</h3>
                     <p className="text-xl font-bold opacity-60 mb-8 leading-relaxed text-on-surface">During the day your dog plays in daycare. At night, a team member will be on-site to ensure they are well settled.</p>
                     <Link href="/boarding" className="inline-flex items-center gap-2 text-brand font-black text-xl hover:gap-4 transition-all uppercase tracking-tighter">Explore Boarding <ArrowRight /></Link>
                  </div>
               </Card>
            </div>
         </div>
      </section>

      {/* Safety Differentials */}
      <section className="py-32 bg-on-surface text-on-brand">
         <div className="container-pad">
            <div className="text-center mb-24">
               <span className="text-brand font-black uppercase tracking-[0.4em] text-sm mb-6 block">Our Commitment</span>
               <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter uppercase leading-none text-white">Safety is our <br /><span className="text-brand">#1 Priority</span></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-white">
               {[
                 { icon: <Sparkles />, title: "Clean", desc: "Strict cleaning schedules for total hygiene." },
                 { icon: <ShieldCheck />, title: "Screening", desc: "Behaviour assessments for every member." },
                 { icon: <Syringe />, title: "Vaccine", desc: "Full vaccine records required for enrolment." },
                 { icon: <Eye />, title: "Supervised", desc: "Professional on-site care 24 hours a day." }
               ].map((item, idx) => (
                 <div key={idx} className="flex flex-col items-center text-center p-8 bg-white/5 rounded-[2.5rem] hover:bg-brand/20 transition-all border-2 border-white/5">
                    <div className="w-20 h-20 bg-brand text-on-brand flex items-center justify-center rounded-3xl mb-8 shadow-2xl">{React.cloneElement(item.icon, { size: 40 })}</div>
                    <h3 className="text-2xl font-display font-black mb-4 uppercase tracking-tighter">{item.title}</h3>
                    <p className="font-bold opacity-40 leading-relaxed uppercase text-sm">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-surface text-on-surface">
         <div className="container-pad">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
               {[
                 "https://static.wixstatic.com/media/c844cd_8b7f951024e4457f9b52e7bf41b53f4d~mv2.jpg",
                 "https://static.wixstatic.com/media/c844cd_efdd650d274d4775ac652e50f8a6db08~mv2.jpg",
                 "https://static.wixstatic.com/media/c844cd_4b509a99c5d4405db7c382f8be1287d2~mv2.jpg",
                 "https://static.wixstatic.com/media/c844cd_db316b95c9ae47bba0a9f5f852cc2a99~mv2.jpg"
               ].map((url, i) => (
                  <div key={i} className="aspect-square rounded-[3rem] overflow-hidden border-8 border-background shadow-xl"><img src={url} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" /></div>
               ))}
            </div>
            <div className="max-w-4xl mx-auto text-center">
               <blockquote className="text-3xl md:text-5xl font-display font-black tracking-tight leading-tight uppercase">
                  "A happy dog is one that has been <span className="text-brand">physically and mentally</span> stimulated, just like people."
               </blockquote>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-brand text-on-brand">
         <div className="container-pad text-center">
            <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter mb-10 leading-none">Ready to <br />Join the Pack?</h2>
            <Link href="/application"><Button variant="secondary" className="h-24 px-20 rounded-full text-2xl font-black uppercase bg-white text-brand shadow-2xl hover:scale-105 transition-all">Apply Now!</Button></Link>
         </div>
      </section>

      {/* Footer V1 */}
      <footer className="bg-on-surface pt-32 pb-16 relative overflow-hidden text-white">
         <div className="absolute top-0 left-0 w-full h-16 bg-surface rounded-b-[4rem]" />
         <div className="container-pad relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-20">
               <div className="lg:col-span-2 text-brand">
                  <span className="font-display font-black text-5xl tracking-tighter block mb-6">THE DOG CLUB</span>
                  <p className="text-white/40 text-xl font-bold uppercase tracking-widest leading-loose">Auckland's Favourite Hangout <br /> Established 2011</p>
               </div>
               <div className="flex flex-col gap-8">
                  <h4 className="font-black text-xs uppercase tracking-widest opacity-30">Social</h4>
                  <div className="flex gap-4">
                     <Link href="#" className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center hover:bg-brand transition-all"><Instagram size={24} /></Link>
                     <Link href="#" className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center hover:bg-brand transition-all"><Facebook size={24} /></Link>
                  </div>
               </div>
               <div className="flex flex-col gap-8 font-black uppercase text-xl text-white/60">
                  <Link href="/daycare" className="hover:text-brand transition-colors">Daycare</Link>
                  <Link href="/boarding" className="hover:text-brand transition-colors">Boarding</Link>
                  <Link href="/contact" className="hover:text-brand transition-colors">Contact</Link>
               </div>
            </div>
            <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-black uppercase tracking-[0.3em] text-white/20 text-center">
               <span>© 2026 THE DOG CLUB NEW ZEALAND — SAFETY #1</span>
               <Link href="https://systechdev.com.br" target="_blank" className="text-brand">Design Framework by Systech</Link>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default HomeV1;