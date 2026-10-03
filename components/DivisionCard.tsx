"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Sparkles } from "lucide-react";
import SafeImage from "./SafeImage";

export interface Division {
  id: string;
  name: string;
  leader: string;
  image: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

interface DivisionCardProps {
  division: Division;
  index: number;
}

export default function DivisionCard({ division, index }: DivisionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#0a1224] to-[#040814] p-6 border border-blue-900/70 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.4)] transition-all duration-300 transform hover:-translate-y-1.5"
    >
      {/* Glow Corner Highlight */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full pointer-events-none group-hover:bg-blue-500/20 transition-colors" />

      <div>
        {/* Division Banner Image (Safe fallback) */}
        <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden mb-6 border border-blue-900/50 shadow-inner group-hover:border-blue-500/50 transition-colors bg-[#021637] flex items-center justify-center">
          <SafeImage
            src={division.image}
            alt={division.name}
            fill
            className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
            fallbackText={`Asset ${division.name}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          {/* Division Icon Badge */}
          <div className="absolute top-3 left-3 p-2.5 rounded-lg bg-black/75 backdrop-blur-md border border-blue-500/40 text-blue-400 shadow-glow-blue z-10">
            {division.icon}
          </div>
        </div>

        {/* Division Title */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <h3 className="text-xl font-extrabold text-white group-hover:text-blue-400 transition-colors tracking-wide">
            {division.name}
          </h3>
          <Sparkles className="w-4 h-4 text-blue-400/50 group-hover:text-cyan-400 transition-colors" />
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
          {division.description}
        </p>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {division.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-blue-950/80 text-blue-300 border border-blue-900/60"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Division Leader Information Badge */}
      <div className="pt-4 border-t border-blue-900/50 flex items-center justify-between mt-auto">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-blue-900/40 border border-blue-700/60 flex items-center justify-center text-blue-400 flex-shrink-0">
            <User className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-blue-400 font-semibold">
              Ketua Divisi
            </div>
            <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
              {division.leader}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
