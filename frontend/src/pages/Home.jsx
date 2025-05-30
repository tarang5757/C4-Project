import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import QuestionnaireForm from "../components/QuestionnaireForm";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#4CAF50] to-[#45a049] py-32 px-4">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h1 className="text-5xl font-bold leading-tight">
            Let's Share Food,
            <br />
            Not Waste It
          </h1>
          <div className="w-24 h-1 bg-white mx-auto"></div>
          <p className="text-xl leading-relaxed max-w-2xl mx-auto">
            We help connect local farmers with people who need fresh food.
            Together, we can make sure good food doesn't go to waste and
            everyone has enough to eat.
          </p>
          <div className="pt-8">
            <Link
              to="/contact"
              className="inline-block bg-white text-[#4CAF50] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Join Us
            </Link>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We're All About
            </h2>
            <div className="w-24 h-1 bg-[#4CAF50] mx-auto"></div>
          </div>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              We believe that no one should go hungry while good food goes to
              waste. That's why we're building a community where farmers can
              easily share their extra produce with people who need it most.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Whether you're a farmer with extra food or someone looking to help
              feed your community, we make it simple to connect and make a
              difference together.
            </p>
          </div>
        </div>
      </section>

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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Stop Food Waste
              </h3>
              <p className="text-gray-600 leading-relaxed">
                It's heartbreaking to see fresh, healthy food go to waste when
                so many people are hungry. We're here to change that by making
                it easy to share extra food with those who need it.
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
                Help Our Neighbors
              </h3>
              <p className="text-gray-600 leading-relaxed">
                When we share food, we're not just feeding people - we're
                building stronger communities. Every meal shared is a chance to
                show we care about each other.
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
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Care for Our Planet
              </h3>
              <p className="text-gray-600 leading-relaxed">
                When we waste less food, we help our planet too. It's a simple
                way to make a big difference for our environment and future
                generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-[#4CAF50] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Whether you're a farmer with extra produce or someone who wants to
            help feed your community, there's a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/partners"
              className="inline-block bg-white text-[#4CAF50] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Join as a Partner
            </Link>
            <Link
              to="/about"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#4CAF50] transition-colors text-lg"
            >
              Find Out More
            </Link>
          </div>
        </div>
      </section>

      {/* Questionnaire Form */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Let's Get Started
            </h2>
            <div className="w-24 h-1 bg-[#4CAF50] mx-auto"></div>
            <p className="mt-6 text-gray-600 text-lg">
              Take a quick moment to tell us about yourself and how you'd like
              to help
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <QuestionnaireForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
