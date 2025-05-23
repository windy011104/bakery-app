// Mengimpor fungsi createRoot dari React DOM
import { createRoot } from 'react-dom/client';

// Mengimpor komponen layout dan halaman
import Navbar from './layouts/Navbar.jsx';
import HeroSection from './pages/HeroSection.jsx';
import BestSellers from './pages/BestSellers.jsx';
import SpesialOrders from './pages/SpecialOrders.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Footer from './layouts/Footer.jsx';
import WhyYummiSection from './pages/WhyYummiSection.jsx';

// Mengimpor styling utama dengan Tailwind CSS
import './assets/tailwind.css';

// Merender seluruh aplikasi ke dalam elemen dengan id="root"
createRoot(document.getElementById('root')).render(
  // Kontainer utama aplikasi
  <div id="app-container" className="bg-latar min-h-screen font-poppins text-teks">

    <Navbar/>
    <HeroSection/>
    <BestSellers/>
    <SpesialOrders/>
    <WhyYummiSection/>
    <Testimonials/>
    <Footer/>
    
  </div>
);
