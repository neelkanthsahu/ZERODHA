import React from 'react';

function NavBar() {
    return (
        <nav className="bg-white border-b">
            <div className="max-w-screen-xl mx-auto px-6 pb-4 flex items-center justify-between">

              {/* Logo */}
              <a href="#">
                <img 
                  src="media/images/logo.svg" 
                  alt="Logo" 
                  className="w-32"
                />
              </a>

              {/* Desktop Menu */}
              <ul className="hidden md:flex items-center space-x-10 text-gray-700 font-medium">
                <li><a href="#" className="text-[#666] hover:text-[#387ed1]">Signup</a></li>
                <li><a href="#" className="text-[#666] hover:text-[#387ed1]">About</a></li>
                <li><a href="#" className="text-[#666] hover:text-[#387ed1]">Products</a></li>
                <li><a href="#" className="text-[#666] hover:text-[#387ed1]">Pricing</a></li>
                <li><a href="#" className="text-[#666] hover:text-[#387ed1]">Support</a></li>
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
                <li><a href="#" className="block hover:text-blue-600">Signup</a></li>
                <li><a href="#" className="block hover:text-blue-600">About</a></li>
                <li><a href="#" className="block hover:text-blue-600">Products</a></li>
                <li><a href="#" className="block hover:text-blue-600">Pricing</a></li>
                <li><a href="#" className="block hover:text-blue-600">Support</a></li>
              </ul>
            )}
          </nav>

      );
}

export default NavBar;