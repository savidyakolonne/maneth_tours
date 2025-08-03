import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Layout from "./Pages/Layout.jsx";
import Home from "./Pages/Home.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Destinations from "./Pages/Destinations.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import TourPackages from "./Pages/TourPackages.jsx";
import PackagesDetails from "./Pages/PackagesDetails.jsx";
import PlacesRoute from "./Pages/PlacesRoute.jsx";
import NoPage from "./Pages/NoPage.jsx";
import Reviews from "./Pages/Reviews.jsx";


function App() {

  return (
    <>
     <BrowserRouter>
         <Routes>

             <Route path="/" element={<Layout />} >
                 <Route index element={<Home />} />
                 <Route path="/about" element={<AboutUs />} />
                 <Route path="/reviews" element={<Reviews />} />
                 <Route path="/destinations" element={<Destinations />} />
                 <Route path="/contactUs" element={<ContactUs />} />
                 <Route path="/tourPackages" element={<TourPackages />} />
                 <Route path="/tourPackages/:id" element={<PackagesDetails />} />
                 <Route path="/places" element={<PlacesRoute />} />
                 <Route path="*" element={<NoPage />} />
             </Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
