export default function HeroSection() {
  return (
    <section
      id="hero-section" // ID untuk bagian utama hero section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 via-yellow-50 to-pink-200 overflow-hidden px-6"
    >
      {/* Background image overlay */}
      <img
        id="background-image" // ID untuk gambar latar belakang
        src="img/yummy.jpg"
        alt="Redvelvet Cake"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-100"
      />

      {/* Overlay layer */}
      <div
        id="overlay-layer" // ID untuk lapisan overlay yang memberikan efek transparansi
        className="absolute inset-0 bg-white/50 backdrop-blur-sm"
      ></div>

      {/* Content */}
      <div
        id="content" // ID untuk konten utama (judul, deskripsi, tombol)
        className="relative z-10 max-w-3xl text-center"
      >
        <h1
          id="hero-title" // ID untuk judul utama di hero section
          className="text-4xl md:text-5xl font-poppins-extrabold text-[var(--color-caramel)] drop-shadow-sm mb-6"
        >
          Freshly Baked Happiness, Just for You
        </h1>
        <p
          id="hero-description" // ID untuk deskripsi singkat di hero section
          className="text-x font-poppins text-gray-800 mb-8"
        >
          Temukan sensasi manis di setiap gigitan. Kue lembut, rasa autentik, dan aroma yang menggoda — semua dibuat dengan cinta di Yummy Bakery.
        </p>
        <button
          id="explore-button" // ID untuk tombol aksi "Explore Our Story"
          className="bg-[var(--color-green-dark)] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[var(--color-green)] transition-all shadow-lg"
        >
          Explore Our Story
        </button>
      </div>
    </section>
  );
}
