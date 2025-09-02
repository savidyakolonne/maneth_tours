import React from "react";
import { useNavigate } from "react-router-dom";
import Negombo from "../assets/Negombo.jpeg";
import Pinnawala from "../assets/Pinnawala.jpg";
import Nuwaraeliya from "../assets/Nuwaraeliya.jpg";
import Hortonplains from "../assets/Hortonplains.jpg";
import Yala from "../assets/Yala.jpg";
import Galle from "../assets/Galle.jpg";
import Airport from "../assets/Airport.jpg";

const itinerary = [
  {
    day: 1,
    title: "Arrival | Negombo",
    description:
      "Arrive at Bandaranaike International Airport and transfer to Colombo. Enjoy a short city tour covering Independence Square, Gangaramaya Temple, and Galle Face Green. Overnight stay in Colombo.",
    image: Negombo,
  },
  {
    day: 2,
    title: "Pinnawala | Kandy",
    description:
      "Head towards Kandy with a stop at the Pinnawala Elephant Orphanage. In Kandy, visit the Temple of the Sacred Tooth Relic and enjoy a scenic stroll around Kandy Lake.",
    image: Pinnawala,
  },
  {
    day: 3,
    title: "Nuwara Eliya",
    description:
      "Travel through tea country to Nuwara Eliya, known as ‘Little England.’ Visit a tea plantation and factory, and explore Gregory Lake surrounded by misty hills.",
    image: Nuwaraeliya,
  },
  {
    day: 4,
    title: "Horton Plains & Train Ride",
    description:
      "Take an early morning excursion to Horton Plains National Park and hike to World’s End. Later, enjoy a scenic train journey from Nuwara Eliya to Ella through lush tea plantations.",
    image: Hortonplains,
  },
  {
    day: 5,
    title: "Yala National Park",
    description:
      "Head to Yala for an adventurous jeep safari. Spot leopards, elephants, and other wildlife in Sri Lanka’s most famous national park. Overnight stay near Yala.",
    image: Yala,
  },
  {
    day: 6,
    title: "Galle & Bentota",
    description:
      "Travel to the southern coast. Visit the UNESCO World Heritage Site Galle Fort, then relax at Bentota Beach with optional water sports or a boat safari on the Bentota River.",
    image: Galle,
  },
  {
    day: 7,
    title: "Departure",
    description:
      "Return to Colombo for last-minute shopping or sightseeing before your transfer to the airport for departure. Say goodbye with lasting memories of Sri Lanka.",
    image: Airport,
  },
];

const SriLankaExplorer = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contactUs");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12">
        Sri Lanka Explorer - 7 Days
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

export default SriLankaExplorer;
