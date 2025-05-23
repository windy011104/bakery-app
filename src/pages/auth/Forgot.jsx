export default function Forgot() {
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
          <img src="img/logo.png" alt="Bakery Logo" className="w-16 mb-4" />
          <h2 className="text-2xl font-poppins-extrabold text-brown-800 mb-4">Forgot Password?</h2>
          <p className="text-sm font-poppins text-gray-600 mb-4">Enter your email and we'll send you a reset link.</p>
          <input type="email" placeholder="Your Email" className="font-poppins border rounded px-4 py-2 mb-4" />
          <button className="font-poppins bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition mb-4">
            Send Reset Link
          </button>
          <p className="text-sm font-poppins">
            Back to <a href="/login" className="text-pink-600">Login</a>
          </p>
        </div>
      </div>
    );
  }
  