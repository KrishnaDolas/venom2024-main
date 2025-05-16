import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Projects() {
  const [activeOverlay, setActiveOverlay] = useState(null); // 'left', 'right', or null
  const [bulletStyle, setBulletStyle] = useState(null); // { side: 'left' | 'right' }
  const navigate = useNavigate();

  const handleButtonClick = (side) => {
    setActiveOverlay(side);
    setBulletStyle({ side }); // Start the bullet animation

    // Delay navigation until the bullet animation completes
    setTimeout(() => {
      setBulletStyle(null); // Remove bullet after animation
      if (side === 'left') {
        navigate('/coding');
      } else if (side === 'right') {
        navigate('/wordpress');
      }
    }, 300); // Match with CSS animation duration
  };

  const handleCloseOverlay = () => {
    setActiveOverlay(null);
  };

  return (
    <>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

        body {
          margin: 0;
          font-family: 'Montserrat', sans-serif;
          overflow-x: hidden;
          background: transparent;
        }

        /* Full-page overlay styles for animated side panels */
        .full-overlay {
          position: fixed;
          top: 0;
          height: 100%;
          width: 100%;
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        /* Overlay for left side */
        .overlay-left {
          left: 0;
          background: linear-gradient(135deg, #4facfe, #00f2fe);
          transform: translateX(-100%);
          opacity: 0;
        }
        /* When active, slide in */
        .active-left {
          transform: translateX(0);
          opacity: 1;
        }

        /* Overlay for right side */
        .overlay-right {
          right: 0;
          background: linear-gradient(135deg, #f7971e, #ffd200);
          transform: translateX(100%);
          opacity: 0;
        }
        /* When active, slide in */
        .active-right {
          transform: translateX(0);
          opacity: 1;
        }

        /* Overlay Content Styles */
        .overlay-content {
          background: #fff;
          padding: 30px 40px;
          border-radius: 20px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          max-width: 600px;
          width: 100%;
          position: relative;
          text-align: center;
        }

        /* Close button inside overlay */
        .close-btn {
          position: absolute;
          top: 15px;
          right: 20px;
          background: transparent;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          color: #333;
          transition: color 0.2s;
        }
        .close-btn:hover {
          color: #f00;
        }

        /* Hero section styles */
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: transparent;
          text-align: center;
          padding: 40px 20px;
        }

        .hero h1 {
          font-size: 3.5rem;
          color: #fdf5e6;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }

        /* Cards container for buttons */
        .cards {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
          justify-content: center;
        }

        /* Individual card style for each button */
        .card {
          background: #fff;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          width: 250px;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.2);
        }

        /* Style for links acting as buttons */
        .action-link {
          padding: 15px 30px;
          font-size: 1.2rem;
          border: 2px solid #20b38e;
          border-radius: 12px;
          background-color: transparent;
          color: #20b38e;
          cursor: pointer;
          text-decoration: none;
          transition: background-color 0.2s, color 0.2s, transform 0.2s;
          display: inline-block;
        }
        .action-link:hover {
          background-color: #20b38e;
          color: #fff;
          transform: scale(1.05);
        }

        /* Label below buttons */
        .label {
          margin-top: 15px;
          font-size: 1rem;
          color: #555;
          text-align: center;
        }

        /* Responsive adjustments */
        @media(max-width: 768px) {
          .hero h1 {
            font-size: 2.5rem;
          }
          .cards {
            flex-direction: column;
            align-items: center;
          }
          .card {
            width: 80%;
          }
        }

        /* Bullet animation keyframes */
        @keyframes bullet-move-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(50vw);
          }
        }
        @keyframes bullet-move-right {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50vw);
          }
        }
      `}
      </style>

      {/* Bullet effect */}
      {bulletStyle && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '0',
            width: '20px',
            height: '4px',
            backgroundColor: 'red',
            borderRadius: '2px',
            transform: 'translateY(-50%)',
            zIndex: 1000,
            animation: bulletStyle.side === 'left' ? 'bullet-move-left 0.3s forwards' : 'bullet-move-right 0.3s forwards',
          }}
        />
      )}

      {/* Overlay for left side */}
      <div
        className={`full-overlay overlay-left ${activeOverlay === 'left' ? 'active-left' : ''}`}
        onClick={handleCloseOverlay}
      >
        <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={handleCloseOverlay} aria-label="Close">×</button>
          <h2>Core Coding</h2>
          <p>Build Web Apps & Sites with modern technologies. Dive into HTML, CSS, JavaScript, React, and more!</p>
        </div>
      </div>

      {/* Overlay for right side */}
      <div
        className={`full-overlay overlay-right ${activeOverlay === 'right' ? 'active-right' : ''}`}
        onClick={handleCloseOverlay}
      >
        <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={handleCloseOverlay} aria-label="Close">×</button>
          <h2>WordPress</h2>
          <p>Create dynamic, beautiful websites with WordPress. Customize themes, plugins, and extend functionality easily!</p>
        </div>
      </div>

      {/* Main Hero Section */}
      <section className="hero">
        <h1 style={{ color: '#fdf5e6' }}>My Creative Portfolio</h1>
        <p
          style={{
            fontSize: '1.2rem',
            maxWidth: '700px',
            marginBottom: '40px',
            color: '#fdf5e6',
            textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
          }}
        >
          Choose a path to explore my skills and projects. Click and discover more!
        </p>
        {/* Buttons as cards */}
        <div className="cards">
          {/* Core Coding Button */}
          <div className="card" onClick={() => handleButtonClick('left')}>
            <div className="action-link" style={{ cursor: 'pointer' }}>Core Coding</div>
            <div className="label">Build Web Apps & Sites</div>
          </div>
          {/* WordPress Button */}
          <div className="card" onClick={() => handleButtonClick('right')}>
            <div className="action-link" style={{ cursor: 'pointer' }}>WordPress</div>
            <div className="label">Create Dynamic Websites</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;