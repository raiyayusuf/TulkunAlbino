/* ============================================
   app/layout.tsx
   ROOT LAYOUT COMPONENT
   ============================================ */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./swiper-styles.css"; // Jangan lupa import swiper CSS

// Layout Components
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

/* ============================================
   FONT CONFIGURATION
   ============================================ */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

/* ============================================
   METADATA CONFIGURATION
   ============================================ */
export const metadata: Metadata = {
  title: "GSE Jogja - Pusat Teknologi Apple",
  description:
    "GSE Jogja menyediakan kelas teknologi dan penjualan perangkat Apple terpercaya di Yogyakarta.",
  keywords: [
    "GSE Jogja",
    "Kelas Teknologi",
    "Apple Authorized",
    "Koding Python",
    "Robotika",
  ],
  authors: [{ name: "GSE Jogja" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://gsejogja.com",
    title: "GSE Jogja - Pusat Teknologi Apple",
    description:
      "Pusat edukasi teknologi dan penjualan perangkat Apple terpercada di Yogyakarta.",
    siteName: "GSE Jogja",
  },
};

/* ============================================
   ROOT LAYOUT COMPONENT
   ============================================ */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.className} bg-white text-gray-900 antialiased`}
        suppressHydrationWarning
      >
        {/* ============================================
            LAYOUT STRUCTURE
            ============================================ */}
        <div className="min-h-screen flex flex-col">
          {/* ============================================
              HEADER/NAVIGATION
              ============================================ */}
          <Navbar />

          {/* ============================================
              SPACER UNTUK NAVBAR FIXED (INI YANG PENTING!)
              ============================================ */}
          <div className="h-16"></div>

          {/* ============================================
              MAIN CONTENT AREA
              ============================================ */}
          <main className="flex-1">{children}</main>

          {/* ============================================
              FOOTER
              ============================================ */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
