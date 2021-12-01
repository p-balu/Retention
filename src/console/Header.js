import React from "react";
import logo from "../assets/logo.png";
import { useLocation, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  return (
    <div className="header-container">
      <div className="header-logo-text">
        <img src={logo} alt={logo} className="header-image" />
        <span className="header-text">Predict</span>
      </div>

      {location.pathname === "/" && (
        <div className="header-navigation">
          <Link to="/admin" className="header-link">
            Admin
          </Link>
        </div>
      )}
      {location.pathname === "/admin" && (
        <div className="header-navigation">
          <Link to="/" className="header-link">
            User
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
