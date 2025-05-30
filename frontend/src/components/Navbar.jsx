import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#4CAF50] w-full shadow text-white">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <span className="text-xl font-bold tracking-wide">Open Doors</span>
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-base font-medium transition-colors hover:underline"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-base font-medium transition-colors hover:underline"
          >
            About
          </Link>
          <Link
            to="/partners"
            className="text-base font-medium transition-colors hover:underline"
          >
            Partners
          </Link>
          <Link
            to="/resources"
            className="text-base font-medium transition-colors hover:underline"
          >
            Resources
          </Link>
          <Link
            to="/contact"
            className="text-base font-medium transition-colors hover:underline"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
