import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-green)] text-white py-14 px-6 mt-0 border-t border-[var(--color-brand-green-light)]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

        {/* Logo */}
        <div className="flex flex-col items-start justify-start">
          <img
            src="/img/logo.png"
            alt="Yummy Bakery Logo"
            className="w-36 h-auto mb-4 object-contain"
          />
        </div>

        {/* Outlet Locations */}
        <div className="flex flex-col items-start gap-3">
          <h5 className="font-bold text-lg flex items-center gap-2 mb-2">
            <MapPin className="w-5 h-5" /> Outlet Kami
          </h5>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Outlet Gobah</p>
              <p className="text-sm leading-snug">
                Jl. Ronggowarsito No.72,<br />
                Suka Maju, Kec. Sail,<br />
                Pekanbaru
              </p>
            </div>
            <div>
              <p className="font-semibold">Outlet Panam</p>
              <p className="text-sm leading-snug">
                Jl. SM Amin, Labuh Barat,<br />
                Kec. Tampan, Pekanbaru
              </p>
            </div>
            <div>
              <p className="font-semibold">Outlet Simpang Tiga</p>
              <p className="text-sm leading-snug">
                Jl. Jend Sudirman No.11G,<br />
                Simpang Tiga, Kec. Bukit Raya
              </p>
            </div>
            <div>
              <p className="font-semibold">Outlet Riau</p>
              <p className="text-sm leading-snug">
                Jl. Riau No.25A, Kp. Bandar,<br />
                Kec. Senapelan, Pekanbaru
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-start gap-3">
          <h5 className="font-bold text-lg flex items-center gap-2 mb-2">
            <MapPin className="w-5 h-5" /> Contact Us
          </h5>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>hello@yummybakery.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+62 812-3456-7890</span>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-start gap-3">
          <h5 className="font-bold text-lg mb-2">Follow Us</h5>
          <div className="flex items-center gap-2">
            <Instagram className="w-5 h-5" />
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-brand-green-light)]"
            >
              yummicompany_bakery
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Facebook className="w-5 h-5" />
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-brand-green-light)]"
            >
              yummicompany_bakery
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Centered Bawah */}
      <div className="text-center text-xs text-white/60 mt-10">
        &copy; {new Date().getFullYear()} Yummy Bakery. All rights reserved.
      </div>
    </footer>
  );
}
