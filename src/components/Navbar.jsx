import React from 'react'
import {Link} from 'react-router-dom';


function NavBar() {
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
              </ul>

              {/* Mobile Menu Button (hidden on desktop) */}
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
                <li><Link href="#" className="block hover:text-blue-600">Signup</Link></li>
                <li><Link href="#" className="block hover:text-blue-600">About</Link></li>
                <li><Link href="#" className="block hover:text-blue-600">Products</Link></li>
                <li><Link href="#" className="block hover:text-blue-600">Pricing</Link></li>
                <li><Link href="#" className="block hover:text-blue-600">Support</Link></li>
              </ul>
            )}
          </nav>

      );
}

export default NavBar;