import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Layout from "./Pages/Layout.jsx";
import Home from "./Pages/Home.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Package3 from "./Pages/Package3.jsx";
import Package2 from "./Pages/Package2.jsx";
import Package1 from "./Pages/Package1.jsx";
import Package4 from "./Pages/Package4.jsx";
import AboutUsPage from "./Pages/AboutusPage.jsx";
import TourPackagesPage from "./Pages/TourPackagesPage.jsx";
import ReviewsPage from "./Pages/ReviewsPage";
import DestinationsPage from "./Pages/DestinationsPage.jsx";
import PrivayPolicy from "./Pages/PrivayPolicy.jsx";


function App() {

  return (
    <>
     <BrowserRouter>
         <Routes>

             <Route path="/" element={<Layout />} >
                 <Route index element={<Home />} />
                 <Route path="/about" element={<AboutUsPage />} />

                 <Route path="/reviews" element={<ReviewsPage />} />

                 <Route path="/destinations" element={<DestinationsPage/>} />

                 <Route path="/contactUs" element={<ContactUs />} />

                 <Route path="/tourPackages" element={<TourPackagesPage />} />

                 <Route path="/tourPackages/Package1" element={<Package1 />} />
                 <Route path="/tourPackages/Package2" element={<Package2 />} />
                 <Route path="/tourPackages/Package3" element={<Package3 />} />
                 <Route path="/tourPackages/Package4" element={<Package4 />} />

                 <Route path="/privacy" element={<PrivayPolicy />} />

             </Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
