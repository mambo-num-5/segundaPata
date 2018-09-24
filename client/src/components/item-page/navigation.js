import React from "react";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>

    <nav className="headerStyle">
          <ul>
          <NavLink to="/">Casa</NavLink>
          <NavLink to="/Upload">agregar</NavLink>
          <NavLink to="/Info">Aprende mas de tu Mascota</NavLink>
          <NavLink to="/Converter">Currency Converter</NavLink>

          </ul>
    </nav>
   </div>
  );
}


export default Navigation;
