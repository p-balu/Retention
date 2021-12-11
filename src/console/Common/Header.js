import React from "react";
import logo from "../../assets/logo.png";
import { useLocation, Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  return (
    <div className="header-container">
      <div className="header-logo-text">
        <img src={logo} alt={logo} className="header-image" />
        <span className="header-text">Predict</span>
      </div>
      <div className="navLinks">
        <div className="header-navigation">
          <NavLink to="/" className="header-link">
            User
          </NavLink>
        </div>
        <div className="header-navigation">
          <NavLink to="/admin" className="header-link">
            Admin
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
