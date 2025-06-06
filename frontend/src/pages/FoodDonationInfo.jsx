import React from "react";

const FoodDonationInfo = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 text-gray-800">
      {/* Main Title */}
      <h1 className="text-4xl font-bold mb-2 text-green-700 flex items-center">
        <span className="mr-2">🥕</span>Food Safety Guidelines
      </h1>

      {/* Intro Section */}
      <p className="text-lg mb-6 text-gray-700">
        Farmers play an essential role in supporting community health by
        donating surplus fresh food. If you're planning to donate, it's
        important to follow Ontario's food safety regulations to ensure your
        donations are safe and legal. A full list of the guidelines can be found{" "}
        <a href="#" className="text-blue-600 underline">
          here
        </a>
        .
      </p>

      {/* Guidelines Subtitle */}
      <h2 className="text-2xl font-semibold mb-4 text-green-800">
        Guidelines for Food Storage and Handling
      </h2>

      <div className="space-y-8">
        {/* 1. Clean & Sanitize */}
        <div>
          <h3 className="text-xl font-semibold flex items-center">
            <span className="mr-2">🧼</span>1. Clean & Sanitize
          </h3>
          <ul className="list-disc list-inside mt-2 ml-1 text-gray-700">
            <li>
              Wash hands and wear clean clothing (and hairnets, if needed)
            </li>
            <li>Clean and sanitize all tools, surfaces, and containers</li>
          </ul>
        </div>

        {/* 2. Proper Food Storage */}
        <div>
          <h3 className="text-xl font-semibold flex items-center">
            <span className="mr-2">❄️</span>2. Proper Food Storage
          </h3>
          <ul className="list-disc list-inside mt-2 ml-1 text-gray-700">
            <li>Store food in clean, sealed containers, off the floor</li>
            <li>Separate raw meats from ready-to-eat items</li>
            <li>
              Refrigerate perishables: ≤ 4°C (cold), ≤ -18°C (frozen), ≥ 60°C
              (hot)
            </li>
          </ul>
        </div>

        {/* 3. Safe Transport */}
        <div>
          <h3 className="text-xl font-semibold flex items-center">
            <span className="mr-2">🚚</span>3. Safe Transport
          </h3>
          <ul className="list-disc list-inside mt-2 ml-1 text-gray-700">
            <li>Use clean, disinfected vehicles</li>
            <li>Maintain proper temperature throughout delivery</li>
            <li>Avoid cross-contamination between raw and cooked food</li>
          </ul>
        </div>

        {/* 4. Water & Handwashing */}
        <div>
          <h3 className="text-xl font-semibold flex items-center">
            <span className="mr-2">💧</span>4. Water & Handwashing
          </h3>
          <ul className="list-disc list-inside mt-2 ml-1 text-gray-700">
            <li>Use only potable water</li>
            <li>
              Have a sink with soap and paper towels for handwashing (if
              prepping food)
            </li>
          </ul>
        </div>
      </div>

      {/* Legal Protection */}
      <div className="mt-10 p-6 bg-green-50 border border-green-200 rounded-lg">
        <h3 className="text-xl font-semibold flex items-center text-green-800 mb-2">
          <span className="mr-2">🛡️</span>For Donors: Legal Protection for Food
          Donors
        </h3>
        <p className="mb-3 text-gray-700">
          Worried about liability? You’re protected under Ontario law!
        </p>
        <p className="mb-2 text-gray-700">
          📜 <strong>The Donation of Food Act, 1994</strong> –{" "}
          <a href="#" className="text-blue-600 underline">
            read more here
          </a>
        </p>
        <ul className="list-disc list-inside ml-1 text-gray-700">
          <li>
            Protects farmers and organizations who donate surplus food in good
            faith
          </li>
          <li>
            You are <strong>not liable</strong> for any harm caused by donated
            food unless:
          </li>
          <ul className="list-disc list-inside ml-5">
            <li>The food was knowingly unsafe (rotten or contaminated)</li>
            <li>
              You intended to harm someone or ignored obvious safety risks
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default FoodDonationInfo;
