import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          'https://dhfcykarscpafidcmuwm.supabase.co/rest/v1/pesan_pengguna?select=*',
          {
            headers: {
              apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoZmN5a2Fyc2NwYWZpZGNtdXdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NDQ4ODksImV4cCI6MjA2NTUyMDg4OX0.nd_gvyNavdaiwgn3PbXCzhMAPOy149Xll6MaCoymyDY',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoZmN5a2Fyc2NwYWZpZGNtdXdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NDQ4ODksImV4cCI6MjA2NTUyMDg4OX0.nd_gvyNavdaiwgn3PbXCzhMAPOy149Xll6MaCoymyDY',
            },
          }
        );

        const data = await response.json();

        const formatted = data.map((item) => ({
          name: item.nama,
          comment: item.pesan,
          rating: item.rating,
          image: `https://i.pravatar.cc/100?u=${item.email}`, // avatar dinamis
        }));

        setTestimonials(formatted.reverse());
      } catch (err) {
        console.error('Gagal ambil testimoni:', err);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="bg-[var(--color-sugar)] px-4 py-16 md:py-20 font-poppins">
      <h3 className="text-3xl md:text-4xl font-poppins-extrabold text-center mb-12 text-[var(--color-brand-green)]">
        Cerita Manis Mereka
      </h3>

      <div className="max-w-2xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white text-gray-800 px-6 py-8 md:px-10 rounded-2xl shadow-md text-center space-y-4 transition-all duration-300">
                <p className="italic text-base md:text-lg text-gray-700 leading-relaxed">
                  “{item.comment}”
                </p>

                {/* Bintang */}
                <div className="flex justify-center gap-1 text-yellow-400 text-xl">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={star <= item.rating ? '' : 'text-gray-300'}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Profil */}
                <div className="flex justify-center items-center gap-3 mt-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border shadow"
                  />
                  <span className="text-base font-semibold text-[var(--color-brown)]">
                    {item.name}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
