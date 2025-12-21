import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);

  const token = localStorage.getItem("token");

  const handleDashboardClick = () => {
    if (token) {
      // logged in → dashboard app
      window.location.href = "http://localhost:5173/dashboard";
    } else {
      // not logged in → login page
      window.location.href = "/login";
    }
  };

  return (
    <nav className="bg-white border-b my-navbar">
      <div className="max-w-screen-xl mx-auto px-6 pb-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            className="w-32"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10 text-gray-700 font-medium">
          <li><Link to="/signup" className="text-[#666] hover:text-[#387ed1]">Signup</Link></li>
          <li><Link to="/about" className="text-[#666] hover:text-[#387ed1]">About</Link></li>
          <li><Link to="/products" className="text-[#666] hover:text-[#387ed1]">Products</Link></li>
          <li><Link to="/pricing" className="text-[#666] hover:text-[#387ed1]">Pricing</Link></li>
          <li><Link to="/support" className="text-[#666] hover:text-[#387ed1]">Support</Link></li>

          {/* ✅ Dashboard LINK */}
          <li>
            <span
              onClick={handleDashboardClick}
              className="cursor-pointer text-[#666] hover:text-[#387ed1]"
            >
              Dashboard
            </span>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden px-6 pb-4 space-y-3 text-gray-700 font-medium">
          <li><Link to="/signup" className="block hover:text-[#387ed1]">Signup</Link></li>
          <li><Link to="/about" className="block hover:text-[#387ed1]">About</Link></li>
          <li><Link to="/products" className="block hover:text-[#387ed1]">Products</Link></li>
          <li><Link to="/pricing" className="block hover:text-[#387ed1]">Pricing</Link></li>
          <li><Link to="/support" className="block hover:text-[#387ed1]">Support</Link></li>

          {/* ✅ Mobile Dashboard LINK */}
          <li>
            <span
              onClick={handleDashboardClick}
              className="block cursor-pointer hover:text-[#387ed1]"
            >
              Dashboard
            </span>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
