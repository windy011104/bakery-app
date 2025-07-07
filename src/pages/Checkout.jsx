import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import rawProducts from '../assets/bestSellers.json';
import PageHeader from '../components/PageHeader';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { FaUniversity } from 'react-icons/fa';

// Fungsi untuk format angka jadi Rupiah
function formatRupiah(angka) {
  return 'Rp' + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export default function Checkout() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    nama: '',
    nomor_telepon: '',
    alamat: '',
    metode_pembayaran: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Konversi harga dari string ke angka & tambahkan id
  const product = rawProducts.map((p, index) => ({
    ...p,
    id: index.toString(),
    price: parseInt(p.price.replace(/[Rp. ]/g, '')), // <- konversi harga string ke number
  })).find(p => p.id === id);

  if (!product)
    return <p className="text-center mt-20 text-red-600">Produk tidak ditemukan.</p>;

  const total = product.price * quantity;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('https://your-supabase-url/rest/v1/checkout', {
        method: 'POST',
        headers: {
          apikey: 'your-api-key',
          Authorization: 'your-auth-key',
          'Content-Type': 'application/json',
          Prefer: 'return=representation',
        },
        body: JSON.stringify({
          ...formData,
          produk: product.name,
          jumlah: quantity,
          total_harga: total,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Gagal mengirim pesanan');
      }

      setSuccess('✅ Checkout berhasil! Kami akan menghubungi Anda segera.');
      setFormData({ nama: '', nomor_telepon: '', alamat: '', metode_pembayaran: '' });
      setQuantity(1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-6 pb-10 px-4">
      <PageHeader
        title="Checkout Produk"
        subtitle="Isi informasi pembelian untuk menyelesaikan pemesanan Anda."
      />

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 mt-10">
        {/* Detail Produk */}
        <div className="bg-white p-6 rounded-3xl shadow-lg space-y-4 text-[var(--color-brown)]">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-xl w-full h-48 object-cover shadow-md"
          />
          <h2 className="text-xl font-extrabold text-[var(--color-green-dark)]">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-[var(--color-caramel)] font-bold text-lg">
            Harga: {formatRupiah(product.price)}
          </p>

          <div className="flex items-center gap-3 mt-2">
            <button
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              className="px-3 py-1 border border-gray-300 rounded text-lg"
            >
              –
            </button>
            <span className="min-w-[24px] text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(q => q + 1)}
              className="px-3 py-1 border border-gray-300 rounded text-lg"
            >
              +
            </button>
          </div>

          <p className="mt-2 text-[var(--color-brown)] font-semibold">
            Total: <span className="text-[var(--color-caramel)]">{formatRupiah(total)}</span>
          </p>
        </div>

        {/* Form Checkout */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-3xl shadow-lg space-y-5 text-[var(--color-brown)]"
        >
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={formData.nama}
            onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
            required
            className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 placeholder-gray-600 focus:ring-2 focus:ring-[var(--color-green)]"
          />

          <input
            type="text"
            placeholder="Nomor Telepon"
            value={formData.nomor_telepon}
            onChange={(e) => setFormData({ ...formData, nomor_telepon: e.target.value })}
            required
            className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 placeholder-gray-600 focus:ring-2 focus:ring-[var(--color-green)]"
          />

          <input
            type="text"
            placeholder="Alamat Lengkap"
            value={formData.alamat}
            onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
            required
            className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 placeholder-gray-600 focus:ring-2 focus:ring-[var(--color-green)]"
          />

          <select
            value={formData.metode_pembayaran}
            onChange={(e) => setFormData({ ...formData, metode_pembayaran: e.target.value })}
            required
            className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3 focus:ring-2 focus:ring-[var(--color-green)]"
          >
            <option value="">Pilih Metode Pembayaran</option>
            <option value="BCA">Transfer BCA</option>
            <option value="Mandiri">Transfer Mandiri</option>
            <option value="BRI">Transfer BRI</option>
          </select>

          <div className="flex items-center gap-2 text-sm text-gray-700 mt-2">
            <FaUniversity className="text-[var(--color-green-dark)]" />
            Rekening ditampilkan setelah checkout berhasil.
          </div>

          {loading && <Loading text="Memproses checkout..." />}
          {error && <ErrorMessage message={error} />}
          {success && <p className="text-green-600 font-semibold text-center">{success}</p>}

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[var(--color-green-dark)] hover:bg-[var(--color-green)] text-white px-6 py-3 rounded-full font-semibold transition-all"
            >
              Konfirmasi Checkout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
