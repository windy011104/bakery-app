import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `cursor-pointer rounded-md px-3 py-2 text-sm transition-colors ${
      isActive
        ? 'text-green-dark font-extrabold bg-green-100'
        : 'text-brown hover:text-green-dark hover:bg-green-50'
    }`;

  return (
    <div
      id="navbar"
      className="flex justify-between items-center px-10 py-4 bg-caramel shadow-md font-poppins"
    >
      {/* Logo + Brand */}
      <div id="navbar-left" className="flex items-center space-x-4">
        <img
          id="navbar-logo"
          src="/img/logo.png"
          alt="Yummy Bakery Logo"
          className="w-12 h-12 rounded-full object-cover"
        />
        <span
          id="navbar-brand"
          className="text-brown text-xl font-poppinst"
        >
          Yummy 
        </span>
      </div>

      {/* Navigation Links */}
      <div id="navbar-center">
        <ul className="flex space-x-6 items-center font-poppins-extrabold">
          <li>
            <NavLink id="nav-about" to="/about" className={navLinkClass}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink id="nav-products" to="/products" className={navLinkClass}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink id="nav-orders" to="/special-orders" className={navLinkClass}>
              Special Orders
            </NavLink>
          </li>
          <li>
            <NavLink id="nav-contact" to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
