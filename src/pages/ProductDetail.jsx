import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { FiShoppingCart } from 'react-icons/fi';
import { FaUniversity } from 'react-icons/fa';

// API Supabase
const API_URL = 'https://rutrfblexvvwtmngrlje.supabase.co/rest/v1/products';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1dHJmYmxleHZ2d3RtbmdybGplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NzYyOTgsImV4cCI6MjA2NTU1MjI5OH0.50y2fw1jUPew_YM7G-WJ8Bw14Xrg8SBISXpEtXcFxGA';

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  'Content-Type': 'application/json',
};

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${API_URL}?id=eq.${id}&select=*`, {
          method: 'GET',
          headers,
        });
        const data = await res.json();
        setProduct(data[0]); // hanya satu produk
      } catch (err) {
        console.error('Gagal mengambil data produk:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <p className="text-center text-[var(--color-brown)] mt-12">Memuat detail produk...</p>;
  }

  if (!product) {
    return (
      <p className="text-center mt-20 text-red-600 text-lg font-semibold">
        Produk tidak ditemukan.
      </p>
    );
  }

  return (
    <div>
      <PageHeader
        title="Detail Produk"
        subtitle="Lihat informasi lengkap produk sebelum melakukan pemesanan."
      />

      <div className="max-w-4xl mx-auto px-4 pb-10 mt-8">
        <div className="bg-white rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 md:h-72 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="p-5 flex flex-col justify-between text-[var(--color-brown)]">
            <div>
              <h1 className="text-2xl font-bold text-[var(--color-green-dark)] mb-2">
                {product.name}
              </h1>

              {product.tag && (
                <span className="inline-block bg-[var(--color-caramel)] text-white text-xs px-3 py-1 rounded-full uppercase font-semibold shadow-sm">
                  {product.tag}
                </span>
              )}

              {product.rating && (
                <div className="flex items-center mt-3 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < product.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.963c.3.92-.755 1.688-1.538 1.118l-3.39-2.462a1 1 0 00-1.176 0l-3.39 2.462c-.783.57-1.838-.197-1.538-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.047 9.39c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.962z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-xs text-gray-600">{product.rating}.0</span>
                </div>
              )}

              <p className="mt-4 text-xl font-bold text-[var(--color-caramel)]">
                Rp {Number(product.price).toLocaleString('id-ID')}
              </p>

              <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                {product.description}
              </p>

              {product.ingredients && (
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">Bahan-bahan:</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {product.ingredients.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {product.availability && (
                <p className="mt-3 italic text-sm text-gray-500">
                  <strong>Ketersediaan:</strong> {product.availability}
                </p>
              )}

              <div className="mt-5">
                <h3 className="text-sm font-semibold text-gray-800">Metode Pembayaran:</h3>
                <div className="flex items-center gap-2 text-sm text-gray-700 mt-1">
                  <FaUniversity className="text-[var(--color-green-dark)]" />
                  Transfer Bank (BCA, Mandiri, BRI)
                </div>
                <p className="text-xs italic text-gray-500 mt-1">
                  Detail rekening ditampilkan saat checkout.
                </p>
              </div>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => navigate(`/checkout/${product.id}`)}
                  className="flex items-center justify-center gap-2 border border-[var(--color-green)] text-[var(--color-green-dark)] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[var(--color-green)] hover:text-white transition-all"
                >
                  <FiShoppingCart className="w-4 h-4" />
                  Checkout
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
