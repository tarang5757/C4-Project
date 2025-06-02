import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import BecomePartner from"./pages/BecomePartner";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/BecomePartner" element={<BecomePartner />} />

      </Routes>
    </Layout>
  );
}

export default App;
