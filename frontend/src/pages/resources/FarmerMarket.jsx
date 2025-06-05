import React from "react";

const FarmerMarket = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Farmer Markets & Local Farmers</h1>

      <p className="mb-4 text-lg">
        Farmer markets and local farmers provide fresh, healthy produce directly to the community.
        Supporting these markets helps promote sustainable agriculture and local economies.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Why Choose Farmer Markets?</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Fresh, seasonal fruits and vegetables</li>
          <li>Supports local farmers and small businesses</li>
          <li>Often organic and sustainably grown products</li>
          <li>Community-centered and environmentally friendly</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Find Farmer Markets Near You</h2>
        <p>
          Use resources like local government websites, community boards, or apps such as <a href="https://www.localharvest.org/" target="_blank" rel="noopener noreferrer" className="text-food-green-600 underline">LocalHarvest</a> to find farmers markets and CSA (Community Supported Agriculture) programs in your area.
        </p>
      </section>
    </div>
  );
};

export default FarmerMarket;
