import React from "react";

// Data with official website URLs
const peopleData = [
  { 
    id: 1, 
    title: "North York Harvest", 
    desc1: "Food Bank & Community Services", 
    desc2: "Provides perishable and non-perishable food; works with multiple sites for fresh food donations.",
    link: "https://www.northyorkharvest.com" // Add the official link
  },
  { 
    id: 2, 
    title: "Feed Ontario", 
    desc1: "Food Security Network", 
    desc2: "Coordinates food donations for member food banks; does not handle direct pickups.",
    link: "https://www.feedontario.ca" // Add the official link
  },
  { 
    id: 3, 
    title: "Fred Victor", 
    desc1: "Shelter & Community Outreach", 
    desc2: "Accepts non-perishable food donations and occasionally fresh; provides support for people experiencing homelessness.",
    link: "https://www.fredvictor.org" // Add the official link
  },
  { 
    id: 4, 
    title: "Second Harvest", 
    desc1: "Food Rescue Organization", 
    desc2: "Prioritizes protein, dairy, and shelf-stable produce; uses own trucks for food rescue operations.",
    link: "https://www.secondharvest.ca" // Add the official link
  }
];

// Card Component
const Card = ({ title, desc1, desc2, link }) => (
  <div className="bg-white rounded-2xl p-6 text-center shadow-lg w-full max-w-[220px] transition-transform transform hover:scale-105 hover:shadow-xl">
    <div className="w-20 h-20 rounded-full bg-gray-300 mx-auto mb-4" />
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
const Section = ({ heading, numCards }) => {
  // Calculate the height of the section based on the number of cards
  const cardHeight = 280; // Adjusted card height for better spacing
  const totalContentHeight = numCards * cardHeight + 150; // Added more margin

  return (
    <section className="bg-gradient-to-r from-[#ffb6b9] via-[#ff8f8f] to-[#ff7070] text-black flex flex-col items-center justify-center px-4 py-10">
      {/* Heading */}
      <h1 className="text-4xl font-serif italic text-white mb-6">{heading}</h1>

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
            />
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="w-full flex justify-center">
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-full text-sm hover:bg-yellow-500 transition ease-in-out duration-300">
          Join the cause
        </button>
      </div>
    </section>
  );
};

// Export Section component
export default Section;
