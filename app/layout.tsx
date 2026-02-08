/* ============================================
   app/layout.tsx
   ROOT LAYOUT - PROVIDER ONLY
   NO NAVBAR & FOOTER HERE
   ============================================ */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./swiper-styles.css"; // Jangan lupa import swiper CSS

// Context Provider
import { SidebarProvider } from "@/context/sidebar-context";

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
  /* ============================================
     RENDER COMPONENT
     ============================================ */
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.className} bg-white text-gray-900 antialiased`}
        suppressHydrationWarning
      >
        {/* ============================================
            SIDEBAR PROVIDER (GLOBAL STATE)
            ============================================ */}
        <SidebarProvider>
          {/* ============================================
              MAIN CONTENT WRAPPER
              ============================================ */}
          <div className="min-h-screen">{children}</div>
        </SidebarProvider>
      </body>
    </html>
  );
}
