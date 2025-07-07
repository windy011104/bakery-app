import './assets/tailwind.css';
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from './components/Loading.jsx';
import CekMember from './pages/CekMember.jsx';

// Dinamis import menggunakan React.lazy
const About = React.lazy(() => import('./pages/About.jsx'));
const Contact = React.lazy(() => import('./pages/Contact.jsx'));
const Products = React.lazy(() => import('./pages/Products.jsx'));
const Home = React.lazy(() => import('./pages/Home.jsx'));
const SpesialOrders = React.lazy(() => import('./pages/SpesialOrders.jsx'));
const ErrorDetails = React.lazy(() => import('./pages/ErrorDetails.jsx'));
const MainLayout = React.lazy(() => import('./layouts/MainLayout.jsx'));
const AuthLayout = React.lazy(() => import('./layouts/AuthLayout.jsx'));
const Register = React.lazy(() => import('./pages/auth/Register.jsx'));
const Forgot = React.lazy(() => import('./pages/auth/Forgot.jsx'));
const Login = React.lazy(() => import('./pages/auth/Login.jsx'));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"))
const TestimonialDetail = React.lazy(() => import("./components/TestimonialsDetail"))
const Checkout = React.lazy(() => import("./pages/Checkout"))

function App() {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        <div id="main-content" className="flex-1 p-4">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route element={<MainLayout />}>
                {/* Menu utama */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/testimonials/:id" element={<TestimonialDetail/>} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/checkout/:id" element={<Checkout />} /> 
                <Route path="/special-orders" element={<SpesialOrders />} />
                <Route path="/contact" element={<Contact />} />
              </Route>

              <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot" element={<Forgot />} />
              </Route>

              {/* Menu Error */}
              <Route path="/400" element={<ErrorDetails kode={400} />} />
              <Route path="/401" element={<ErrorDetails kode={401} />} />
              <Route path="/403" element={<ErrorDetails kode={403} />} />

              {/* Rute tambahan */}
              <Route path="/member" element={<CekMember />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
