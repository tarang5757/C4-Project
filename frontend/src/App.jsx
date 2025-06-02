import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import BecomePartner from"./pages/BecomePartner";
import Team from "./pages/Team";
function App() {

  
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/BecomePartner" element={<BecomePartner />} />
         <Route path="/Team" element={<Team />} />

      </Routes>
    </Layout>
  );
}

export default App;
