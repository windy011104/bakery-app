import React from 'react';
import { useParams, Link } from 'react-router-dom';
import customers from '../assets/customer.json';

export default function TestimonialDetail() {
  const { id } = useParams();
  const testimonial = customers.find((t) => String(t.id) === id);

  if (!testimonial) {
    return (
      <div className="text-center py-20 text-red-500 text-xl font-bold">
        Testimoni tidak ditemukan
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 md:p-10">
      <Link
        to="/"
        className="text-orange-600 text-sm underline mb-6 inline-block"
      >
        ← Kembali ke semua testimoni
      </Link>

      <div className="bg-white p-10 rounded-2xl shadow-xl text-center space-y-6 border">
        {/* Foto */}
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-pink-200"
        />

        {/* Nama dan lokasi */}
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-pink-600">{testimonial.name}</h2>
          <p className="text-gray-500 text-sm">{testimonial.location} • {new Date(testimonial.date).toLocaleDateString()}</p>
        </div>

        {/* Rating */}
        <div className="flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.963c.3.92-.755 1.688-1.538 1.118l-3.39-2.462a1 1 0 00-1.176 0l-3.39 2.462c-.783.57-1.838-.197-1.538-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.047 9.39c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.962z" />
            </svg>
          ))}
        </div>

        {/* Komentar */}
        <p className="italic text-gray-700 text-base leading-relaxed border-t pt-6">
          “{testimonial.comment}”
        </p>
      </div>
    </div>
  );
}
