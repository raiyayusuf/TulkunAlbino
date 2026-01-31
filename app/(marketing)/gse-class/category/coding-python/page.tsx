// // app/(marketing)/gse-class/category/coding-python/page.tsx
// import React from "react";
// import Link from "next/link";

// export default function CodingPythonPage() {
//   return (
//     <div className="min-h-screen bg-white">
//       <div className="bg-gradient-to-r from-blue-500 to-cyan-500 py-12 text-white">
//         <div className="container mx-auto px-4">
//           <Link
//             href="/gse-class"
//             className="mb-4 inline-flex items-center text-blue-100 hover:text-white"
//           >
//             ← Kembali ke GSE Class
//           </Link>
//           <h1 className="text-4xl font-bold">Coding Python</h1>
//           <p className="mt-2 text-lg opacity-90">
//             Belajar pemrograman Python dari dasar hingga mahir
//           </p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-12">
//         <div className="mb-8 rounded-xl border border-blue-200 bg-blue-50 p-6">
//           <h2 className="mb-4 text-2xl font-bold text-primary-navy">
//             🚧 Halaman dalam Pengembangan
//           </h2>
//           <p className="text-gray-700">
//             Detail kelas Coding Python sedang disiapkan. Informasi tentang
//             materi, jadwal, dan biaya akan segera tersedia.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//           <div className="rounded-lg border border-gray-200 p-6">
//             <h3 className="mb-4 text-xl font-semibold text-primary-navy">
//               Apa yang akan dipelajari?
//             </h3>
//             <ul className="space-y-2 text-gray-600">
//               <li>• Dasar-dasar Python dan sintaks</li>
//               <li>• Struktur data dan algoritma</li>
//               <li>• Object-Oriented Programming (OOP)</li>
//               <li>• Database dengan Python</li>
//               <li>• Project akhir yang aplikatif</li>
//             </ul>
//           </div>

//           <div className="rounded-lg border border-gray-200 p-6">
//             <h3 className="mb-4 text-xl font-semibold text-primary-navy">
//               Informasi Kontak
//             </h3>
//             <p className="text-gray-600">
//               Untuk informasi pendaftaran dan jadwal kelas, silakan hubungi:
//             </p>
//             <div className="mt-4">
//               <Link
//                 href="/contact"
//                 className="inline-block rounded-lg bg-gradient-blue-green px-6 py-3 font-medium text-white hover:shadow-md"
//               >
//                 Hubungi Kami
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// app/(marketing)/gse-class/category/coding-python/page.tsx
import React from "react";
import Link from "next/link";

export default function CodingPythonPage() {
  return (
    <div>
      {/* Hapus header gradient yang duplicate */}
      {/* <div className="bg-gradient-to-r from-blue-500 to-cyan-500 py-12 text-white"> */}

      {/* Content langsung */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary-navy">Coding Python</h1>
        <p className="mt-2 text-gray-600">
          Belajar pemrograman Python dari dasar hingga mahir
        </p>
      </div>

      <div className="mb-8 rounded-xl border border-blue-200 bg-blue-50 p-6">
        <h2 className="mb-4 text-2xl font-bold text-primary-navy">
          🚧 Halaman dalam Pengembangan
        </h2>
        <p className="text-gray-700">
          Detail kelas Coding Python sedang disiapkan. Informasi tentang materi,
          jadwal, dan biaya akan segera tersedia.
        </p>
      </div>

      {/* ... rest of content */}
    </div>
  );
}
