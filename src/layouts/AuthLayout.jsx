import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-brown-50 relative overflow-hidden">
          {/* Background elements: Bakery theme */}
          <div className="absolute left-0 bottom-0">
            <div className="w-72 h-72 bg-green-300 rounded-tl-full transform rotate-45 opacity-70"></div>
          </div>
          <div className="absolute right-0 top-0">
            <div className="w-48 h-48 bg-green-200 rounded-tr-full transform rotate-45 opacity-70"></div>
          </div> 
    
            <Outlet />
          </div>
       
      );
}
