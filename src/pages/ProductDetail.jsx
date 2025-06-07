import React from 'react';
import { useParams } from 'react-router-dom';
import rawProducts from '../assets/bestSellers.json';
import { FiShoppingCart } from 'react-icons/fi';

export default function ProductDetail() {
  const { id } = useParams();

  const productsWithId = rawProducts.map((product, index) => ({
    ...product,
    id: index.toString(),
  }));

  const product = productsWithId.find((p) => p.id === id);

  if (!product)
    return (
      <p className="text-center mt-20 text-red-600 text-lg font-semibold">
        Produk tidak ditemukan
      </p>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-8 mt-16">  
      <div className="bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Gambar Produk */}
        <div className="overflow-hidden rounded-xl shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full auto object-cover transition-transform duration-400 ease-in-out hover:scale-150"
          />
        </div>

        {/* Detail Produk */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
              {product.name}
            </h1>

            {product.tag && (
              <span className="inline-block bg-green-200 text-green-800 px-3 py-1 rounded-full font-semibold text-sm uppercase tracking-wide shadow-sm">
                {product.tag}
              </span>
            )}

            {product.rating && (
              <div className="flex items-center mt-3 gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < product.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.963c.3.92-.755 1.688-1.538 1.118l-3.39-2.462a1 1 0 00-1.176 0l-3.39 2.462c-.783.57-1.838-.197-1.538-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.047 9.39c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.962z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600 font-medium text-sm">{product.rating}.0</span>
              </div>
            )}

            <p className="mt-5 text-2xl font-extrabold text-orange-600">{product.price}</p>

            <p className="mt-4 text-gray-700 text-base leading-relaxed">{product.description}</p>

            {product.ingredients && (
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Bahan-bahan:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  {product.ingredients.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.availability && (
              <p className="mt-4 italic text-gray-500 text-sm">
                <strong>Ketersediaan:</strong> {product.availability}
              </p>
            )}
          </div>

          <button
            type="button"
            className="mt-8 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600
            flex items-center justify-center gap-2 text-white py-3 rounded-full font-semibold text-lg shadow-md
            transform transition duration-300 hover:scale-105"
          >
            <FiShoppingCart className="w-5 h-5" />
            Order Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
