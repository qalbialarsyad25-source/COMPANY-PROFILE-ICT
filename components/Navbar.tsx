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
  const [activeSection, setActiveSection] = useState("hero");

  // High performance throttled scroll listener
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);

          // 1. If at bottom of page, Kontak is definitely active
          const isBottom =
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 100;

          if (isBottom) {
            setActiveSection("kontak");
            ticking = false;
            return;
          }

          // 2. If at very top of page, Hero is active
          if (window.scrollY < 120) {
            setActiveSection("hero");
            ticking = false;
            return;
          }

          // 3. Scan sections in reverse (bottom-up) to cleanly select the active section
          const sectionIds = ["kontak", "struktur", "divisi", "dokumentasi", "tentang", "hero"];
          for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 260 && rect.bottom >= 100) {
                setActiveSection(id);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Smooth scroll handler for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      setActiveSection(targetId);
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full max-w-[100vw] z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-[#030712]/95 backdrop-blur-xl border-b border-blue-900/40 shadow-[0_4px_30px_rgba(0,0,0,0.85)]"
            : "bg-gradient-to-b from-black/85 via-black/40 to-transparent backdrop-blur-[2px] border-b border-transparent"
        }`}
      >
        {/* Top Navbar Row */}
        <div className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="h-16 sm:h-20 flex items-center justify-between gap-2 w-full">
            {/* Brand Logo & Name */}
            <Link
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center gap-2 sm:gap-3 group min-w-0"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-blue-400/60 shadow-glow-blue group-hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-blue-950/50 flex-shrink-0">
                <SafeImage
                  src="/assets/logo.png"
                  alt="Logo ICT SMAN 1 Polewali"
                  fill
                  className="object-contain p-0.5"
                  fallbackText="ICT"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-lg lg:text-xl tracking-wider text-white group-hover:text-blue-400 transition-colors whitespace-nowrap">
                  ICT <span className="text-blue-500">SMANSA</span>
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-400 -mt-0.5 whitespace-nowrap">
                  SMAN 1 Polewali
                </span>
              </div>
            </Link>

            {/* Desktop Navigation (Visible on lg: 1024px+) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-gray-900/70 backdrop-blur-md px-3.5 xl:px-5 py-1.5 rounded-full border border-blue-900/40 shadow-inner">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? "text-white bg-blue-600/35 shadow-glow-blue border border-blue-500/60 hover:bg-blue-600/50 hover:border-blue-400"
                        : "text-gray-300 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/40 border border-transparent"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTA Button (Visible on lg: 1024px+) */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <a
                href="#divisi"
                onClick={(e) => handleNavClick(e, "#divisi")}
                className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 rounded-full animate-pulse-slow"></span>
                <span className="relative px-4 py-2 xl:px-5 xl:py-2 rounded-full bg-black flex items-center gap-1.5 xl:gap-2 text-xs xl:text-sm font-semibold text-white group-hover:bg-blue-600 transition-colors duration-300">
                  <span>Eksplorasi</span>
                  <ChevronRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>

            {/* Mobile & Tablet Hamburger Toggle Button (44x44px Touch Target) */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                type="button"
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-gray-900/90 border border-blue-900/60 text-gray-200 hover:text-white hover:border-blue-500 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                aria-label={isOpen ? "Tutup Menu Navigasi" : "Buka Menu Navigasi"}
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-cyan-400" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-200" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Dropdown Drawer (CSS Transition - 100% Reliable across all devices) */}
        <div
          className={`lg:hidden w-full max-w-[100vw] transition-all duration-300 ease-in-out overflow-hidden border-t border-blue-900/50 bg-[#050b18]/98 backdrop-blur-2xl shadow-2xl ${
            isOpen ? "max-h-[85vh] opacity-100 py-3" : "max-h-0 opacity-0 py-0 pointer-events-none"
          }`}
        >
          <div className="w-full max-w-7xl mx-auto px-4 pb-4 space-y-1 overflow-y-auto">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-blue-600/30 text-cyan-300 border border-blue-500/50 shadow-glow-blue"
                        : "text-gray-200 hover:text-white hover:bg-blue-900/30 hover:border-blue-600/30 border border-transparent active:bg-blue-900/50"
                    }`}
                  >
                    <span className="font-semibold">{link.name}</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isActive ? "text-cyan-400 translate-x-1" : "text-gray-500"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Mobile CTA Button */}
            <div className="pt-3 mt-1 border-t border-blue-900/40">
              <a
                href="#divisi"
                onClick={(e) => handleNavClick(e, "#divisi")}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-bold text-sm shadow-glow-blue active:scale-98 transition-all"
              >
                <span>Jelajahi Divisi ICT</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Screen Backdrop Click to Close (Outside of header to avoid stacking context issues) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs lg:hidden"
        />
      )}
    </>
  );
}
