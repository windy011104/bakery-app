import React, { useState } from 'react';
// Import komponen header halaman
import PageHeader from '../components/PageHeader';
// Import komponen loading saat proses kirim
import Loading from '../components/Loading';
// Import komponen pesan error
import ErrorMessage from '../components/ErrorMessage';

export default function SpecialOrders() {
  // State untuk menyimpan data form
  const [formData, setFormData] = useState({
    nama_lengkap: '',
    nomor_telepon: '',
    alamat_lengkap: '',
    metode_pengiriman: '',
    detail_pesanan: '',
  });

  // State untuk loading, error, dan sukses
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fungsi saat form dikirim
  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah reload halaman
    setLoading(true); // Tampilkan loading
    setError('');     // Reset error
    setSuccess('');   // Reset pesan sukses

    try {
      // Kirim data ke Supabase
      const response = await fetch('https://dhfcykarscpafidcmuwm.supabase.co/rest/v1/pelanggan_loyal', {
        method: 'POST',
        headers: {
          apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoZmN5a2Fyc2NwYWZpZGNtdXdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NDQ4ODksImV4cCI6MjA2NTUyMDg4OX0.nd_gvyNavdaiwgn3PbXCzhMAPOy149Xll6MaCoymyDY', // API Key dari Supabase
          Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoZmN5a2Fyc2NwYWZpZGNtdXdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NDQ4ODksImV4cCI6MjA2NTUyMDg4OX0.nd_gvyNavdaiwgn3PbXCzhMAPOy149Xll6MaCoymyDY`, // Token auth
          'Content-Type': 'application/json', // Format data JSON
          Prefer: 'return=representation', // Minta respon data yang dikirim balik
        },
        body: JSON.stringify(formData), // Ubah formData jadi JSON
      });

      // Jika respon bukan 200-an
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Gagal mengirim pesanan.');
      }

      // Jika sukses
      setSuccess('✅ Pesanan berhasil dikirim!');
      // Reset form
      setFormData({
        nama_lengkap: '',
        nomor_telepon: '',
        alamat_lengkap: '',
        metode_pengiriman: '',
        detail_pesanan: '',
      });
    } catch (err) {
      // Tangkap error
      setError(err.message || 'Terjadi kesalahan saat mengirim data.');
    } finally {
      // Sembunyikan loading
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Header halaman */}
      <PageHeader
        title="Form Pemesanan"
        subtitle="Isi formulir ini dan kami akan segera memproses pesanan Anda."
      />

      <div className="bg-cream-100 py-10 px-4">
        {/* Form pemesanan */}
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-md space-y-5"
        >
          {/* Input nama lengkap */}
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={formData.nama_lengkap}
            onChange={(e) => setFormData({ ...formData, nama_lengkap: e.target.value })}
            required
            className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
          />

          {/* Input nomor telepon */}
          <input
            type="text"
            placeholder="Nomor Telepon"
            value={formData.nomor_telepon}
            onChange={(e) => setFormData({ ...formData, nomor_telepon: e.target.value })}
            required
            className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
          />

          {/* Input alamat lengkap */}
          <input
            type="text"
            placeholder="Alamat Lengkap"
            value={formData.alamat_lengkap}
            onChange={(e) => setFormData({ ...formData, alamat_lengkap: e.target.value })}
            required
            className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
          />

          {/* Pilihan metode pengiriman */}
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

          {/* Textarea untuk detail pesanan */}
          <textarea
            placeholder="Detail Pesanan"
            rows="5"
            value={formData.detail_pesanan}
            onChange={(e) => setFormData({ ...formData, detail_pesanan: e.target.value })}
            required
            className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
          ></textarea>

          {/* Menampilkan status */}
          {loading && <Loading text="Mengirim pesanan..." />}
          {error && <ErrorMessage message={error} />}
          {success && <p className="text-green-600 text-center font-semibold">{success}</p>}

          {/* Tombol submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[var(--color-brand-green)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--color-green-dark)] transition-all"
            >
              Kirim Pesanan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
