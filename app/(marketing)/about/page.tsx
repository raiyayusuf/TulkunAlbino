/* ============================================
   app/(marketing)/about/page.tsx
   ABOUT PAGE - TENTANG GSE JOGJA
   ============================================ */

import React from "react";
import Link from "next/link";
import { Users, Target, Award, Clock, MapPin, Heart } from "lucide-react";

/* ============================================
   COMPANY VALUES DATA
   ============================================ */
const COMPANY_VALUES = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Visi",
    description:
      "Menjadi pusat teknologi terdepan di Yogyakarta yang mengedukasi dan melayani masyarakat dengan solusi Apple terbaik.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Misi",
    description:
      "Menyediakan edukasi teknologi berkualitas, layanan service profesional, dan produk Apple original dengan harga kompetitif.",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Komitmen",
    description:
      "100% produk original, garansi resmi, dan dukungan purna jual yang terpercaya.",
  },
];

/* ============================================
   COMPANY MILESTONES DATA
   ============================================ */
const COMPANY_MILESTONES = [
  {
    year: "2015",
    event: "GSE Jogja didirikan sebagai komunitas belajar teknologi",
  },
  { year: "2017", event: "Resmi menjadi Authorized Apple Service Provider" },
  { year: "2019", event: "Membuka kelas coding dan robotika untuk pelajar" },
  { year: "2021", event: "Ekspansi menjadi Apple Authorized Seller" },
  { year: "2023", event: "Meluncurkan platform belajar online GSE Class" },
  { year: "2024", event: "Membuka cabang kedua di area edukasi Yogyakarta" },
];

/* ============================================
   TEAM INFORMATION
   ============================================ */
const TEAM_INFO = {
  location: {
    icon: <MapPin className="h-6 w-6 text-primary-blue" />,
    title: "Lokasi Kami",
    description: "Yogyakarta - Pusat Teknologi & Pendidikan",
  },
  team: {
    icon: <Users className="h-6 w-6 text-primary-blue" />,
    title: "Tim Profesional",
    description: "15+ ahli teknologi & edukator bersertifikasi",
  },
};

/* ============================================
   ABOUT PAGE COMPONENT
   ============================================ */
export default function AboutPage() {
  /* ============================================
     RENDER COMPONENT
     ============================================ */
  return (
    <div className="min-h-screen bg-white">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <div className="bg-gradient-blue-green py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Tentang GSE Jogja
          </h1>
          <p className="mx-auto max-w-2xl text-lg opacity-90">
            Lebih dari sekadar toko Apple, kami adalah komunitas teknologi yang
            berdedikasi untuk edukasi dan inovasi.
          </p>
        </div>
      </div>

      {/* ============================================
          MAIN CONTENT AREA
          ============================================ */}
      <div className="container mx-auto px-4 py-12">
        {/* ============================================
            INTRO SECTION
            ============================================ */}
        <div className="mb-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* COMPANY DESCRIPTION */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-primary-navy">
                Siapa Kami?
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>GSE Jogja</strong> (Global Solusi Edukasi) adalah
                  sebuah ekosistem teknologi yang berfokus pada tiga pilar
                  utama: <strong>Edukasi</strong>, <strong>Service</strong>, dan{" "}
                  <strong>Retail</strong> produk Apple.
                </p>
                <p>
                  Berdiri sejak 2015, kami telah berkembang dari komunitas kecil
                  menjadi destinasi teknologi terpercaya di Yogyakarta. Dengan
                  tim yang terdiri dari profesional IT, edukator bersertifikasi
                  Apple, dan teknisi berpengalaman, kami berkomitmen memberikan
                  pengalaman terbaik untuk setiap customer.
                </p>
                <p>
                  Kami percaya bahwa teknologi harus bisa diakses, dipahami, dan
                  dimanfaatkan oleh semua orang. Itulah mengapa selain menjual
                  dan memperbaiki perangkat Apple, kami juga aktif mengadakan
                  kelas dan workshop untuk berbagai kalangan.
                </p>
              </div>
            </div>

            {/* COMPANY INFO CARD */}
            <div className="rounded-xl bg-gradient-to-br from-primary-blue/5 to-primary-green/5 p-8">
              {/* LOCATION INFO */}
              <div className="mb-6 flex items-center">
                {TEAM_INFO.location.icon}
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-primary-navy">
                    {TEAM_INFO.location.title}
                  </h3>
                  <p className="text-gray-600">
                    {TEAM_INFO.location.description}
                  </p>
                </div>
              </div>

              {/* TEAM INFO */}
              <div className="flex items-center">
                {TEAM_INFO.team.icon}
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-primary-navy">
                    {TEAM_INFO.team.title}
                  </h3>
                  <p className="text-gray-600">{TEAM_INFO.team.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================
            VALUES SECTION
            ============================================ */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-primary-navy">
            Nilai & Prinsip Kami
          </h2>

          {/* VALUES GRID */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {COMPANY_VALUES.map((value, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-lg bg-gradient-blue-green p-3 text-white">
                  {value.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-primary-navy">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================
            TIMELINE SECTION
            ============================================ */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-primary-navy">
            Perjalanan Kami
          </h2>

          {/* TIMELINE CONTAINER */}
          <div className="relative">
            {/* TIMELINE LINE */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-blue-green md:left-1/2 md:-translate-x-1/2"></div>

            {/* MILESTONE ITEMS */}
            {COMPANY_MILESTONES.map((milestone, index) => (
              <div
                key={index}
                className={`relative mb-8 flex items-center md:${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} md:w-full`}
              >
                {/* MILESTONE MARKER */}
                <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-blue-green text-white">
                  <Clock className="h-4 w-4" />
                </div>

                {/* MILESTONE CONTENT */}
                <div
                  className={`ml-6 flex-1 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:mx-6 md:w-5/12 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                >
                  <div className="mb-2 inline-block rounded-full bg-primary-navy px-3 py-1 text-xs font-semibold text-white">
                    {milestone.year}
                  </div>
                  <p className="text-gray-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================
            CALL TO ACTION SECTION
            ============================================ */}
        <div className="rounded-2xl bg-gradient-to-r from-primary-blue to-primary-green p-8 text-center text-white">
          <h3 className="mb-4 text-2xl font-bold">
            Bergabung dengan Komunitas Kami
          </h3>
          <p className="mb-6 opacity-90">
            Ikuti kelas teknologi kami, dapatkan layanan terbaik, atau bergabung
            dalam komunitas GSE Jogja.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/gse-class"
              className="rounded-lg bg-white px-6 py-3 font-medium text-primary-blue transition-all hover:bg-gray-100"
            >
              Lihat Kelas Kami
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white bg-transparent px-6 py-3 font-medium text-white transition-all hover:bg-white/10"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
