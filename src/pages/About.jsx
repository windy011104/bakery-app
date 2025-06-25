import React from 'react';
import PageHeader from '../components/PageHeader';

export default function About() {
  return (
   <div>
       <PageHeader
        title="About Yummi"
        subtitle="Kami selalu menjadikan kepuasan customer sebagai prioritas dan mengedepankan kualitas baik dari segi produk maupun layanan."
      />
      {/* Bagian Tentang Kami */}
      
      <div className="max-w-6xl mx-auto px-4 py-8 ">
        <img
          src="/img/spesial2.webp"
          alt="Tentang Kami"
          className="rounded-xl w-full max-w-md mx-auto mb-6"
        />
        <h2 className="font-poppins-extrabold text-[var(--color-brand-green)] mb-4 text-center text-2xl">
          Tentang Kami</h2>
        <p className="font-poppins text-center max-w-2xl mx-auto">
          Yummi Company Bakery merupakan perusahaan yang bergerak di bidang makanan dan berfokus pada bakery. Perusahaan ini sudah memiliki pengalaman selama 7 tahun dan berdiri sejak 2018. 
        </p>
      </div>

      {/* Misi */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="font-poppins-extrabold text-[var(--color-brand-green)] mb-4 text-2xl">
            Misi Kami</h3>
          <p className="font-poppins mb-4">
            Produk yang menjadi best seller yakni Korean Garlic Bread, Bolen, Aneka Donat dan Varian Roti Manis dan Asin. 
            Keseluruhan produk yang kami olah terjamin fresh, karena proses produksi berlangsung setiap hari serta menggunakan bahan berkualitas dan tanpa bahan pengawet. 
          </p>
        </div>
        <img src="/img/yummy1.webp" alt="Kue" className="rounded-xl w-full h-auto" />
      </div>

      {/* Janji */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/img/yummy2.webp"
          alt="Kue"
          className="rounded-xl w-full h-auto"
        />
        <div>
          <h3 className="font-poppins-extrabold text-[var(--color-brand-green)] mb-4 text-2xl">
            Janji Kami
          </h3>
          <p className="font-poppins mb-4">
            Kami berkomitmen untuk memberikan rasa terbaik, layanan hangat, dan kualitas tinggi di setiap produk kami. Roti dan kue kami dibuat dengan penuh perhatian serta bahan-bahan pilihan.
          </p>
        </div>
      </div>

      {/* Bagian Ajak Hubungi */}
      <div className="relative">
        <img
          src="/img/bg1.jpg"
          alt="Latar Kontak"
          className="w-full object-cover h-80"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center">
          <h3 className="font-poppins text-lg md:text-2xl font-semibold mb-4">
            Ingin Tahu Lebih Banyak Tentang Kami?
          </h3>
          <button className="bg-[var(--color-brand-green)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--color-green-dark)] transition-all">
            Hubungi Kami
          </button>
        </div>
      </div>
    </div>
  );
}
