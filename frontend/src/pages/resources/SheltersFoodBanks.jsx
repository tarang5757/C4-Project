import React from "react";
import { Link } from "react-router-dom";
import ForRecipients from "../../components/steps/ForRecipients";

const resources = [
  {
    name: "Shelter Toronto",
    url: "https://www.toronto.ca/community-people/housing-shelter/homeless-help/shelters/",
    description:
      "List of shelters in Toronto and the GTA offering temporary accommodation and support.",
  },
  {
    name: "Daily Bread Food Bank",
    url: "https://www.dailybread.ca/need-food/programs-by-location/",
    description: "Find food banks and community food programs across Toronto.",
  },
  {
    name: "City of Toronto Homeless Services",
    url: "https://www.toronto.ca/community-people/housing-shelter/homeless-help/",
    description: "Details on shelter and homelessness services in Toronto.",
  },
  {
    name: "Covenant House Toronto",
    url: "https://www.covenanthousetoronto.ca/",
    description:
      "Shelter and services for homeless youth aged 16–24 in Toronto.",
  },
  {
    name: "The Lighthouse",
    url: "https://www.thelighthousecentre.ca/",
    description: "Emergency shelter and support services for those in need.",
  },
  {
    name: "Fred Victor",
    url: "https://www.fredvictor.org/",
    description:
      "Emergency shelter, housing, and community programs in Toronto.",
  },
  {
    name: "The Stop Community Food Centre",
    url: "https://www.thestop.org/",
    description: "Community food programs and advocacy to fight hunger.",
  },
  {
    name: "Toronto Central Healthline – Food Banks",
    url: "https://www.torontocentralhealthline.ca/listservices.aspx?id=10572&region=Toronto",
    description: "Directory of food banks and food programs in Toronto.",
  },
  {
    name: "Toronto Shelter Network",
    url: "https://www.torontoshelternetwork.com/",
    description: "Supports shelters, respites, and drop-ins across the city.",
  },
];

const SheltersFoodBanks = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <ForRecipients />

      {/* Section to display the list of resources */}
      <div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center tracking-tight">
          Additional Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="relative bg-white border-l-4 border-blue-500 rounded-xl shadow-lg p-6 flex flex-col gap-3 transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="absolute -left-6 top-6 bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 pl-6">
                {resource.name}
              </h3>
              <p className="text-gray-600 text-base pl-6">
                {resource.description}
              </p>
              <div className="pl-6 mt-2">
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold shadow hover:bg-blue-600 transition-colors duration-150"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stunning Navigation Card */}
      <div className="relative bg-gradient-to-tr from-blue-100 via-white to-blue-50 p-6 rounded-2xl shadow-xl border border-blue-200 backdrop-blur-md">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 8v4l3 3M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"></path>
            </svg>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-2xl font-extrabold text-blue-900 mb-1">
              Master Food Storage
            </h2>
            <p className="text-gray-700 mb-4">
              Learn how to store food efficiently and reduce waste with our
              trusted guidelines.
            </p>

            <Link
              to="/resources/food-storage-guideline"
              className="inline-block px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              📘 View Guidelines
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SheltersFoodBanks;
