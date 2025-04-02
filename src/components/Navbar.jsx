import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-full bg-[#1A1A1A] p-4 sticky top-0 left-0 right-0 z-50 shadow-lg">
      <div className="w-full px-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-[#5DE562] font-bold text-xl font-conthrax">
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
          <a href="home" className="text-white hover:text-green-200">
            Home
          </a>
          <a href="about" className="text-white hover:text-green-200">
            About
          </a>
          <a href="services" className="text-white hover:text-green-200">
            Services
          </a>
          <a href="contact" className="text-white hover:text-green-200">
            Contact
          </a>
        </div>
        <button className="hidden md:flex flex-row bg-white-500 hover:bg-white-600 text-green-500 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 items-center justify-center gap-2 shadow-md hover:shadow-lg">
          <span>Request a quote</span>
          <ArrowRightIcon className="h-5 w-5" />
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
              Request a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
