// Section.js
import React from "react";

// Data
const peopleData = [
  { id: 1, title: "Title 1", desc1: "Description 1", desc2: "Description 2" },
  { id: 2, title: "Title 2", desc1: "Description 3", desc2: "Description 4" },
  { id: 3, title: "Title 3", desc1: "Description 5", desc2: "Description 6" },
  { id: 4, title: "Title 4", desc1: "Description 7", desc2: "Description 8" },
  { id: 5, title: "Title 5", desc1: "Description 9", desc2: "Description 10" },
  { id: 6, title: "Title 6", desc1: "Description 11", desc2: "Description 12" },
];

// Card Component
const Card = ({ title, desc1, desc2 }) => (
  <div className="bg-white rounded-2xl p-4 text-center shadow-md w-full max-w-[180px]">
    <div className="w-16 h-16 rounded-full bg-gray-300 mx-auto mb-3" />
    <h3 className="font-semibold mb-1">{title}</h3>
    <p className="text-sm">{desc1}</p>
    <p className="text-sm mt-2">{desc2}</p>
    <button className="mt-4 bg-yellow-400 text-black px-3 py-1 rounded text-sm hover:bg-yellow-500 transition">
      Learn more
    </button>
  </div>
);

// Section Component
const Section = ({ heading, numCards }) => (
  <div className="bg-peach px-6 py-10 text-black min-h-screen flex flex-col items-center">
    <h1 className="text-4xl italic font-serif mb-2">{heading}</h1>
    <p className="mb-8 text-center text-sm">
      We wouldn't be where we are without your support and collaboration.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mb-6">
      {peopleData.slice(0, numCards).map((person) => (
        <Card
          key={person.id}
          title={person.title}
          desc1={person.desc1}
          desc2={person.desc2}
        />
      ))}
    </div>
    <button className="bg-yellow-400 text-black px-5 py-2 rounded text-sm hover:bg-yellow-500 transition">
      See More
    </button>
  </div>
);


// Export Section component
export default Section;
