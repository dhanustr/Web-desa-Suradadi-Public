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
              <Image src="/assets/struktur.jpg" alt="struktur organisasi" width={900} height={600} className='rounded-lg shadow-lg border border-grey-200'/>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}