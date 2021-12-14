import React from "react";
import logo from "../../assets/logo.png";
import { useLocation, Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("logged-in");
    navigate("/");
  };
  console.log(localStorage.getItem("logged-in") == null);
  return (
    <div className="header-container">
      <div className="header-logo-text">
        <img src={logo} alt={logo} className="header-image" />
        <span className="header-text">Predict</span>
      </div>
      <div className="navLinks">
        {localStorage.getItem("logged-in") == "admin" &&
        localStorage.getItem("logged-in") != null ? (
          <>
            <div className="header-navigation">
              <NavLink to="/dashboard" className="header-link">
                Home
              </NavLink>
            </div>
            <div className="header-navigation">
              <NavLink to="/graphs" className="header-link">
                Graphs
              </NavLink>
            </div>
            <div className="header-navigation">
              <button className="button1" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
