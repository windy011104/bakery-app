import products from "../assets/bestSellers.json";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

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
    <section id="produk-terlaris" className="relative bg-[var(--color-sugar)] py-14 px-6">
      {/* Judul dan Deskripsi */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-poppins-extrabold text-[var(--color-brand-green)] mb-2">
          Best Seller Delights
        </h2>
        <p className="font-poppins text-[var(--color-green-dark)] text-base max-w-md mx-auto">
          From our oven to your heart — discover the most-loved cakes by our customers.
        </p>
      </div>

      {/* Tombol Navigasi */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-[var(--color-green)] transition"
      >
        <ChevronLeft className="text-[var(--color-green-dark)] w-5 h-5" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-[var(--color-green)] transition"
      >
        <ChevronRight className="text-[var(--color-green-dark)] w-5 h-5" />
      </button>

      {/* Kontainer Scrollable */}
      <div
        ref={scrollRef}
        className="max-w-screen-xl mx-auto px-4 overflow-x-auto scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div
          className="flex gap-6 w-max"
          style={{ scrollbarWidth: "none" }}
        >
          {products.map((product, idx) => (
            <div
              key={idx}
              className="snap-start w-64 sm:w-72 md:w-80 flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 relative"
            >
              {/* Badge */}
              <span className="absolute top-3 left-3 bg-[var(--color-caramel)] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
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
                <p className="text-[var(--color-caramel)] font-semibold text-base mb-3">
                  {product.price}
                </p>
                <button className="bg-[var(--color-green-dark)] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[var(--color-green)] transition">
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
