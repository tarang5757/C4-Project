import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Resources from "./pages/Resources";
function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<OpenDoors />} /> */}
      <Route
        path="/"
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
      <Route
        path="/resources"
        element={
          <Layout>
            <Resources />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
