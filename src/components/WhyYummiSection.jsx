import {
  GiFlour,
  GiCommercialAirplane,
  GiMeal,
  GiHerbsBundle,
  GiCheckMark,
  GiWrappedSweet,
} from "react-icons/gi";

export default function WhyYummiSection() {
  const features = [
    {
      id: 1,
      icon: <GiFlour />,
      title: "Rasa Autentik",
      desc: "Cita rasa menggoda yang disukai semua kalangan, dari anak-anak hingga dewasa.",
    },
    {
      id: 2,
      icon: <GiCommercialAirplane />,
      title: "Pelayanan Cepat",
      desc: "Kami mengutamakan kenyamanan dan kecepatan pelayanan untuk pelanggan.",
    },
    {
      id: 3,
      icon: <GiMeal />,
      title: "Bahan Berkualitas",
      desc: "Dibuat dari bahan pilihan terbaik tanpa kompromi pada kualitas.",
    },
    {
      id: 4,
      icon: <GiHerbsBundle />,
      title: "Tanpa Pengawet",
      desc: "Fresh setiap hari tanpa bahan kimia berbahaya atau pengawet tambahan.",
    },
    {
      id: 5,
      icon: <GiCheckMark />,
      title: "Halal Terjamin",
      desc: "Sertifikat halal MUI — aman dan nyaman dikonsumsi.",
    },
    {
      id: 6,
      icon: <GiWrappedSweet />,
      title: "Kemasan Eksklusif",
      desc: "Dikemas rapi dan cantik, cocok untuk hadiah atau hantaran spesial.",
    },
  ];

  return (
    <section
      id="why-yummi-section"
      className="bg-gradient-to-br from-[#FFF6E5] via-[#FFEDE5] to-[#FDF3EB] py-16 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-poppins-extrabold text-[var(--color-brand-green)] mb-10 sm:mb-14">
          Mengapa Harus Yummi?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border-b-4 border-[var(--color-caramel)] shadow-md p-4 sm:p-6 hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-green-dark)] to-emerald-400 text-white text-xl sm:text-3xl shadow-md">
                {item.icon}
              </div>
              <h3 className="text-sm sm:text-lg font-poppins-extrabold text-[var(--color-brown)] mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 font-poppins leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
