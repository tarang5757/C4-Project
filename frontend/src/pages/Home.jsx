const Home = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section - Full Screen */}
      <div className="relative min-h-screen -mt-6 -mx-4 sm:-mx-6 lg:-mx-8">
        {/* Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-food-green-500 via-food-green-600 to-food-orange-500" />


        <div
          className="relative min-h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1663039840873-68759f9eec40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

          {/* Hero Content inside green rounded box */}
          <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 text-center text-white">
            <div className="bg-[#5A7D4F]  rounded-xl p-10 max-w-4xl mx-auto space-y-8 shadow-xl">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Nothing Wasted. Everything Shared.
              </h1>

              <div className="w-24 h-1 bg-white mx-auto"></div>

              <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                We aim to connect farmers with those in need, creating a sustainable system that reduces food waste and supports communities.
              </p>

              {/* no sure if we should jump straigh to call to action */}
              {/* <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors">
                  Learn More
                </button>
              </div> */}
            </div>
          </div>
        </div>



      </div>
      
      {/* Impact Statistics */}
      {/* <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How We Do It
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-food-green-600 mb-2">
                100+
              </div>
              <div className="text-gray-600 font-medium">
                Communities Served
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-food-orange-500 mb-2">
                50K+
              </div>
              <div className="text-gray-600 font-medium">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-food-green-600 mb-2">
                25+
              </div>
              <div className="text-gray-600 font-medium">
                Partner Organizations
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-food-orange-500 mb-2">
                95%
              </div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* How It Works */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            How It Works
          </h2>
          <div className="w-16 h-1 bg-food-green-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-lg p-8 shadow-sm">
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
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Match</h3>
              <p className="text-gray-600 leading-relaxed">
                We match surplus produce from local farmers markets with nearby community organizations that can distribute it to people in need.
              </p>
            </div>

            <div className="text-center bg-white rounded-lg p-8 shadow-sm">
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
                    d="M8 7V3a4 4 0 118 0v4m-4 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Coordinate</h3>
              <p className="text-gray-600 leading-relaxed">
                Once matched, we coordinate pickup times and locations, notify both parties, and provide key details like estimated travel time and donation contents.
              </p>
            </div>

            <div className="text-center bg-white rounded-lg p-8 shadow-sm">
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
              <h3 className="text-xl font-semibold mb-4">Deliver Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Together, we reduce food waste and expand access to fresh, healthy food — building stronger, more connected communities in the process.
              </p>
            </div>
          </div>
        </div>
      </section>

       <div
        className="w-full h-48"
        style={{ backgroundColor: '#072F1C' }}
      ></div>



      {/* Call to Action */}
      <section className="py-16 px-6 text-center "   style={{ backgroundColor: '#F0F3F3' }}>
        <div className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-food--100 leading-relaxed">
            Join our growing community of changemakers and help us build a more
            sustainable and connected world.
          </p>
          <button className="bg-[#FFC709] text-food-black-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-lg">
            Join Our Mission
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
