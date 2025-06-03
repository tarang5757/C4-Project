import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../../public/Logo.png"; // adjust path as needed

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define the navigation links in a single array
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/AboutUs" },
    { name: "Meet The team", path: "/Team" },
    { name: "Partners", path: "/partners" },
    { name: "Resources", path: "/resources" },
    { name: "BecomePartner", path: "/BecomePartner" },
  ];

  // Helper to check if the current path is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg relative z-30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-extrabold flex items-center"
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
            {navLinks.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(path)
                    ? "bg-food-green-500 text-white"
                    : "text-gray-700 hover:text-food-green-600 hover:bg-food-green-50"
                }`}
              >
                {name}
              </Link>
            ))}
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
              {navLinks.map(({ name, path }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                    isActive(path)
                      ? "bg-food-green-500 text-white"
                      : "text-gray-700 hover:text-food-green-600 hover:bg-food-green-50"
                  }`}
                >
                  {name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
