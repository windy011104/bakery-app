import React from 'react';

const errorDetails = {
  400: {
    title: "400 - Bad Request",
    message: "Permintaan tidak valid. Silakan periksa kembali input Anda.",
  },
  401: {
    title: "401 - Unauthorized",
    message: "Anda tidak memiliki akses. Silakan login terlebih dahulu.",
  },
  403: {
    title: "403 - Forbidden",
    message: "Anda tidak diizinkan untuk mengakses halaman ini.",
  }
};

export default function ErrorDetails({ kode }) {
  const { title, message } = errorDetails[kode] || {
    title: "Error",
    message: "Terjadi kesalahan."
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50 text-center">
      <h1 className="text-6xl font-bold text-red-500">{kode}</h1>
      <h2 className="text-2xl font-semibold mt-4">{title}</h2>
      <p className="mt-2 text-gray-600">{message}</p>
      <form className="mt-6">
        <input
          type="text"
          placeholder="Coba masukkan ulang URL atau info lainnya"
          className="p-2 border border-gray-300 rounded-md mr-2"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Kirim
        </button>
      </form>
    </div>
  );
}
