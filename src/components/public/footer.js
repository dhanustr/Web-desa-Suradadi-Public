import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-blue-300 text-black py-6 text-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-4 flex justify-between items-start gap-4">
        {/* Kolom 1 - Pemerintah Desa + Logo Horizontal */}
        <div className="flex items-start gap-3">
          <Image
            src="/assets/logoDesa.png" // pastikan file ini ada di folder /public/assets
            alt="Logo Desa Suradadi"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>

        <div className='flex flex-col space-y-1'> 
          <div className="space-y-1">
            <h4 className="text-yellow-700 font-bold text-xs">Pemerintah Desa Suradadi</h4>
            <p className="text-xs">Jalan Purwa No. 11</p>
            <p className="text-xs">Desa Suradadi, Kec. Suradadi</p>
            <p className="text-xs">Kabupaten Tegal, Jawa Tengah</p>
            <p className="text-xs">Provinsi Jawa Tengah, 52182</p>
          </div>
        </div>

        {/* Kolom 3 - Kontak */}
        <div className="flex flex-col space-y-1">
          <h4 className="text-yellow-700 font-bold text-xs">Hubungi Kami</h4>
          <p className="text-xs">Ani Sugiharti / 0822-2959-7268</p>
          <p className="text-xs">tubaguskamaluddin@gmail.com</p>
          <p className="text-xs">Jam Kerja: Senin - Kamis (08:00 - 14:00) dan Jumat (08.00 - 11.00)</p>
        </div>
      </div>

      <div className="text-center mt-4 pt-2 border-t border-white/30 text-xs max-w-5xl mx-auto px-4 sm:px-6 lg:px-4">
        © 2025 Digital Desa Suradadi. Semua Hak Dilindungi.
      </div>
    </footer>
  )
}