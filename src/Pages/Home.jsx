import React from 'react';
import { useNavigate } from "react-router-dom";
import NatureVid from "../assets/Video/naturalVid.mp4";
import TourPackages from './TourPackages';
import Destinations from './Destinations';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Reviews from './Reviews';

const Home = () => {

    const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contactUs");
  };
    return (
        <>
            <div className="relative h-[700px] mt-">
               
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
                >
                    <source src={NatureVid} type="video/mp4" />
                </video>

                
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                    <h1 className="text-6xl font-bold mb-4 "
                    style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.9)" }}>
                        Explore The Beauty of Sri Lanka
                    </h1>
                    <h3 className="text-3xl font-medium "
                    style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.8)" }}>
                        Explore Nature, Culture & Adventure With Us
                    </h3>
                    <button 
                    onClick={handleContact}
                    className="mt-6 px-6 py-3 bg-gradient-to-r from-[#0287a8] to-[#00c3c7] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform">
                        Explore Tours
                    </button>
                </div>
                
            </div>
             <div>
                    <TourPackages/>

                </div>
                <div>
                    <Destinations/>
                </div>
                <div>
                    <AboutUs/>
                </div>
                <div>
                    <Reviews/>
                </div>
                <div>
                    <ContactUs/>
                </div>
        </>
    );
};

export default Home;
