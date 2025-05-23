import React from 'react';
import PageHeader from '../components/PageHeader';

export default function Contact() {
  return (
    <div>
      <PageHeader
        title="Hubungi Kami"
        subtitle="Silakan isi formulir berikut dan tim kami akan merespons dalam waktu 24 jam."
      />

      <div className="bg-cream-100 py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          
          {/* Kiri: Kontak dan Kesan Pesan */}
          <div className="mt-8 font-poppins-extrabold bg-orange-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-orange-500 mb-3">Kesan & Pesan Pelanggan</h3>
              <p className="font-poppins text-gray-700leading-relaxed">
              Setiap senyum dan cerita darimu adalah bahan rahasia kami. 
              Kami ingin tahu bagaimana Yummy Baker hadir di harimu — entah itu kejutan ulang tahun, camilan sore, atau sekadar teman kopi.  
              Tinggalkan kesan dan pesanmu di sini, karena suaramu adalah inspirasi bagi setiap adonan yang kami buat.
              </p>
          </div>

          {/* Kanan: Formulir Kontak */}
          <form className="bg-white p-6 md:p-8 rounded-2xl shadow-md space-y-5">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
            />
            <textarea
              rows="6"
              placeholder="Pesan Anda"
              className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-400 transition shadow-md"
              > Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
