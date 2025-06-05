import React from "react";

const steps = [
  {
    title: "Sign Up",
    description: "Join as a farmer or farmers market to donate surplus produce.",
    icon: "👩‍🌾",
  },
  {
    title: "Add Available Food",
    description: "List the food items you’re offering for donation.",
    icon: "🍎",
  },
  {
    title: "See Nearby Requests",
    description: "View requests from nearby shelters, food banks, and soup kitchens seeking donations that match your produce.",
    icon: "📍",
  },
  {
    title: "Coordinate Pickup or Drop-off",
    description: "Communicate openly with shelters, food banks, and soup kitchens to arrange a convenient pickup or drop-off time.",
    icon: "🚚",
  },
  {
    title: "Get Confirmation & Track Impact",
    description:
      "Once your donation is accepted, receive confirmation and updates showing how your food helped (meals served, people fed, and communities supported).",
    icon: "✅",
  },
];



const ForDonors = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white rounded-xl shadow-lg">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
        <div className="text-6xl sm:text-7xl flex-shrink-0">{steps[0].icon}</div>
        <div className="text-center sm:text-left">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">For Donors</h2>
          <p className="mt-1 text-gray-600 text-lg italic">(Farmers, Grocers, Restaurants)</p>
        </div>
      </header>

      {/* Steps Container */}
      <ol className="space-y-8">
        {steps.map(({ title, description, icon }, index) => (
          <li
            key={index}
            className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 p-6 rounded-lg border border-gray-300 hover:shadow-lg transition-shadow duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500"
            tabIndex={0}
          >
            <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-700 font-bold text-xl sm:text-2xl flex-shrink-0 select-none">
              {icon}
              <span className="absolute -top-1 -right-2 flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white text-xs font-semibold">
                {index + 1}
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-gray-700 leading-relaxed max-w-prose">{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ForDonors;
