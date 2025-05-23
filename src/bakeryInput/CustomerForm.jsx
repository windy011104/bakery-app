import { useState } from "react";
import Alert from "./components/Alert";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";

export default function CustomerBakeryForm() {
    // Definisi State
    const [nama, setNama] = useState("");
    const [nomorHp, setNomorHp] = useState("");
    const [alamat, setAlamat] = useState("");
    const [pesanan, setPesanan] = useState("");

    return (
        <Card title="⭐️Form Pelanggan Bakery⭐️">
            <div className="mb-4">
                <Input
                    label="Nama Pelanggan" 
                    type="text" 
                    placeholder="Masukkan nama pelanggan" 
                    onChange={(e) => setNama(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <Input
                    label="Nomor HP" 
                    type="text" 
                    placeholder="Masukkan nomor HP" 
                    onChange={(e) => setNomorHp(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <Input
                    label="Alamat" 
                    type="text" 
                    placeholder="Masukkan alamat pelanggan" 
                    onChange={(e) => setAlamat(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <Input
                    label="Pesanan" 
                    type="text" 
                    placeholder="Masukkan pesanan pelanggan" 
                    onChange={(e) => setPesanan(e.target.value)}
                />
            </div>
            {nama && nomorHp && alamat && pesanan ? (
                <Alert type="info" message="Data pelanggan telah dimasukkan dengan lengkap." />
            ) : (
                <Alert type="error" message="Harap isi semua data dengan benar." />
            )}
            <Button label="Simpan Data" onClick={() => alert("Data pelanggan berhasil disimpan!")} />
        </Card>
    );
}
