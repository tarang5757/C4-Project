import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const OpenDoors = () => {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links data
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/partners", label: "Partners" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%234ade80;stop-opacity:0.8" /><stop offset="100%" style="stop-color:%2316a34a;stop-opacity:0.9" /></linearGradient></defs><rect width="1200" height="800" fill="url(%23bg)"/><circle cx="200" cy="150" r="30" fill="%23ffffff" opacity="0.1"/><circle cx="800" cy="200" r="40" fill="%23ffffff" opacity="0.1"/><circle cx="400" cy="600" r="25" fill="%23ffffff" opacity="0.1"/><circle cx="1000" cy="500" r="35" fill="%23ffffff" opacity="0.1"/><rect x="100" y="400" width="100" height="100" rx="10" fill="%23ffffff" opacity="0.05"/><rect x="900" y="100" width="80" height="80" rx="8" fill="%23ffffff" opacity="0.05"/></svg>')`,
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 text-center text-white">
          <div className="max-w-md mx-auto space-y-6">
            <h2 className="text-4xl font-bold leading-tight">
              Nothing Wasted.
              <br />
              Everything Shared.
            </h2>

            <div className="w-24 h-1 bg-white mx-auto"></div>

            <p className="text-lg leading-relaxed">
              We aim to connect farmers with those in need, creating a
              sustainable system that reduces food waste and supports
              communities.
            </p>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 relative">
            Our Mission
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-food-green-600"></div>
          </h3>

          <p className="text-gray-700 leading-relaxed text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a
            magna et tortor venenatis rhoncus. Nullam sodales est et justo
            lobortis, non volutpat orci interdum. Curabitur lobortis tellus sed
            erat aliquet ex pharetra eu. Curabitur tincidunt vestibulum
            molestie. Curabitur nunc erat elit. Ut urna libero, tincidunt quis
            commodo sed, vestibulum ac nisl. Suspendisse sit amet nisl sem.
            Integer in nulla pellentesque, lobortis ligula eget, efficitur
            tellus.
          </p>
        </div>
      </section>

      {/* Why We Do This Section */}
      <section className="bg-gradient-to-r from-yellow-200 to-yellow-300 py-12 px-6">
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why we do this
          </h3>

          <div className="space-y-4">
            <div className="bg-white bg-opacity-70 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                Reduce Food Waste
              </h4>
              <p className="text-gray-700 text-sm">
                Millions of tons of perfectly good food go to waste while people
                go hungry. We bridge this gap.
              </p>
            </div>

            <div className="bg-white bg-opacity-70 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                Support Communities
              </h4>
              <p className="text-gray-700 text-sm">
                By connecting surplus food with those in need, we strengthen
                community bonds and food security.
              </p>
            </div>

            <div className="bg-white bg-opacity-70 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                Environmental Impact
              </h4>
              <p className="text-gray-700 text-sm">
                Reducing food waste helps decrease greenhouse gas emissions and
                promotes sustainable living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-food-green-600 py-12 px-6 text-center text-white">
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
          <p className="mb-6 text-food-green-100">
            Join our mission to create a sustainable food sharing network in
            your community.
          </p>
          <div className="space-y-3">
            <button className="w-full bg-white text-food-green-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Become a Partner
            </button>
            <button className="w-full border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-food-green-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6 text-center">
        <div className="max-w-md mx-auto">
          <h4 className="text-lg font-bold mb-4">Open Doors</h4>
          <p className="text-gray-400 text-sm mb-4">
            Connecting communities through sustainable food sharing.
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OpenDoors;
