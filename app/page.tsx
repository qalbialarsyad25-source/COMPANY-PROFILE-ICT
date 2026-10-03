import Hero from "@/components/Hero";
import About from "@/components/About";
import Divisions from "@/components/Divisions";
import Leadership from "@/components/Leadership";
import { Sparkles, Terminal, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Tentang Kami (Visi & Misi) */}
      <About />

      {/* 3. Divisi Kami (Card Grid UI) */}
      <Divisions />

      {/* 4. Struktur Kepemimpinan */}
      <Leadership />

      {/* 5. Call To Action / Tech Community Banner */}
      <section className="py-20 bg-gradient-to-b from-black via-blue-950/20 to-black relative overflow-hidden border-t border-blue-950/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0c1630] to-[#040814] border border-blue-700/40 shadow-glow-blue-lg backdrop-blur-xl relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Future In Every Code</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Siap Menjadi Bagian dari Transformasi Digital?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-light">
              Bergabunglah bersama keluarga besar ICT SMAN 1 Polewali dan kembangkan bakat teknologi, multimedia, dan kepemimpinanmu bersama tim terbaik.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#kontak"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-glow-blue hover:shadow-glow-blue-lg hover:scale-105 active:scale-95 transition-all"
              >
                <span>Hubungi Pengurus ICT</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#divisi"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gray-900/80 hover:bg-blue-950/50 text-blue-200 border border-blue-800/60 hover:border-blue-500 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all"
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Pelajari Program Kerja</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
