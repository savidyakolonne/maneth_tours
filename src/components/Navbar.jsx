import React from "react";
import {useState} from "react";
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
import {HiMenu, HiMenuAlt1,HiMenuAlt3} from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import ManethSVG from "../assets/ManethSVG.svg";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

  return (
      <>
        
        <div className="sticky top-0 w-full bg-white text-black shadow-md z-50">
            <div className='bg-gradient-to-r from-[#0287a8] to-[#00c3c7] text-white'>
                <div className="container py-[6px] sm:block hidden">
                    <div className='flex justify-between items-center'>
                        <p className='text-black flex items-center ml-4'>
                            <FaPhoneAlt className='mr-2 text-teal-400' />
                            +94 71 123 4567 / +94 77 765 4321
                        </p>
                        <p className='text-white flex items-center'>
                            <FaEnvelope className='mr-2 text-teal-400' />
                            manethtours@gmail.com
                        </p>
                        <div className='flex gap-4 text-xl mr-4'>
                            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-white hover:text-teal-400 transition'>
                                <FaFacebook />
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
                        <img src={ManethSVG} alt="Maneth Tours Logo" className="max-h-12 max-w-32 w-auto h-auto md:max-h-16 md:max-w-40 lg:max-h-20 lg:max-w-48"/>
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
                                <NavLink to="/tourPackages" className='hover:text-[#00c3c7]' onClick={()=> window.scrollTo(0,0)}>
                                    Tour Packages
                                </NavLink>
                            </li>
                            <li className='py-4'>
                                <NavLink to="/destinations" className='hover:text-[#00c3c7]' onClick={()=> window.scrollTo(0,0)}>
                                   Destinations
                                </NavLink>
                            </li>
                            <li className='py-4'>
                                <NavLink to="/reviews" className='hover:text-[#00c3c7]' onClick={()=> window.scrollTo(0,0)}>
                                    Reviews
                                </NavLink>
                            </li>
                            <li className='py-4'>
                                <NavLink to="/about" className='hover:text-[#00c3c7]' onClick={()=> window.scrollTo(0,0)}>
                                    About Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Link to="/contactUs">
                        <button className='bg-gradient-to-r from-[#0287a8] to-[#00c3c7] hover:from-[#026c85] hover:to-[#00aab3] transition-all duration-600 text-white px-3 py-1 rounded-full mr-6 cursor-pointer'>
                            Contact Us</button></Link>
                        <div className='md:hidden block'>
                            {showMenu? (
                                <HiMenuAlt1
                                 onClick={toggleMenu}
                                 className='cursor-pointer transition-all'
                                 size={30}
                                 />
                            ):(
                                <HiMenuAlt3
                                    onClick={toggleMenu}
                                    className='cursor-pointer transition-all'
                                    size={30}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu}/>
        </div>
      </>

  )
}

export default Navbar