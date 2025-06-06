import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import BecomePartner from "./pages/BecomePartner";
import Team from "./pages/Team";
import PlatformTest from "./components/PlatformTest";
import FoodStorageGuidelines from "./pages/resources/FoodStorageGuidelines"; // ✅ New import

import FarmerMarket from "./pages/resources/FarmerMarket";
import SheltersFoodBanks from "./pages/resources/SheltersFoodBanks";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div
          className="transition-opacity duration-700"
          style={{ opacity: loading ? 1 : 0 }}
        >
          <Loader />
        </div>
      )}
      <div className={loading ? "pointer-events-none select-none blur-sm" : ""}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/BecomePartner" element={<BecomePartner />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/platform-test" element={<PlatformTest />} />
            {/* New resource routes */}
            <Route path="/resources/farmer-market" element={<FarmerMarket />} />
            <Route
              path="/resources/shelters-food-banks"
              element={<SheltersFoodBanks />}
            />
            <Route
              path="/resources/food-storage-guideline"
              element={<FoodStorageGuidelines />}
            />{" "}
          </Routes>
        </Layout>
      </div>
    </>
  );
}

export default App;
