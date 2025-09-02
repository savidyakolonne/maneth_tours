import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {assets} from "../assets/assets.js";  // <-- Added Import
import ManethSVG from "../assets/ManethSVG.svg";


const navbarlinks = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "TourPackages",
        link: "/tourPackages",
    },
    {
        name: "Destinations",
        link: "/destinations",
    },
    {
        name: "Reviews",
        link: "/reviews",
    },
    {
        name: "AboutUs",
        link: "/about",
    },
];

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
    return (
        <div
            className={`${
                showMenu ? "left-0" : "-left-[100%]"
            } fixed bottom-0 top-0 flex h-screen w-[75%] flex-col justify-between bg-white
            dark:text-white px-8 pb-6 pt-16 text-black transition-all 
            duration-200 md:hidden rounded-r-xl shadow-md`}
        >
            <div className='Navbar_card'>
                <div>
                    <div className='flex items-center justify-start gap-4'>
                        <img src={ManethSVG} alt="Maneth Tours Logo" className="max-h-10 max-w-28 w-auto h-auto"/>
                    </div>
                </div>
                <div className='text-black mt-12'>
                    <ul className="space-y-4 text-xl">
                        {navbarlinks.map(({ name, link }) => (
                            <li key={name}>
                                <Link
                                    to={link}
                                    onClick={() => setShowMenu(false)}
                                    className='mb-5 inline-block'   // <-- Fixed className
                                >
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveMenu;
