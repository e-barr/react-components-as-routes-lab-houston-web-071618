import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <li>
        <NavLink to="/">Home</NavLink><br></br>
      </li>
      <li>
        <NavLink to="/movies">Movies</NavLink><br></br>
      </li>
      <li>
        <NavLink to="/directors">Directors</NavLink><br></br>
      </li>
      <li>
        <NavLink to="/actors">Actors</NavLink><br></br>
      </li>
    </div>
  );
};

export default NavBar;
