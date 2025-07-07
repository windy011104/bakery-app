import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();

  const handlePesanClick = () => {
    navigate('/products'); // alihkan ke halaman produk
  };

  return (
    <section
      id="hero-section"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-[var(--color-cream)]"
    >
      {/* Teks Kiri */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins-extrabold text-[var(--color-brand-green)] leading-tight mb-6">
          Sweet Moments Begin <br className="hidden md:block" />
          at Yummi Bakery
        </h1>
        <p className="text-sm sm:text-base text-gray-700 mb-6 md:mb-8 max-w-xl mx-auto md:mx-0">
          Yummi Bakery menghadirkan kue impianmu menjadi kenyataan – lembut,
          lezat, dan dibuat penuh cinta. Nikmati kebahagiaan dalam setiap
          potongannya!
        </p>
        <button
          onClick={handlePesanClick}
          className="bg-[var(--color-brand-green)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--color-green-dark)] transition-all"
        >
          Pesan Kue Impianmu Hari Ini
        </button>
      </div>

      {/* Gambar Kanan */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src="/img/yummy3.png"
          alt="Produk Yummi Bakery"
          className="w-[100%] max-w-[720px] object-cover rounded-3xl shadow-lg"
        />
      </div>
    </section>
  );
}
