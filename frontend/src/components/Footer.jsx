import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-food-green-700 text-white mt-16">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <p className="text-food-green-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-food-green-100">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/partners"
                  className="hover:text-white transition-colors"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-food-green-100">
              Email: contact@example.com
              <br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
        <div className="border-t border-food-green-600 mt-8 pt-8 text-center text-food-green-100">
          <p>&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
