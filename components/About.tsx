"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  Compass,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Lightbulb,
  Camera,
  X,
  Maximize2,
} from "lucide-react";
import SafeImage from "./SafeImage";

interface DocumentationPhoto {
  title: string;
  subtitle: string;
  src: string;
  tag: string;
}

const documentationItems: DocumentationPhoto[] = [
  {
    title: "Keluarga Besar ICT SMAN 1 Polewali",
    subtitle: "Foto bersama seluruh anggota dan dewan pembina ekstrakurikuler ICT.",
    src: "/assets/documentation/dokumentasi-1.jpg",
    tag: "Official Squad",
  },
  {
    title: "Badan Pengurus Harian & Pembina",
    subtitle: "Kepengurusan inti BPH dan pembina ICT SMAN 1 Polewali periode 2026.",
    src: "/assets/documentation/dokumentasi-2.jpg",
    tag: "BPH & Pembina",
  },
  {
    title: "Solidaritas & Keakraban Anggota",
    subtitle: "Membangun kebersamaan dan kekeluargaan antar sesama anggota ICT.",
    src: "/assets/documentation/dokumentasi-3.jpg",
    tag: "Kebersamaan",
  },
  {
    title: "Kolaborasi Antardivisi",
    subtitle: "Sinergi aktif dalam berkarya dan mengembangkan inovasi digital.",
    src: "/assets/documentation/dokumentasi-4.jpg",
    tag: "Tim Kreatif",
  },
  {
    title: "Semangat Inovasi Siswa",
    subtitle: "Antusiasme generasi muda dalam mengeksplorasi teknologi masa depan.",
    src: "/assets/documentation/dokumentasi-5.jpg",
    tag: "Aktivitas",
  },
];

