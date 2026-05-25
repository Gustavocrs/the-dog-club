import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border pt-16 pb-8">
      <div className="container-pad grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
        {/* Club Info */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2 group w-fit">
            <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center text-on-brand font-bold group-hover:scale-110 transition-transform">
              DC
            </div>
            <span className="font-display font-bold text-xl text-on-surface tracking-tight">
              THE DOG CLUB
            </span>
          </Link>
          <div className="flex flex-col gap-4 text-on-surface/70 leading-relaxed">
            <p className="flex items-start gap-3">
              <MapPin size={20} className="text-brand shrink-0 mt-1" />
              62b Morrin Road, St Johns, Auckland
            </p>
            <p className="flex items-center gap-3">
              <Mail size={20} className="text-brand shrink-0" />
              admin@thedogclub.co.nz
            </p>
            <p className="flex items-center gap-3">
              <Phone size={20} className="text-brand shrink-0" />
              09-574 5125
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/thedogclubnz"
              target="_blank"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-on-surface hover:bg-brand hover:text-on-brand hover:border-brand transition-all"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/thedogclubnz/"
              target="_blank"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-on-surface hover:bg-brand hover:text-on-brand hover:border-brand transition-all"
            >
              <Instagram size={20} />
            </Link>
          </div>
        </div>

        {/* Club Hours */}
        <div className="flex flex-col gap-6">
          <h3 className="font-display font-bold text-lg text-on-surface">Club Hours</h3>
          <div className="flex flex-col gap-4 text-on-surface/70">
            <div>
              <p className="font-semibold text-on-surface">Monday to Friday</p>
              <p>7:00am - 6:30pm</p>
            </div>
            <div>
              <p className="font-semibold text-on-surface">Weekends and Holidays</p>
              <p>8:00am - 4:30pm</p>
            </div>
            <p className="text-sm italic mt-2 text-brand">
              Dogs must be checked into reception by 9:30am
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h3 className="font-display font-bold text-lg text-on-surface">Quick Links</h3>
          <nav className="flex flex-col gap-3">
            <Link href="/daycare" className="text-on-surface/70 hover:text-brand transition-colors">
              Doggy Daycare
            </Link>
            <Link
              href="/boarding"
              className="text-on-surface/70 hover:text-brand transition-colors"
            >
              Dog Boarding
            </Link>
            <Link
              href="/application"
              className="text-on-surface/70 hover:text-brand transition-colors"
            >
              Join the Club
            </Link>
            <Link href="/contact" className="text-on-surface/70 hover:text-brand transition-colors">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>

      {/* Systech Signature */}
      <div className="container-pad pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-on-surface/50">
          © {new Date().getFullYear()} The Dog Club. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-on-surface/50">Desenvolvido por</span>
          <Link
            href="https://systechdev.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-brand font-semibold hover:opacity-80 transition-opacity"
          >
            <img
              src="/systech-logo.svg"
              alt="Systech Logo"
              className="w-4 h-4"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            Systech
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
