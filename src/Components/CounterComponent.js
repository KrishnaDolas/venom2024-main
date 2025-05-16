import React, { useState, useEffect } from 'react';

function CounterComponent() {
const [count, setCount] = useState(0);

useEffect(() => {
const storedCount = localStorage.getItem("pageVisits");
const initialCount = storedCount ? Number(storedCount) : 0;
setCount(initialCount + 1);
localStorage.setItem("pageVisits", initialCount + 1);



}, []);

  return (
    <div>
      <p>This page was viewed</p>
      <h1 style={{ fontSize: '70px', margin: 0 }}>{count}</h1>
      <p>times</p>
    </div>
  );
};

export default CounterComponent;
