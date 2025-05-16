import html from '../Assets/html.svg';
import css from '../Assets/css.webp';
import js from '../Assets/js.png';
import jquery from '../Assets/jquery.webp';
import bs from '../Assets/bootstrap.webp';
import react from '../Assets/react.png';
import reactNative from '../Assets/ReactNative.webp'; // Your React Native logo
import nodejs from '../Assets/nodejs.png';
import express from '../Assets/express.webp';
import mongodb from '../Assets/mongodb.webp';
import vercel from '../Assets/vercel1868.webp';
import postman from '../Assets/postman.webp';
import GitHub from '../Assets/git.png'; // Make sure this is the GitHub logo or icon
// If you have a specific GitHub logo, replace the above with the correct asset

function Skills() {
  return (
    <div className="skills-container">
      {/* Internal CSS styles */}
      <style jsx>{`
        .skills-container {
          font-family: 'Montserrat', sans-serif;
          padding: 50px 20px;
        }
        h1, h2 {
          color: #20b38e;
          text-align: center;
          margin-bottom: 20px;
        }
        h1 {
          font-size: 2.5rem;
        }
        h2 {
          font-size: 2rem;
          position: relative;
        }
        /* Decorative underline for section titles */
        h2::after {
          content: "";
          display: block;
          width: 60px;
          height: 4px;
          background: #20b38e;
          margin: 8px auto 0;
          border-radius: 2px;
        }
        /* Container for each category */
        .category {
          margin-bottom: 50px;
        }
        /* Card styles for each skill logo */
        .cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }
        .card {
          background: #fff;
          border-radius: 15px;
          box-shadow: 0 8px 16px rgba(0,0,0,0.1);
          padding: 20px;
          width: 150px;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        /* Hover effect for cards */
        .card:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 24px rgba(0,0,0,0.2);
        }
        /* Logo images */
        .logo-img {
          max-width: 80%;
          max-height: 80%;
          object-fit: contain;
          transition: transform 0.3s;
        }
        /* Responsive adjustments */
        @media(max-width: 768px) {
          .cards {
            justify-content: center;
          }
        }
      `}</style>

      {/* Main Header */}
      <div className="header-section" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>My Skills & Technologies</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>A showcase of my expertise, tools, and frameworks I love working with.</p>
      </div>

      {/* Coding Languages */}
      <section className="category">
        <h2>Coding Languages</h2>
        <div className="cards">
          {[html, css, js, jquery, bs].map((imgSrc, index) => (
            <div key={index} className="card">
              <img src={imgSrc} className="logo-img" alt="Skill Logo" />
            </div>
          ))}
        </div>
      </section>

      {/* Frameworks & Technologies */}
      <section className="category">
        <h2>Frameworks & Technologies</h2>
        <div className="cards">
          {[react, reactNative, nodejs, express, mongodb].map((imgSrc, index) => (
            <div key={index} className="card">
              <img src={imgSrc} className="logo-img" alt="Skill Logo" />
            </div>
          ))}
        </div>
      </section>

      {/* Tools & Platforms */}
      <section className="category">
        <h2>Tools & Platforms</h2>
        <div className="cards">
          {[vercel, postman, GitHub].map((imgSrc, index) => (
            <div key={index} className="card">
              <img src={imgSrc} className="logo-img" alt="Skill Logo" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;