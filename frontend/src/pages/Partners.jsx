import React from "react";
import { Link } from "react-router-dom";
import PartnerSection from "./PartnerSection";

const Partners = () => {
  // Define the heading and number of cards to pass to Section
  const heading = "Partner with Us";
  const numCards = 4; // Adjust the number of cards as per your requirement
  
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
              <h1 className="text-5xl font-bold leading-tight">
                Let's Work Together
                <br />
                to Share More Food
              </h1>
              <div className="w-24 h-1 bg-white mx-auto"></div>
              <p className="text-xl leading-relaxed max-w-2xl mx-auto">
                Whether you're a farmer with extra produce or someone who wants to
                help feed your community, we'd love to have you join our food
                sharing network.
              </p>

              <button className="bg-[#FFC709] mb-16 text-food-black-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-lg text-black">
                Join Us to Make a Difference
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Now include the Section component here */}
      <PartnerSection heading={"Intrested Parties"} 
      numCards={7} 
      buttonText="Koin the cause"  // Custom text for page 2
      buttonLink="https://www.example.com/donate-now"  // Custom link for page 2 
      />

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
                className="w-3/4 rounded-2xl shadow-lg mt-10 mb-5"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                For Farmers
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We help you find good homes for your extra produce. Instead of
                letting food go to waste, you can share it with people who
                really need it.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                For Local Initiative
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We make it easy to get fresh, healthy food for the people you
                serve. Whether you're a food bank, shelter, or neighborhood group.
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Local Farmers
              </h3>
              <p className="text-gray-600 leading-relaxed">
                If you grow food and sometimes have extra, we can help you share
                it with people who need it. It's a great way to help your
                community.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Local Initiative
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your group can sign up to receive food donations to help the
                individuals you serve.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-10 items-center">
            <button className="bg-[#FFC709] text-food-black-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-lg text-black">
              Join Our Mission
            </button>
          </div>
        </div>
      </section>

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
              <h3 className="text-xl font-semibold text-gray-900">Farm Fresh Co.</h3>
              <p className="text-[#4CAF50]">Local Farm</p>
              <p className="text-gray-600 leading-relaxed italic">
                "We used to feel bad about having to throw away extra produce. Now, thanks to this network, we can share our food with people who really need it."
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900">Community Food Bank</h3>
              <p className="text-[#4CAF50]">Food Bank</p>
              <p className="text-gray-600 leading-relaxed italic">
                "Getting fresh, local food has been a game-changer for us. The people we serve love the quality, and we love being able to support our local farmers."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      

      

    </div>
  );
};

export default Partners;
