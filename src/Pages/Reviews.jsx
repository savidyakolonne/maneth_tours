// src/pages/Reviews.jsx
import React from "react";

const reviews = [
  {
    id: 1,
    name: "Amara Perera",
    package: "Sri Lanka Explorer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "“The Sri Lanka Explorer package was beyond my expectations! From the breathtaking landscapes to the cultural experiences, everything was perfectly organized. The guides were knowledgeable, and I felt completely safe and cared for. Highly recommend for first-time visitors to Sri Lanka.”",
  },
  {
    id: 2,
    name: "Rohan Silva",
    package: "Beach Paradise",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "“Beach Paradise was a dream come true. The beaches were pristine, the sunsets magical, and the accommodations were excellent. I loved the balance between relaxation and adventure. This was the most rejuvenating trip I’ve ever taken.”",
  },
  {
    id: 3,
    name: "Nethmi Jayasuriya",
    package: "Mountain Adventure",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "“Mountain Adventure gave me memories for a lifetime. Hiking through misty mountains, waterfalls, and tea plantations was unforgettable. The trek was challenging but so rewarding, and the views from the peaks were simply breathtaking.”",
  },
  {
    id: 4,
    name: "Kasun Fernando",
    package: "Cultural Tour",
    photo: "https://randomuser.me/api/portraits/men/71.jpg",
    review:
      "“The Cultural Tour was an eye-opening experience. Visiting temples, heritage sites, and engaging with local traditions gave me a deep appreciation of Sri Lanka’s rich culture. The itinerary was well-paced and very insightful.”",
  },
  {
    id: 5,
    name: "Dilini Wickramasinghe",
    package: "Sri Lanka Explorer",
    photo: "https://randomuser.me/api/portraits/women/21.jpg",
    review:
      "“I absolutely loved the Sri Lanka Explorer package! From Sigiriya to Kandy, each destination offered something unique. The organization was top-notch, and I never had to worry about anything. Truly a hassle-free and memorable vacation.”",
  },
  {
    id: 6,
    name: "Tharindu Weerasinghe",
    package: "Yala Safari",
    photo: "https://randomuser.me/api/portraits/men/18.jpg",
    review:
      "“The Yala Safari was thrilling! Spotting leopards, elephants, and so many bird species in their natural habitat was an experience I’ll never forget. The guides were experts, making the safari educational as well as exciting.”",
  },
];

const Reviews = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-10">Customer Reviews</h2>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
          >
            {/* Profile Photo */}
            <img
              src={rev.photo}
              alt={rev.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-teal-500 mb-4"
            />

            {/* Review */}
            <p className="text-gray-600 italic mb-4">{rev.review}</p>

            {/* Name & Package */}
            <h4 className="font-semibold text-lg">{rev.name}</h4>
            <p className="text-sm text-teal-600">{rev.package}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
