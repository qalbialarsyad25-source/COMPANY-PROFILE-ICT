"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Users, User, ChevronRight, Layers } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-black tech-grid-bg"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-cyan-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-blue-900/25 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Cyber Grid Lines overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.25),rgba(255,255,255,0))] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Futuristic Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/40 text-blue-400 text-xs sm:text-sm font-medium mb-6 shadow-glow-blue backdrop-blur-md"
        >
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span className="tracking-wide">Official Tech Club & Community</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        </motion.div>

        {/* Main Headings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            ICT <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-300 bg-clip-text text-transparent text-glow">
              SMAN 1 Polewali
            </span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-4">
            (Information, Communication & Technology)
          </p>

          <p className="text-lg sm:text-2xl font-medium text-blue-200/90 max-w-2xl mx-auto mb-10">
            Wadah inovasi dan kreativitas siswa di bidang teknologi.
          </p>
        </motion.div>

        {/* Glowing Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Button 3: Kenali Developer */}
          <a
            href="https://www.instagram.com/qalbi_arsyad/"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gray-950/80 hover:bg-blue-950/50 text-blue-200 hover:text-white font-bold text-base flex items-center justify-center gap-3 border border-blue-600/50 hover:border-blue-400 shadow-glow-blue hover:shadow-glow-blue-lg hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md"
          >
            <User className="w-5 h-5 text-blue-400" />
            <span>Kenali Developer</span>
          </a>
        
          {/* Button 1: Jelajahi Divisi */}
          <a
            href="#divisi"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-bold text-base flex items-center justify-center gap-3 shadow-glow-blue-lg hover:shadow-[0_0_35px_rgba(59,130,246,0.85)] hover:scale-105 active:scale-95 transition-all duration-300 border border-blue-300/30"
          >
            <Layers className="w-5 h-5 text-blue-100" />
            <span>Jelajahi Divisi</span>
            <ChevronRight className="w-5 h-5" />
          </a>

          {/* Button 2: Kenali Tim */}
          <a
            href="#struktur"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gray-950/80 hover:bg-blue-950/50 text-blue-200 hover:text-white font-bold text-base flex items-center justify-center gap-3 border border-blue-600/50 hover:border-blue-400 shadow-glow-blue hover:shadow-glow-blue-lg hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md"
          >
            <Users className="w-5 h-5 text-blue-400" />
            <span>Kenali Tim</span>
          </a>
        </motion.div>

        {/* Highlight Stats / Mini Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          <div className="p-4 rounded-xl bg-gray-950/60 border border-blue-900/40 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">5</div>
            <div className="text-xs uppercase tracking-wider text-blue-400">Divisi Keahlian</div>
          </div>
          <div className="p-4 rounded-xl bg-gray-950/60 border border-blue-900/40 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">SMANSA</div>
            <div className="text-xs uppercase tracking-wider text-gray-400">Polewali Mandar</div>
          </div>
          <div className="p-4 rounded-xl bg-gray-950/60 border border-blue-900/40 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">100%</div>
            <div className="text-xs uppercase tracking-wider text-gray-400">Inovasi Siswa</div>
          </div>
          <div className="p-4 rounded-xl bg-gray-950/60 border border-blue-900/40 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">Aktif</div>
            <div className="text-xs uppercase tracking-wider text-cyan-400">Proyek & Karya</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
