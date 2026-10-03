"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, Users, Crown, Sparkles } from "lucide-react";
import SafeImage from "./SafeImage";

interface LeaderProfile {
  name: string;
  role: string;
  category: "advisory" | "executive";
  image: string;
  badge?: string;
}

const advisoryLeaders: LeaderProfile[] = [
  {
    name: "Abdul Rahman S.Pd, M.Pd",
    role: "Kepala Sekolah",
    category: "advisory",
    image: "/assets/team/kepala-sekolah.jpg",
    badge: "Pelindung",
  },
  {
    name: "Syamsuddin Latimbang S.Pd, M.Pd",
    role: "Wakasek Kesiswaan",
    category: "advisory",
    image: "/assets/team/wakasek.jpg",
    badge: "Pengarah",
  },
  {
    name: "Bambang Purnomo S.Kom",
    role: "Pembina Ekstrakurikuler",
    category: "advisory",
    image: "/assets/team/pembina.jpg",
    badge: "Pembina Utama",
  },
];

const executiveLeaders: LeaderProfile[] = [
  {
    name: "Muh Zahid Yusnun",
    role: "Ketua Ekstrakurikuler",
    category: "executive",
    image: "/assets/team/zahid.jpg",
    badge: "Chief Leader",
  },
  {
    name: "Aditya Gantari Putra",
    role: "Wakil Ketua",
    category: "executive",
    image: "/assets/team/aditya.jpg",
    badge: "Vice Leader",
  },
  {
    name: "Zamy Asyam Al-Iftikhaar",
    role: "Sekretaris",
    category: "executive",
    image: "/assets/team/zamy.jpg",
    badge: "Administration",
  },
  {
    name: "Nayla Nur Annisa",
    role: "Bendahara",
    category: "executive",
    image: "/assets/team/nayla.jpg",
    badge: "Finance & Treasury",
  },
];

export default function Leadership() {
  return (
    <section id="struktur" className="py-24 bg-gray-900/40 relative border-t border-blue-950/60">
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-800/60 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-glow-blue"
          >
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            <span>Kepengurusan & Organisasi</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Struktur <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">Kepemimpinan</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg"
          >
            Sinergi antara pembina sekolah dan pengurus inti siswa dalam mengarahkan visi besar teknologi ICT SMAN 1 Polewali.
          </motion.p>
        </div>

        {/* Level 1: Dewan Pelindung, Pengarah & Pembina */}
        <div className="mb-20">
          <div className="flex items-center gap-3 justify-center mb-10">
            <Shield className="w-5 h-5 text-blue-400" />
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
              Pelindung & Dewan Pembina
            </h3>
            <Shield className="w-5 h-5 text-blue-400" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {advisoryLeaders.map((person, idx) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative rounded-2xl bg-gradient-to-b from-[#0b1329] to-[#040813] border border-blue-900/60 p-6 flex flex-col items-center text-center hover:border-blue-500 hover:shadow-glow-card transition-all duration-300"
              >
                {/* Photo Slot */}
                <div className="relative w-36 h-36 rounded-2xl overflow-hidden mb-5 border-2 border-blue-800/80 shadow-glow-blue group-hover:border-blue-400 transition-colors">
                  <SafeImage
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    fallbackText={person.role}
                  />
                </div>

                {/* Badge */}
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider bg-blue-950 text-cyan-300 border border-blue-800/60 mb-3 uppercase">
                  {person.badge}
                </span>

                {/* Name & Role */}
                <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  {person.name}
                </h4>
                <p className="text-sm text-gray-400 font-light mt-1">
                  {person.role}
                </p>
                <div className="text-xs text-blue-400/80 mt-1 font-mono">
                  SMAN 1 Polewali
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Level 2: Badan Pengurus Harian (Siswa) */}
        <div>
          <div className="flex items-center gap-3 justify-center mb-10">
            <Crown className="w-5 h-5 text-cyan-400" />
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
              Badan Pengurus Harian (BPH)
            </h3>
            <Crown className="w-5 h-5 text-cyan-400" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {executiveLeaders.map((person, idx) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative rounded-2xl bg-gradient-to-b from-[#0a1227] to-[#030611] p-6 flex flex-col items-center text-center transition-all duration-300 ${
                  person.role.includes("Ketua Ekstrakurikuler")
                    ? "border-2 border-blue-500 shadow-glow-blue-lg bg-[#0d1838]"
                    : "border border-blue-900/60 hover:border-blue-400 hover:shadow-glow-card"
                }`}
              >
                {/* Photo Slot */}
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-5 border-2 border-blue-500/60 shadow-md group-hover:border-cyan-400 transition-colors">
                  <SafeImage
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    fallbackText={person.role}
                  />
                </div>

                {/* Badge */}
                <span className="px-3 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-blue-950/90 text-blue-300 border border-blue-800/80 mb-2 uppercase">
                  {person.badge}
                </span>

                {/* Name & Role */}
                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  {person.name}
                </h4>
                <p className="text-xs sm:text-sm text-cyan-400 font-medium mt-1">
                  {person.role}
                </p>
                <p className="text-xs text-gray-500 mt-2 font-mono">
                  ICT SMANSA
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
