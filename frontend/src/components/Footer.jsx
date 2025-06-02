import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 text-center">
      <div className="max-w-md mx-auto">
        <h4 className="text-lg font-bold mb-4">Open Doors</h4>
        <p className="text-gray-400 text-sm mb-4">
          Connecting communities through sustainable food sharing.
        </p>
        <div className="flex justify-center space-x-6 text-sm">
          <Link to="#" className="text-gray-400 hover:text-white">
            Privacy
          </Link>
          <Link to="#" className="text-gray-400 hover:text-white">
            Terms
          </Link>
          <Link to="#" className="text-gray-400 hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
