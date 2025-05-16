// App.js

import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Wordpress from './Components/Wordpress';
import Coding from './Components/Coding';
import Preloader from './Components/Preloader';
import ParticlesComponent from './Components/Particalsbackground';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Skills from './Components/Skills';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate the delay of your actual content loading
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration as needed
  }, []);

  return (
    <>
    {loading ? (
      <Preloader />
    ) : (
      <div style={{ position: "relative" }}>
        <ParticlesComponent id="particles" />
        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Your content components go here */}
          <Router>
            <Navbar />
            <Routes>
              <Route path="/venom2024" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="" element={<Home />} />

              <Route path="/Skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/wordpress" element={<Wordpress />} />
              <Route path="/coding" element={<Coding />} />
            </Routes>
          </Router>
        </div>
      </div>
    )}
  </>
);
}


export default App;
