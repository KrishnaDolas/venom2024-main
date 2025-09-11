import html from "../Assets/html.svg";
import css from "../Assets/css.webp";
import js from "../Assets/js.png";
import jquery from "../Assets/jquery.webp";
import bs from "../Assets/bootstrap.webp";
import react from "../Assets/react.png";
import reactNative from "../Assets/ReactNative.webp";
import nodejs from "../Assets/nodejs.png";
import express from "../Assets/express.webp";
import mongodb from "../Assets/mongodb.webp";
import vercel from "../Assets/vercel1868.webp";
import postman from "../Assets/postman.webp";
import GitHub from "../Assets/git.png";
import Render from "../Assets/Render.png";
import Materialui from "../Assets/Materialui.jpg";
import Shadcnui from "../Assets/shadcnui.jpg";

function Skills() {
  // define arrays with label + image
  const codingLanguages = [
    { src: html, label: "HTML" },
    { src: css, label: "CSS" },
    { src: js, label: "JavaScript" },
    { src: jquery, label: "jQuery" },
    { src: bs, label: "Bootstrap" },
  ];

  const frameworks = [
    { src: react, label: "React" },
    { src: reactNative, label: "React Native" },
    { src: nodejs, label: "Node.js" },
    { src: express, label: "Express" },
    { src: mongodb, label: "MongoDB" },
  ];

  const tools = [
    { src: vercel, label: "Vercel" },
    { src: Render, label: "Render" },
    { src: postman, label: "Postman" },
    { src: GitHub, label: "GitHub" },
    { src: Materialui, label: "Material UI" },
    { src: Shadcnui, label: "Shadcn UI" },
  ];

  return (
    <div className="skills-container">
      <style jsx>{`
        .skills-container {
          font-family: "Montserrat", sans-serif;
          padding: 50px 20px;
        }
        h1,
        h2 {
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
        h2::after {
          content: "";
          display: block;
          width: 60px;
          height: 4px;
          background: #20b38e;
          margin: 8px auto 0;
          border-radius: 2px;
        }
        .category {
          margin-bottom: 50px;
        }
        .cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }
        .card {
          background: #fff;
          border-radius: 15px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          padding: 20px;
          width: 150px;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .card:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
        }
        .logo-img {
          max-width: 80%;
          max-height: 80%;
          object-fit: contain;
          transition: transform 0.3s;
        }
        /* Tooltip styles */
        .tooltip {
          position: absolute;
          bottom: 10px;
          background: rgba(0, 0, 0, 0.8);
          color: #fff;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 0.9rem;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }
        .card:hover .tooltip {
          opacity: 1;
        }
        @media (max-width: 768px) {
          .cards {
            justify-content: center;
          }
        }
      `}</style>

      <div
        className="header-section"
        style={{ textAlign: "center", marginBottom: "40px" }}
      >
        <h1>My Skills & Technologies</h1>
        <p style={{ fontSize: "1.2rem", color: "#fff" }}>
          A showcase of my expertise, tools, and frameworks I love working with.
        </p>
      </div>

      {/* Coding Languages */}
      <section className="category">
        <h2>Coding Languages</h2>
        <div className="cards">
          {codingLanguages.map((skill, index) => (
            <div key={index} className="card">
              <img src={skill.src} className="logo-img" alt={skill.label} />
              <span className="tooltip">{skill.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Frameworks */}
      <section className="category">
        <h2>Frameworks & Technologies</h2>
        <div className="cards">
          {frameworks.map((skill, index) => (
            <div key={index} className="card">
              <img src={skill.src} className="logo-img" alt={skill.label} />
              <span className="tooltip">{skill.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="category">
        <h2>Tools & Platforms</h2>
        <div className="cards">
          {tools.map((skill, index) => (
            <div key={index} className="card">
              <img src={skill.src} className="logo-img" alt={skill.label} />
              <span className="tooltip">{skill.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;
