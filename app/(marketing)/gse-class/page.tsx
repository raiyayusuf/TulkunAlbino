/* ============================================
   app/(marketing)/gse-class/page.tsx
   GSE CLASS HOMEPAGE - KATALOG KELAS
   ============================================ */

import React from "react";
import CategoryCard from "./category-card";

/* ============================================
   DATA CONFIGURATION
   ============================================ */
const categories = [
  {
    id: "coding-python",
    title: "Coding Python",
    description:
      "Belajar pemrograman Python dari dasar hingga mahir. Cocok untuk pemula dan yang ingin upgrade skill.",
    icon: "🐍",
    color: "from-blue-500 to-cyan-500",
    duration: "24 Jam",
    level: "Beginner - Advanced",
  },
  {
    id: "coding-scratch",
    title: "Coding Scratch",
    description:
      "Pengenalan coding untuk anak-anak dengan platform Scratch yang menyenangkan dan interaktif.",
    icon: "🎮",
    color: "from-orange-500 to-yellow-500",
    duration: "12 Jam",
    level: "Kids (8-12 tahun)",
  },
  {
    id: "design-graphics",
    title: "Design Graphics",
    description:
      "Kelas desain grafis menggunakan tools populer seperti Photoshop, Illustrator, dan Figma.",
    icon: "🎨",
    color: "from-purple-500 to-pink-500",
    duration: "36 Jam",
    level: "Beginner - Intermediate",
  },
  {
    id: "iot",
    title: "Internet of Things",
    description:
      "Membangun sistem IoT dengan Arduino, Raspberry Pi, dan sensor-sensor elektronik.",
    icon: "📡",
    color: "from-green-500 to-emerald-500",
    duration: "48 Jam",
    level: "Intermediate - Advanced",
  },
  {
    id: "robot-innovation",
    title: "Robot Innovation",
    description:
      "Robotika dan automasi dengan pembelajaran hands-on project yang aplikatif.",
    icon: "🤖",
    color: "from-red-500 to-orange-500",
    duration: "40 Jam",
    level: "Intermediate - Advanced",
  },
];

/* ============================================
   WHATSAPP CONTACT CONFIGURATION
   ============================================ */
const WHATSAPP_NUMBER = "628xxxxxxxxxx";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/* ============================================
   GSE CLASS HOMEPAGE COMPONENT
   ============================================ */
export default function GseClassPage() {
  /* ============================================
     RENDER COMPONENT
     ============================================ */
  return (
    <div>
      {/* ============================================
          HEADER SECTION
          ============================================ */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary-navy">
          GSE Class - Katalog Kelas
        </h1>
        <p className="mt-2 text-gray-600">
          Pilih kategori kelas teknologi yang sesuai dengan minat dan kebutuhan
          belajar kamu.
        </p>
      </div>

      {/* ============================================
          DEVELOPMENT NOTICE SECTION
          ============================================ */}
      <div className="mb-8 rounded-xl border border-blue-200 bg-blue-50 p-6">
        <div className="flex items-start">
          <div className="mr-4 mt-1 rounded-full bg-blue-100 p-2">
            <span className="text-xl">🚀</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-primary-navy">
              Platform dalam Pengembangan
            </h2>
            <p className="mt-2 text-gray-700">
              Sistem pendaftaran online dan materi pembelajaran digital akan
              segera hadir. Untuk sementara, silakan hubungi kami untuk
              informasi pendaftaran.
            </p>
          </div>
        </div>
      </div>

      {/* ============================================
          CATEGORIES GRID SECTION
          ============================================ */}
      <div className="mb-8">
        <h2 className="mb-6 text-2xl font-bold text-primary-navy">
          Semua Kategori Kelas
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>

      {/* ============================================
          CALL TO ACTION SECTION
          ============================================ */}
      <div className="rounded-2xl bg-gradient-to-r from-primary-blue/10 to-primary-green/10 p-8">
        <div className="text-center">
          <h3 className="mb-4 text-2xl font-bold text-primary-navy">
            Tertarik dengan salah satu kelas?
          </h3>
          <p className="mb-6 text-gray-600">
            Hubungi tim kami untuk konsultasi gratis dan informasi biaya.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-gradient-blue-green px-6 py-3 font-medium text-white transition-all hover:shadow-md"
          >
            Konsultasi via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
