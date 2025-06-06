import React from "react";

const buttons = [
  {
    href: "/resources/farmer-market",
    label: "Farmers",
  },
  {
    href: "/resources/shelters-food-banks",
    label: "Local Initiative",
  },
];

const ResourceButtons = () => {
  return (
    <div className="text-4xl font-bold text-gray-900 mt-10 mb-8 text-center">
      <h2 className="text-3xl font-normal text-gray-900 mt-10 mb-4 text-center">
        Get More Info
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        {buttons.map((button, index) => (
          <a
            key={index}
            href={button.href}
            className="bg-[#FFC709] text-food-black-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-lg"
          >
            {button.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ResourceButtons;
