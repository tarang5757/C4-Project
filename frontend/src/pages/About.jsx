import React from "react";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#4CAF50] to-[#45a049] py-32 px-4">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h1 className="text-5xl font-bold leading-tight">
            Meet the People
            <br />
            Behind Our Mission
          </h1>
          <div className="w-24 h-1 bg-white mx-auto"></div>
          <p className="text-xl leading-relaxed max-w-2xl mx-auto">
            We're a team of food lovers, community builders, and problem solvers
            who believe that sharing food is one of the best ways to bring
            people together.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-[#4CAF50] mx-auto"></div>
          </div>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              It all started when we saw farmers having to throw away perfectly
              good food while people in our community were going hungry. We knew
              there had to be a better way.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Today, we're working to make it easy for anyone to share food with
              their neighbors. Whether you're a farmer with extra produce or
              someone who wants to help feed your community, we're here to make
              it happen.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Matters to Us
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
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Take Care of Our Planet
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in doing our part to keep our planet healthy. By
                sharing food instead of wasting it, we're helping to take care
                of the earth for future generations.
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
                Build Strong Communities
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We know that sharing food brings people together. When we help
                each other, we build stronger, happier communities where
                everyone feels welcome and cared for.
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do What's Right
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in being honest, fair, and kind in everything we do.
                We treat everyone with respect and work hard to earn your trust
                every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-[#4CAF50] mx-auto"></div>
            <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
              We are students from York University's C4 - Cross Campus Classroom
              platform. Through our research, we discovered the critical
              importance of raising awareness about food waste and the need to
              connect rural communities, city organizations, and farmers to
              ensure fresh food reaches those who need it most.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  TP
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Tarang Patel
                  </h3>
                  <p className="text-[#4CAF50]">Student</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  JA
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Jayson Amike
                  </h3>
                  <p className="text-[#4CAF50]">Student</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  DS
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Diane Serufuli
                  </h3>
                  <p className="text-[#4CAF50]">Student</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  TS
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Tandeep Sandhra
                  </h3>
                  <p className="text-[#4CAF50]">Student</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  K
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Kunal</h3>
                  <p className="text-[#4CAF50]">Student</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  JC
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Jian Cheng
                  </h3>
                  <p className="text-[#4CAF50]">Student</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  JP
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Jacob Phillips
                  </h3>
                  <p className="text-[#4CAF50]">Student</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  MH
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    MianYi Huang
                  </h3>
                  <p className="text-[#4CAF50]">Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-24 px-4 bg-[#4CAF50] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Want to Join Our Team?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            We're always looking for friendly, caring people who want to help
            make a difference in their community. Come be part of something
            special!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-white text-[#4CAF50] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Get in Touch
            </Link>
            <Link
              to="/partners"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#4CAF50] transition-colors text-lg"
            >
              See How to Help
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
