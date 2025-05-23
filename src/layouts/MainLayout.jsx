import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="bg-white text-gray-900">
        <Navbar />
          <Outlet />
        <Footer />
    </div> 
  );
}
