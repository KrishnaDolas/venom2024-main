import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const divstyle = {
    fontFamily: "'Montserrat', sans-serif",
    color:'white'
  };

  return ( 
<nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white !important', ...divstyle }}>
      <div className="container-fluid bg-transparent">
        {/* <a className="navbar-brand" style={{color:'white'}} to="">VENOM</a> */}
        <Link className="navbar-brand" style={{color:'white'}} to="">VENOM</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" style={{color:'white'}} to="">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" style={{color:'white'}} to="/Skills">Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" style={{color:'white'}} to="/projects">Projects</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
