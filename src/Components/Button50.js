import React from 'react';
import './Button49.css';  // Assuming you save this component in Button49.js and have a corresponding Button49.css file
import { useNavigate } from 'react-router-dom';

const Button50 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Coding`)
 };
  return (
    <button className="button-49" role="button" onClick={handleClick}>
      <div className="glitch-text">Coding</div>
    </button>
  );
};

export default Button50;
