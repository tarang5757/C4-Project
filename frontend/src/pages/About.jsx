import React, { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-[#4CAF50]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed. */}
                <svg
                  className={`block size-6 ${isMenuOpen ? "hidden" : "block"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* Icon when menu is open. */}
                <svg
                  className={`hidden size-6 ${isMenuOpen ? "block" : "hidden"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <span className="text-xl font-bold tracking-wide text-white">
                  Open Doors
                </span>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-green-700 hover:text-white"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-green-700 hover:text-white"
                  >
                    About
                  </Link>
                  <Link
                    to="/partners"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-green-700 hover:text-white"
                  >
                    Partners
                  </Link>
                  <Link
                    to="/contact"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-green-700 hover:text-white"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Notification and Profile dropdowns removed for simplicity */}
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        <div
          className={`sm:hidden ${isMenuOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link
              to="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              About
            </Link>
            <Link
              to="/partners"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Partners
            </Link>
            <Link
              to="/contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero/Banner Section */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white py-20 px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 800\"><defs><linearGradient id=\"bg\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" style=\"stop-color:%234ade80;stop-opacity:0.8\" /><stop offset=\"100%\" style=\"stop-color:%2316a34a;stop-opacity:0.9\" /></linearGradient></defs><rect width=\"1200\" height=\"800\" fill=\"url(%23bg)\"/><circle cx=\"200\" cy=\"150\" r=\"30\" fill=\"%23ffffff\" opacity=\"0.1\"/><circle cx=\"800\" cy=\"200\" r=\"40\" fill=\"%23ffffff\" opacity=\"0.1\"/><circle cx=\"400\" cy=\"600\" r=\"25\" fill=\"%23ffffff\" opacity=\"0.1\"/><circle cx=\"1000\" cy=\"500\" r=\"35\" fill=\"%23ffffff\" opacity=\"0.1\"/><rect x=\"100\" y=\"400\" width=\"100\" height=\"100\" rx=\"10\" fill=\"%23ffffff\" opacity=\"0.05\"/><rect x=\"900\" y=\"100\" width=\"80\" height=\"80\" rx=\"8\" fill=\"%23ffffff\" opacity=\"0.05\"/></svg>')`,
        }}
      >
        <div className="max-w-md mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold leading-tight">
            Our Mission & Values
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
          <p className="text-lg leading-relaxed">
            Learn about what drives us and the principles that guide our work.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 relative">
            Our Mission
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-food-green-600"></div>
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
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

      {/* Values Section */}
      <section className="bg-gradient-to-r from-yellow-200 to-yellow-300 py-16 px-4">
        <div className="max-w-md mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Values
          </h3>
          <div className="space-y-6">
            <div className="bg-white bg-opacity-70 rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Value 1
              </h4>
              <p className="text-gray-700 leading-relaxed text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="bg-white bg-opacity-70 rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Value 2
              </h4>
              <p className="text-gray-700 leading-relaxed text-base">
                Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
            <div className="bg-white bg-opacity-70 rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Value 3
              </h4>
              <p className="text-gray-700 leading-relaxed text-base">
                Duis aute irure dolor in reprehenderit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 relative">
            Our Team
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-food-green-600"></div>
          </h3>
          <div className="space-y-6">
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Team Member 1
              </h4>
              <p className="text-gray-700 leading-relaxed text-base">Role 1</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Team Member 2
              </h4>
              <p className="text-gray-700 leading-relaxed text-base">Role 2</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
