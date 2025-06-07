import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import rawProducts from '../assets/bestSellers.json';
import { Link } from 'react-router-dom';

export default function Products() {
   const [products, setProducts] = useState([]);

  useEffect(() => {
    // Tambahkan id berdasarkan index array
    const productsWithId = rawProducts.map((product, index) => ({
      ...product,
      id: index,  // pakai index sebagai id sementara
    }));
    setProducts(productsWithId);
  }, []);

  return (
    <div>
      <PageHeader
        title="Our Premium Products"
        subtitle="Temukan produk terbaik kami dengan kualitas premium dan harga terbaik."
      />

      <div className="max-w-7xl mx-auto mt-12">
        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 flex flex-col overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold uppercase px-3 py-1 rounded-full shadow-lg">
                    {product.discount}% OFF
                  </div>
                )}
              </div>

              <div className="flex flex-col flex-1 p-6">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                </Link>


                {product.rating && (
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < product.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.963c.3.92-.755 1.688-1.538 1.118l-3.39-2.462a1 1 0 00-1.176 0l-3.39 2.462c-.783.57-1.838-.197-1.538-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.047 9.39c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.962z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">{product.rating}.0</span>
                  </div>
                )}

                <p className="text-orange-600 text-xl font-extrabold mb-6">{product.price}</p>

                <button
                  className="mt-auto bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white py-3 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105"
                  aria-label={`Order ${product.name} now`}
                >
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
