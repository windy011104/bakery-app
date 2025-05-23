export default function Artikel(){
    return (
        <div>
            <hr></hr>
            <h1>Kelezatan Manis dari Prancis yang Mendunia</h1>
            <TextTrackList/>
            <QuoteText />
            <MacaronTrivia />
            <MacaronTips />
        </div>
    )
}
function TextTrackList(){
    return (
        <small> 
            <hr/>
            <p>Macaron adalah salah satu kue paling populer dan elegan di dunia. Dengan bentuknya yang kecil, warna-warni menarik, serta tekstur renyah
               di luar dan lembut di dalam, macaron telah menjadi camilan favorit banyak orang. Berasal dari Prancis, kue ini memiliki sejarah panjang dan 
               telah mengalami banyak inovasi, baik dari segi rasa maupun teknik pembuatannya.</p>

            <p>Di balik tampilannya yang cantik, macaron juga dikenal sebagai salah satu kue yang cukup sulit dibuat. Butuh ketelitian dalam proses pembuatannya 
               agar mendapatkan hasil yang sempurna. Tidak heran jika banyak orang penasaran dan tertantang untuk mencoba membuatnya sendiri. Dalam artikel ini, 
               kita akan membahas sejarah, bahan, cara pembuatan, varian rasa, hingga tips sukses membuat macaron yang sempurna.</p>
            
            <p>Awalnya, macaron hanyalah kue sederhana berbahan dasar almond, putih telur, dan gula tanpa isian. Kue ini lebih mirip dengan biskuit almond dan 
               sering disajikan dalam berbagai acara kerajaan. Pada abad ke-20, seorang pastry chef bernama Pierre Desfontaines dari toko roti terkenal Ladurée 
               di Paris menciptakan versi modern dari macaron dengan menambahkan isian berupa krim, ganache, atau selai di antara dua lapisan macaron.</p>
               
            <p>Sejak saat itu, macaron berkembang menjadi kue yang sangat populer di seluruh dunia. Berbagai toko kue dan pastry ternama berlomba-lomba 
               menciptakan varian rasa unik untuk menarik perhatian para pencinta kuliner.Apakah Anda tertarik untuk mencoba membuat macaron sendiri atau mengunjungi toko 
               roti favorit Anda hari ini?</p>
            </small>
    )
}

function QuoteText() {
    return (
        <small>
            <hr/>
            <h1>"🍪💖 Little bites of happiness in every color 💖🍪"</h1>
        </small>
    );
}

function MacaronTrivia() {
    return (
        <div>
            <h3>🎉Fakta Menarik tentang Macaron:</h3>
            <ul>
            <li>🍪 Macaron berasal dari Italia dan dibawa ke Prancis oleh Catherine de' Medici.</li>
            <li>🎨 Macaron hadir dalam berbagai warna dan rasa, dari klasik seperti vanilla hingga unik seperti matcha dan lavender.</li>
            <li>👩‍🍳 Membuat macaron memerlukan teknik khusus, seperti "macaronage" agar teksturnya sempurna.</li>
            <li>🌍 Macaron sangat populer di seluruh dunia dan memiliki hari perayaan sendiri, yaitu **Jour du Macaron** pada 20 Maret.</li>
            </ul>
        </div>
    );
}

function MacaronTips() {
    return (
        <div>
            <h3>👨‍🍳 Tips Sukses Membuat Macaron</h3>
            <ul>
                <li>✅ Gunakan putih telur yang sudah didiamkan 24 jam agar lebih stabil.</li>
                <li>✅ Ayak almond bubuk dan gula halus agar teksturnya lebih halus.</li>
                <li>✅ Aduk dengan teknik macaronage untuk mendapatkan konsistensi yang pas.</li>
                <li>✅ Diamkan adonan sebelum dipanggang hingga permukaannya mengering.</li>
                <li>✅ Panggang dengan suhu yang tepat (140-150°C) agar tidak retak.</li>
                <p></p>
            </ul>
        </div>
    );
}




