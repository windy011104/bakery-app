import { useState } from "react";
import bakeryData from "./bakeryData.json"; // Import data bakery dari file JSON

export default function BakeryMenuSearchFilter() {
  // State untuk pencarian dan filter tag (Inisialisasi State)
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("");

  // Filter data berdasarkan kata kunci dan tag yang dipilih
  const filtered = bakeryData.filter(item => {
    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    const matchTag = tag === "" || item.tags.includes(tag);
    return matchSearch && matchTag;
  });

  // Ambil semua tag unik dari data
  const allTags = [...new Set(bakeryData.flatMap(m => m.tags))];

  return (
    <div className="p-8 bg-yellow-50 min-h-screen">
      {/* Judul halaman */}
      <h1 className="text-4xl font-bold text-amber-600 mb-8 text-center">
        🧁Yummy Bakery Lezat
      </h1>

      {/* Input pencarian */}
      <div className="max-w-2xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Cari kue atau roti..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border border-amber-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>

      {/* Dropdown filter tag */}
      <div className="max-w-2xl mx-auto mb-6">
        <select
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="w-full p-3 border border-amber-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <option value="">🍞 Semua Tag</option>
          {allTags.map((t, i) => (
            <option key={i} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Jika tidak ada hasil */}
      {filtered.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Tidak ada menu ditemukan 😢
        </p>
      ) : (
        // Tampilkan hasil dalam grid responsif dari 1 sampai 6 kolom tergantung lebar layar
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
          {filtered.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:-translate-y-1 p-6"
            >
              {/* Gambar produk atau placeholder */}
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              ) : (
                <div className="w-full h-48 bg-gray-100 flex items-center justify-center rounded-md mb-4 text-gray-400"></div>
              )}

              {/* Nama, deskripsi, dan harga produk */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-3">{item.description}</p>
              <p className="text-xl text-pink-600 font-bold mb-2">{item.price}</p>

              {/* Vendor dan link ke situs resmi jika ada */}
              <p className="text-gray-500 text-sm mb-1">
                Diproduksi oleh:{" "}
                {item.details.officialWebsite ? (
                  <a
                    href={item.details.officialWebsite}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.details.vendor}
                  </a>
                ) : (
                  item.details.vendor
                )}
              </p>

              {/* Tahun rilis */}
              <p className="text-gray-500 text-sm mb-2">
                Tahun Rilis: {item.details.releaseYear}
              </p>

              {/* Tag produk */}
              <div className="flex flex-wrap">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-pink-100 text-pink-800 px-3 py-1 text-xs rounded-full mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
