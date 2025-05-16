import React from 'react';
import './Button49.css';
import { useNavigate } from 'react-router-dom';

const Button49 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Wordpress`)
 };

  return (
    <button className="button-49" role="button" onClick={handleClick}>
      <div className="glitch-text">Wordpress</div>
    </button>
  );
};

export default Button49;
