import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <ul className="nav">
        <li>
          <NavLink className="link" to="/">
            Galary
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/favourites">
            Favourites Pictures
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
