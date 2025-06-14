import React from "react";
import { Link } from "react-router-dom";
import QuestionnaireForm from "../components/QuestionnaireForm";
import Overview from "../components/steps/Overview";
import PartnerSection from "./PartnerSection";
import ResourceButtons from "../components/resourceButtons";

const Home = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section - Full Screen */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-food-green-500 via-food-green-600 to-food-orange-500" />

        <div
          className="relative min-h-screen bg-cover bg-center"
          style={{
            backgroundImage: "url('/landscape.jpg')",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-white bg-opacity-20 z-0" />

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 text-center text-white">
            <div className="bg-[#3A4F41] rounded-xl p-10 max-w-4xl mx-auto space-y-8 shadow-xl">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Nothing Wasted. Everything Shared.
              </h1>
              <div className="w-24 h-1 bg-white mx-auto" />
              <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                We aim to connect farmers with those in need, creating a
                sustainable system that reduces food waste and supports
                communities.
              </p>

              {/* Updated internal link */}
              <Link
                to="/partners"
                className="bg-[#FFC709] mb-16 text-food-black-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-lg text-black inline-block"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* What We're All About */}
      <section className="py-10 px-4 bg-[#FFFBB4] bg-opacity-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-5">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We're All About
            </h2>
            <div className="w-24 h-1 bg-[#4CAF50] mx-auto" />
          </div>

          <div className="flex justify-center items-center">
            <img
              src="/Care.png"
              alt="Our Team"
              className="w-30 h-auto rounded-2xl shadow-lg mb-5"
            />
          </div>

          <div className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-center">
            We believe that no one should go hungry while good food goes to
            waste. That's why we're building a community where farmers can
            easily share their extra produce with people who need it most.
            <br />
            <br />
            Whether you're a farmer with extra food or someone looking to help
            feed your community, we make it simple to connect and make a
            difference together.
          </div>
        </div>
      </section>

      {/* How We Do It */}
      <section className="py-10 px-4">
        <Overview />
        <ResourceButtons />
      </section>

      {/* Why We Care */}
      <section className="py-10 px-4 bg-[#EB5D8D]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-5">
            <h2 className="text-4xl font-bold text-white mb-4">Why We Care</h2>
            <div className="w-24 h-1 bg-[#FFFBB4] mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 1. Feed More People */}
            <div className="text-center bg-white rounded-lg p-8 shadow-sm">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-food-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.5 0-4 1.5-4 4s1.5 4 4 4 4-1.5 4-4-1.5-4-4-4zM12 2a10 10 0 100 20 10 10 0 000-20z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Feed More People Better Food
              </h3>
              <p className="text-gray-600 leading-relaxed">
                It's heartbreaking to see fresh, healthy food go to waste when
                so many people are hungry. We're here to change that by making
                it easy to share extra food with those who need it.
              </p>
            </div>

            {/* 2. Stop Food Waste */}
            <div className="text-center bg-white rounded-lg p-8 shadow-sm">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
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
              <h3 className="text-xl font-semibold mb-4">Stop Food Waste</h3>
              <p className="text-gray-600 leading-relaxed">
                When we share food, we're not just feeding people—we're building
                stronger communities.
              </p>
            </div>

            {/* 3. Care for the Planet */}
            <div className="text-center bg-white rounded-lg p-8 shadow-sm">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Care for Our Planet
              </h3>
              <p className="text-gray-600 leading-relaxed">
                When we waste less food, we help our planet too. It's a small
                act with a big impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <PartnerSection
        heading="Interested Parties"
        numCards={4}
        buttonText="See More"
        buttonLink="/partners" // ✅ fixed trailing space
      />

      {/* Call to Action */}
      <section
        className="py-8 px-6 text-center"
        style={{ backgroundColor: "#F0F3F3" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center">
            <img
              src="/download.png"
              alt="Our Team"
              className="mb-8 w-60 h-auto"
            />
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-food--100 leading-relaxed">
            Join our growing community of changemakers and help us build a more
            sustainable and connected world.
          </p>

          {/* Updated internal link */}
          <Link
            to="/partners"
            className="bg-[#FFC709] mb-16 text-food-black-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-lg inline-block text-center"
          >
            Join Our Mission
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
