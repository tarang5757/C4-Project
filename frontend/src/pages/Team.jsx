import React from "react";
import { Link } from "react-router-dom";
import TeamSection from "../components/TeamSection";

const Team = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0 z-0">
          <img
            src="/Group-Picture.jpg"
            alt="Our Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white space-y-8">
          <h1 className="text-5xl font-bold leading-tight -[#4CAF50]">
            Meet the People
            <br />
            Behind Our Mission
          </h1>
          <div className="w-24 h-1 bg-white mx-auto"></div>
          <p className="text-xl leading-relaxed max-w-2xl mx-auto">
            We're a team of food lovers, community builders, and problem solvers
            who believe that sharing food is one of the best ways to bring
            people together.
          </p>
        </div>
      </section>

      
      {/* Team Section */}
     <TeamSection />

      {/* Donation Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Support Food Security
          </h2>
          <div className="w-24 h-1 bg-[#4CAF50] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Together, we can make a difference in our community. Your support
            helps ensure that fresh, nutritious food reaches those who need it
            most.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="mb-6">
                <img
                  src="/Logo.png"
                  alt="Open Doors Logo"
                  className="h-16 mx-auto object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Open Doors
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Join us in our mission to connect communities and reduce food
                waste by sharing fresh, nutritious food with those who need it
                most.
              </p>
              <div className="mt-auto">
                <Link
                  to="/contact"
                  className="inline-block bg-[#4CAF50] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#45a049] transition-colors w-full text-center"
                >
                  Get Involved
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Food Banks Mississauga
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Food Banks Mississauga provides food to over 56,000 neighbors in
                need and serves over 9 million meals through their network each
                year.
              </p>
              <div className="mt-auto">
                <a
                  href="https://www.foodbanksmississauga.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#4CAF50] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#45a049] transition-colors w-full text-center"
                >
                  Donate Now
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Scott Mission
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Scott Mission provides practical, emotional, and spiritual care
                to help our neighbors thrive, including essential food support
                and meals.
              </p>
              <div className="mt-auto">
                <a
                  href="https://donate.scottmission.com/page/155726/donate/1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#4CAF50] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#45a049] transition-colors w-full text-center"
                >
                  Donate Now
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Other Ways to Help
              </h3>
              <ul className="text-gray-600 space-y-3 mb-6 text-left flex-grow">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#4CAF50] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Volunteer at local food banks
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#4CAF50] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Share information about food security
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#4CAF50] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Support local food initiatives
                </li>
              </ul>
              <div className="mt-auto">
                <Link
                  to="/contact"
                  className="inline-block border-2 border-[#4CAF50] text-[#4CAF50] px-8 py-3 rounded-lg font-semibold hover:bg-[#4CAF50] hover:text-white transition-colors w-full text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-24 px-4 bg-[#4CAF50] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Want to Join Our Team?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            We're always looking for friendly, caring people who want to help
            make a difference in their community. Come be part of something
            special!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-white text-[#4CAF50] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Get in Touch
            </Link>
            <Link
              to="/partners"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#4CAF50] transition-colors text-lg"
            >
              See How to Help
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
