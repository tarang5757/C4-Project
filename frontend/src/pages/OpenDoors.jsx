import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const OpenDoors = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section - Full Screen */}
      <div className="relative min-h-screen -mt-6 -mx-4 sm:-mx-6 lg:-mx-8">
        {/* Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-food-green-500 via-food-green-600 to-food-orange-500" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Welcome to Open Doors
            </h1>

            <div className="w-24 h-1 bg-white mx-auto"></div>

            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Connecting communities through sustainable solutions. We're
              building a better future where nothing is wasted and everything is
              shared with purpose.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/home"
                className="bg-white text-food-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get Started
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-food-green-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Statistics */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Our Impact
          </h2>
          <div className="w-16 h-1 bg-food-green-600 mx-auto mb-12"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center bg-white rounded-lg p-8 shadow-sm">
              <div className="text-4xl md:text-5xl font-bold text-food-green-600 mb-4">
                100+
              </div>
              <div className="text-xl text-gray-600 font-medium">
                Communities Served
              </div>
            </div>
            <div className="text-center bg-white rounded-lg p-8 shadow-sm">
              <div className="text-4xl md:text-5xl font-bold text-food-orange-500 mb-4">
                50K+
              </div>
              <div className="text-xl text-gray-600 font-medium">
                Lives Impacted
              </div>
            </div>
            <div className="text-center bg-white rounded-lg p-8 shadow-sm">
              <div className="text-4xl md:text-5xl font-bold text-food-green-600 mb-4">
                25+
              </div>
              <div className="text-xl text-gray-600 font-medium">
                Partner Organizations
              </div>
            </div>
            <div className="text-center bg-white rounded-lg p-8 shadow-sm">
              <div className="text-4xl md:text-5xl font-bold text-food-orange-500 mb-4">
                95%
              </div>
              <div className="text-xl text-gray-600 font-medium">
                Success Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            How It Works
          </h2>
          <div className="w-16 h-1 bg-food-green-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-lg p-8 shadow-sm">
              <div className="w-20 h-20 bg-food-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-food-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <p className="text-gray-600 leading-relaxed">
                We connect communities with resources, creating sustainable
                partnerships that benefit everyone involved.
              </p>
            </div>
            <div className="text-center bg-white rounded-lg p-8 shadow-sm">
              <div className="w-20 h-20 bg-food-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-food-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3a4 4 0 118 0v4m-4 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Share</h3>
              <p className="text-gray-600 leading-relaxed">
                Through our platform, resources are shared efficiently and
                transparently, ensuring maximum impact.
              </p>
            </div>
            <div className="text-center bg-white rounded-lg p-8 shadow-sm">
              <div className="w-20 h-20 bg-food-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-food-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Together, we create lasting positive change that strengthens
                communities and builds a sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-food-green-600 py-16 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-food-green-100 leading-relaxed">
            Join our growing community of changemakers and help us build a more
            sustainable and connected world.
          </p>
          <Link
            to="/home"
            className="inline-block bg-white text-food-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-lg"
          >
            Join Our Mission
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OpenDoors;
