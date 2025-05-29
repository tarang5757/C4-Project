const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About</h1>
        <p className="text-xl text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Mission</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>

      {/* Values Section */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-food-green-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-food-green-700 mb-4">
            Value 1
          </h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="bg-food-orange-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-food-orange-600 mb-4">
            Value 2
          </h3>
          <p className="text-gray-700">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="bg-food-green-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-food-green-700 mb-4">
            Value 3
          </h3>
          <p className="text-gray-700">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="bg-food-orange-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-food-orange-600 mb-4">
            Value 4
          </h3>
          <p className="text-gray-700">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-food-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-food-green-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Member 1</h3>
            <p className="text-food-green-600 font-medium">Role 1</p>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-food-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-food-orange-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Member 2</h3>
            <p className="text-food-orange-600 font-medium">Role 2</p>
            <p className="text-gray-600 text-sm mt-2">
              Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-food-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-food-green-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Member 3</h3>
            <p className="text-food-green-600 font-medium">Role 3</p>
            <p className="text-gray-600 text-sm mt-2">
              Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="bg-food-green-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-food-green-700 mb-6">History</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>Year 1:</strong> Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <p>
            <strong>Year 2:</strong> Sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.
          </p>
          <p>
            <strong>Year 3:</strong> Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris.
          </p>
          <p>
            <strong>Year 4:</strong> Duis aute irure dolor in reprehenderit in
            voluptate velit esse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
