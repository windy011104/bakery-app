export default function ProductSection() {
    return (
        <div>
            <div className="card2">
                <h1>🛒 Produk Bakery</h1>
            </div>
            <center><NewArrival /></center>
            <ProductItem 
                nama="Macaron"
                harga="Rp 25.000 / box"
                deskripsi="Macaron adalah kue kecil berbentuk bulat dengan tekstur renyah di luar dan lembut di dalam."
                gambar="/img/macaron.jpg"
            />
            <ProductItem 
                nama="Croissant"
                harga="Rp 18.000 / pcs"
                deskripsi="Croissant adalah pastry khas Prancis yang berlapis-lapis dengan rasa gurih dan mentega yang kaya."
                gambar="/img/croissant.jpg"
            />
            <ProductItem 
                nama="Red Velvet Cake"
                harga="Rp 150.000 / loyang"
                deskripsi="Red Velvet Cake memiliki tekstur lembut dengan rasa khas cokelat dan krim keju yang lezat."
                gambar="/img/redvelvet.jpg"
            />
            <ProductItem 
                nama="Donat Cokelat"
                harga="Rp 12.000 / pcs"
                deskripsi="Donat dengan lapisan cokelat yang lumer di mulut, cocok untuk camilan manis."
                gambar="/img/donatcoklat.jpg"
            />
            <center><BestSeller /></center>
            <center><SpecialOffer /></center>
        </div>
    );
}

function ProductItem({ nama, harga, deskripsi, gambar }) {
    return (
      <div className="card3">
        <img src={gambar} alt={nama} className="product-image" />
        <h3>{nama}</h3>
        <p>{deskripsi}</p>
        <strong>{harga}</strong>
      </div>
    )
}
  
function BestSeller() {
    return (
        <div>
            <h3>🔥 Best Seller</h3>
            <p>Produk yang paling diminati pelanggan kami karena rasa autentik dan bahan premium.</p>
            <strong>Promo: Diskon 10% untuk pembelian kedua!</strong>
        </div>
    );
}

function NewArrival() {
    return (
        <div>
            <h3>🆕 Produk Terbaru</h3>
            <p>Kami selalu menghadirkan inovasi dengan rasa dan tampilan yang menarik.</p>
            <strong>Coba sekarang dan jadi yang pertama menikmatinya!</strong>
        </div>
    );
}

function SpecialOffer() {
    return (
        <div>
            <h3>🎉 Penawaran Spesial</h3>
            <p>Dapatkan diskon eksklusif untuk pelanggan setia kami setiap akhir pekan.</p>
            <strong>Gunakan kode: BAKERYFRESH untuk potongan harga 15%.</strong>
        </div>
    );
}



