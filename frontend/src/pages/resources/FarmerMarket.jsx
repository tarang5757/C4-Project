import React from "react";
import { Link } from "react-router-dom";
import ForDonors from "../../components/steps/ForDonors";

const FarmerMarket = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Donor Steps Component */}
      <ForDonors />

      {/* Navigation Link to Additional Resource */}
      <div>
        <p className="text-xl text-gray-800 font-semibold mb-2">
          Learn more about proper food storage practices:
        </p>
        <Link
          to="/resources/food-storage-guideline"
          className="text-lg text-blue-600 hover:underline font-medium"
        >
          View the Food Storage Guidelines
        </Link>
      </div>
    </div>
  );
};

export default FarmerMarket;
