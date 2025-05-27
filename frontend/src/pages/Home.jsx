const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-food-green-500 to-food-orange-500 rounded-lg shadow-lg p-12 text-white text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-food-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Action 1
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-food-green-600 transition-colors">
            Action 2
          </button>
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-3xl font-bold text-food-green-600 mb-2">
            100+
          </div>
          <div className="text-gray-600">Metric 1</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-3xl font-bold text-food-orange-500 mb-2">
            50+
          </div>
          <div className="text-gray-600">Metric 2</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-3xl font-bold text-food-green-600 mb-2">25+</div>
          <div className="text-gray-600">Metric 3</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-3xl font-bold text-food-orange-500 mb-2">
            10+
          </div>
          <div className="text-gray-600">Metric 4</div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Process
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-food-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-food-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Step 1</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-food-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-food-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3a4 4 0 118 0v4m-4 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Step 2</h3>
            <p className="text-gray-600">
              Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-food-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-food-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Step 3</h3>
            <p className="text-gray-600">
              Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-food-green-50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-food-green-700 mb-4">
          Get Started
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-food-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-food-green-700 transition-colors">
          Action
        </button>
      </div>
    </div>
  );
};

export default Home;
