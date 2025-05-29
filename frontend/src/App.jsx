import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Partners from "./pages/Partners";
import OpenDoors from "./pages/OpenDoors";

function App() {
  return (
    <Routes>
      <Route path="/" element={<OpenDoors />} />
      <Route
        path="/home"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/partners"
        element={
          <Layout>
            <Partners />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
