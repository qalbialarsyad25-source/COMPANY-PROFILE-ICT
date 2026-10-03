"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import SafeImage from "./SafeImage";

const navLinks = [
  { name: "Beranda", href: "#hero" },
  { name: "Tentang Kami", href: "#tentang" },
  { name: "Dokumentasi", href: "#dokumentasi" },
  { name: "Divisi", href: "#divisi" },
  { name: "Struktur Organisasi", href: "#struktur" },
  { name: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/85 backdrop-blur-md border-b border-blue-900/40 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & School Name */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-blue-400/60 shadow-glow-blue group-hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-blue-950/40">
              <SafeImage
                src="/assets/logo.png"
                alt="Logo ICT"
                fill
                className="object-contain p-0.5"
                fallbackText="ICT"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-wider text-white group-hover:text-blue-400 transition-colors">
                ICT <span className="text-blue-500">SMANSA</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 -mt-1">
                SMAN 1 Polewali
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-gray-900/60 backdrop-blur-md px-5 py-2 rounded-full border border-blue-900/40 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-600/20 hover:shadow-glow-blue rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#divisi"
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 rounded-full animate-pulse-slow"></span>
              <span className="relative px-5 py-2 rounded-full bg-black flex items-center gap-2 text-sm font-semibold text-white group-hover:bg-blue-600 transition-colors duration-300">
                <span>Eksplorasi</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg bg-gray-900 border border-blue-900/60 text-gray-300 hover:text-white hover:border-blue-500 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-blue-900/60 px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-medium text-gray-200 hover:text-white hover:bg-blue-900/30 border border-transparent hover:border-blue-800 transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#divisi"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-glow-blue"
            >
              Jelajahi Divisi
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
