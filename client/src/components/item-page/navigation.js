import React from "react";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>

    <nav className="headerStyle">
          <ul>
          <NavLink to="/">Casa</NavLink>
          <NavLink to="/Upload">Subir articulo</NavLink>

          </ul>
    </nav>
   </div>
  );
}


export default Navigation;
