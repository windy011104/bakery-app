import products from "../assets/bestSellers.json";

export default function BestSellers() {
  return (
    <section id="produk-terlaris" className="bg-[var(--color-sugar)] py-14 px-6">
      {/* Judul dan Deskripsi */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-poppins-extrabold text-[var(--color-caramel)] mb-2">
          Best Seller Delights
        </h2>
        <p className="font-poppins text-[var(--color-gray)] text-x max-w-md mx-auto">
          From our oven to your heart — discover the most-loved cakes by our customers.
        </p>
      </div>

      {/* Scrollable Container with Snap */}
      <div className="max-w-screen-xl mx-auto px-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none">
  <div className="flex gap-4 w-full px-2">
    {products.map((product, idx) => (
      <div
        key={idx}
        className="snap-start w-full sm:w-[45%] md:w-[30%] lg:w-[30%] flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 relative"
      >
              {/* Badge */}
              <span className="absolute top-3 left-3 bg-[var(--color-green-dark)] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                {product.tag}
              </span>

              {/* Gambar */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-2xl"
              />

              {/* Info Produk */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-poppins-extrabold text-[var(--color-brown)] mb-1">
                  {product.name}
                </h3>
                <p className="text-[var(--color-pink)] font-semibold text-base mb-3">
                  {product.price}
                </p>
                <button className="bg-[var(--color-green-dark)] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-600">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
