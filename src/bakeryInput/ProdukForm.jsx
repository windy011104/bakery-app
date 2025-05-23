import { useState } from "react";
import Alert from "./components/Alert";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";

export default function OrderBakeryForm() {
  const [namaProduk, setNamaProduk] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [harga, setHarga] = useState("");
  const [tanggalPesan, setTanggalPesan] = useState("");
  const [kategori, setKategori] = useState("");

  const kategoriOptions = ["Roti", "Kue", "Pastry", "Cookies"];

  return (
    <Card title="🍪Form Pemesanan Produk Bakery🛒">
      <div className="mb-2">
        <Input
          label="Nama Produk"
          type="text"
          placeholder="Masukkan nama produk"
          onChange={(e) => setNamaProduk(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <Input
          label="Jumlah"
          type="number"
          placeholder="Masukkan jumlah"
          onChange={(e) => setJumlah(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <Input
          label="Harga"
          type="text"
          placeholder="Masukkan harga"
          onChange={(e) => setHarga(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <Input
          label="Tanggal Pemesanan"
          type="date"
          onChange={(e) => setTanggalPesan(e.target.value)}
        />
      </div>
      <div className="mb-4 mt-3">
        <label className="block text-pink-700 font-semibold mb-2">
          Kategori Produk
        </label>
        <select
          className="w-full p-2 border border-pink-300 rounded-lg bg-pink-50 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
        >
          <option value="">Pilih kategori</option>
          {kategoriOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {namaProduk && jumlah && harga && tanggalPesan && kategori ? (
        <Alert type="info" message="Data pemesanan telah dimasukkan dengan lengkap." />
      ) : (
        <Alert type="error" message="Harap isi semua data dengan benar." />
      )}
      <Button
        label="Simpan Data"
        onClick={() => alert("Pemesanan berhasil disimpan!")}
      />
    </Card>
  );
}
