import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // ✅ Tambah useNavigate
import PageHeader from '../components/PageHeader';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

// URL Supabase A (produk)
const PRODUCT_API_URL = 'https://rutrfblexvvwtmngrlje.supabase.co/rest/v1/products';
const PRODUCT_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1dHJmYmxleHZ2d3RtbmdybGplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NzYyOTgsImV4cCI6MjA2NTU1MjI5OH0.50y2fw1jUPew_YM7G-WJ8Bw14Xrg8SBISXpEtXcFxGA';

// URL Supabase B (checkout)
const CHECKOUT_API_URL = 'https://dhfcykarscpafidcmuwm.supabase.co/rest/v1/checkout';
const CHECKOUT_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoZmN5a2Fyc2NwYWZpZGNtdXdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NDQ4ODksImV4cCI6MjA2NTUyMDg4OX0.nd_gvyNavdaiwgn3PbXCzhMAPOy149Xll6MaCoymyDY';

function formatRupiah(angka) {
  return 'Rp' + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export default function Checkout() {
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ Inisialisasi navigate
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    nama: '',
    nomor_telepon: '',
    alamat: '',
    metode_pembayaran: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${PRODUCT_API_URL}?id=eq.${id}&select=*`, {
          headers: {
            apikey: PRODUCT_API_KEY,
            Authorization: `Bearer ${PRODUCT_API_KEY}`,
          },
        });
        const data = await res.json();
        setProduct(data[0]);
      } catch (err) {
        setError('Produk gagal dimuat');
      }
    };
    fetchProduct();
  }, [id]);

  if (!product)
    return <p className="text-center mt-20 text-red-600">Produk tidak ditemukan.</p>;

  const total = product.price * quantity;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(CHECKOUT_API_URL, {
        method: 'POST',
        headers: {
          apikey: CHECKOUT_API_KEY,
          Authorization: `Bearer ${CHECKOUT_API_KEY}`,
          'Content-Type': 'application/json',
          Prefer: 'return=representation',
        },
        body: JSON.stringify({
          nama: formData.nama,
          nomor_telepon: formData.nomor_telepon,
          alamat: formData.alamat,
          metode_pembayaran: formData.metode_pembayaran,
          produk: product.name,
          jumlah: quantity,
          total_harga: total
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Gagal mengirim pesanan');
      }

      // ✅ Redirect ke halaman sukses setelah berhasil
      navigate('/sukses');
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
        {/* Produk */}
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

        {/* Form */}
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
            className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3"
          />

          <input
            type="text"
            placeholder="Nomor Telepon"
            value={formData.nomor_telepon}
            onChange={(e) => setFormData({ ...formData, nomor_telepon: e.target.value })}
            required
            className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3"
          />

          <input
            type="text"
            placeholder="Alamat Lengkap"
            value={formData.alamat}
            onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
            required
            className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3"
          />

          {formData.alamat.trim() && (
            <iframe
              title="Peta Lokasi"
              width="100%"
              height="250"
              className="rounded-xl shadow-md"
              loading="lazy"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(formData.alamat)}&z=15&output=embed`}
            />
          )}

          <select
            value={formData.metode_pembayaran}
            onChange={(e) => setFormData({ ...formData, metode_pembayaran: e.target.value })}
            required
            className="w-full border border-green-200 rounded-xl bg-green-50 px-4 py-3"
          >
            <option value="">Pilih Metode Pembayaran</option>
            <option value="BCA">Transfer Bank BCA</option>
            <option value="Mandiri">Transfer Bank Mandiri</option>
            <option value="BRI">Transfer Bank BRI</option>
          </select>

          {formData.metode_pembayaran && (
            <div className="text-sm text-gray-800 bg-green-50 p-3 rounded-xl border border-green-200">
              <p className="font-semibold mb-1">Nomor Rekening:</p>
              {formData.metode_pembayaran === 'BCA' && (
                <p>BCA - <strong>1234567890</strong> a/n <strong>Yummi Bakery</strong></p>
              )}
              {formData.metode_pembayaran === 'Mandiri' && (
                <p>Mandiri - <strong>9876543210</strong> a/n <strong>Yummi Bakery</strong></p>
              )}
              {formData.metode_pembayaran === 'BRI' && (
                <p>BRI - <strong>4567891230</strong> a/n <strong>Yummi Bakery</strong></p>
              )}
            </div>
          )}

          {loading && <Loading text="Memproses checkout..." />}
          {error && <ErrorMessage message={error} />}

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[var(--color-green-dark)] hover:bg-[var(--color-green)] text-white px-6 py-3 rounded-full font-semibold transition-all"
            >
              Kirim Pesanan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
