import React, { useEffect, useState } from 'react';
import customers from '../assets/customer.json';
import { Link } from 'react-router-dom';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials(customers);
  }, 
  []);

  return (
    <section className="grid md:grid-cols-2 items-center bg-[var(--color-cream)] py-14 px-6">
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto order-2 md:order-1">
        {testimonials.map((item, index) => (
          <Link to={`/testimonials/${index}`} key={index}>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center hover:scale-105">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 mx-auto mb-4 rounded-full object-cover"
              />
              <p className="italic text-sm text-gray-700 mb-3">
                “{item.comment.length > 60
                  ? item.comment.slice(0, 60) + '...'
                  : item.comment}”
              </p>
              <p className="font-poppins-extrabold text-pink-600 text-sm">
                {item.name}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center md:text-left mb-10 order-1 md:order-2 md:pl-20">
        <h3 className="text-caramel text-3xl font-poppins-extrabold">
          Cerita Manis Mereka
        </h3>
        <p className="text-gray-600 text-sm">
          Setiap gigitan punya cerita. Yuk, lihat apa kata pelanggan kami!
        </p>
      </div>
    </section>
  );
}
