import React from 'react';
import PageHeader from '../components/PageHeader';
import products from "../assets/bestSellers.json";

export default function Products() {
  return (
    <div>
      <PageHeader
        title="Our Products"
        subtitle="Temukan produk terbaik kami dengan kualitas premium."
      />

      <div className="px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
            >
              {/* Gambar Produk */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity duration-300"
              />

              {/* Overlay untuk Efek Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>

              {/* Detail Produk */}
              <div className="relative p-4">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-orange-500 transition-colors duration-300 mb-2">{product.name}</h3>
                <p className="text-lg text-gray-500 mb-4">{product.price}</p>
              </div>

              {/* Button Buy Now */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <button className="bg-orange-500 text-white py-2 px-6 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-orange-400">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
