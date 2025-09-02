import React from 'react'
import {assets} from "../assets/assets.js";
import {Link} from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaWhatsapp, FaTripadvisor} from 'react-icons/fa';
import ManethSVG from "../assets/ManethSVG.svg";

const Footer = () => {
    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
                <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                    <img src={ManethSVG} alt="Maneth Tours Logo" className="max-h-20 max-w-48 w-auto h-auto md:max-h-24 md:max-w-56 lg:max-h-28 lg:max-w-64"/>
                    <p className='text-gray-400 mt-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                    <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <Link to="/" className="hover:text-white">Home</Link>
                        <Link to="/tourPackages" className="hover:text-white">Tour Packages</Link>
                        <Link to="/destinations" className="hover:text-white">Destinations</Link>
                        <Link to="/about" className="hover:text-white">About Us</Link>
                        <Link to="/contactUs" className="hover:text-white">Contact Us</Link>
                        <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                    </ul>
                </div>

                <div className='w-full md:w-1/3'>
                    <h3 className='text-white text-lg font-bold mb-4'>Contact Us</h3>

                    <div className='mt-8'>
                    {/* Location */}
                    <p className='text-white flex items-center mb-4'>
                        <FaMapMarkerAlt className='mr-2 text-teal-400' />
                        123 Beach Road, Kalametiya, Sri Lanka
                    </p>

                    {/* Phone */}
                    <p className='text-white flex items-center mb-4'>
                        <FaPhoneAlt className='mr-2 text-teal-400' />
                        +94 71 123 4567 / +94 77 765 4321
                    </p>

                    {/* Email */}
                    <p className='text-white flex items-center mb-4'>
                        <FaEnvelope className='mr-2 text-teal-400' />
                         manethtours@gmail.com
                    </p>
                    </div>
                    {/* Social Media Icons */}
                    <div className='flex gap-4 mt-8 text-xl '>
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

            <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500 text-sm'>
                © {new Date().getFullYear()}{" "}
                <a
                    href="https://your-kozaa-site.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-500 transition font-semibold"
                >
                    Kozaa
                </a>. All rights reserved.
            </div>

        </div>
    )
}

export default Footer
