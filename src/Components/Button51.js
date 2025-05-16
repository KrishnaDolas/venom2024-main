import React from 'react';
import './Button49.css';  // Assuming you save this component in Button49.js and have a corresponding Button49.css file
import { useNavigate } from 'react-router-dom';

const Button51 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`https://drive.google.com/file/d/1YIIZqpHAZI9Pj0KdR-yqpOyMRyvImYDX/view?usp=sharing`)
 };
  return (
    <button className="button-49" role="button" onClick={handleClick}>
      <div className="glitch-text">Resume</div>
    </button>
  );
};

export default Button51;
