import React from "react";
import { useNavigate } from "react-router-dom";
import cover1 from "../assets/cover1.jpg";
import cover2 from "../assets/cover2.jpg";
import cover3 from "../assets/cover3.jpg";
import cover4 from "../assets/cover4.jpg";


const packages = [
 {
     slug: "Package1",
     name: "Sri Lanka Explorer",
     price: "$450",
     days: "7 Days",
     image: cover1,
   },
   {
     slug: "Package2",
     name: "Beach Paradise",
     price: "$300",
     days: "5 Days",
     image: cover4,
   },
   {
     slug: "Package3",
     name: "EcoWild Journeys",
     price: "$600",
     days: "10 Days",
     image: cover2,
   },
   {
     slug: "Package4",
     name: "Cultural Tour",
     price: "$500",
     days: "8 Days",
     image: cover3,
   },
];

const TourPackagesPage = () => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    navigate(`/tourPackages/${slug}`); // goes to each unique page
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Tour Packages
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg.slug}
            onClick={() => handleClick(pkg.slug)}
            className="cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <img
              src={pkg.image}
              alt={pkg.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold">{pkg.name}</h3>
              <p className="text-gray-600">{pkg.days}</p>
              <p className="text-lg font-bold text-teal-600 mt-2">{pkg.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourPackagesPage;
