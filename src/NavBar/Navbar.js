import React from "react";
import logo from "./weather.png";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <img src={logo} alt="weather-logo" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
