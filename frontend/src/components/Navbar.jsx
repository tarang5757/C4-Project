import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 shadow-sm">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        {/* Logo and Mobile Menu Button Container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex-none text-2xl font-bold text-gray-900 hover:text-food-green-600 transition-colors"
            aria-label="Open Doors"
          >
            Open Doors
          </Link>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative size-10 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              {!isMenuOpen ? (
                <svg
                  className="shrink-0 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
              ) : (
                <svg
                  className="shrink-0 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>

        {/* Navigation Links - Desktop and Mobile */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:block overflow-hidden transition-all duration-300 basis-full grow`}
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-base font-medium ${
                  link.to === "/"
                    ? "text-food-green-600"
                    : "text-gray-600 hover:text-food-green-600"
                } focus:outline-hidden focus:text-food-green-600 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
