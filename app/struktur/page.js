'use client'
import Image from 'next/image'
import { Users2 } from 'lucide-react'

export default function StrukturDesaPage() {
  return (
    <main className="bg-gray-50 font-sans">
      {/* STRUKTUR DESA SECTION */}
      <section className="py-16 bg-gray-100" id="struktur-desa">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center font-serif border-b-2 border-gray-300 pb-4">
            Struktur Pemerintahan Desa
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 bg-opacity-90 backdrop-blur-sm">
            <p className="text-gray-700 font-serif leading-relaxed text-justify mb-8">
              Struktur Pemerintahan Desa Suradadi terdiri dari Kepala Desa, Sekretaris Desa, dan perangkat desa yang menjalankan tugas administratif, pelayanan masyarakat, serta pengelolaan pembangunan desa. Berikut susunan struktur organisasi pemerintahan Desa Suradadi.
            </p>

            {/* Struktur Organisasi Visual */}
            <div className="flex flex-col items-center space-y-8">
              {/* Kepala Desa */}
              <div className="text-center">
                <Image
                  src="/assets/kepala-desa.jpg" // Ganti dengan path foto Kepala Desa
                  alt="Kepala Desa Suradadi"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 border-4 border-amber-400"
                />
                <h3 className="text-xl font-semibold font-serif text-gray-800">Nama Kepala Desa</h3>
                <p className="text-gray-600 font-serif">Kepala Desa</p>
              </div>

              {/* Perangkat Desa */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/* Sekretaris Desa */}
                <div className="text-center">
                  <Image
                    src="/assets/sekdes.jpg" // Ganti dengan path foto Sekretaris Desa
                    alt="Sekretaris Desa"
                    width={100}
                    height={100}
                    className="rounded-full mx-auto mb-2 border-2 border-gray-300"
                  />
                  <h4 className="text-lg font-serif font-medium">Nama Sekretaris</h4>
                  <p className="text-gray-600 font-serif">Sekretaris Desa</p>
                </div>

                {/* Kasi Pemerintahan */}
                <div className="text-center">
                  <Image
                    src="/assets/kasi-pemerintahan.jpg"
                    alt="Kasi Pemerintahan"
                    width={100}
                    height={100}
                    className="rounded-full mx-auto mb-2 border-2 border-gray-300"
                  />
                  <h4 className="text-lg font-serif font-medium">Nama Kasi Pemerintahan</h4>
                  <p className="text-gray-600 font-serif">Kasi Pemerintahan</p>
                </div>

                {/* Kaur Keuangan */}
                <div className="text-center">
                  <Image
                    src="/assets/kaur-keuangan.jpg"
                    alt="Kaur Keuangan"
                    width={100}
                    height={100}
                    className="rounded-full mx-auto mb-2 border-2 border-gray-300"
                  />
                  <h4 className="text-lg font-serif font-medium">Nama Kaur Keuangan</h4>
                  <p className="text-gray-600 font-serif">Kaur Keuangan</p>
                </div>

                {/* Tambahkan Perangkat Desa lainnya disini jika perlu */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}