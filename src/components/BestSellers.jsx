import products from "../assets/bestSellers.json";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom"; // ✅ Tambahkan ini

export default function BestSellers() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const amount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({
        left: dir === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="produk-terlaris"
      className="relative bg-[var(--color-sugar)] py-14 px-4 sm:px-6"
    >
      {/* Judul dan Deskripsi */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins-extrabold text-[var(--color-brand-green)] mb-2">
          Best Seller Delights
        </h2>
        <p className="font-poppins text-[var(--color-green-dark)] text-sm sm:text-base max-w-md mx-auto">
          From our oven to your heart — discover the most-loved cakes by our customers.
        </p>
      </div>

      {/* Tombol Navigasi */}
      <div className="hidden md:block">
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-[var(--color-green)] transition"
        >
          <ChevronLeft className="text-[var(--color-green-dark)] w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-[var(--color-green)] transition"
        >
          <ChevronRight className="text-[var(--color-green-dark)] w-5 h-5" />
        </button>
      </div>

      {/* Kontainer Scrollable */}
      <div
        ref={scrollRef}
        className="max-w-screen-xl mx-auto overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-1 sm:px-2"
      >
        <div className="flex gap-4 sm:gap-6 w-max pb-2">
          {products.map((product, index) => (
            <div
              key={index}
              className="snap-start w-60 sm:w-64 md:w-72 flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 relative"
            >
              {/* Badge */}
              {product.tag && (
                <span className="absolute top-3 left-3 bg-[var(--color-caramel)] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {product.tag}
                </span>
              )}

              {/* Gambar */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-44 sm:h-48 object-cover rounded-t-2xl"
              />

              {/* Info Produk */}
              <div className="p-4 text-center">
                <h3 className="text-base sm:text-lg font-poppins-extrabold text-[var(--color-brown)] mb-1">
                  {product.name}
                </h3>
                <p className="text-[var(--color-caramel)] font-semibold text-sm sm:text-base mb-3">
                  {product.price}
                </p>
                <Link
                  to={`/product/${index}`} // ✅ Pergi ke halaman detail dengan ID berbasis index
                  className="bg-[var(--color-green-dark)] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[var(--color-green)] transition"
                  aria-label={`Order ${product.name} now`}
                >
                  Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
