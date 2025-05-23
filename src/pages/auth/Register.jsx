export default function Register() {
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

        <div className="w-full md:w-1/2 flex flex-col justify-center p-10">
          <img src="img/logo.png" alt="Bakery Logo" className="w-28 mb-4" />
          <h2 className="font-poppins-extrabold text-2xl font-bold text-brown-800 mb-4">Create Your Account</h2>
          <input type="text" placeholder="Full Name" className="font-poppins border rounded px-4 py-2 mb-4" />
          <input type="email" placeholder="Email" className="font-poppins border rounded px-4 py-2 mb-4" />
          <input type="password" placeholder="Password" className="font-poppins border rounded px-4 py-2 mb-4" />
          <button className="font-poppins bg-pink-600 text-white py-2 rounded mb-4 hover:bg-pink-700 transition">
            Register
          </button>
          <p className="font-poppins text-sm">
            Already have an account? <a href="/login" className="font-poppins text-pink-600">Login</a>
          </p>
        </div>
      </div>
    );
  }
  