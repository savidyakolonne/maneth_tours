import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaBars,
    FaTimes,
    FaPhoneAlt,
    FaFacebookF,
    FaWhatsapp,
    FaTripadvisor, FaEnvelope
} from 'react-icons/fa'
import {Link, NavLink} from "react-router-dom";
import {assets} from "../assets/assets.js";

const Navbar = () => {

  return (
      <>
        <div className="fixed top-0 right-0 w-full bg-white text-black shadow-md">
            <div className='bg-gradient-to-r from-[#0287a8] to-[#00c3c7] text-white'>
                <div className="container py-[6px] sm:block hidden">
                    <div className='flex justify-between items-center'>
                        <p className='text-black flex items-center ml-4'>
                            <FaPhoneAlt className='mr-2 text-teal-400' />
                            +94 71 123 4567 / +94 77 765 4321
                        </p>
                        <p className='text-white flex items-center'>
                            <FaEnvelope className='mr-2 text-teal-400' />
                            info@nexabuild.com
                        </p>
                        <div className='flex gap-4 text-xl mr-4'>
                            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-white hover:text-teal-400 transition'>
                                <FaFacebookF />
                            </a>
                            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-white hover:text-teal-400 transition'>
                                <FaInstagram />
                            </a>
                            <a href='https://wa.me/94711234567' target='_blank' rel='noopener noreferrer' className='text-white hover:text-teal-400 transition'>
                                <FaWhatsapp />
                            </a>
                            <a href='https://www.tripadvisor.com/' target='_blank' rel='noopener noreferrer' className='text-white hover:text-teal-400 transition'>
                                <FaTripadvisor />
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container py-3 sm:py-0">
                <div className='flex justify-between items-center'>
                    <div>
                        <Link to="/" onClick={()=> window.scrollTo(0,0)}>
                        <img src={assets.nexa_build_dark} alt='' className='h-16 '/>
                        </Link>
                    </div>
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-6'>
                            <li className='py-4'>
                                <NavLink to="/" className='hover:text-[#00c3c7]' onClick={()=> window.scrollTo(0,0)}>
                                    Home
                                </NavLink>
                            </li>
                            <li className='py-4'>
                                <NavLink to="/" className='hover:text-[#00c3c7]' onClick={()=> window.scrollTo(0,0)}>
                                    Tour Packages
                                </NavLink>
                            </li>
                            <li className='py-4'>
                                <NavLink to="/" className='hover:text-[#00c3c7]' onClick={()=> window.scrollTo(0,0)}>
                                   Destinations
                                </NavLink>
                            </li>
                            <li className='py-4'>
                                <NavLink to="/" className='hover:text-[#00c3c7]' onClick={()=> window.scrollTo(0,0)}>
                                    Reviews
                                </NavLink>
                            </li>
                            <li className='py-4'>
                                <NavLink to="/" className='hover:text-[#00c3c7]' onClick={()=> window.scrollTo(0,0)}>
                                    About Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button className='bg-gradient-to-r from-[#0287a8] to-[#00c3c7] hover:from-[#026c85] hover:to-[#00aab3] transition-all duration-600 text-white px-3 py-1 rounded-full mr-6 cursor-pointer'>
                            Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
      </>

  )
}

export default Navbar
