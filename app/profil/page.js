'use client'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { MapPinned, Users2 } from 'lucide-react'

const PetaDesa = dynamic(() => import('@/components/public/PetaDesa'), { ssr: false })

export default function ProfilDesaPage() {
  return (
    <main className="bg-gray-50 font-sans">
      {/* GAMBARAN UMUM SECTION */}
      <section className="py-16 bg-amber-50" id="gambaran-umum">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center font-serif border-b-2 border-gray-300 pb-4">
            Gambaran Umum
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 bg-opacity-90 backdrop-blur-sm">
            <p className="text-gray-700 font-serif leading-relaxed text-justify">
              Desa Suradadi adalah salah satu dari 11 desa yang terletak di kecamatan Suradadi, Kabupaten Tegal, Provinsi Jawa Tengah. Desa Suradadi merupakan pusat pemerintahan dari Kecamatan Suradadi. selain itu, masyarakat suradadi mayoritas bermata pencaharian sebagai petani dan nelayan
            </p>
          </div>
        </div>
      </section>

      {/* VISI DAN MISI SECTION */}
      <section className="py-16 bg-gray-100" id="visi-misi">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center font-serif border-b-2 border-gray-300 pb-4">
            Visi dan Misi
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 bg-opacity-90 backdrop-blur-sm">
            <p className="text-gray-700 font-serif leading-relaxed text-justify">
              <strong>Visi:</strong> Gotong royong, bahu membahu masyarakat madani<br/>
              <strong>Misi:</strong><br/>
              1) meningkatkan kapasitas kelembagaan serta sarana dan prasarana usaha dibidang perikanan dan pertanian yang mendukung terwujudnya desa SURADADI sebagai desa swadaya<br/>
              2) meningkatkan kualitas kehidupan dengan membangun budaysehat, budaya belajar dan penguatan peran perempuan dalam pembangunan<br/>
              3) meningkatkan jumlah pendapatan asli desa dan mengelola secara transparan, jujur, proposional untuk sebesar-besarnya kesejahteraan rakyat<br/>
              4) mewujudkan perintah desa yang baik dan bersih melalui peningkatan pelayanan pemerintah umum<br/>
            </p>
          </div>
        </div>
      </section>

      {/* PETA LOKASI DAN BATASAN SECTION */}
<section className="py-16 bg-amber-50" id="peta-lokasi">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center font-serif border-b-2 border-gray-300 pb-4">
      Peta Lokasi dan Batasan
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Box Peta Lokasi */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 bg-opacity-90 backdrop-blur-sm">
        <MapPinned className="w-16 h-16 mx-auto text-green-600 mb-4" />
        <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center font-serif">
          Peta Lokasi
        </h3>
        <div className="rounded-2xl overflow-hidden shadow-md">
          <PetaDesa />
        </div>
      </div>

      {/* Box Batasan & Luas Desa */}
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 bg-opacity-90 backdrop-blur-sm">
    <MapPinned className="w-16 h-16 mx-auto text-green-600 mb-4" />
    <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center font-serif">
        Batasan dan Luas Desa
    </h3>

    <div className="overflow-x-auto font-serif">
        {/* Tabel Batasan Desa */}
        <table className="w-full table-auto text-left border border-gray-300 mb-6">
        <thead>
            <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b">Arah</th>
            <th className="px-4 py-2 border-b">Batas Desa</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td className="px-4 py-2 border-b">Utara</td>
            <td className="px-4 py-2 border-b">Laut Jawa</td>
            </tr>
            <tr>
            <td className="px-4 py-2 border-b">Timur</td>
            <td className="px-4 py-2 border-b">Desa Bojongsana</td>
            </tr>
            <tr>
            <td className="px-4 py-2 border-b">Selatan</td>
            <td className="px-4 py-2 border-b">Desa Kertasari dan Desa Jatimulya</td>
            </tr>
            <tr>
            <td className="px-4 py-2 border-b">Barat</td>
            <td className="px-4 py-2 border-b">Desa Purwahamba</td>
            </tr>
        </tbody>
        </table>

        {/* Tabel Luas Wilayah */}
        <table className="w-full table-auto text-left border border-gray-300">
        <thead>
            <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b">Kategori</th>
            <th className="px-4 py-2 border-b">Luas (Hektar)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td className="px-4 py-2 border-b">Total Luas</td>
            <td className="px-4 py-2 border-b font-semibold">624</td>
            </tr>
            <tr>
            <td className="px-4 py-2 border-b">Bangunan & Pekarangan</td>
            <td className="px-4 py-2 border-b">113</td>
            </tr>
            <tr>
            <td className="px-4 py-2">Sawah</td>
            <td className="px-4 py-2">511</td>
            </tr>
        </tbody>
        </table>
    </div>
    </div>
    </div>
  </div>
</section>

    </main>
  )
}