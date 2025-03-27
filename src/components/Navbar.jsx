import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-full bg-[#1A1A1A] p-4 sticky top-0 left-0 right-0">
      <div className="w-full px-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-[#5DE562] font-bold text-xl font-contraxt">
          SwissPhish
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-12 items-center">
          <a href="#" className="text-white hover:text-green-200">
            Home
          </a>
          <a href="#" className="text-white hover:text-green-200">
            About
          </a>
          <a href="#" className="text-white hover:text-green-200">
            Services
          </a>
          <a href="#" className="text-white hover:text-green-200">
            Contact
          </a>
        </div>
        <button className="hidden md:block bg-white text-[#5DE562] px-4 py-2 rounded-lg font-medium hover:bg-green-100">
          Sign Up
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block text-white hover:bg-green-700 px-3 py-2 rounded"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-white hover:bg-green-700 px-3 py-2 rounded"
            >
              About
            </a>
            <a
              href="#"
              className="block text-white hover:bg-green-700 px-3 py-2 rounded"
            >
              Services
            </a>
            <a
              href="#"
              className="block text-white hover:bg-green-700 px-3 py-2 rounded"
            >
              Contact
            </a>
            <button className="bg-white text-[#5DE562] px-4 py-2 rounded-lg font-medium hover:bg-green-100">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
