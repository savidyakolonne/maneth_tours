import React from "react";
import { useNavigate } from "react-router-dom";
import Negombo from "../assets/Negombo.jpeg";
import Wilpattu from "../assets/Wilpattu.jpg";
import Anuradapura from "../assets/Negombo.jpeg";
import Minneriya from "../assets/Minneriya.jpg";
import Sigiriya from "../assets/Sigiriya.jpg";
import Knuckles from "../assets/Knuckles.jpg";
import Nuwaraeliya from "../assets/Nuwaraeliya.jpg";
import Ella from "../assets/Ella.jpg";
import Yala from "../assets/Yala.jpg";
import Airport from "../assets/Airport.jpg";

const itinerary = [
  {
    day: 1,
    title: "Arrival | Negombo",
    description:
      "Arrive in Sri Lanka and transfer to Negombo, a charming coastal town. Relax after your flight, stroll along the golden beaches, and enjoy a delicious seafood dinner.",
    image: Negombo,
  },
  {
    day: 2,
    title: "Wilpattu National Park",
    description:
      "Head north to Wilpattu, Sri Lanka’s largest national park. Embark on a thrilling jeep safari to spot leopards, sloth bears, and elephants in their natural habitat.",
    image: Wilpattu,
  },
  {
    day: 3,
    title: "Anuradhapura Ancient City",
    description:
      "Explore the sacred city of Anuradhapura, filled with ancient stupas, temples, and monasteries. Learn about Sri Lanka’s rich Buddhist heritage and admire centuries-old architecture.",
    image: Anuradapura,
  },
  {
    day: 4,
    title: "Minneriya Safari",
    description:
      "Witness the famous elephant gathering at Minneriya National Park. This safari offers incredible photo opportunities as herds of elephants gather near the water reservoirs.",
    image: Minneriya,
  },
  {
    day: 5,
    title: "Sigiriya Rock Fortress",
    description:
      "Climb the iconic Sigiriya Rock Fortress, a UNESCO World Heritage Site. Explore the frescoes, gardens, and enjoy panoramic views of the surrounding forests.",
    image: Sigiriya,
  },
  {
    day: 6,
    title: "Knuckles Mountain Range",
    description:
      "Journey into the Knuckles mountain range for a scenic hike. Enjoy breathtaking views, lush greenery, waterfalls, and diverse wildlife in this eco-paradise.",
    image: Knuckles,
  },
  {
    day: 7,
    title: "Nuwara Eliya Tea Trails",
    description:
      "Travel to the hill country and visit Nuwara Eliya. Tour tea plantations, taste world-famous Ceylon tea, and enjoy the cool climate of Sri Lanka’s Little England.",
    image: Nuwaraeliya,
  },
  {
    day: 8,
    title: "Ella | Nine Arch Bridge",
    description:
      "Take a scenic train ride to Ella, one of the most beautiful towns in Sri Lanka. Visit the Nine Arch Bridge, hike to Little Adam’s Peak, and enjoy the mountain vibes.",
    image: Ella,
  },
  {
    day: 9,
    title: "Yala National Park",
    description:
      "Head south to Yala National Park, famous for having one of the highest leopard densities in the world. Go on an exciting safari to spot leopards, elephants, and exotic birds.",
    image: Yala,
  },
  {
    day: 10,
    title: "Departure via Colombo",
    description:
      "Return to Colombo for a quick city tour before heading to the airport. Visit Galle Face Green, Independence Square, and take home unforgettable eco-wild memories.",
    image: Airport,
  },
];

const EcoWildJourneys = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contactUs");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12">
        EcoWild Journeys - 10 Days
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

export default EcoWildJourneys;
