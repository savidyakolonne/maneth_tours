import React from 'react'
import {assets} from "../assets/assets.js";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaWhatsapp, FaTripadvisor} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
                <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                    <img src={assets.nexa_build_dark} alt=''/>
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
                        <a href="#Header" className='hover:text-white'>Home</a>
                        <a href="#TourPackages" className='hover:text-white'>Tour Packages</a>
                        <a href="Destinations" className='hover:text-white'>Destinations</a>
                        <a href="#About" className='hover:text-white'>About Us</a>
                        <a href="#Contact" className='hover:text-white'>Contact Us</a>
                        <a href="#" className='hover:text-white'>Privacy Policy</a>
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
                        info@nexabuild.com
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
