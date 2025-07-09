import HeroSection from "../components/HeroSection";
import BestSellers from "../components/BestSellers";
import WhyYummiSection from "../components/WhyYummiSection";
import Testimonials from "../components/Testimonials";
import SpesialOrders from "../components/SpecialOrders";
import PromoBanner from "../components/PromoBanner"; // pastikan path sesuai


export default function Home() {
  return (
    <div>
      <HeroSection />
      <PromoBanner />
      <BestSellers />
      <SpesialOrders/>
      <WhyYummiSection />
      <Testimonials />
    </div>
  );
}
