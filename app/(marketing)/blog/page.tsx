// app/(marketing)/blog/page.tsx - PLACEHOLDER SIMPLE

import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full bg-gradient-blue-green px-4 py-1.5 text-sm font-medium text-white mb-4">
            📝 Blog & Artikel
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
            Blog GSE Jogja
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Update kegiatan, tips belajar teknologi, dan berita terbaru dari GSE
            Jogja
          </p>
        </div>

        {/* Coming Soon Section */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-gradient-hero p-8 md:p-12 text-center">
            <div className="text-5xl mb-6">🚧</div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4">
              Blog Section Sedang Dibangun
            </h2>
            <p className="text-gray-600 mb-6">
              Kami sedang mempersiapkan konten-konten menarik tentang kegiatan
              GSE Jogja, tips belajar teknologi, dan berbagai artikel edukasi
              lainnya.
            </p>
            <div className="inline-flex items-center justify-center space-x-2 text-sm text-gray-500">
              <div className="h-2 w-2 rounded-full bg-primary-green animate-pulse"></div>
              <span>Update akan segera diumumkan</span>
            </div>
          </div>

          {/* Placeholder Posts Grid */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-primary-navy mb-6 text-center">
              Konten yang Akan Datang
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Workshop IoT 2024",
                  icon: "⚡",
                  category: "Kegiatan",
                },
                {
                  title: "Tips Belajar Coding",
                  icon: "💻",
                  category: "Tutorial",
                },
                { title: "Prestasi Siswa", icon: "🏆", category: "Prestasi" },
                { title: "Event Apple Day", icon: "🍎", category: "Event" },
                { title: "Kurikulum Update", icon: "📚", category: "Edukasi" },
                { title: "Testimoni Alumni", icon: "👨‍🎓", category: "Story" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="text-xs font-medium text-primary-blue bg-blue-50 px-3 py-1 rounded-full inline-block mb-2">
                    {item.category}
                  </div>
                  <h4 className="font-medium text-primary-navy">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-blue hover:underline"
          >
            ← Kembali ke Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
