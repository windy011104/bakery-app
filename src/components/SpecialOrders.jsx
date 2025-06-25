export default function SpecialOrders() {
  return (
    <section
      id="special-orders"
      className="grid md:grid-cols-2 items-center gap-10 bg-[var(--color-cream)] py-20 px-6 md:px-16"
    >
      {/* Text Konten */}
      <div id="special-orders-text" className="space-y-6">
        <h3
          id="special-orders-title"
          className="text-4xl font-poppins-extrabold text-[var(--color-brand-green)]"
        >
          Paket Kue Spesial
        </h3>
        <p
          id="special-orders-description"
          className="text-base font-poppins text-gray-700 leading-relaxed"
        >
          Rayakan setiap momen berharga dengan kue istimewa yang bisa disesuaikan sesuai selera dan tema acaramu.
          Dari ulang tahun, hantaran, hingga hampers elegan — kami hadirkan rasa manis dan tampilan yang memikat hati.
        </p>
        <button
          id="special-orders-button"
          className="bg-[var(--color-green-dark)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-green)] transition-all shadow-md"
        >
          Order Now
        </button>
      </div>

      {/* Gambar */}
      <img
        id="special-orders-image"
        src="/img/spesial.jpg"
        alt="Special Cake"
        className="w-full h-auto max-h-[400px] object-cover rounded-2xl shadow-lg"
      />
    </section>
  );
}
