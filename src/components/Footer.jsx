import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[var(--color-caramel)] text-[var(--color-brown)] py-14 px-6 mt-12 border-t border-[var(--color-dough)]"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 text-sm">

        {/* Outlet Locations */}
        <div id="footer-outlets" className="flex flex-col items-center">
          <h5 className="font-poppins-extrabold text-lg text-[var(--color-cream)] mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5" /> Outlet Kami
          </h5>
          <div className="font-poppins grid grid-cols-2 gap-6">
            <div>
              <strong>Outlet Gobah</strong>
              <p>Jl. Ronggowarsito No.72, Suka Maju, Kec. Sail, Pekanbaru</p>
            </div>
            <div>
              <strong>Outlet Panam</strong>
              <p>JL. SM Amin, Labuh Barat, Kec. Tampan, Pekanbaru</p>
            </div>
            <div>
              <strong>Outlet Simpang Tiga</strong>
              <p>Jl. Jend Sudirman No.11G, Simpang Tiga, Kec. Bukit Raya</p>
            </div>
            <div>
              <strong>Outlet Riau</strong>
              <p>Jl. Riau No.25A, Kp. Bandar, Kec. Senapelan, Pekanbaru</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div id="footer-contact" className="flex flex-col items-center">
          <h5 className="font-poppins-extrabold text-lg text-[var(--color-cream)] mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5" /> Contact Us
          </h5>
          <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@yummybakery.com</p>
          <p className="flex items-center gap-2 mt-1"><Phone className="w-4 h-4" /> +62 812-3456-7890</p>
        </div>

        {/* Social Media */}
        <div id="footer-social" className="flex flex-col items-center">
          <h5 className="font-poppins-extrabold text-lg text-[var(--color-cream)] mb-4 flex items-center gap-2">
            Follow Us
          </h5>
          <div className="flex flex-col gap-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[var(--color-cream)] transition"
            >
              <Instagram className="w-5 h-5" /> Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[var(--color-cream)] transition"
            >
              <Facebook className="w-5 h-5" /> Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        id="footer-bottom"
        className="text-center text-xs text-[var(--color-brown)] mt-10"
      >
        &copy; {new Date().getFullYear()} Yummy Bakery. All rights reserved.
      </div>
    </footer>
  );
}
