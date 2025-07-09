import { useEffect, useState } from "react";

const promos = [
  {
    title: "Promo Spesial Trio Cake",
    description: "Dapatkan 3 potong cake hanya dengan Rp. 105.000 Penawaran terbatas di toko pilihan.",
    color: "bg-[var(--color-caramel)] text-[var(--color-brown)]",
    image: "/img/donat2.png",
  },
  {
    title: "Diskon Akhir Pekan",
    description: "Semua donat diskon 20% hanya sampai hari Minggu!",
    color: "bg-[var(--color-green-dark)] text-white",
    image: "/img/cake3.png",
  },
  {
    title: "Gratis Ongkir",
    description: "Gratis ongkir untuk pemesanan di atas Rp. 100.000 selama bulan ini.",
    color: "bg-[var(--color-green)] text-white",
    image: "/img/delivery.png",
  },
];

export default function PromoBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % promos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const promo = promos[currentIndex];

  return (
    <section className={`w-full ${promo.color} transition-all duration-500`}>
      <div className="max-w-6xl mx-auto py-10 px-4 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left min-h-[300px] md:min-h-[280px]">
        {/* Text */}
        <div className="flex-1">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-poppins-extrabold mb-3">
            {promo.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-poppins mb-5 max-w-2xl">
            {promo.description}
          </p>
        </div>

        <div className="flex-1 flex justify-center">
  <div className="w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] transition-all duration-500">
    <img
      src={promo.image}
      alt={promo.title}
      className="w-full h-full object-contain animate-fadeInUp"
    />
  </div>
</div>
      </div>
    </section>
  );
}
