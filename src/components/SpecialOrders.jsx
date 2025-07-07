import { useNavigate } from "react-router-dom"; // ✅ Tambahkan ini

export default function SpecialOrders() {
  const navigate = useNavigate(); // ✅ Gunakan hook navigate

  const handleOrderClick = () => {
    navigate("/special-orders"); // ✅ Arahkan ke halaman spesialorder
  };

  return (
    <section
      id="special-orders"
      className="flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-10 bg-[var(--color-cream)] py-14 px-4 md:px-16"
    >
      {/* Text Konten */}
      <div id="special-orders-text" className="space-y-5 text-center md:text-left">
        <h3
          id="special-orders-title"
          className="text-2xl sm:text-3xl md:text-4xl font-poppins-extrabold text-[var(--color-brand-green)]"
        >
          Paket Kue Spesial
        </h3>
        <p
          id="special-orders-description"
          className="text-sm sm:text-base text-gray-700 leading-relaxed font-poppins"
        >
          Rayakan setiap momen berharga dengan kue istimewa yang bisa disesuaikan sesuai selera dan tema acaramu.
          Dari ulang tahun, hantaran, hingga hampers elegan — kami hadirkan rasa manis dan tampilan yang memikat hati.
        </p>
        <div className="flex justify-center md:justify-start">
          <button
            onClick={handleOrderClick} // ✅ Tambahkan handler klik
            id="special-orders-button"
            className="bg-[var(--color-green-dark)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--color-green)] transition-all shadow-md"
          >
            Order Now
          </button>
        </div>
      </div>

      {/* Gambar */}
      <div className="w-full flex justify-center">
        <img
          id="special-orders-image"
          src="/img/spesial.jpg"
          alt="Special Cake"
          className="w-full h-auto max-w-sm sm:max-w-md md:max-w-full max-h-[400px] object-cover rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}
