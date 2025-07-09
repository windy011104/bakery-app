import { Link } from "react-router-dom";
import { FaCheckCircle, FaBoxOpen, FaTruck, FaHome, FaUtensils } from "react-icons/fa";

export default function OrderSuccess() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[var(--color-sugar)] px-6 py-16 font-poppins">
      <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 max-w-3xl w-full text-center space-y-8">
        {/* Icon sukses */}
        <FaCheckCircle className="text-[var(--color-green-dark)] text-6xl mx-auto animate-bounce" />

        {/* Judul */}
        <h2 className="text-3xl sm:text-4xl font-poppins-extrabold text-[var(--color-green-dark)]">
          Pesanan Anda Sedang Diproses!
        </h2>

        {/* Deskripsi */}
        <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
          Terima kasih telah memesan di <strong>Yummi Bakery</strong>. Berikut alur pengiriman pesanan Anda:
        </p>

        {/* Alur Proses Pesanan */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm text-[var(--color-brown)]">
          <div className="flex flex-col items-center">
            <FaBoxOpen className="text-4xl text-[var(--color-caramel)] mb-2" />
            <p className="font-semibold">Diproses</p>
          </div>
          <div className="flex flex-col items-center">
            <FaTruck className="text-4xl text-blue-500 mb-2 animate-pulse" />
            <p className="font-semibold">Dalam Perjalanan</p>
          </div>
          <div className="flex flex-col items-center">
            <FaHome className="text-4xl text-green-600 mb-2" />
            <p className="font-semibold">Sampai Rumah</p>
          </div>
        </div>

        {/* Tombol Kembali */}
        <Link
          to="/"
          className="inline-block bg-[var(--color-green-dark)] hover:bg-[var(--color-green)] text-white px-6 py-3 rounded-full font-semibold transition-all"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </section>
  );
}
