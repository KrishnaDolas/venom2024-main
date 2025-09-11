import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import GitHub from "@mui/icons-material/GitHub";

import img1 from "../Assets/KStarwebsite.png";
import img2 from "../Assets/CRM.png";
import img3 from "../Assets/EMS.png";
import img4 from "../Assets/TweetX.png";
import img5 from "../Assets/Punebizz.png";
import img6 from "../Assets/Agrovenom.png";
import img7 from "../Assets/Lightbulb.png";
import img8 from "../Assets/music app.png";
import img9 from "../Assets/Wetherforcast app.png";
import img10 from "../Assets/oldwebsite.png";
import img11 from "../Assets/smtp form.png";
import img12 from "../Assets/todoapp.png";
import img13 from "../Assets/Calculator.png";
import img14 from "../Assets/beach resort.png";
import img15 from "../Assets/facebook clone.png";
import img16 from "../Assets/Registration form.png";
import img17 from "../Assets/batar batar app.png";

function Coding() {
  const navigate = useNavigate();

  // State for counters
  const [happyClients, setHappyClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [liveProjects, setLiveProjects] = useState(0);
  const [totalProjects, setTotalProjects] = useState(0);

  const finalValues = {
    happyClients: 10,
    projects: 10,
    liveProjects: 3,
    totalProjects: 10,
  };

  useEffect(() => {
    setHappyClients(finalValues.happyClients);
    setProjects(finalValues.projects);
    setLiveProjects(finalValues.liveProjects);
    setTotalProjects(finalValues.totalProjects);
  }, []);

  const handleWordPressClick = () => {
    navigate(`/Wordpress`);
  };

  // Project images with links
  const projectsData = [
    {
      src: img1,
      alt: "Kisaanstar E-Commerce Website",
      link: "https://kisaanstar.com/",
    },
    {
      src: img2,
      alt: "CRM",
      link: "https://kisaanstar.com/advisormemberlogin",
    },
    { src: img3, alt: "EMS", link: "https://ems-kappa-rosy.vercel.app/login" },
    {
      src: img4,
      alt: "React TweetX",
      link: "https://krishnadolas.github.io/ReactTweetX/",
    },
    {
      src: img5,
      alt: "PuneBizz",
      link: "https://krishnadolas.github.io/Punebizz/",
    },
    {
      src: img6,
      alt: "Agrovenom",
      link: "https://krishnadolas.github.io/Agrovenom/",
    },
    {
      src: img7,
      alt: "Lightbulb",
      link: "https://krishnadolas.github.io/bulb-on-off-fun/",
    },
    {
      src: img8,
      alt: "Music App",
      link: "https://krishnadolas.github.io/Musicapp/",
    },
    {
      src: img9,
      alt: "Weather Forecast",
      link: "https://krishnadolas.github.io/Weatherforcast/",
    },
    {
      src: img10,
      alt: "Old Portfolio Website",
      link: "https://krishnadolas.github.io/bootstraptempvenom.github.io/",
    },
    {
      src: img11,
      alt: "SMTP Form",
      link: "https://krishnadolas.github.io/venomsmtpform/",
    },
    {
      src: img12,
      alt: "Todo App",
      link: "https://krishnadolas.github.io/todoapp/",
    },
    {
      src: img13,
      alt: "Calculator",
      link: "https://krishnadolas.github.io/calculator.io/",
    },
    {
      src: img14,
      alt: "Beach Resort",
      link: "https://krishnadolas.github.io/ReactBeachResort/",
    },
    {
      src: img15,
      alt: "Facebook Clone",
      link: "https://krishnadolas.github.io/fbclone/",
    },
    {
      src: img16,
      alt: "Registration Form",
      link: "https://registration-using-mern.onrender.com/",
    },
    {
      src: img17,
      alt: "Batar Batar App",
      link: "https://batar-batar-app.vercel.app/",
    },
  ];

  return (
    <div className="container">
      {/* Internal CSS for styling */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

        body {
          font-family: 'Montserrat', sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }

        /* Section titles */
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
           /* Tooltip */
  .tooltip {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0,0,0,0.8);
    color: #fff;
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 0.9rem;
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
    white-space: nowrap;
  }
  .card:hover .tooltip {
    opacity: 1;
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
        /* Counter text */
        .stat p {
          font-size: 1.2em;
          margin-top: 8px;
          font-weight: 600;
        }

        /* Technologies & progress bars */
        .technologies {
          padding: 40px 20px;
        }
        .tech-title {
          text-align: center;
          font-size: 2em;
          margin-bottom: 30px;
          color: #20b38e;
        }
        .skill {
          margin-bottom: 20px;
        }
        .skill h4 {
          margin-bottom: 8px;
        }
        .progress {
          height: 25px;
          border-radius: 12px;
          background: #ddd;
          overflow: hidden;
        }
        .progress-bar {
          height: 100%;
          line-height: 25px;
          font-weight: 600;
          color: #fff;
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

      {/* Page Title */}
      <h1 className="section-title">Coding Projects</h1>

      {/* CTA Buttons */}
      <div className="button-group">
        <button className="btn-custom" onClick={handleWordPressClick}>
          <KeyboardDoubleArrowLeftIcon /> View WordPress Projects
        </button>
        <a
          href="https://github.com/KrishnaDolas?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-custom">
            <GitHub style={{ fontSize: "1.5em" }} /> View GitHub Repos
          </button>
        </a>
      </div>

      {/* Projects Gallery */}
      <div className="gallery">
        {projectsData.map((project, index) => (
          <div className="card" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.src} alt={project.alt} />
              <span className="tooltip">{project.alt}</span>
            </a>
          </div>
        ))}
      </div>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="stat">
          <i className="bi bi-emoji-smile"></i>
          <CountUp
            start={0}
            end={happyClients}
            duration={4}
            separator=","
            style={{ fontSize: "2em" }}
          />
          <p>Happy Clients</p>
        </div>
        <div className="stat">
          <i className="bi bi-folder"></i>
          <CountUp
            start={0}
            end={projects}
            duration={4}
            separator=","
            style={{ fontSize: "2em" }}
          />
          <p>Projects</p>
        </div>
        <div className="stat">
          <i className="bi bi-broadcast"></i>
          <CountUp
            start={0}
            end={liveProjects}
            duration={4}
            separator=","
            style={{ fontSize: "2em" }}
          />
          <p>Live Projects</p>
        </div>
        <div className="stat">
          <i className="bi bi-gear"></i>
          <CountUp
            start={0}
            end={totalProjects}
            duration={4}
            separator=","
            style={{ fontSize: "2em" }}
          />
          <p>Technologies Used</p>
        </div>
      </section>

      {/* Technologies & Skills */}
      <h2 className="section-title" style={{ marginTop: "50px" }}>
        Technologies I Use
      </h2>
      <div className="technologies">
        {/* Example Progress Bars */}
        <div className="skill">
          <h4 style={{ color: "#fdf5e6" }}>MERN Stack</h4>
          <div className="progress">
            <div className="progress-bar bg-success" style={{ width: "85%" }}>
              85%
            </div>
          </div>
        </div>
        <div className="skill">
          <h4 style={{ color: "#fdf5e6" }}>React Native</h4>
          <div className="progress">
            <div className="progress-bar bg-info" style={{ width: "85%" }}>
              85%
            </div>
          </div>
        </div>
        <div className="skill">
          <h4 style={{ color: "#fdf5e6" }}>JavaScript</h4>
          <div className="progress">
            <div className="progress-bar bg-warning" style={{ width: "90%" }}>
              90%
            </div>
          </div>
        </div>
        {/* Add more as needed */}
      </div>
    </div>
  );
}

export default Coding;
