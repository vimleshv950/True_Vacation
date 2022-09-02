import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "./../assets/img/logo.jpeg";

const Nabvar = () => {
  return (
    <nav className="main-nav navbar navbar-dark navbar-expand-lg bg-dark fixed-top">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <img src={logo} className="navbar-brand logo" alt="" />

          <ul className="nav-menu navbar-nav ms-auto  mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/destination">
                Destination
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Covid-19
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nabvar;
