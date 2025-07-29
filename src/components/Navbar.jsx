import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div>
      {/* Top Header */}
      <div className="bg-gray-100 text-center py-2 text-sm">
        <h1>Email: manethtours@gmail.com | Phone: 070 000 0000</h1>
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-4 py-2 bg-white shadow-md relative">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold">Maneth Tours</h1>
        </div>

        {/* Hamburger Menu (mobile only) */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav Links (desktop only) */}
        <ul className="hidden md:flex gap-4 absolute left-1/2 transform -translate-x-1/2">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">Tour Packages</li>
          <li className="hover:text-blue-500 cursor-pointer">Destinations</li>
          <li className="hover:text-blue-500 cursor-pointer">About</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        </ul>

        {/* Social Icons (desktop) */}
        <div className="hidden md:flex gap-3 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="hover:text-blue-600 cursor-pointer" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          </a>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4 animate-slideDown transition-all duration-300">
          <ul className="flex flex-col gap-4 text-center text-lg font-medium">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Tour Packages</li>
            <li className="hover:text-blue-500 cursor-pointer">Destinations</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          </ul>

          <div className="flex justify-center gap-5 text-2xl pt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-blue-600 cursor-pointer" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
