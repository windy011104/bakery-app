import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `relative cursor-pointer px-4 py-2 text-sm font-semibold transition-all duration-300
    ${
      isActive
        ? "text-[var(--color-brand-green)] after:w-full after:bg-[var(--color-brand-green)]"
        : "text-gray-700 hover:text-[var(--color-brand-green)] after:w-0 hover:after:w-full after:bg-[var(--color-brand-green)]"
    } after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:transition-all`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/60 border-b border-gray-200 transition-shadow duration-500 ${
        scrolled ? "shadow-lg" : "shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center space-x-3 select-none"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/img/logo.png"
            alt="Yummy Bakery Logo"
            className="w-12 h-12 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
          />
          <span className="text-2xl font-extrabold text-[var(--color-brand-green)] tracking-wide">
            Yummi
          </span>
        </NavLink>

        {/* Desktop Menu + Admin Button */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Products", path: "/products" },
              { name: "Special Orders", path: "/special-orders" },
              { name: "Kesan", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={navLinkClass}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* Tombol Admin */}
          <a
            href="https://project-bakery.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 text-sm font-semibold text-white bg-[var(--color-brand-green)] rounded-lg shadow hover:bg-green-700 transition"
          >
            Admin
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center group"
          aria-label="Toggle menu"
        >
          <span
            className={`block absolute h-1 w-6 bg-[var(--color-brand-green)] rounded-lg transition-transform duration-300 ease-in-out origin-center ${
              isOpen ? "rotate-45" : "-translate-y-2.5"
            }`}
          ></span>
          <span
            className={`block absolute h-1 w-6 bg-[var(--color-brand-green)] rounded-lg transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block absolute h-1 w-6 bg-[var(--color-brand-green)] rounded-lg transition-transform duration-300 ease-in-out origin-center ${
              isOpen ? "-rotate-45" : "translate-y-2.5"
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[var(--color-green)]/90 backdrop-blur-md border-t border-[var(--color-brand-green)] 
        overflow-x-auto w-full z-50 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 min-w-[280px]">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Products", path: "/products" },
            { name: "Special Orders", path: "/special-orders" },
            { name: "Kesan", path: "/contact" },
          ].map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block text-lg font-poppins-extrabold px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? "text-[var(--color-brand-green)] bg-[var(--color-cream)]"
                      : "text-gray-700 hover:bg-[var(--color-cream)] hover:text-[var(--color-brand-green)]"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
