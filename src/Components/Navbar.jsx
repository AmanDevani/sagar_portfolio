import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link className="navbar-link active" to="/" data-nav-link>
              About
            </Link>
          </li>

          <li className="navbar-item">
            <Link className="navbar-link" to="/resume" data-nav-link>
              Resume
            </Link>
          </li>

          <li className="navbar-item">
            <Link className="navbar-link" to="/portfolio" data-nav-link>
              Portfolio
            </Link>
          </li>

          <li className="navbar-item">
            <Link className="navbar-link" to="/contact" data-nav-link>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
