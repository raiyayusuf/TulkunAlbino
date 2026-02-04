/* ============================================
   app/(marketing)/gse-class/category/robotics-ukit/page.tsx
   ROBOTICS UKIT COURSE DETAIL PAGE
   ============================================ */

import React from "react";
import Link from "next/link";

/* ============================================
   ROBOTICS UKIT PAGE COMPONENT
   ============================================ */
export default function RoboticsUkitPage() {
  /* ============================================
     COURSE DETAILS
     ============================================ */
  const courseDetails = {
    title: "Robotics uKit",
    description: "Belajar robotika dengan kit uKit untuk berbagai tingkat usia",
    features: [
      "Pengenalan komponen robotika uKit",
      "Pemrograman robot dengan block coding",
      "Membangun berbagai model robot",
      "Konsep sensor dan aktuator dalam robotika",
      "Project robot interaktif dan aplikatif",
      "Kompetisi robotika dasar",
    ],
  };

  /* ============================================
     RENDER COMPONENT
     ============================================ */
  return (
    <div>
      {/* ============================================
          PAGE HEADER
          ============================================ */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary-navy">
          {courseDetails.title}
        </h1>
        <p className="mt-2 text-gray-600">{courseDetails.description}</p>
      </div>

      {/* ============================================
          DEVELOPMENT NOTICE SECTION
          ============================================ */}
      <div className="mb-8 rounded-xl border border-blue-200 bg-blue-50 p-6">
        <h2 className="mb-4 text-2xl font-bold text-primary-navy">
          🚧 Halaman dalam Pengembangan
        </h2>
        <p className="text-gray-700">
          Detail kelas {courseDetails.title} sedang disiapkan. Informasi tentang
          materi, jadwal, dan biaya akan segera tersedia.
        </p>
      </div>

      {/* ============================================
          COURSE CONTENT SECTION
          ============================================ */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* LEARNING OBJECTIVES */}
        <div className="rounded-lg border border-gray-200 p-6">
          <h3 className="mb-4 text-xl font-semibold text-primary-navy">
            📚 Apa yang akan dipelajari?
          </h3>
          <ul className="space-y-3">
            {courseDetails.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 text-primary-blue">•</span>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT INFORMATION */}
        <div className="rounded-lg border border-gray-200 p-6">
          <h3 className="mb-4 text-xl font-semibold text-primary-navy">
            📞 Informasi Kontak
          </h3>
          <p className="mb-6 text-gray-600">
            Untuk informasi pendaftaran dan jadwal kelas, silakan hubungi:
          </p>

          {/* CONTACT BUTTONS */}
          <div className="space-y-4">
            <Link
              href="/contact"
              className="inline-block w-full rounded-lg bg-gradient-blue-green px-6 py-3 text-center font-medium text-white hover:shadow-md"
            >
              Hubungi Kami
            </Link>

            <Link
              href="/gse-class"
              className="inline-block w-full rounded-lg border border-gray-300 px-6 py-3 text-center font-medium text-gray-700 hover:bg-gray-50"
            >
              ← Kembali ke Katalog Kelas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}