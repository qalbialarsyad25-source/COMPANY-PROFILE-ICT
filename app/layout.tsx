import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "ICT SMAN 1 Polewali | Wadah Inovasi & Kreativitas Siswa",
  description:
    "Website Resmi Ekstrakurikuler Information, Communication & Technology (ICT) SMAN 1 Polewali. Berfokus pada inovasi siswa di bidang multimedia, programming, hardware, desain grafis, dan aplikasi komputasi.",
  keywords: [
    "ICT SMAN 1 Polewali",
    "SMANSA Polewali",
    "Ekstrakurikuler Komputer",
    "Teknologi SMAN 1 Polewali",
    "ICT Studio",
    "Webschool",
    "Hardware SMANSA",
    "Polewali Mandar",
  ],
  authors: [{ name: "ICT SMAN 1 Polewali Team" }],
  openGraph: {
    title: "ICT SMAN 1 Polewali - Technology & Innovation Hub",
    description:
      "Wadah inovasi dan kreativitas siswa di bidang teknologi, informasi, dan komunikasi di SMAN 1 Polewali.",
    url: "https://ict-sman1polewali.vercel.app",
    siteName: "ICT SMAN 1 Polewali",
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth dark">
      <body
        className={`${jakarta.variable} font-sans bg-black text-gray-100 antialiased selection:bg-blue-600 selection:text-white min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
