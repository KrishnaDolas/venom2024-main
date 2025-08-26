import React from 'react';
import { ReactTyped } from 'react-typed';
import propic from '../Assets/Giblivenom.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { GitHub } from '@mui/icons-material';
import Button51 from './Button51';

function HomeCarousel() {
  const divstyle = {
    fontFamily: "'Montserrat', sans-serif",
    color: "white",
    marginTop: "100px",
    fontSize: "30px",
    fontWeight: "bold",
  };

  const iconStyle = {
    fontSize: 40,
    margin: '0 10px',
    transition: 'transform 0.2s',
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
        `}
      </style>
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start" style={divstyle}>
            <h1>Hello !</h1>
            <h1>I AM KRISHNA DOLAS</h1>
            <div>
              <h1>
                I'm a{" "}
                <ReactTyped
                  strings={["WEB DEVELOPER", "Software Developer", "Designer", "Wordpress Developer", "Writer"]}
                  typeSpeed={10}
                  loop
                  backSpeed={10}
                  cursorChar="🕷"
                  showCursor={true}
                />
              </h1>
            </div>
            <a
              href="https://drive.google.com/file/d/1T2Xqs5AJF9Ln0AowL44p1lTYWsRZfzAf/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button51 />
            </a>
          </div>
          {/* Profile Image & Icons */}
          <div className="col-lg-6 text-center">
            <img
              src={propic}
              className="rounded-5 mx-auto d-block mb-4"
              alt="venomspic"
              style={{ maxWidth: '70%', height: 'auto' }}
            />
            {/* Social Icons */}
            <div className="d-flex justify-content-center flex-wrap">
              <a
                href="https://www.facebook.com/krishna.dolas.7?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
                aria-label="Facebook"
              >
                <FacebookIcon color="primary" sx={iconStyle} />
              </a>
              <a
                href="https://x.com/VENOM19215061?t=CWHrrF0RrUvaUxVrVL3nSw&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
                aria-label="X"
              >
                <XIcon color="primary" sx={iconStyle} />
              </a>
              <a
                href="https://www.linkedin.com/in/krishna-dolas-a52081226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
                aria-label="LinkedIn"
              >
                <LinkedInIcon color="primary" sx={iconStyle} />
              </a>
              <a
                href="https://www.instagram.com/dev.ven0m?igsh=OGw3Y3JueWJzeHpi"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
                aria-label="Instagram"
              >
                <InstagramIcon color="primary" sx={iconStyle} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=8421501905"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon color="primary" sx={iconStyle} />
              </a>
              <a
                href="https://github.com/KrishnaDolas?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
                aria-label="GitHub"
              >
                <GitHub color="primary" sx={iconStyle} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCarousel;