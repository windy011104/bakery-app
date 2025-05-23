// Mengimpor data bakery dari file JSON lokal
import bakeryData from "./bakeryData.json";

// Komponen utama untuk menampilkan daftar menu bakery
export default function BakeryMenuList() {
  return (
    // Container utama dengan padding, latar belakang kuning muda, dan tinggi minimal satu layar penuh
    <div className="p-8 bg-yellow-50 min-h-screen">
      
      {/* Judul halaman */}
      <h1 className="text-3xl font-bold text-amber-600 mb-8 text-center">
        🧁 Yummy Bakery Lezat
      </h1>

      {/* Tampilkan hasil dalam grid responsif dari 1 sampai 6 kolom tergantung lebar layar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
        
        {/* Looping setiap item dari bakeryData dan menampilkannya */}
        {bakeryData.map((item) => (
          <div
            key={item.id} // Gunakan ID sebagai key untuk efisiensi render
            className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition-shadow"
          >
            {/* Gambar produk */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />

            {/* Nama produk */}
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {item.name}
            </h2>

            {/* Deskripsi produk */}
            <p className="text-gray-700 mb-2">{item.description}</p>

            {/* Nama vendor (dengan link ke situs web jika ada) */}
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

            {/* Tahun rilis produk */}
            <p className="text-gray-500 text-sm mb-2">
              Tahun Rilis: {item.details.releaseYear}
            </p>

            {/* Daftar tag produk */}
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
