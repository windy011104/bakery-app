import HeroSection from "../components/HeroSection";
import BestSellers from "../components/BestSellers";
import WhyYummiSection from "../components/WhyYummiSection";
import Testimonials from "../components/Testimonials";
import SpesialOrders from "../components/SpecialOrders";
import PageHeader from "../components/PageHeader"; // pastikan path sesuai


export default function Home() {
  return (
    <div>
      <PageHeader
        title="Selamat Datang di Yummy Baker!"
        subtitle="Nikmati kelezatan roti yang penuh rasa, cinta, dan tradisi. Kami hadir untuk membuat hari-harimu lebih manis!"
      />
      <HeroSection />
      <BestSellers />
      <SpesialOrders/>
      <WhyYummiSection />
      <Testimonials />
    </div>
  );
}
