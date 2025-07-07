// Import library React dan hook useState
import React, { useState } from 'react';
// Import komponen header halaman, loading spinner, dan error message
import PageHeader from '../components/PageHeader';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

// Komponen utama Contact
export default function Contact() {
  // State untuk menyimpan data input pengguna
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: '',
    rating: 0, // rating default 0 (belum ada)
  });

  // State untuk loading, error, dan pesan sukses
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fungsi saat form disubmit
  const handleSubmit = async (e) => {
    e.preventDefault(); // mencegah reload halaman
    setLoading(true); // tampilkan loading
    setError(''); // reset error
    setSuccess(''); // reset success

    const { nama, email, pesan, rating } = formData;

    // Validasi form: semua field dan rating wajib diisi
    if (!nama || !email || !pesan || rating === 0) {
      setError('⚠️ Semua kolom dan rating wajib diisi.');
      setLoading(false);
      return;
    }

    // Validasi format email menggunakan regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('⚠️ Format email tidak valid.');
      setLoading(false);
      return;
    }

    try {
      // Kirim data ke Supabase REST API
      const response = await fetch('https://dhfcykarscpafidcmuwm.supabase.co/rest/v1/pesan_pengguna', {
        method: 'POST',
        headers: {
          // Sertakan API key dan token autentikasi
          apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoZmN5a2Fyc2NwYWZpZGNtdXdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NDQ4ODksImV4cCI6MjA2NTUyMDg4OX0.nd_gvyNavdaiwgn3PbXCzhMAPOy149Xll6MaCoymyDY',
          Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoZmN5a2Fyc2NwYWZpZGNtdXdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NDQ4ODksImV4cCI6MjA2NTUyMDg4OX0.nd_gvyNavdaiwgn3PbXCzhMAPOy149Xll6MaCoymyDY',
          'Content-Type': 'application/json',
          Prefer: 'return=representation',
        },
        body: JSON.stringify(formData), // data dikirim dalam format JSON
      });

      // Jika gagal, ambil pesan error dari response
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Gagal mengirim pesan.');
      }

      // Jika berhasil, tampilkan pesan sukses dan reset form
      setSuccess('✅ Pesan berhasil dikirim!');
      setFormData({ nama: '', email: '', pesan: '', rating: 0 });
    } catch (err) {
      // Tangani error dan tampilkan pesan kesalahan
      setError(err.message || 'Terjadi kesalahan saat mengirim pesan.');
    } finally {
      // Hentikan loading apapun hasilnya
      setLoading(false);
    }
  };

  // Fungsi untuk menangani klik pada rating
  const handleRating = (val) => {
    setFormData({ ...formData, rating: val }); // ubah rating berdasarkan bintang yang diklik
  };

  return (
    <div>
      <PageHeader
        title="Kesan & Pesan"
        subtitle="Kami ingin mendengar pengalaman Anda bersama Yummy Bakery."
      />

      <div className="bg-cream-100 py-10 px-4">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-md space-y-5"
        >
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={formData.nama}
            onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
            required
            className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
          />

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
          />

          <textarea
            placeholder="Pesan Anda"
            rows="5"
            value={formData.pesan}
            onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
            required
            className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
          ></textarea>

          <div>
            <p className="font-medium text-gray-700">Rating:</p>
            <div className="flex gap-2 text-yellow-400 text-2xl mt-1">
              {[1, 2, 3, 4, 5].map((val) => (
                <button
                  type="button"
                  key={val}
                  onClick={() => handleRating(val)}
                  className={`transition ${val <= formData.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {loading && <Loading text="Mengirim pesan..." />}
          {error && <ErrorMessage message={error} />}
          {success && <p className="text-green-600 text-center font-semibold">{success}</p>}

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[var(--color-brand-green)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--color-green-dark)] transition-all"
            >
              Kirim Pesan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}