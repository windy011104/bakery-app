import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

export default function SpecialOrders() {
  const [formData, setFormData] = useState({
    nama_lengkap: '',
    nomor_telepon: '',
    alamat_lengkap: '',
    metode_pengiriman: '',
    detail_pesanan: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('https://dhfcykarscpafidcmuwm.supabase.co/rest/v1/pelanggan_loyal', {
        method: 'POST',
        headers: {
          apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
          Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
          'Content-Type': 'application/json',
          Prefer: 'return=representation',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Gagal mengirim pesanan.');
      }

      setSuccess('✅ Pesanan berhasil dikirim!');
      setFormData({
        nama_lengkap: '',
        nomor_telepon: '',
        alamat_lengkap: '',
        metode_pengiriman: '',
        detail_pesanan: '',
      });
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan saat mengirim data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageHeader
        title="Form Pemesanan"
        subtitle="Isi formulir ini dan kami akan segera memproses pesanan Anda."
      />

      <div className="bg-cream-100 py-10 px-4">
        {/* Layout grid dua kolom */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 md:p-10 rounded-2xl shadow-md space-y-5"
          >
            <input
              type="text"
              placeholder="Nama Lengkap"
              value={formData.nama_lengkap}
              onChange={(e) => setFormData({ ...formData, nama_lengkap: e.target.value })}
              required
              className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
            />

            <input
              type="text"
              placeholder="Nomor Telepon"
              value={formData.nomor_telepon}
              onChange={(e) => setFormData({ ...formData, nomor_telepon: e.target.value })}
              required
              className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
            />

            <input
              type="text"
              placeholder="Alamat Lengkap"
              value={formData.alamat_lengkap}
              onChange={(e) => setFormData({ ...formData, alamat_lengkap: e.target.value })}
              required
              className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
            />

            <select
              value={formData.metode_pengiriman}
              onChange={(e) => setFormData({ ...formData, metode_pengiriman: e.target.value })}
              required
              className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
            >
              <option value="">Pilih metode pengiriman</option>
              <option value="Ambil di Toko">Ambil di Toko</option>
              <option value="Antar ke Alamat">Antar ke Alamat</option>
            </select>

            <textarea
              placeholder="Detail Pesanan"
              rows="5"
              value={formData.detail_pesanan}
              onChange={(e) => setFormData({ ...formData, detail_pesanan: e.target.value })}
              required
              className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
            ></textarea>

            {loading && <Loading text="Mengirim pesanan..." />}
            {error && <ErrorMessage message={error} />}
            {success && <p className="text-green-600 text-center font-semibold">{success}</p>}

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[var(--color-brand-green)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--color-green-dark)] transition-all"
              >
                Kirim Pesanan
              </button>
            </div>
          </form>

          {/* 4 Google Maps */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: 'Outlet Gobah',
                address: 'Jl. Ronggowarsito No.72, Suka Maju, Pekanbaru',
                embed:
                  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6581509954876!2d101.45530837472356!3d0.5133956994815821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ae9f98ff65e5%3A0xe58f19e2f6a849ac!2sJl.%20Ronggo%20Warsito%20No.72%2C%20Suka%20Maju%2C%20Kec.%20Sail%2C%20Kota%20Pekanbaru%2C%20Riau%2028127%2C%20Indonesia!5e0!3m2!1sid!2sus!4v1751455134731!5m2!1sid!2sus',
              },
              {
                title: 'Outlet Panam',
                address: 'Jl. SM Amin, Labuh Barat, Pekanbaru',
                embed:
                  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15924.34026543833!2d101.3708!3d0.4812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5aad8e17bc7b1%3A0x301e8f1fc28f3c0!2sJl.%20SM%20Amin%2C%20Pekanbaru!5e0!3m2!1sen!2sid!4v1690000000001',
              },
              {
                title: 'Outlet Simpang Tiga',
                address: 'Jl. Jend Sudirman No.11G, Simpang Tiga',
                embed:
                  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6830467002765!2d101.45186827472354!3d0.47181189952356606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5af22506efc03%3A0x18f66cd79dd4355!2sJl.%20Jend.%20Sudirman%20No.11G%2C%20Simpang%20Tiga%2C%20Kec.%20Bukit%20Raya%2C%20Kota%20Pekanbaru%2C%20Riau%2028284%2C%20Indonesia!5e0!3m2!1sid!2sus!4v1751454933013!5m2!1sid!2sus',
              },
              {
                title: 'Outlet Riau',
                address: 'Jl. Riau No.25A, Kp. Bandar, Pekanbaru',
                embed:
                  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.644303148508!2d101.4370736747235!3d0.535129299459636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ac73603ba875%3A0x50e9d704923b8458!2sJl.%20Riau%20No.25%2C%20Kp.%20Bandar%2C%20Kec.%20Senapelan%2C%20Kota%20Pekanbaru%2C%20Riau%2028155%2C%20Indonesia!5e0!3m2!1sid!2sus!4v1751455021469!5m2!1sid!2sus',
              },
            ].map((outlet, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow">
                <iframe
                  src={outlet.embed}
                  width="100%"
                  height="200"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-none w-full h-48"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={outlet.title}
                ></iframe>
                <div className="bg-white px-2 py-1 text-sm font-medium text-gray-700">
                  {outlet.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
