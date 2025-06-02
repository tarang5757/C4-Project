import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import QuestionnaireForm from "../components/QuestionnaireForm";

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

      {/* Why We Do This Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why We Care
            </h2>
            <div className="w-24 h-1 bg-[#4CAF50] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
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
              <h3 className="text-xl font-semibold mb-4">Coordinate</h3>
              <p className="text-gray-600 leading-relaxed">
                Once matched, we coordinate pickup times and locations, notify both parties, and provide key details like estimated travel time and donation contents.
              </p>
            </div>

            <div className="text-center bg-white rounded-lg p-8 shadow-sm">
              <div className="w-20 h-20 bg-food-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
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
