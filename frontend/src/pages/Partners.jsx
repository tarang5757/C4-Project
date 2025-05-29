const Partners = () => {
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
              Our Partners
            </h1>

            <div className="w-24 h-1 bg-white mx-auto"></div>

            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Together with our partners, we're building a network of
              sustainable solutions that create lasting impact in communities
              worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Partnership Impact */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Our Impact
          </h2>
          <div className="w-16 h-1 bg-food-green-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-lg p-8 shadow-sm">
              <div className="text-4xl md:text-5xl font-bold text-food-green-600 mb-4">
                100+
              </div>
              <div className="text-xl text-gray-600 font-medium">Partners</div>
            </div>
            <div className="text-center bg-white rounded-lg p-8 shadow-sm">
              <div className="text-4xl md:text-5xl font-bold text-food-orange-500 mb-4">
                25+
              </div>
              <div className="text-xl text-gray-600 font-medium">Locations</div>
            </div>
            <div className="text-center bg-white rounded-lg p-8 shadow-sm">
              <div className="text-4xl md:text-5xl font-bold text-food-green-600 mb-4">
                95%
              </div>
              <div className="text-xl text-gray-600 font-medium">
                Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category 1 */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Category 1
          </h2>
          <div className="w-16 h-1 bg-food-green-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="border-l-4 border-food-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Partner 1
                </h3>
                <p className="text-food-green-600 font-medium mb-4">
                  Location 1
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="border-l-4 border-food-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Partner 2
                </h3>
                <p className="text-food-green-600 font-medium mb-4">
                  Location 2
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="border-l-4 border-food-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Partner 3
                </h3>
                <p className="text-food-green-600 font-medium mb-4">
                  Location 3
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category 2 */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Category 2
          </h2>
          <div className="w-16 h-1 bg-food-orange-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="border-l-4 border-food-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Partner 4
                </h3>
                <p className="text-food-orange-600 font-medium mb-4">
                  Location 4
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Duis aute irure dolor in reprehenderit.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="border-l-4 border-food-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Partner 5
                </h3>
                <p className="text-food-orange-600 font-medium mb-4">
                  Location 5
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="border-l-4 border-food-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Partner 6
                </h3>
                <p className="text-food-orange-600 font-medium mb-4">
                  Location 6
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Sunt in culpa qui officia deserunt mollit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category 3 */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Category 3
          </h2>
          <div className="w-16 h-1 bg-food-green-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="border-l-4 border-food-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Partner 7
                </h3>
                <p className="text-food-green-600 font-medium mb-4">
                  Location 7
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Nulla facilisi morbi tempus iaculis.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="border-l-4 border-food-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Partner 8
                </h3>
                <p className="text-food-green-600 font-medium mb-4">
                  Location 8
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Viverra mauris in aliquam sem fringilla.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="border-l-4 border-food-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Partner 9
                </h3>
                <p className="text-food-green-600 font-medium mb-4">
                  Location 9
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Eget nulla facilisi etiam dignissim diam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="bg-food-green-600 py-16 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Become a Partner
          </h2>
          <p className="text-lg md:text-xl mb-8 text-food-green-100 leading-relaxed">
            Join our network of partners and help us create lasting positive
            change in communities worldwide.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-8 text-gray-900">
              <h3 className="text-xl font-semibold text-food-green-700 mb-4">
                Option 1
              </h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Lorem ipsum dolor sit amet</li>
                <li>• Consectetur adipiscing elit</li>
                <li>• Sed do eiusmod tempor</li>
                <li>• Incididunt ut labore</li>
                <li>• Et dolore magna aliqua</li>
              </ul>
              <button className="w-full bg-food-green-600 text-white px-6 py-3 rounded-lg hover:bg-food-green-700 transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white rounded-lg p-8 text-gray-900">
              <h3 className="text-xl font-semibold text-food-orange-600 mb-4">
                Option 2
              </h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Ut enim ad minim veniam</li>
                <li>• Quis nostrud exercitation</li>
                <li>• Ullamco laboris nisi</li>
                <li>• Ut aliquip ex ea commodo</li>
                <li>• Duis aute irure dolor</li>
              </ul>
              <button className="w-full bg-food-orange-500 text-white px-6 py-3 rounded-lg hover:bg-food-orange-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Testimonials
          </h2>
          <div className="w-16 h-1 bg-food-green-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-food-green-50 rounded-lg p-8">
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-food-green-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-food-green-700 font-bold">P1</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Partner Name 1</p>
                  <p className="text-food-green-600">Category 1</p>
                </div>
              </div>
            </div>
            <div className="bg-food-orange-50 rounded-lg p-8">
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-food-orange-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-food-orange-700 font-bold">P2</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Partner Name 2</p>
                  <p className="text-food-orange-600">Category 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
