"use client";

import React from "react";
import { MapPin, Instagram, Youtube, ArrowUp, Sparkles, Globe } from "lucide-react";
import { FaTiktok } from "react-icons/fa6";
import SafeImage from "./SafeImage";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer id="kontak" className="bg-black text-gray-400 border-t border-blue-950 relative overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-blue-900/30">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-blue-400/60 shadow-glow-blue flex items-center justify-center bg-blue-950/40">
                <SafeImage
                  src="/assets/logo.png"
                  alt="ICT Logo"
                  fill
                  className="object-contain p-0.5"
                  fallbackText="ICT"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-wider">
                ICT <span className="text-blue-500">SMANSA</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed font-light pr-4">
              Information, Communication & Technology (ICT) SMAN 1 Polewali adalah wadah pengembangan potensi siswa dalam teknologi digital, multimedia, rekayasa perangkat lunak, dan komputasi kreatif.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/ict_smansapol/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-900 border border-blue-900/60 flex items-center justify-center text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-600/20 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@smanegeri1polewali926"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-900 border border-blue-900/60 flex items-center justify-center text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-600/20 transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@ictsmansa"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-900 border border-blue-900/60 flex items-center justify-center text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-600/20 transition-all"
                aria-label="Tiktok"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Navigasi Halaman</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-blue-400 transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-blue-400 transition-colors">Tentang Kami</a>
              </li>
              <li>
                <a href="#dokumentasi" className="hover:text-blue-400 transition-colors">Dokumentasi</a>
              </li>
              <li>
                <a href="#divisi" className="hover:text-blue-400 transition-colors">Divisi Keahlian</a>
              </li>
              <li>
                <a href="#struktur" className="hover:text-blue-400 transition-colors">Struktur Kepemimpinan</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Address & School Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Informasi Sekolah</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                <span>
                  SMAN 1 Polewali, Jl. H. Andi Depu No. 56, Polewali, Kabupaten Polewali Mandar, Sulawesi Barat 91311
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a
                  href="https://smansapolewali.sch.id/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  smansapolewali.sch.id
                </a>
              </div>
            </div>

            <div className="pt-2">
              <div className="p-3 rounded-xl bg-gray-950 border border-blue-900/40 text-xs text-gray-400">
                <div className="text-blue-400 font-semibold mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Motto Ekstrakurikuler
                </div>
                &quot;Bersama ICT, Paham Teknologi, Ciptakan Inovasi.&quot;
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p suppressHydrationWarning>
            &copy; {new Date().getFullYear()} ICT SMAN 1 Polewali. Admin ICT Angkatan 12 yang buat.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-900 hover:bg-blue-900/40 text-gray-400 hover:text-white border border-blue-950 hover:border-blue-700 transition-all text-xs"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
