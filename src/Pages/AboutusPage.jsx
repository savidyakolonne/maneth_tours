import React from "react";

const AboutUsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-10">About Us </h2>

      {/* Intro */}
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Welcome to our travel website! We are passionate about creating
        unforgettable experiences for travelers who want to explore the beauty,
        culture, and heritage of Sri Lanka. Our goal is to connect you with the
        most authentic destinations while ensuring comfort, safety, and
        adventure throughout your journey.
      </p>

      {/* Mission / Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-600">
            Our mission is to promote eco-friendly and responsible tourism that
            benefits both travelers and local communities. We strive to provide
            unique travel packages that allow visitors to immerse themselves in
            Sri Lanka’s natural beauty, history, and traditions while supporting
            sustainability.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p className="text-gray-600">
            We envision becoming a leading travel company known for exceptional
            service, cultural authenticity, and meaningful travel experiences.
            By showcasing Sri Lanka’s hidden gems, we aim to inspire travelers
            from around the world to appreciate and protect our planet’s
            treasures.
          </p>
        </div>
      </div>

      {/* Values */}
      <h3 className="text-2xl font-semibold text-center mb-6">Our Values</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition">
          <h4 className="font-bold text-lg mb-2">Authenticity</h4>
          <p className="text-gray-600">
            We believe in providing genuine travel experiences that reflect the
            true spirit of Sri Lanka’s culture, people, and traditions.
          </p>
        </div>
        <div className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition">
          <h4 className="font-bold text-lg mb-2">Sustainability</h4>
          <p className="text-gray-600">
            We are committed to eco-tourism, ensuring that our tours preserve
            nature, support local communities, and reduce environmental impact.
          </p>
        </div>
        <div className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition">
          <h4 className="font-bold text-lg mb-2">Customer Care</h4>
          <p className="text-gray-600">
            Our travelers are at the heart of everything we do. We provide
            personalized services to make each journey safe, enjoyable, and
            memorable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
