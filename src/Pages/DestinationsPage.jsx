import React from "react";
import Sigiriya from "../assets/Sigiriya.jpg";
import Ella from "../assets/Ella.jpg";
import Galle from "../assets/Galle.jpg";
import Nuwaraeliya from "../assets/Nuwaraeliya.jpg";
import Kandy from "../assets/Kandy.jpg";
import Yala from "../assets/Yala.jpg";
import Trinco from "../assets/Trinco.jpg";
import Anuradapura from "../assets/Anuradapura.jpeg";


const destinations = [
{
      name: "Sigiriya Rock Fortress",
      image: Sigiriya,
      description:
        "Sigiriya, often called the Lion Rock, is one of Sri Lanka’s most iconic landmarks. Rising dramatically from the central plains, this ancient fortress is surrounded by lush forests and gardens. Built in the 5th century by King Kashyapa, Sigiriya was once a royal palace and a place of defense. Today, it is a UNESCO World Heritage Site admired for its frescoes, mirror wall, and water gardens. Visitors can climb to the summit for breathtaking panoramic views. The journey is as rewarding as the destination, making Sigiriya a must-see for history and nature lovers alike.",
    },
    {
      name: "Ella",
      image: Ella,
      description:
        "Ella is a small town in Sri Lanka’s hill country, known for its stunning landscapes and laid-back atmosphere. Surrounded by tea plantations, misty hills, and waterfalls, Ella is a favorite stop for backpackers and adventurers. Highlights include the Nine Arches Bridge, Little Adam’s Peak, and Ravana Falls. Hiking opportunities abound, and the cool climate offers a refreshing break from the tropical heat. Ella also has cozy cafes and guesthouses that cater to travelers. Whether you’re seeking adventure, scenic views, or relaxation, Ella offers the perfect mix of culture, nature, and charm.",
    },
    {
      name: "Galle Fort",
      image: Galle,
      description:
        "Galle Fort is a historic fortress on Sri Lanka’s southern coast, built by the Portuguese and later expanded by the Dutch. This UNESCO World Heritage Site blends European architecture with South Asian traditions. The cobbled streets, colonial-era buildings, and coastal views make it a favorite for history buffs and travelers alike. Inside the fort, you’ll find boutique shops, cafes, and museums that preserve its heritage. The ramparts are perfect for evening walks, especially during sunset over the Indian Ocean. Galle Fort remains a vibrant reminder of Sri Lanka’s colonial past and cultural diversity.",
    },
    {
      name: "Nuwara Eliya",
      image: Nuwaraeliya,
      description:
        "Known as ‘Little England,’ Nuwara Eliya is nestled in Sri Lanka’s central highlands. Famous for its tea plantations, cool climate, and colonial architecture, this hill station attracts travelers seeking a peaceful escape. The town features beautiful gardens, lakes, and golf courses. Horton Plains National Park, with its famous World’s End viewpoint, is nearby and offers stunning hikes. Tea lovers can visit factories to learn about the production process while enjoying breathtaking views of green plantations. Nuwara Eliya’s charm lies in its blend of natural beauty, history, and tranquility, making it a must-visit destination.",
    },
    {
      name: "Kandy",
      image: Kandy,
      description:
        "Kandy, the cultural capital of Sri Lanka, is nestled among rolling hills and lush forests. It is home to the Temple of the Sacred Tooth Relic, one of the most revered Buddhist sites in the world. The city also hosts the annual Esala Perahera, a grand festival filled with processions, dancers, and elephants. Kandy Lake provides a scenic backdrop for leisurely walks, while the Royal Botanical Gardens nearby showcase diverse plant species. A hub of tradition, history, and spirituality, Kandy offers visitors a deep connection to Sri Lankan heritage alongside stunning natural landscapes.",
    },
    {
      name: "Yala National Park",
      image: Yala,
      description:
        "Yala National Park, located in southern Sri Lanka, is the country’s most famous wildlife reserve. It is renowned for its high density of leopards, making it one of the best places in the world to spot these elusive big cats. The park is also home to elephants, sloth bears, crocodiles, and a wide variety of birds. Safari jeeps take visitors deep into the wilderness, where landscapes range from forests and grasslands to lagoons. Yala combines adventure and nature conservation, offering travelers a thrilling opportunity to experience Sri Lanka’s biodiversity up close.",
    },
    {
      name: "Trincomalee",
      image: Trinco,
      description:
        "Trincomalee, located on Sri Lanka’s northeast coast, is famous for its pristine beaches and crystal-clear waters. Nilaveli and Uppuveli beaches are ideal for relaxation, snorkeling, and diving. The town also holds historical importance, with the Koneswaram Temple perched on a cliff overlooking the Indian Ocean. Whale watching is a popular activity, especially during the migration season. The natural harbor here has been strategically significant for centuries. Today, Trincomalee offers a peaceful atmosphere, a mix of culture, and stunning seaside beauty, making it a perfect destination for both relaxation and adventure.",
    },
    {
      name: "Anuradhapura",
      image: Anuradapura,
      description:
        "Anuradhapura, one of Sri Lanka’s ancient capitals, is a city of immense historical and spiritual significance. This UNESCO World Heritage Site is home to towering stupas, sacred temples, and monasteries that date back more than two thousand years. The sacred Bodhi Tree, grown from a cutting of the original tree under which the Buddha attained enlightenment, is a highlight for pilgrims. Anuradhapura’s ruins showcase advanced engineering and architecture from ancient times. The city’s cultural heritage, combined with its serene atmosphere, offers travelers a chance to connect with Sri Lanka’s deep-rooted history and spirituality.",
    },
];

const DestinationsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-10">Our Destinations</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{dest.name}</h3>
              <p className="text-gray-600 text-justify">{dest.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationsPage;
