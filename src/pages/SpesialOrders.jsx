import React from 'react';
import PageHeader from '../components/PageHeader';

export default function SpecialOrders() {
  return (
    <div>
      <PageHeader
        title="Formulir Pemesanan Khusus"
        subtitle="Silakan isi formulir ini dan tim kami akan menghubungi Anda dalam waktu 24 jam."
      />

      <div className="bg-cream-100 py-10 px-4">
        <form className="max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-md">
            <div className="space-y-5">
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
              />
              <input
                type="text"
                placeholder="Nomor Telepon"
                className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
              />
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
              />
              <select
                className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
              >
                <option>Pilih metode pengiriman</option>
                <option>Ambil di Toko</option>
                <option>Antar ke Alamat</option>
              </select>

              <div className="flex flex-col md:flex-row gap-4">
              <input
              type="text"
              placeholder="Alamat 1"
              className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
              />
              <input
                type="text"
                placeholder="Alamat 2 (Opsional)"
                className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
              />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Kota"
                className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
              />
              <input
                type="text"
                placeholder="Kode Pos"
                className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
                />
              </div>

              <textarea
                placeholder="Detail Pesanan"
                rows="6"
                className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
              ></textarea>

              <div className="flex justify-center">
                <button
                type="submit"
                className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-400 transition shadow-md"
                >
                  Kirim Pesanan
                </button>
              </div>
          </div>
        </form>
      </div>
    </div>
  );
}
