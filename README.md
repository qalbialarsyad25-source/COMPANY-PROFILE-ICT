# 🌐 ICT SMAN 1 POLEWALI - Company Profile Website

Website resmi Company Profile & Landing Page ekstrakurikuler **ICT (Information, Communication & Technology) SMAN 1 Polewali**. Dibangun dengan arsitektur modern menggunakan **Next.js (App Router)**, **React**, **Tailwind CSS**, dan **Framer Motion**, siap dideploy langsung ke **Vercel**.

---

## 🎨 Desain & Tema Visual
- **Tema**: Dominan Gelap / Cyber Tech (`#030712`, `bg-black`, `bg-gray-900/50`) dipadukan dengan aksen biru elektrik (`#3b82f6`, `#06b6d4`, `#60a5fa`).
- **Efek Visual**: Glowing borders, ambient lights, glassmorphism blur, responsive grid, dan transisi halus berbasis **Framer Motion**.
- **Fitur Navigasi**: Single Page Application (SPA) dengan Smooth Scroll ke setiap section.

---

## 📂 Struktur Folder Proyek

```text
PROJECT-ICT/
├── app/
│   ├── globals.css          # Styling global, glassmorphism, scrollbar & neon glow
│   ├── layout.tsx           # Layout root, metadata SEO, Navbar & Footer
│   └── page.tsx             # Halaman utama menggabungkan seluruh section
├── components/
│   ├── Navbar.tsx           # Header navigasi responsif & mobile drawer
│   ├── Hero.tsx             # Hero section dengan glowing blue buttons & stats
│   ├── About.tsx            # Tentang Kami, visi & misi
│   ├── Divisions.tsx        # Section daftar 5 divisi
│   ├── DivisionCard.tsx     # Card divisi dengan border glowing & ketua
│   ├── Leadership.tsx       # Struktur kepemimpinan hierarkis (Sekolah & BPH)
│   ├── Footer.tsx           # Footer lengkap dengan info sekolah & kontak
│   └── SafeImage.tsx        # Image wrapper next/image + fallback bg-blue-950
├── public/
│   └── assets/
│       ├── logo.png         # Logo resmi ICT
│       ├── about.jpg        # Foto dokumentasi tentang ICT
│       ├── divisions/       # Foto/banner divisi
│       │   ├── ict-studio.jpg
│       │   ├── webschool.jpg
│       │   ├── hardware.jpg
│       │   ├── desain-grafis.jpg
│       │   └── microsoft.jpg
│       └── team/            # Foto profil pengurus & pembina
│           ├── kepala-sekolah.jpg
│           ├── wakasek.jpg
│           ├── pembina.jpg
│           ├── zahid.jpg
│           ├── aditya.jpg
│           ├── zamy.jpg
│           └── nayla.jpg
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🖼️ Manajemen Aset Gambar (Manual)
Seluruh gambar dapat Anda ganti kapan saja dengan memasukkan file foto ke folder `public/assets/` sesuai nama file di atas.

Komponen `SafeImage.tsx` telah disematkan sistem proteksi: jika gambar belum Anda masukkan, tampilan website **tidak akan error/pecah**, melainkan secara otomatis menampilkan placeholder bernuansa **Cyber Blue Dark (`bg-blue-950`)** dengan skeleton loading dan teks penanda.

---

## 🚀 Cara Menjalankan di Lokal (Local Development)

1. Pastikan Anda telah menginstal **Node.js** (versi 18.x atau 20.x direkomendasikan).
2. Buka terminal di folder project ini:
   ```bash
   npm install
   ```
3. Jalankan server lokal:
   ```bash
   npm run dev
   ```
4. Buka browser dan akses [http://localhost:3000](http://localhost:3000).

---

## ☁️ Cara Deploy ke Vercel (1-Click Deploy)

1. Buat repository baru di **GitHub**.
2. Push seluruh file proyek ini ke repository tersebut:
   ```bash
   git init
   git add .
   git commit -m "feat: Initial ICT SMAN 1 Polewali Company Profile"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```
3. Buka dashboard [Vercel](https://vercel.com).
4. Klik **Add New Project** -> **Import Git Repository**.
5. Pilih repository GitHub Anda, Next.js akan terdeteksi secara otomatis.
6. Klik **Deploy**! Website Anda akan langsung online dengan domain gratis seperti `https://nama-project.vercel.app`.
