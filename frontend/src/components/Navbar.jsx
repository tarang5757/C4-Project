import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links data
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/partners", label: "Partners" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-lg relative z-30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-xl font-bold text-food-green-700 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="w-8 h-8 mr-2 text-food-orange-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              Company
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
