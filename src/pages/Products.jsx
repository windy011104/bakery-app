import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import rawProducts from '../assets/bestSellers.json';
import { Link } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsWithId = rawProducts.map((product, index) => ({
      ...product,
      id: index,
    }));
    setProducts(productsWithId);
  }, []);

  return (
    <div className="bg-[var(--color-sugar)] min-h-screen pb-16">
      <PageHeader
        title="Our Premium Products"
        subtitle="Temukan produk terbaik kami dengan kualitas premium dan harga terbaik."
      />

      <div className="max-w-7xl mx-auto mt-12 px-4">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 flex flex-col overflow-hidden text-center"
            >
              {/* Gambar Produk */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-[var(--color-caramel)] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {product.discount}% OFF
                  </div>
                )}
              </div>

              {/* Informasi Produk */}
              <div className="flex flex-col flex-1 p-5 items-center">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-lg font-poppins-extrabold text-[var(--color-brown)] mb-1">
                    {product.name}
                  </h3>
                </Link>

                {/* Rating */}
                {product.rating && (
                  <div className="flex items-center justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < product.rating
                            ? 'text-[var(--color-caramel)]'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.963c.3.92-.755 1.688-1.538 1.118l-3.39-2.462a1 1 0 00-1.176 0l-3.39 2.462c-.783.57-1.838-.197-1.538-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.047 9.39c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.962z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-xs text-gray-500">{product.rating}.0</span>
                  </div>
                )}

                <p className="text-[var(--color-caramel)] text-base font-bold mb-4">
                  {product.price}
                </p>

                <Link
                  to={`/product/${product.id}`}
                  className="bg-[var(--color-green-dark)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-green)] transition-all shadow-md"
                  aria-label={`Order ${product.name} now`}
                >
                  Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
