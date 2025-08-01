import React from "react";
import {FaFacebook, FaInstagram, FaBars, FaTimes, FaPhoneAlt} from 'react-icons/fa'

const Navbar = () => {

  return (
      <>
        <div className="fixed top-0 right-0 w-full bg-white text-black shadow-md">
          <div className="container bg-gradient-to-r from-primary">
              <div className='flex'>
                <p className='text-black flex items-center mb-4'>
                  <FaPhoneAlt className='mr-2 text-teal-400' />
                  +94 71 123 4567 / +94 77 765 4321
                </p>

              </div>
          </div>
        </div>
      </>

  )
}

export default Navbar
