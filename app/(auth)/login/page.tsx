// app/(auth)/login/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center">
            {/* Logo GSE */}
            <div className="relative h-36 w-36">
              <Image
                src="/logo/gse.png"
                alt="GSE Jogja Logo"
                fill
                className="object-contain"
                sizes="130px"
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-primary-navy">
            Masuk ke Akun
          </h1>
          <p className="mt-2 text-gray-600">Halaman login dalam pengembangan</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="h-10 rounded-lg bg-gray-100"></div>
            <div className="h-10 rounded-lg bg-gray-100"></div>
          </div>

          <div className="h-10 rounded-lg bg-gray-200"></div>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              Belum punya akun?{" "}
              <Link
                href="/register"
                className="font-medium text-primary-blue hover:underline"
              >
                Daftar di sini
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <Link
            href="/"
            className="flex items-center justify-center text-primary-navy hover:text-primary-blue"
          >
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
