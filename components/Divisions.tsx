"use client";

import React from "react";
import { motion } from "framer-motion";
import { Video, Globe, Cpu, Palette, FileSpreadsheet, Layers } from "lucide-react";
import DivisionCard, { Division } from "./DivisionCard";

const divisionsData: Division[] = [
  {
    id: "ict-studio",
    name: "ICT STUDIO",
    leader: "Muh Bariq Al Faiz Yusnun",
    image: "/assets/divisions/ict-studio.png",
    description:
      "Fokus pada produksi multimedia audio visual, videografi, fotografi, podcast kreatif, live streaming, dan dokumentasi sinematik kegiatan sekolah.",
    tags: ["Videography", "Photography", "Broadcasting", "Multimedia"],
    icon: <Video className="w-5 h-5 text-blue-400" />,
  },
  {
    id: "webschool",
    name: "WEBSCHOOL",
    leader: "Silviana",
    image: "/assets/divisions/webschool.png",
    description:
      "Mengembangkan website sekolah, platform digital interaktif, rekayasa perangkat lunak web, dan eksplorasi teknologi coding modern serta UI/UX.",
    tags: ["Next.js", "Web Development", "UI/UX", "System Info"],
    icon: <Globe className="w-5 h-5 text-cyan-400" />,
  },
  {
    id: "hardware",
    name: "HARDWARE",
    leader: "Aiman Radhitya",
    image: "/assets/divisions/hardware.png",
    description:
      "Mendalami perakitan PC, instalasi infrastruktur jaringan LAN/WLAN, pemeliharaan lab komputer, troubleshooting hardware, dan IoT.",
    tags: ["Computer Assembly", "Networking", "IoT", "Maintenance"],
    icon: <Cpu className="w-5 h-5 text-blue-400" />,
  },
  {
    id: "desain-grafis",
    name: "DESAIN GRAFIS",
    leader: "Fachry Achmad",
    image: "/assets/divisions/desain-grafis.png",
    description:
      "Merancang identitas visual yang memukau, poster kegiatan, branding media sosial, ilustrasi digital, dan visual storytelling untuk SMAN 1 Polewali.",
    tags: ["Graphic Design", "Brand Identity", "Illustration", "Typography"],
    icon: <Palette className="w-5 h-5 text-cyan-400" />,
  },
  {
    id: "microsoft",
    name: "MICROSOFT",
    leader: "Muh Zul Izzah",
    image: "/assets/divisions/microsoft.png",
    description:
      "Penguasaan ekosistem Microsoft 365, automasi dokumen, olah data tingkat lanjut dengan Excel, kolaborasi cloud, dan produktivitas digital.",
    tags: ["Microsoft 365", "Data Processing", "Productivity", "Cloud Tools"],
    icon: <FileSpreadsheet className="w-5 h-5 text-blue-400" />,
  },
];

export default function Divisions() {
  return (
    <section id="divisi" className="py-24 bg-black relative tech-grid-bg overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-900/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-800/60 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-glow-blue"
          >
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Pilar Keahlian & Spesialisasi</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Divisi <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">Keahlian Kami</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg"
          >
            Lima pilar divisi yang bekerja secara sinergis menciptakan karya teknologi terdepan di lingkungan SMAN 1 Polewali.
          </motion.p>
        </div>

        {/* 5 Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisionsData.map((division, index) => (
            <DivisionCard key={division.id} division={division} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
