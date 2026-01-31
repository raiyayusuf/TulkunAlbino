/* ============================================
   app/(marketing)/contact/page.tsx
   CONTACT PAGE - HUBUNGI KAMI
   ============================================ */

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

/* ============================================
   CONTACT INFORMATION DATA
   ============================================ */
const CONTACT_INFO = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Telepon & WhatsApp",
    details: ["+62 812-3456-7890", "+62 823-4567-8901"],
    description: "Untuk konsultasi cepat dan respon instan",
    action: "https://wa.me/6281234567890",
    actionText: "Chat via WhatsApp",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    details: ["info@gsejogja.com", "support@gsejogja.com"],
    description: "Untuk pertanyaan detail dan dokumen",
    action: "mailto:info@gsejogja.com",
    actionText: "Kirim Email",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Lokasi",
    details: ["Jl. Teknologi No. 123", "Sleman, Yogyakarta 55581"],
    description: "Kunjungi workshop dan store kami",
    action: "https://maps.google.com/?q=GSE+Jogja",
    actionText: "Lihat di Google Maps",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Jam Operasional",
    details: ["Senin - Sabtu: 09:00 - 20:00", "Minggu: 10:00 - 18:00"],
    description: "Service & konsultasi tersedia sesuai jam kerja",
    action: null,
    actionText: null,
  },
];

/* ============================================
   SOCIAL MEDIA DATA
   ============================================ */
const SOCIAL_MEDIA = [
  {
    name: "Instagram",
    handle: "@gsejogja",
    color: "from-purple-500 to-pink-500",
  },
  { name: "Facebook", handle: "GSE Jogja", color: "from-blue-600 to-blue-800" },
  { name: "Twitter", handle: "@gse_jogja", color: "from-sky-500 to-blue-500" },
  {
    name: "YouTube",
    handle: "GSE Jogja Edu",
    color: "from-red-500 to-red-700",
  },
];

/* ============================================
   FAQ DATA
   ============================================ */
const FAQ_ITEMS = [
  {
    question: "Berapa lama waktu service?",
    answer: "Bergantung kerusakan, rata-rata 1-3 hari kerja.",
  },
  {
    question: "Apakah produk garansi internasional?",
    answer: "Ya, semua produk Apple yang kami jual bergaransi internasional.",
  },
  {
    question: "Bisa COD (Cash on Delivery)?",
    answer: "Untuk area Yogyakarta, bisa COD dengan tambahan biaya pengiriman.",
  },
];

/* ============================================
   EMERGENCY CONTACT
   ============================================ */
const EMERGENCY_CONTACT = {
  phone: "0812-3456-7890",
  label: "Telepon Darurat",
};

/* ============================================
   CONTACT PAGE COMPONENT
   ============================================ */
export default function ContactPage() {
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
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Hubungi Kami</h1>
          <p className="mx-auto max-w-2xl text-lg opacity-90">
            Tim GSE Jogja siap membantu Anda. Pilih cara terbaik untuk terhubung
            dengan kami.
          </p>
        </div>
      </div>

      {/* ============================================
          MAIN CONTENT AREA
          ============================================ */}
      <div className="container mx-auto px-4 py-12">
        {/* ============================================
            CONTACT CARDS SECTION
            ============================================ */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CONTACT_INFO.map((info, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              {/* CONTACT ICON */}
              <div className="mb-4 inline-flex rounded-lg bg-gradient-blue-green p-3 text-white">
                {info.icon}
              </div>

              {/* CONTACT TITLE */}
              <h3 className="mb-3 text-lg font-semibold text-primary-navy">
                {info.title}
              </h3>

              {/* CONTACT DETAILS */}
              <div className="mb-4 space-y-1">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-700">
                    {detail}
                  </p>
                ))}
              </div>

              {/* CONTACT DESCRIPTION */}
              <p className="mb-4 text-sm text-gray-500">{info.description}</p>

              {/* ACTION BUTTON */}
              {info.action && (
                <a
                  href={info.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-primary-blue px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary-navy"
                >
                  {info.actionText}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* ============================================
            FORM & SIDEBAR LAYOUT
            ============================================ */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* ============================================
              CONTACT FORM SECTION (PLACEHOLDER)
              ============================================ */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              {/* FORM HEADER */}
              <div className="mb-6 flex items-center">
                <MessageCircle className="mr-3 h-6 w-6 text-primary-blue" />
                <div>
                  <h2 className="text-2xl font-bold text-primary-navy">
                    Kirim Pesan Langsung
                  </h2>
                  <p className="text-gray-600">
                    Form kontak online sedang dalam pengembangan
                  </p>
                </div>
              </div>

              {/* FORM PLACEHOLDERS */}
              <div className="space-y-4">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <div className="mb-2 h-4 w-24 rounded bg-gray-300"></div>
                  <div className="h-10 rounded bg-gray-200"></div>
                </div>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <div className="mb-2 h-4 w-24 rounded bg-gray-300"></div>
                  <div className="h-10 rounded bg-gray-200"></div>
                </div>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <div className="mb-2 h-4 w-24 rounded bg-gray-300"></div>
                  <div className="h-20 rounded bg-gray-200"></div>
                </div>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <div className="h-10 w-32 rounded bg-gray-300"></div>
                </div>
              </div>

              {/* DEVELOPMENT NOTICE */}
              <div className="mt-8 rounded-lg bg-yellow-50 p-4">
                <p className="text-sm text-yellow-800">
                  <strong>Catatan:</strong> Form kontak online akan segera
                  hadir. Untuk saat ini, silakan hubungi kami via WhatsApp atau
                  telepon untuk respon lebih cepat.
                </p>
              </div>
            </div>
          </div>

          {/* ============================================
              SIDEBAR CONTENT
              ============================================ */}
          <div className="space-y-8">
            {/* SOCIAL MEDIA SECTION */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-primary-navy">
                Media Sosial
              </h3>
              <div className="space-y-3">
                {SOCIAL_MEDIA.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`flex items-center justify-between rounded-lg bg-gradient-to-r ${social.color} p-3 text-white transition-transform hover:scale-[1.02]`}
                  >
                    <span className="font-medium">{social.name}</span>
                    <span className="text-sm opacity-90">{social.handle}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ SECTION */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-primary-navy">
                📋 Pertanyaan Umum
              </h3>
              <div className="space-y-4">
                {FAQ_ITEMS.map((faq, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-gray-800">
                      {faq.question}
                    </h4>
                    <p className="text-sm text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* EMERGENCY CONTACT SECTION */}
            <div className="rounded-xl border border-primary-blue bg-blue-50 p-6">
              <div className="mb-4 flex items-center">
                <Send className="mr-3 h-6 w-6 text-primary-blue" />
                <h3 className="text-lg font-bold text-primary-navy">
                  Butuh Bantuan Cepat?
                </h3>
              </div>
              <p className="mb-4 text-gray-700">
                Untuk service darurat atau konsultasi teknis mendesak, hubungi:
              </p>
              <a
                href={`tel:${EMERGENCY_CONTACT.phone}`}
                className="block rounded-lg bg-gradient-blue-green px-4 py-3 text-center font-medium text-white hover:shadow-md"
              >
                📞 {EMERGENCY_CONTACT.label}: {EMERGENCY_CONTACT.phone}
              </a>
            </div>
          </div>
        </div>

        {/* ============================================
            BACK TO HOME LINK
            ============================================ */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center text-primary-navy hover:text-primary-blue"
          >
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
