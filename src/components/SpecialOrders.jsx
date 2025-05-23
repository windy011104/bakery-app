export default function SpecialOrders() {
  return (
    <section
      id="special-orders"
      className="grid md:grid-cols-2 items-center bg-[var(--color-cream)] py-14 px-6"
    >
      <div id="special-orders-text" className="space-y-4">
        <h3
          id="special-orders-title"
          className="text-caramel text-4xl font-poppins-extrabold"
        >
          Paket Kue Spesial
        </h3>
        <p id="special-orders-description" className="text-sm font-poppins text-gray-700 mb-6">
          Rayakan setiap momen berharga dengan kue istimewa yang bisa disesuaikan sesuai selera dan tema acaramu. 
          Dari ulang tahun, hantaran, hingga hampers elegan — kami hadirkan rasa manis dan tampilan yang memikat hati.
        </p>
        <button
          id="special-orders-button"
          className="bg-green-300 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-400 transition"
        >
          Order Now
        </button>
      </div>

      <img
        id="special-orders-image"
        src="/img/spesial.jpg"
        alt="Special Cake"
        className="w-full max-h-[350px] object-cover rounded-xl mt-8 md:mt-0"
      />
    </section>
  );
}
