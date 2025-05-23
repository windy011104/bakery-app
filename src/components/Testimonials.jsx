export default function Testimonials() {
  const testimonials = [
    {
      name: "Georgia Grimes",
      comment:
        "Rasa kuenya luar biasa! Lembut, manisnya pas, dan tampilannya sangat cantik. Sempurna untuk ulang tahun anak saya!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Tan",
      comment:
        "Pelayanan cepat dan ramah. Kue spesial yang saya pesan dikemas rapi dan rasanya benar-benar menggugah selera!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Anisa Putri",
      comment:
        "Kue favorit keluarga! Saya selalu repeat order. Varian rasa banyak dan selalu fresh from the oven!",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <section
      id="testimonials-section" // ID untuk seluruh section testimoni
      className="grid md:grid-cols-2 items-center bg-[var(--color-cream)] py-14 px-6"
    >
      {/* Kumpulan Kartu Testimoni */}
      <div
        id="testimonial-cards" // ID untuk grid container kartu-kartu testimoni
        className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto order-2 md:order-1"
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            id={`testimonial-card-${index}`} // ID unik untuk setiap kartu testimoni
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
          >
            <img
              id={`testimonial-image-${index}`} // ID gambar user testimoni
              src={item.image}
              alt={item.name}
              className="w-16 h-16 mx-auto mb-4 rounded-full object-cover"
            />
            <p
              id={`testimonial-comment-${index}`} // ID komentar user
              className="italic text-sm text-gray-700 mb-3"
            >
              “{item.comment}”
            </p>
            <p
              id={`testimonial-name-${index}`} // ID nama user
              className="font-poppins-extrabold text-pink-600 text-sm"
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>

      {/* Judul dan Deskripsi Testimoni */}
      <div
        id="testimonial-header" // ID untuk bagian judul & deskripsi
        className="text-center md:text-left mb-10 order-1 md:order-2 pl-30"
      >
        <h3
          id="testimonial-title" // ID untuk judul
          className="text-caramel text-3xl font-poppins-extrabold"
        >
          Cerita Manis Mereka
        </h3>
        <p
          id="testimonial-description" // ID untuk deskripsi/paragraf penjelas
          className="text-gray-600 text-sm"
        >
          Setiap gigitan punya cerita. Yuk, lihat apa kata pelanggan kami!
        </p>
      </div>
    </section>
  );
}
