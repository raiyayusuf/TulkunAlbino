// app/(marketing)/contact/success/page.tsx
export default function ContactSuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-blue-green text-white">
            ✓
          </div>
          <h1 className="text-2xl font-bold text-primary-navy">
            Pesan Terkirim!
          </h1>
          <p className="mt-2 text-gray-600">
            Terima kasih telah menghubungi GSE Jogja. Tim kami akan membalas
            pesan Anda dalam 1x24 jam.
          </p>
        </div>

        <div className="space-y-4">
          <a
            href="/"
            className="block rounded-lg bg-gradient-blue-green py-3 text-center font-medium text-white hover:shadow-md"
          >
            Kembali ke Beranda
          </a>
          <a
            href="/contact"
            className="block rounded-lg border border-gray-300 py-3 text-center font-medium text-gray-700 hover:bg-gray-50"
          >
            Kirim Pesan Lain
          </a>
        </div>
      </div>
    </div>
  );
}
