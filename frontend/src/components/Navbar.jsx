import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../../public/Logo.png"; // adjust path as needed

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false); // for desktop dropdown
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false); // for mobile dropdown

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/AboutUs" },
    { name: "Meet The team", path: "/Team" },
    { name: "Partners", path: "/partners" },
    // Resources will have a dropdown, so no direct path here
    { name: "BecomePartner", path: "/BecomePartner" }
  ];

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
          <div className="hidden md:flex space-x-4 items-center relative">
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

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <button
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname.startsWith("/resources")
                    ? "bg-food-green-500 text-white"
                    : "text-gray-700 hover:text-food-green-600 hover:bg-food-green-50"
                }`}
              >
                Resources
              </button>
              {isResourcesOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <Link
                    to="/resources/farmer-market"
                    onClick={() => setIsResourcesOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-food-green-50 hover:text-food-green-600"
                  >
                    Farmer Market / Farmer
                  </Link>
                  <Link
                    to="/resources/shelters-food-banks"
                    onClick={() => setIsResourcesOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-food-green-50 hover:text-food-green-600"
                  >
                    Shelters / Food Banks / Soup Kitchens
                  </Link>
                </div>
              )}
            </div>
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

              {/* Mobile Resources dropdown toggle */}
              <div>
                <button
                  onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                  className="w-full text-left py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:text-food-green-600 hover:bg-food-green-50 flex justify-between items-center"
                >
                  Resources
                  <span>{isMobileResourcesOpen ? "▲" : "▼"}</span>
                </button>

                {isMobileResourcesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      to="/resources/farmer-market"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMobileResourcesOpen(false);
                      }}
                      className="block py-1 px-3 rounded-md text-sm text-gray-700 hover:text-food-green-600 hover:bg-food-green-50"
                    >
                      Farmer Market / Farmer
                    </Link>
                    <Link
                      to="/resources/shelters-food-banks"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMobileResourcesOpen(false);
                      }}
                      className="block py-1 px-3 rounded-md text-sm text-gray-700 hover:text-food-green-600 hover:bg-food-green-50"
                    >
                      Shelters / Food Banks / Soup Kitchens
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
