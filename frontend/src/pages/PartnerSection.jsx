import React from "react";

// Data with official website URLs and image links
const peopleData = [
  {
    id: 1,
    title: "North York Harvest",
    desc1: "Food Bank & Community Services",
    desc2:
      "Provides perishable and non-perishable food; works with multiple sites for fresh food donations.",
    link: "https://www.northyorkharvest.com",
    image:
      "data:image/png;base64,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", // Example image link
  },
  {
    id: 2,
    title: "Feed Ontario",
    desc1: "Food Security Network",
    desc2:
      "Coordinates food donations for member food banks; does not handle direct pickups.",
    link: "https://www.feedontario.ca",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh9YIQo8VdocZ6k8li1XvQGUwwMznO1WQmww&s", // Example image link
  },
  {
    id: 3,
    title: "Fred Victor",
    desc1: "Shelter & Community Outreach",
    desc2:
      "Accepts non-perishable food donations and occasionally fresh; provides support for people experiencing homelessness.",
    link: "https://www.fredvictor.org",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJVR98UJJ2H_Ct_QOTQlFiV-zeX8mUZVowKA&s", // Example image link
  },
  {
    id: 4,
    title: "Second Harvest",
    desc1: "Food Rescue Organization",
    desc2:
      "Prioritizes protein, dairy, and shelf-stable produce; uses own trucks for food rescue operations.",
    link: "https://www.secondharvest.ca",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9x3gDlxuca5DnICE3D91re4f_BmIuioIeow&s", // Example image link
  },
  //  {
  //   "id": 5,
  //   "title": "Lorraine Lam",
  //   "desc1": "Shelter and Housing Justice Network",
  //   "desc2": "Supporting equitable housing initiatives and policies for marginalized groups.",
  //   "link": "mailto:Lorr.lam07@gmail.com",
  //   "image": "https://ca.images.search.yahoo.com/search/images?p=Lorraine+Lam&fr=mcafee&type=E210CA91166G0&imgurl=https%3A%2F%2Fomssa.com%2Fphotos%2FLorraine_Lam_11032023101930.PNG#id=2&iurl=https%3A%2F%2Fomssa.com%2Fphotos%2FLorraine_Lam_11032023101930.PNG&action=click"
  // },
  // {
  //   "id": 6,
  //   "title": "Anna Willats",
  //   "desc1": "Retired - George Brown College",
  //   "desc2": "Educator with a focus on social justice and youth services.",
  //   "link": "mailto:awillats@sympatico.ca",
  //   "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9x3gDlxuca5DnICE3D91re4f_BmIuioIeow&s"
  // },
  {
    id: 7,
    title: "Natalie Fingerhut",
    desc1: "Ve’ahavta and St Luke’s Meal Program",
    desc2:
      "Providing meals and support services to those experiencing homelessness.",
    link: "mailto:nataliefingerhut@gmail.com",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9x3gDlxuca5DnICE3D91re4f_BmIuioIeow&s",
  },
];

// Card Component
const Card = ({ title, desc1, desc2, link, image }) => (
  <div className="bg-white rounded-2xl p-6 text-center shadow-lg w-full max-w-[220px] transition-transform transform hover:scale-105 hover:shadow-xl">
    <img
      src={image}
      alt={title}
      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
    />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-700">{desc1}</p>
    <p className="text-sm text-gray-700 mt-2">{desc2}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm hover:bg-yellow-500 transition ease-in-out duration-300">
        Learn More
      </button>
    </a>
  </div>
);

// Section Component
const PartnerSection = ({ heading, numCards, buttonText, buttonLink }) => {
  // Calculate the height of the section based on the number of cards
  const cardHeight = 280; // Adjusted card height for better spacing
  const totalContentHeight = numCards * cardHeight + 150; // Added more margin

  return (
    <section className="bg-[#214f4b] text-black flex flex-col items-center justify-center px-4 py-10">
      {/* Heading */}
      <h1 className="text-4xl  font-bold text-white mb-6">{heading}</h1>

      {/* Description */}
      <p className="text-center text-lg text-white max-w-3xl mb-10">
        We wouldn't be where we are without your support and collaboration.
      </p>

      {/* Cards Grid */}
      <div className="flex justify-center items-center w-full mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl">
          {peopleData.slice(0, numCards).map((person) => (
            <Card
              key={person.id}
              title={person.title}
              desc1={person.desc1}
              desc2={person.desc2}
              link={person.link}
              image={person.image} // Pass the image URL to the Card component
            />
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="w-full flex justify-center">
        <a href={buttonLink} target="_blank" rel="noopener noreferrer">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full text-sm hover:bg-yellow-500 transition ease-in-out duration-300">
            {buttonText || "Join the cause"}{" "}
            {/* Default button text if not provided */}
          </button>
        </a>
      </div>
    </section>
  );
};

// Export Section component
export default PartnerSection;
