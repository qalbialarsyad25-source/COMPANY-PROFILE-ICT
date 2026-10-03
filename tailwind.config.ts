import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#030712", // Ultra-dark tech background
        card: "#0b1220",
        ict: {
          dark: "#050b18",
          card: "#091224",
          border: "#1e3a8a",
          blue: "#3b82f6",
          cyan: "#06b6d4",
          glow: "#60a5fa",
        },
      },
      boxShadow: {
        "glow-blue": "0 0 25px -4px rgba(59, 130, 246, 0.5)",
        "glow-blue-lg": "0 0 50px -5px rgba(59, 130, 246, 0.65)",
        "glow-card": "0 0 30px -5px rgba(30, 58, 138, 0.4)",
        "glow-cyan": "0 0 25px -4px rgba(6, 182, 212, 0.5)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "tech-grid": "linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)",
        "radial-gradient": "radial-gradient(circle at 50% 50%, rgba(29, 78, 216, 0.15) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
