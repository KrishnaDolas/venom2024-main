import React, { useState, useEffect } from 'react';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CountUp from 'react-countup';
import Homecarousal from './Homecarousal';
import GitHub from '@mui/icons-material/GitHub';
import Experience from './Experience';
import batarbatarapp from '../Assets/batar batar app.png';
import CounterComponent from './CounterComponent';

function Home() {
    const imgstyle = {
        width: "70%",
        paddingBottom: "20px",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
      };

  const divstyle = {
    fontFamily: "'Montserrat', sans-serif",
    color: 'white'
  };

  const [happyClients, setHappyClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [liveProjects, setLiveProjects] = useState(0);
  const [totalProjects, setTotalProjects] = useState(0);

  // Final values
  const finalHappyClients = 10;
  const finalProjects = 11;
  const finalLiveProjects = 6;
  const finalTotalProjects = 1;

  useEffect(() => {
    setHappyClients(finalHappyClients);
    setProjects(finalProjects);
    setLiveProjects(finalLiveProjects);
    setTotalProjects(finalTotalProjects);
  }, []);

  const colstyle = { backgroundColor: '#dad7cd' };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
        `}
      </style>

      {/* Carousel Section */}
      <div>
        <Homecarousal />
        <br/><br/><br/>

        {/* Introductory Section */}
        <div className="container-fluid overflow-hidden text-left vh-60" style={divstyle}>
          <div className="row gx-5 d-flex align-items-center justify-content-center flex-column flex-lg-row">
            {/* Left Column */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="text-center" style={{ color: '#20b38e' }}>Chat Application ✨</h1>
              <a href="https://batar-batar-app.vercel.app/" target='_blank' rel='noopener noreferrer'>
                <img style={imgstyle} src={batarbatarapp} alt="Batar Batar App" />
              </a>
              <p className="text-center">
                First ever chat app created using node.js and socket.io do check out! Open the same link in 2 tabs and message from both sides then see the magic! Click the image to open the app!
              </p>
            </div>
            {/* Right Column */}
            <div className="col-lg-6">
              <h1 style={{ color: '#20b38e' }}>Design epic websites</h1>
              <p>
                Well like I said I'm a web developer and like to code and make various websites.
              </p>
              {/* Core Coding */}
              <div className="d-flex align-items-start mb-3">
                <IntegrationInstructionsIcon style={{ color: '#20b38e', fontSize: '2em' }} />
                <div className="ms-2">
                  <h3 style={{ color: '#20b38e' }}>Core Coding</h3>
                  <hr/>
                  <p>
                    Core coding consists of a group of languages like HTML, CSS, JAVASCRIPT, JQUERY, BOOTSTRAP, and REACTJS. All these languages are used to make a website more creative, effective, and faster. We can create, edit, and delete anything on the website.
                  </p>
                </div>
              </div>
              {/* Wordpress */}
              <div className="d-flex align-items-start">
                <DashboardIcon style={{ color: '#20b38e', fontSize: '2em' }} />
                <div className="ms-2">
                  <h3 style={{ color: '#20b38e' }}>Wordpress</h3>
                  <hr/>
                  <p>
                    WordPress is a platform where the website is built by drag and drop method. No coding needed while designing. It saves the coding of HTML, CSS, and JavaScript. The code is in .php and uses MySQL for the database, typically via XAMPP for localhost testing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Coding & WordPress Sections */}
        <div className="container my-5" style={divstyle}>
          {/* Core Coding */}
          <h3 style={{ color: '#20b38e' }}>Core Coding</h3>
          <br/>
          <div className="row border-bottom mb-4">
            {/* HTML */}
            <div className="col-md-4 border-end mb-3 mb-md-0">
              <h3 style={{ fontSize: '2em', color: '#20b38e' }}>01</h3>
              <h4>HTML</h4>
              <p>I have hands-on HTML like it's the basic need of any webpage.</p>
            </div>
            {/* CSS */}
            <div className="col-md-4 mb-3 mb-md-0">
              <h3 style={{ fontSize: '2em', color: '#20b38e' }}>02</h3>
              <h4>CSS</h4>
              <p>We need CSS to style the webpage. Think of the body without CSS as a human skeleton.</p>
            </div>
            {/* JavaScript */}
            <div className="col-md-4 border-start mb-3 mb-md-0">
              <h3 style={{ fontSize: '2em', color: '#20b38e' }}>03</h3>
              <h4>JAVASCRIPT</h4>
              <p>JavaScript is a powerful scripting language that adds interactivity and logic to websites.</p>
            </div>
          </div>
          {/* Additional tech */}
          <div className="row mb-4">
            {/* jQuery */}
            <div className="col-md-4 border-end mb-3 mb-md-0">
              <h3 style={{ fontSize: '2em', color: '#20b38e' }}>04</h3>
              <h4>J QUERY</h4>
              <p>jQuery simplifies DOM manipulation and event handling for dynamic web pages.</p>
            </div>
            {/* Bootstrap */}
            <div className="col-md-4 mb-3 mb-md-0">
              <h3 style={{ fontSize: '2em', color: '#20b38e' }}>05</h3>
              <h4>REACT NATIVE</h4>
              <p>React Native reduces code and enables partial reloading for faster, dynamic Apps.</p>
            </div>
            {/* ReactJS */}
            <div className="col-md-4 border-start mb-3 mb-md-0">
              <h3 style={{ fontSize: '2em', color: '#20b38e' }}>06</h3>
              <h4>REACTJS</h4>
              <p>React reduces code and enables partial reloading for faster, dynamic webpages.</p>
            </div>
          </div>
        </div>

        {/* WordPress Section */}
        <div className="container my-5" style={divstyle}>
          <h3 style={{ color: '#20b38e' }}>Wordpress</h3>
          <br/>
          <div className="row border-bottom mb-4">
            {/* Elementor */}
            <div className="col-md-4 border-end mb-3 mb-md-0">
              <h3 style={{ fontSize: '2em', color: '#20b38e' }}>01</h3>
              <h4>Elementor</h4>
              <p>One of the best editors for WordPress, each website is made with Elementor.</p>
            </div>
            {/* Essential Addons */}
            <div className="col-md-4 mb-3 mb-md-0">
              <h3 style={{ fontSize: '2em', color: '#20b38e' }}>02</h3>
              <h4>Essential Addon's for Elementor</h4>
              <p>Provides additional features and functionalities to enhance website design.</p>
            </div>
            {/* Envato Elements */}
            <div className="col-md-4 border-start mb-3 mb-md-0">
              <h3 style={{ fontSize: '2em', color: '#20b38e' }}>03</h3>
              <h4>Envato Elements</h4>
              <p>Offers pre-designed blocks and templates for faster website development.</p>
            </div>
          </div>
          {/* More WordPress tools */}
          <div className="row mb-4">
            {/* Contact Form 7 */}
            <div className="col-md-4 border-end mb-3 mb-md-0">
              <h3 style={{ fontSize: '2em', color: '#20b38e' }}>04</h3>
              <h4>Contact Form 7</h4>
              <p>A plugin to create contact forms for visitors to connect with the admin.</p>
            </div>
            {/* Table Some */}
            <div className="col-md-4 mb-3 mb-md-0">
              <h3 style={{ fontSize: '2em', color: '#20b38e' }}>05</h3>
              <h4>Table Some</h4>
              <p>A plugin to display contact form details directly on the website.</p>
            </div>
            {/* Templately */}
            <div className="col-md-4 border-start mb-3 mb-md-0">
              <h3 style={{ fontSize: '2em', color: '#20b38e' }}>06</h3>
              <h4>Templately</h4>
              <p>Provides pre-designed blocks and pages for faster development.</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container my-5" style={divstyle}>
          <section className="counts section-bg">
            <div className="container border p-4">
              <div className="row text-center">
                {/* Happy Clients */}
                <div className="col-lg-3 col-md-6 mb-4" style={colstyle} data-aos="fade-up">
                  <div className="count-box">
                    <i className="bi bi-simple-smile h1"></i>
                    <CountUp start={0} end={happyClients} duration={4} separator="," style={{ fontSize: '2em', color: '#20b38e' }} />
                    <p className="h3">Happy Clients</p>
                  </div>
                </div>
                {/* Projects */}
                <div className="col-lg-3 col-md-6 mb-4" style={colstyle} data-aos="fade-up" data-aos-delay="200">
                  <div className="count-box">
                    <i className="bi bi-document-folder h1"></i>
                    <CountUp start={0} end={projects} duration={4} separator="," style={{ fontSize: '2em', color: '#20b38e' }} />
                    <p className="h3">Projects</p>
                  </div>
                </div>
                {/* Live Projects */}
                <div className="col-lg-3 col-md-6 mb-4" style={colstyle} data-aos="fade-up" data-aos-delay="400">
                  <div className="count-box">
                    <i className="bi bi-live-support h1"></i>
                    <CountUp start={0} end={liveProjects} duration={4} separator="," style={{ fontSize: '2em', color: '#20b38e' }} />
                    <p className="h3">Live Projects</p>
                  </div>
                </div>
                {/* One and only me */}
                <div className="col-lg-3 col-md-6 mb-4" style={colstyle} data-aos="fade-up" data-aos-delay="600">
                  <div className="count-box">
                    <i className="bi bi-users-alt-5 h1"></i>
                    <CountUp start={0} end={totalProjects} duration={4} separator="," style={{ fontSize: '2em', color: '#20b38e' }} />
                    <p className="h3">One and only me</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Experience Section */}
        <div className="container my-5">
          <Experience />
        </div>

        {/* Services Section */}
        <div className="container my-5" style={divstyle}>
          <h1 className="text-center" style={{ color: '#20b38e' }}>Services</h1>
          <br/><br/>
          <div className="row text-center">
            {/* Core Coding Service */}
            <div className="col-md-4 mb-4">
              <IntegrationInstructionsIcon style={{ color: '#20b38e', fontSize: '3em' }} />
              <h3 style={{ color: '#20b38e' }}>Core Coding</h3>
              <hr/>
              <p>Core coding consists of languages like HTML, CSS, JavaScript, jQuery, Bootstrap, and ReactJS. These are used to create effective and dynamic websites.</p>
            </div>
            {/* GitHub / Counter */}
            <div className="col-md-4 mb-4 d-flex flex-column align-items-center justify-content-center">
              <GitHub style={{ color: '#20b38e', fontSize: '5em' }} />
              <br/>
              <CounterComponent />
            </div>
            {/* WordPress Service */}
            <div className="col-md-4 mb-4">
              <DashboardIcon style={{ color: '#20b38e', fontSize: '3em' }} />
              <h3 style={{ color: '#20b38e' }}>WordPress</h3>
              <hr/>
              <p>Building websites with drag-and-drop tools like Elementor, using plugins, and designing pre-made templates for faster deployment.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;