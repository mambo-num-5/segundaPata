import React from "react";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
    <h2>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/item">Item</NavLink>
    </h2>
    </div>
  );
};

export default Navigation;
