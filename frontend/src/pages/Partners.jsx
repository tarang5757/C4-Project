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
                For Local Initiative
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We make it easy to get fresh, healthy food for the people you
                serve. Whether you're a food bank, shelter, soup kitchen, or
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Local Initiative
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your group can sign up to receive food donations to help the
                individuals you serve. It's an easy way to make a meaningful
                impact in your community.
              </p>
            </div>
          </div>
          <div class="flex justify-center mt-10 items-center">
            <button class="bg-[#FFC709] text-food-black-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-lg text-black">
              Join Our Mission
            </button>
          </div>
        </div>
      </section>

      <section class="py-24 px-4 bg-white">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-10">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">
              What Our Partners Say
            </h2>
            <div class="w-24 h-1 bg-[#4CAF50] mx-auto"></div>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            {/* <!-- Testimonial 1 --> */}
            <div class="bg-gray-50 rounded-lg p-8">
              <div class="flex items-center space-x-4 mb-4">
                <div class="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  FF
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900">
                    Farm Fresh Co.
                  </h3>
                  <p class="text-[#4CAF50]">Local Farm</p>
                </div>
              </div>
              <p class="text-gray-600 leading-relaxed italic">
                "We used to feel bad about having to throw away extra produce.
                Now, thanks to this network, we can share our food with people
                who really need it. It's made such a difference in our
                community!"
              </p>
            </div>

            {/* <!-- Testimonial 2 --> */}
            <div class="bg-gray-50 rounded-lg p-8">
              <div class="flex items-center space-x-4 mb-4">
                <div class="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  CF
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900">
                    Community Food Bank
                  </h3>
                  <p class="text-[#4CAF50]">Food Bank</p>
                </div>
              </div>
              <p class="text-gray-600 leading-relaxed italic">
                "Getting fresh, local food has been a game-changer for us. The
                people we serve love the quality, and we love being able to
                support our local farmers. It's a win-win for everyone!"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
