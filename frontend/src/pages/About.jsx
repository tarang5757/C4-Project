const About = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section - Full Screen */}
      <div className="relative min-h-screen -mt-6 -mx-4 sm:-mx-6 lg:-mx-8">
        {/* Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-food-green-500 via-food-green-600 to-food-orange-500" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              About Our Mission
            </h1>

            <div className="w-24 h-1 bg-white mx-auto"></div>

            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              We are dedicated to creating sustainable solutions that connect
              communities and build a better future for everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Our Mission
          </h2>
          <div className="w-16 h-1 bg-food-green-600 mx-auto mb-12"></div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Our Values
          </h2>
          <div className="w-16 h-1 bg-food-green-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-20 h-20 bg-food-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-food-green-600"
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
              <h3 className="text-xl font-semibold text-center mb-4">
                Value 1
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-20 h-20 bg-food-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-food-orange-500"
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
              <h3 className="text-xl font-semibold text-center mb-4">
                Value 2
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-20 h-20 bg-food-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-food-green-600"
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
              <h3 className="text-xl font-semibold text-center mb-4">
                Value 3
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-20 h-20 bg-food-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-food-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                Value 4
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Our Team
          </h2>
          <div className="w-16 h-1 bg-food-green-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-lg p-8 shadow-sm">
              <div className="w-24 h-24 bg-food-green-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-food-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Member 1
              </h3>
              <p className="text-food-green-600 font-medium mb-4">Role 1</p>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="text-center bg-white rounded-lg p-8 shadow-sm">
              <div className="w-24 h-24 bg-food-orange-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-food-orange-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Member 2
              </h3>
              <p className="text-food-orange-600 font-medium mb-4">Role 2</p>
              <p className="text-gray-600 leading-relaxed">
                Sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
            <div className="text-center bg-white rounded-lg p-8 shadow-sm">
              <div className="w-24 h-24 bg-food-green-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-food-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Member 3
              </h3>
              <p className="text-food-green-600 font-medium mb-4">Role 3</p>
              <p className="text-gray-600 leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-food-green-600 py-16 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg md:text-xl mb-8 text-food-green-100 leading-relaxed">
            Be part of our journey to create a more sustainable and connected
            world.
          </p>
          <button className="bg-white text-food-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-lg">
            Get Involved
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
