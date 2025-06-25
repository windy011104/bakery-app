import React, { useEffect, useState } from 'react';
import customers from '../assets/customer.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials(customers);
  }, []);

  return (
    <section className="bg-[var(--color-sugar)] px-4 py-16 md:py-20 font-poppins">
      <h3 className="text-3xl md:text-4xl font-poppins-extrabold text-center mb-10 text-[var(--color-brand-green)]">
        Cerita Manis Mereka
      </h3>

      <div className="max-w-xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 4000 }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white text-gray-800 px-6 py-5 md:px-8 md:py-6 rounded-lg shadow-md text-center">
                <p className="italic text-sm md:text-base leading-relaxed mb-4">
                  {item.comment}
                </p>
                <div className="flex justify-center items-center gap-2 mt-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-9 h-9 rounded-full object-cover border"
                  />
                  <span className="text-sm font-poppins-extrabold text-[var(--color-brown)]">
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
