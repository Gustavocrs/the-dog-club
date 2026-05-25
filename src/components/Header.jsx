"use client";

import { Button } from "@/components/Button";
import { LoginModal } from "@/components/LoginModal";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const navLinks = [
    {
      name: "Services",
      dropdown: [
        { name: "Boarding", href: "/boarding" },
        { name: "Daycare", href: "/daycare" },
      ],
    },
    {
      name: "About",
      dropdown: [{ name: "Contact", href: "/contact" }],
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-border">
      <div className="container-pad h-20 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-on-surface"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-on-brand font-bold text-xl group-hover:scale-110 transition-transform">
            DC
          </div>
          <span className="font-display font-bold text-xl text-on-surface tracking-tight">
            THE DOG CLUB
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group py-4">
              <button className="flex items-center gap-1 font-medium text-on-surface/80 hover:text-brand transition-colors cursor-pointer">
                {link.name} <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                <div className="bg-surface border border-border rounded-custom shadow-xl py-2 min-w-[160px]">
                  {link.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block px-4 py-2 text-sm text-on-surface/80 hover:bg-brand/5 hover:text-brand transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={() => setIsLoginModalOpen(true)}
            className="font-medium text-on-surface/80 hover:text-brand transition-colors cursor-pointer"
          >
            Members Log In
          </button>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link href="/book-online">
            <Button variant="primary" className="h-10 px-5 text-sm">
              Book a Tour
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-surface border-b border-border lg:hidden animate-in slide-in-from-top duration-300">
            <div className="container-pad py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted px-2">
                    {link.name}
                  </span>
                  {link.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="px-2 py-2 text-lg font-medium text-on-surface hover:text-brand"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsLoginModalOpen(true);
                }}
                className="px-2 py-2 text-lg font-medium text-on-surface hover:text-brand text-left cursor-pointer"
              >
                Members Log In
              </button>
              <Link href="/book-online" className="mt-2">
                <Button variant="primary" wfull onClick={() => setIsMenuOpen(false)}>
                  Book a Tour
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </header>
  );
};

export default Header;
