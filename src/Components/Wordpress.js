import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import img1 from '../Assets/sevenseascj.com.jpg';
import img2 from '../Assets/rajmudratransport.jpg';
import img3 from '../Assets/kpproduction.in.jpg';
import img4 from '../Assets/jayakhanna.com.jpg';
import img5 from '../Assets/Emcee Manoj.com.jpg';
import img6 from '../Assets/mystiiquereading.com.jpg';

function Wordpress() {
  const navigate = useNavigate();

  // Counters
  const [happyClients, setHappyClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [liveProjects, setLiveProjects] = useState(0);
  const [totalPlugins, setTotalPlugins] = useState(0);

  const finalValues = {
    happyClients: 10,
    projects: 11,
    liveProjects: 6,
    totalPlugins: 10,
  };

  useEffect(() => {
    setHappyClients(finalValues.happyClients);
    setProjects(finalValues.projects);
    setLiveProjects(finalValues.liveProjects);
    setTotalPlugins(finalValues.totalPlugins);
  }, []);

  const handleProjectsClick = () => {
    navigate('/Coding');
  };

  const images = [
    { src: img1, alt: 'Seven Sea\'s', link: 'http://sevenseascj.com/' },
    { src: img2, alt: 'Raj Mudar Transport', link: 'http://rajmudratransport.in/' },
    { src: img3, alt: 'K P Production', link: 'https://kpproduction.in/' },
    { src: img4, alt: 'Jaya Khanna', link: 'https://jayakhanna.com/' },
    { src: img5, alt: 'Emcee Manoj', link: 'https://emceemanoj.com/' },
    { src: img6, alt: 'Mystiquereading', link: 'https://mystiiquereading.com/' },
  ];

  return (
    <div className="container">
      {/* Internal CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

        body {
          font-family: 'Montserrat', sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }

        .section-title {
          text-align: center;
          font-size: 2.5em;
          margin: 50px 20px 20px;
          color: #20b38e;
          font-weight: 600;
        }

        /* Buttons */
        .btn-custom {
          background-color: #20b38e;
          color: #fff;
          padding: 14px 22px;
          border: none;
          border-radius: 8px;
          font-size: 1.2em;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background-color 0.3s, transform 0.2s;
        }
        .btn-custom:hover {
          background-color: #159a7a;
          transform: translateY(-2px);
        }

        /* Button container */
        .button-group {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
        }

        /* Gallery grid */
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        /* Card styles */
        .card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 20px rgba(0,0,0,0.2);
        }
        .card img {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Stats section */
        .stats-section {
          background-color: #fff;
          padding: 40px 20px;
          margin: 60px 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .stat {
          flex: 1 1 200px;
          text-align: center;
          margin: 20px;
        }
        .stat i {
          font-size: 2.5em;
          color: #20b38e;
          margin-bottom: 10px;
        }
        .stat p {
          font-size: 1.2em;
          margin-top: 8px;
          font-weight: 600;
        }

        /* Plugins & progress bars */
        .plugins-section {
          padding: 40px 20px;
        }
        .plugins-title {
          text-align: center;
          font-size: 2em;
          margin-bottom: 30px;
          color: #20b38e;
        }
        .progress-group {
          margin-bottom: 20px;
        }
        .progress-group h4 {
          margin-bottom: 8px;
        }
        .progress {
          height: 25px;
          border-radius: 12px;
          background: #ddd;
        }
        .progress-bar {
          height: 100%;
          font-weight: 600;
          color: #fff;
          line-height: 25px;
          transition: width 1.5s ease;
        }

        /* Responsive adjustments */
        @media(max-width: 768px){
          .stats-section {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>

      {/* Title */}
      <h1 className="section-title">Wordpress Projects</h1>

      {/* CTA Button */}
      <div className="button-group">
        <button className="btn-custom" onClick={handleProjectsClick}>
          <KeyboardDoubleArrowRightIcon /> View Coding Projects
        </button>
      </div>

      {/* Projects Gallery */}
      <div className="gallery">
        {images.map((img, index) => (
          <div className="card" key={index}>
            <a href={img.link} target="_blank" rel="noopener noreferrer">
              <img src={img.src} alt={img.alt} />
            </a>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat">
          <i className="bi bi-emoji-smile"></i>
          <CountUp start={0} end={happyClients} duration={4} separator="," style={{ fontSize: '2em' }} />
          <p>Happy Clients</p>
        </div>
        <div className="stat">
          <i className="bi bi-folder"></i>
          <CountUp start={0} end={projects} duration={4} separator="," style={{ fontSize: '2em' }} />
          <p>Projects</p>
        </div>
        <div className="stat">
          <i className="bi bi-broadcast"></i>
          <CountUp start={0} end={liveProjects} duration={4} separator="," style={{ fontSize: '2em' }} />
          <p>Live Projects</p>
        </div>
        <div className="stat">
          <i className="bi bi-gear"></i>
          <CountUp start={0} end={totalPlugins} duration={4} separator="," style={{ fontSize: '2em' }} />
          <p>Plugins Used</p>
        </div>
      </section>

      {/* Plugins & Progress Bars */}
      <h2 className="section-title" style={{ marginTop: '50px' }}>Plugins I Use</h2>
      <div className="plugins-section">
        {[
          { title: 'Elementor', progress: 90, color: 'bg-success' },
          { title: 'Beaver Builder', progress: 90, color: 'bg-info' },
          { title: 'WP Backery', progress: 60, color: 'bg-warning' },
          { title: 'Divi', progress: 80, color: 'bg-danger' },
          { title: 'Contact Form 7', progress: 90, color: 'bg-success' },
          { title: 'WP Forms', progress: 90, color: 'bg-info' },
          { title: 'Envato Elements', progress: 90, color: 'bg-warning' },
          { title: 'Essential Addons', progress: 90, color: 'bg-danger' },
          { title: 'Table Some', progress: 90, color: 'bg-success' },
          { title: 'Templately', progress: 80, color: 'bg-danger' },
          { title: 'Smart Slider', progress: 90, color: 'bg-info' },
          { title: 'Sticky Nav Bar', progress: 100, color: 'bg-danger' },
        ].map((item, index) => (
          <div key={index} className="progress-group">
            <h4 style={{ color: '#fdf5e6' }}>{item.title} :</h4>
            <div className="progress">
              <div
                className={`progress-bar progress-bar-striped progress-bar-animated ${item.color}`}
                style={{ width: `${item.progress}%` }}
              >
                {item.progress}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wordpress;