import React from "react";
import { useNavigate } from "react-router-dom";
import Negombo from "../assets/Negombo.jpeg";
import Sigiriya from "../assets/Sigiriya.jpg";
import Polonnaruwa from "../assets/Polonnaruwa.jpg";
import Dambulla from "../assets/Dambulla.jpg";
import Kandy from "../assets/Kandy.jpg";
import Nuwaraeliya from "../assets/Nuwaraeliya.jpg";
import Colombo from "../assets/Colombo.jpg";
import Airport from "../assets/Airport.jpg";

const itinerary = [
  {
    day: 1,
    title: "Airport | Negombo",
    description:
      "Arrive at Colombo International Airport and transfer to Negombo. Enjoy a relaxing evening at the beach, explore the local fish markets, and settle in for your first night in Sri Lanka.",
    image: Negombo,
  },
  {
    day: 2,
    title: "Sigiriya Rock Fortress",
    description:
      "Head to Sigiriya and climb the famous Lion Rock Fortress, a UNESCO World Heritage site. Explore the beautiful gardens, ancient frescoes, and panoramic views from the summit.",
    image: Sigiriya,
  },
  {
    day: 3,
    title: "Polonnaruwa Ancient City",
    description:
      "Discover the ruins of Polonnaruwa, Sri Lanka’s medieval capital. Explore temples, statues, and reservoirs that showcase the island’s golden era of cultural history.",
    image: Polonnaruwa,
  },
  {
    day: 4,
    title: "Dambulla Cave Temple",
    description:
      "Visit the Dambulla Cave Temple, famous for its ancient murals and Buddha statues. This UNESCO site offers a glimpse into centuries-old Buddhist heritage.",
    image: Dambulla,
  },
  {
    day: 5,
    title: "Kandy & Temple of the Tooth",
    description:
      "Travel to Kandy, the cultural capital of Sri Lanka. Visit the Temple of the Sacred Tooth Relic and in the evening, enjoy a vibrant Kandyan dance and cultural performance.",
    image: Kandy,
  },
  {
    day: 6,
    title: "Nuwara Eliya | Tea Plantations",
    description:
      "Journey through lush tea plantations to Nuwara Eliya, also known as ‘Little England’. Visit a tea factory, taste world-class Ceylon tea, and enjoy the cool hill country climate.",
    image: Nuwaraeliya,
  },
  {
    day: 7,
    title: "Colombo City Tour",
    description:
      "Return to Colombo and explore the capital’s landmarks including Galle Face Green, Independence Square, and bustling local markets. Enjoy shopping and a farewell dinner.",
    image: Colombo,
  },
  {
    day: 8,
    title: "Departure",
    description:
      "Transfer to Colombo International Airport for your departure. Take home unforgettable memories of Sri Lanka’s cultural wonders and warm hospitality.",
    image: Airport,
  },
];

const CulturalTour = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contactUs");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12">
        Cultural Tour - 8 Days
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

export default CulturalTour;
