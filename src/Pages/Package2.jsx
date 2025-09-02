import React from "react";
import { useNavigate } from "react-router-dom";
import Negombo from "../assets/Negombo.jpeg";
import Bentota from "../assets/Bentota.jpg";
import Galle from "../assets/Galle.jpg";
import Mirissa from "../assets/Mirissa.jpg";
import Airport from "../assets/Airport.jpg";

const itinerary = [
  {
    day: 1,
    title: "Arrival | Negombo",
    description:
      "Arrive in Sri Lanka and transfer to Negombo, a beautiful coastal town. Relax after your journey, walk along the sandy beaches, and enjoy a seafood dinner with ocean views.",
    image: Negombo,
  },
  {
    day: 2,
    title: "Bentota Beach & Water Sports",
    description:
      "Travel to Bentota, famous for its golden sands and calm waters. Try exciting water sports like jet skiing, banana boating, and windsurfing, or simply relax under the sun.",
    image: Bentota,
  },
  {
    day: 3,
    title: "Galle Fort & Unawatuna Beach",
    description:
      "Visit the historic Galle Fort, a UNESCO World Heritage Site, then spend the afternoon at Unawatuna Beach, one of Sri Lanka’s most popular coastal spots.",
    image: Galle,
  },
  {
    day: 4,
    title: "Mirissa Whale Watching",
    description:
      "Head to Mirissa early morning for an unforgettable whale and dolphin watching excursion. Spend the rest of the day relaxing at Mirissa Beach, famous for its palm tree views.",
    image: Mirissa,
  },
  {
    day: 5,
    title: "Departure via Colombo",
    description:
      "Return to Colombo for a short city tour. Explore Galle Face Green, Independence Square, and shop for souvenirs before your departure, taking home beachside memories.",
    image: Airport,
  },
];

const BeachParadise = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contactUs");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12">
        Beach Paradise - 5 Days
      </h2>

      {/* Itinerary Days */}
      {itinerary.map((dayItem, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-8 ${
            index % 2 === 0 ? "" : "md:flex-row-reverse"
          }`}
        >
          {/* Description */}
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-2xl font-semibold">
              Day {dayItem.day}: {dayItem.title}
            </h3>
            <p className="text-gray-700">{dayItem.description}</p>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={dayItem.image}
              alt={dayItem.title}
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      ))}

      {/* Contact Button */}
      <div className="text-center mt-12">
        <button
          onClick={handleContact}
          className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-700 transition"
        >
          Contact Us to Book
        </button>
      </div>
    </div>
  );
};

export default BeachParadise;
