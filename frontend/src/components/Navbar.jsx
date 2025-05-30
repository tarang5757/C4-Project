import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from '../images/logo.png'; // adjust path as needed


const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg relative z-30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-extrabold   flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
                <img
    src={logo}
    alt="Company Logo"
    className="h-14 w-auto object-contain mr-3"
  />
              Open Doors
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/")
                  ? "bg-food-green-500 text-white"
                  : "text-gray-700 hover:text-food-green-600 hover:bg-food-green-50"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "bg-food-green-500 text-white"
                  : "text-gray-700 hover:text-food-green-600 hover:bg-food-green-50"
              }`}
            >
              About
            </Link>
            <Link
              to="/partners"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/partners")
                  ? "bg-food-green-500 text-white"
                  : "text-gray-700 hover:text-food-green-600 hover:bg-food-green-50"
              }`}
            >
              Partners
            </Link>
            <Link
              to="/resources"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/resources")
                  ? "bg-food-green-500 text-white"
                  : "text-gray-700 hover:text-food-green-600 hover:bg-food-green-50"
              }`}
            >
              Resources
            </Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col space-y-1 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-gray-800 block transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-800 block transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-800 block transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg">
            <nav className="p-4 space-y-3">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  isActive("/")
                    ? "bg-food-green-500 text-white"
                    : "text-gray-700 hover:text-food-green-600 hover:bg-food-green-50"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  isActive("/about")
                    ? "bg-food-green-500 text-white"
                    : "text-gray-700 hover:text-food-green-600 hover:bg-food-green-50"
                }`}
              >
                About
              </Link>
              <Link
                to="/partners"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  isActive("/partners")
                    ? "bg-food-green-500 text-white"
                    : "text-gray-700 hover:text-food-green-600 hover:bg-food-green-50"
                }`}
              >
                Partners
              </Link>
              <Link
                to="/resources"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  isActive("/resources")
                    ? "bg-food-green-500 text-white"
                    : "text-gray-700 hover:text-food-green-600 hover:bg-food-green-50"
                }`}
              >
                Resources
              </Link>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