export default function About() {
  const [selectedPhoto, setSelectedPhoto] = useState<DocumentationPhoto | null>(null);

  return (
    <>
      <section id="tentang" className="py-24 bg-gray-900/50 relative border-t border-b border-blue-950/60 overflow-hidden scroll-mt-16">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-700/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-cyan-700/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800/50 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>Mengenal Lebih Dekat</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Tentang <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">ICT SMAN 1 Polewali</span>
          </motion.h2>
        </div>

        {/* Overview Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16"
        >
          {/* Main Description */}
          <div className="lg:col-span-7 bg-black/60 p-8 sm:p-10 rounded-2xl border border-blue-900/40 shadow-glow-card backdrop-blur-md">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="p-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
                <Sparkles className="w-5 h-5" />
              </span>
              Pusat Eksplorasi & Teknologi Digital Sekolah
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 font-light">
              ICT adalah salah satu unit kegiatan siswa atau ekstrakurikuler resmi di{" "}
              <span className="text-white font-semibold">SMAN 1 Polewali</span> sebagai wadah bagi siswa yang berfokus pada pengembangan minat dan bakat siswa di bidang teknologi, informasi, dan komunikasi.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Melalui program kerja praktis, workshop berkala, kolaborasi antardivisi, dan pembinaan intensif, anggota ICT dibekali kemampuan teknis mutakhir yang relevan dengan perkembangan industri digital masa kini.
            </p>

            <div className="mt-6 pt-6 border-t border-blue-900/30 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-300">Ekstrakurikuler Resmi</span>
              </div>
              <div className="flex items-center gap-3">
                <Lightbulb className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-300">Berbasis Karya Nyata</span>
              </div>
            </div>
          </div>

          {/* About Image / Visual Element */}
          <div className="lg:col-span-5 relative">
            <div
              onClick={() => setSelectedPhoto(documentationItems[0])}
              className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-blue-800/60 shadow-glow-blue group cursor-pointer"
            >
              <SafeImage
                src="/assets/about.jpg"
                alt="Dokumentasi ICT SMAN 1 Polewali"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                fallbackText="Dokumentasi ICT SMAN 1 Polewali"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              
              <div className="absolute top-4 right-4 p-2 rounded-lg bg-black/60 backdrop-blur-md text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-cyan-400" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-blue-900/50">
                <p className="text-xs text-blue-300 font-mono font-semibold tracking-wider">OFFICIAL SQUAD</p>
                <p className="text-sm text-white font-medium">Dokumentasi Anggota & Pembina ICT SMAN 1 Polewali</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Visi & Misi Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Card Visi */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-black via-gray-950 to-blue-950/40 border border-blue-900/50 shadow-glow-card relative group hover:border-blue-500/60 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Visi Kami</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Menjadikan ICT SMAN 1 Polewali sebagai pelopor inovasi teknologi di lingkungan sekolah dan daerah, yang mencetak generasi muda berkarakter, berdaya saing global, terampil, serta adaptif terhadap kemajuan era digital.
            </p>
          </motion.div>

          {/* Card Misi */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-black via-gray-950 to-blue-950/40 border border-blue-900/50 shadow-glow-card relative group hover:border-blue-500/60 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-600/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Misi Kami</h3>
            <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Menyelenggarakan pelatihan terstruktur di bidang multimedia, pemrograman, hardware, desain, dan komputasi.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Mendukung publikasi digital dan infrastruktur teknologi sekolah secara aktif dan profesional.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Mendorong kolaborasi karya serta partisipasi aktif dalam kompetisi teknologi di tingkat lokal maupun nasional.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Dedicated Documentation & Gallery Section */}
    <section id="dokumentasi" className="py-24 bg-black relative border-b border-blue-950/60 overflow-hidden scroll-mt-16">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[400px] bg-blue-900/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-800/60 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-glow-blue"
          >
            <Camera className="w-3.5 h-3.5 text-cyan-400" />
            <span>Dokumentasi Kegiatan</span>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3"
          >
            Galeri <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">ICT SMAN 1 Polewali</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base"
          >
            Dokumentasi potret kebersamaan, kepengurusan, dan aktivitas siswa di ekstrakurikuler ICT SMAN 1 Polewali. Klik foto untuk melihat ukuran penuh.
          </motion.p>
        </div>

        {/* 5-Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {documentationItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedPhoto(item)}
              className={`group relative rounded-2xl overflow-hidden bg-gradient-to-b from-gray-900 to-black border border-blue-900/60 hover:border-blue-500 shadow-glow-card cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                idx === 0 ? "sm:col-span-2 lg:col-span-2" : "col-span-1"
              }`}
            >
              <div className={`relative w-full overflow-hidden ${idx === 0 ? "h-64 sm:h-80" : "h-64"}`}>
                <SafeImage
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  fallbackText={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                {/* Tag Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-blue-500/50 text-[11px] font-semibold text-blue-300 shadow-glow-blue flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{item.tag}</span>
                </div>

                {/* Expand icon on hover */}
                <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/70 backdrop-blur-md text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-cyan-400" />
                </div>

                {/* Caption & Title */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 font-light">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-gray-950 rounded-2xl overflow-hidden border border-blue-600/50 shadow-glow-blue-lg"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/80 hover:bg-red-600/80 text-white border border-white/20 transition-colors"
                aria-label="Tutup Pratinjau"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Display */}
              <div className="relative w-full h-[55vh] sm:h-[70vh] bg-black">
                <SafeImage
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  fill
                  className="object-contain"
                  fallbackText={selectedPhoto.title}
                />
              </div>

              {/* Caption Bottom Bar */}
              <div className="p-4 sm:p-6 bg-gray-950 border-t border-blue-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-blue-950 text-blue-400 border border-blue-800 text-xs font-semibold uppercase tracking-wider mb-1">
                    {selectedPhoto.tag}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {selectedPhoto.subtitle}
                  </p>
                </div>
                <div className="text-xs font-mono text-cyan-400 flex items-center gap-1.5 self-start sm:self-auto">
                  <Sparkles className="w-4 h-4" />
                  <span>ICT SMAN 1 Polewali</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </section>
    </>
  );
}
