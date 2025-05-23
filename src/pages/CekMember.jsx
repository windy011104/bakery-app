import { useState } from "react";

export default function CekMember() {
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const [warna, setWarna] = useState("");

  const cekKeanggotaan = async (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setPesan("Email tidak valid.");
      setWarna("text-red-500");
      return;
    }

    const res = await fetch("/members.json");
    const data = await res.json();

    const anggota = data.find((item) => item.email === email);

    if (anggota) {
      setPesan(
        `📇 Selamat datang, ${anggota.nama}! Anda adalah member ${anggota.tipe_member}.`
      );
      if (anggota.tipe_member === "silver") setWarna("text-gray-600");
      else if (anggota.tipe_member === "gold") setWarna("text-yellow-600");
      else if (anggota.tipe_member === "platinum") setWarna("text-purple-600");
    } else {
      setPesan(" Email tidak terdaftar sebagai member.");
      setWarna("text-red-500");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-bold mb-4">Cek Keanggotaan</h2>
      <form onSubmit={cekKeanggotaan}>
        <input
          type="email"
          placeholder="Masukkan email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-lg w-full"
        >
          Cek
        </button>
      </form>

      {pesan && <p className={`mt-4 font-semibold ${warna}`}>{pesan}</p>}
    </div>
  );
}
