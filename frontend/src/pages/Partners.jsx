import React from "react";
import { Link } from "react-router-dom";

const Partners = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative min-h-screen overflow-hidden">
        {/* Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-food-green-500 via-food-green-600 to-food-orange-500" />

        <div
          className="relative min-h-screen bg-cover bg-center"
          style={{
            backgroundImage: "url('/fruits.jpg')",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>

          {/* Hero Content inside green rounded box */}
          <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 text-center text-white">
            <div className="bg-[#663F46] rounded-xl p-10 max-w-4xl mx-auto space-y-8 shadow-xl">
              <div className="max-w-4xl mx-auto text-center text-white space-y-8">
                <h1 className="text-5xl font-bold leading-tight">
                  Let's Work Together
                  <br />
                  to Share More Food
                </h1>
                <div className="w-24 h-1 bg-white mx-auto"></div>
                <p className="text-xl leading-relaxed max-w-2xl mx-auto">
                  Whether you're a farmer with extra produce or someone who
                  wants to help feed your community, we'd love to have you join
                  our food sharing network.
                </p>

                <button className="bg-[#FFC709] mb-16 text-food-black-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-lg text-black">
                  Join Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Impact Section */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We Help Each Other
            </h2>

            <div className="w-24 h-1 bg-[#4CAF50] mx-auto"></div>
            <div className="flex justify-center items-center">
              <img
                src="/Help.png"
                alt="Our Team"
                className="w-30 h-auto rounded-2xl shadow-lg mt-10 mb-5"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-[#4CAF50] mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                For Farmers
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We help you find good homes for your extra produce. Instead of
                letting food go to waste, you can share it with people who
                really need it. Plus, you'll be helping your community and our
                planet.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-[#4CAF50] mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                For Community Groups
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We make it easy to get fresh, healthy food for the people you
                serve. Whether you're a food bank, community center, or
                neighborhood group, we'll help you connect with local farmers
                and get the food you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Categories Section */}
      <section
        className="py-10 px-4 bg-gray-50"
        style={{
          backgroundImage: "url('/Togrther.png')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-white">
              Who Can Join Us
            </h2>
            <div className="w-24 h-1 bg-[#4CAF50] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-[#4CAF50] mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Local Farmers
              </h3>
              <p className="text-gray-600 leading-relaxed">
                If you grow food and sometimes have extra, we can help you share
                it with people who need it. It's a great way to help your
                community and make sure your hard work doesn't go to waste.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-[#4CAF50] mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Food Banks & Pantries
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We help you get fresh, local food for the people you serve. It's
                a simple way to add more healthy options to your shelves and
                support local farmers at the same time.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-[#4CAF50] mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Community Groups
              </h3>
              <p className="text-gray-600 leading-relaxed">
                If you're part of a group that helps feed people in your
                community, we'd love to work with you. We can help you get fresh
                food and connect with local farmers who want to help.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-[#4CAF50] mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Businesses
              </h3>
              <p className="text-gray-600 leading-relaxed">
                If your business wants to help feed your community, we can show
                you how. Whether you're a restaurant, grocery store, or any
                other business, there are lots of ways to get involved and make
                a difference.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10 items-center">
          <button className="bg-[#FFC709] text-food-black-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-lg text-black">
            Join Us
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Partners Say
            </h2>
            <div className="w-24 h-1 bg-[#4CAF50] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  FF
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Farm Fresh Co.
                  </h3>
                  <p className="text-[#4CAF50]">Local Farm</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                "We used to feel bad about having to throw away extra produce.
                Now, thanks to this network, we can share our food with people
                who really need it. It's made such a difference in our
                community!"
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  CF
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Community Food Bank
                  </h3>
                  <p className="text-[#4CAF50]">Food Bank</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                "Getting fresh, local food has been a game-changer for us. The
                people we serve love the quality, and we love being able to
                support our local farmers. It's a win-win for everyone!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      {/* <section className="py-24 px-4 bg-[#4CAF50] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Whether you're a farmer with extra food or a group that wants to
            help feed your community, we'd love to have you join our network.
            Let's work together to make sure good food doesn't go to waste!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-white text-[#4CAF50] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#4CAF50] transition-colors text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Partners;
