export default function Login() {
    return (
        <div className="flex w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Gambar - kiri */}
          <div className="w-1/2 hidden md:flex items-center justify-center bg-white">
            <img
              src="/img/yummy3.png"
              alt="Bakery Display"
              className="max-h-[450px] object-contain"
            />
          </div>
  
          {/* Form login - kanan */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-10">
            <img src="/img/logo.png" alt="Logo" className="w-16 mb-4" />
            <h2 className="text-2xl font-poppins-extrabold text-gray-800 mb-4">Welcome Back!</h2>
            <input
              type="email"
              placeholder="Email"
              className="font-poppins border rounded px-4 py-2 mb-4"
            />
            <input
              type="password"
              placeholder="Password"
              className="font-poppins border rounded px-4 py-2 mb-4"
            />
            <button className="font-poppins bg-pink-600 text-white py-2 rounded mb-2 hover:bg-pink-700 transition">
              Login
            </button>
            <a href="/forgot" className="text-sm font-poppins text-pink-600 mb-4">
              Forgot password?
            </a>
            <button className="font-poppins bg-white border text-gray-700 py-2 rounded flex items-center justify-center gap-2 mb-4">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Login with Google
            </button>
            <p className="font-poppins text-sm">
              Don’t have an account?{" "}
              <a href="/register" className="font-poppins text-pink-600">
                Sign up
              </a>
            </p>
          </div>
        </div>
    
    );
  }
  