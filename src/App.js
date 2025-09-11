import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Wordpress from "./Components/Wordpress";
import Coding from "./Components/Coding";
import Preloader from "./Components/Preloader";
import ParticlesComponent from "./Components/Particalsbackground";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Skills from "./Components/Skills";

function AppContent() {
  const navigate = useNavigate();

  useEffect(() => {
    // Whenever the tab regains focus, return to home page
    const handleFocus = () => {
      navigate("/");
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, [navigate]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/venom2024" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/wordpress" element={<Wordpress />} />
        <Route path="/coding" element={<Coding />} />
      </Routes>
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div style={{ position: "relative" }}>
          <ParticlesComponent id="particles" />
          <div style={{ position: "relative", zIndex: 1 }}>
            <Router basename="/venom2024-main">
              <AppContent />
            </Router>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
