import {GiFlour,GiCommercialAirplane,GiMeal,GiHerbsBundle,GiCheckMark,GiWrappedSweet,} from "react-icons/gi";

export default function WhyYummiSection() {
  const features = [
    {
      id: 1,
      icon: <GiFlour className="text-green-600 text-5xl mx-auto mb-4" />,
      title: "Rasa",
      desc:
        "Kami memiliki komitmen untuk selalu menghadirkan produk yang dapat dinikmati oleh berbagai kalangan.",
    },
    {
      id: 2,
      icon: <GiCommercialAirplane className="text-green-600 text-5xl mx-auto mb-4" />,
      title: "Layanan Terbaik",
      desc:
        "Kami selalu memprioritaskan kepuasan dan kenyamanan pelanggan untuk terus berinovasi dalam segi pelayanan.",
    },
    {
      id: 3,
      icon: <GiMeal className="text-green-600 text-5xl mx-auto mb-4" />,
      title: "Jaminan Mutu Bahan",
      desc:
        "Kami berkomitmen untuk selalu menjaga mutu produk dengan menetapkan standar pemilihan bahan baku.",
    },
    {
      id: 4,
      icon: <GiHerbsBundle className="text-green-600 text-5xl mx-auto mb-4" />,
      title: "Tanpa Pengawet",
      desc:
        "Seluruh produk dibuat tanpa menggunakan bahan pengawet dan fresh setiap harinya.",
    },
    {
      id: 5,
      icon: <GiCheckMark className="text-green-600 text-5xl mx-auto mb-4" />,
      title: "Sertifikat Halal",
      desc:
        "Yummi Company bakery telah mendapatkan sertifikat halal MUI ID14110006542840623",
    },
    {
      id: 6,
      icon: <GiWrappedSweet className="text-green-600 text-5xl mx-auto mb-4" />,
      title: "Kemasan Menarik",
      desc:
        "Produk kami dikemas dengan rapi dan menarik sehingga cocok untuk dijadikan hadiah maupun hantaran spesial.",
    },
  ];

  return (
    <section
      id="why-yummi-section" // ID untuk keseluruhan section Mengapa Harus Yummi
      className="bg-gradient-to-r from-[var(--color-sugar)] via-pink-100 to-rose-100 py-16 px-6"
    >
      <div id="why-yummi-wrapper" className="max-w-6xl mx-auto text-center">
        <h2
          id="why-yummi-title" // ID untuk judul utama section
          className="text-3xl font-poppins-extrabold text-caramel mb-12 tracking-tight"
        >
          Mengapa Harus Yummi?
        </h2>

        <div
          id="why-yummi-features" // ID untuk grid fitur-fitur
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
        >
          {features.map((item) => (
            <div
              key={item.id}
              id={`why-yummi-feature-${item.id}`} // ID unik untuk setiap kartu fitur
              className="bg-white shadow-xl rounded-2xl p-6 transform hover:scale-105 hover:shadow-2xl hover:bg-pink-50 transition-all duration-300"
            >
              <div
                id={`feature-icon-${item.id}`} // ID untuk ikon fitur
                className="text-pink-600 text-5xl mb-4 transform hover:rotate-12 transition-all duration-300"
              >
                {item.icon}
              </div>
              <h3
                id={`feature-title-${item.id}`} // ID untuk judul fitur
                className="text-2xl font-poppins-extrabold text-gray-900 mb-2"
              >
                {item.title}
              </h3>
              <p
                id={`feature-desc-${item.id}`} // ID untuk deskripsi fitur
                className="text-sm font-poppins text-gray-700 leading-relaxed"
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
