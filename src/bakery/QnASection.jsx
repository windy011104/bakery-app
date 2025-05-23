export default function QnASection() {
    return (
        <div>
            <hr />
            <div className="card2">
                <h1>😄QnA Section</h1>
            </div>
            <UserCard 
                Q="Apa itu Bakery Yummy?" 
                A="Bakery Yummy adalah toko roti dan kue yang menyajikan berbagai macam roti, pastry, dan kue dengan bahan berkualitas tinggi dan rasa lezat." 
            />
            <UserCard 
                Q="Apakah Bakery Yummy menyediakan kue gluten-free?" 
                A="Ya, Bakery Yummy memiliki beberapa pilihan kue gluten-free dan vegan untuk pelanggan dengan kebutuhan khusus." 
            />
            <UserCard 
                Q="Bagaimana cara memesan kue di Bakery Yummy?" 
                A="Anda bisa memesan langsung di toko, melalui website resmi, atau menggunakan layanan pesan antar seperti GoFood dan GrabFood." 
            />
            <UserCard 
                Q="Apa produk paling favorit di Bakery Yummy?" 
                A="Beberapa menu favorit adalah Red Velvet Cake, Croissant Almond, Tiramisu, dan Macaron." 
            />
            <UserCard 
                Q="Apakah Bakery Yummy sering mengadakan promo?" 
                A="Ya! Bakery Yummy sering memberikan promo spesial, diskon ulang tahun, dan loyalty program untuk pelanggan setia." 
            />
            <center><MostAskedQuestion/></center>
            <center><CustomerReview/></center>
            <center><AskQuestion/></center>
        </div>
    );
}

function UserCard(props) {
    return (
        <div>
            <hr/>
            <h3>Q: {props.Q}</h3>
            <p>A: {props.A}</p>
        </div>
    );
}
function MostAskedQuestion() {
    return (
        <div>
             <hr/>
            <h4>🔥 Pertanyaan Paling Populer:</h4>
            <p><strong>Q:</strong> Apakah Bakery Yummy menyediakan kue ulang tahun custom?</p>
            <p><strong>A:</strong> Ya! Kami menerima pesanan kue custom untuk ulang tahun, pernikahan, dan acara lainnya.</p>
        </div>
    );
}
function CustomerReview() {
    return (
        <div>
            <h4>Review Pelanggan:</h4>
            <p>⭐️⭐️⭐️⭐️⭐️ "Croissant dari Bakery Yummy sangat renyah dan buttery! Pasti akan beli lagi." - Amanda</p>
            <p>⭐️⭐️⭐️⭐️⭐️ "Macaron-nya enak banget, rasanya pas dan tidak terlalu manis!" - Rina</p>
            <p>⭐️⭐️⭐️⭐️ "Toko yang nyaman dan kue ulang tahun custom-nya sangat cantik." - Budi</p>
        </div>
    );
}

// Function tambahan 3: Formulir untuk mengajukan pertanyaan baru
function AskQuestion() {
    return (
        <div>
            <h4>❓ Ajukan Pertanyaan:</h4>
            <input type="text" placeholder="Tulis pertanyaan Anda..." style={{ width: "80%", padding: "10px", marginBottom: "10px" }} />
            <button style={{ padding: "10px 12px", backgroundColor: "#ff9900", color: "#fff", border: "none", cursor: "pointer" }}>Kirim</button>
        </div>
    );
}


