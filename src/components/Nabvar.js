import React from "react";
import './navbar.css'
import logo from './../assets/img/logo.jpeg'

const Nabvar = () => {
  
  return (
    <nav className="main-nav navbar navbar-dark navbar-expand-lg bg-dark fixed-top">
    <div className="container-fluid">
      {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <img src={logo} className="navbar-brand logo" alt="" />
        {/* <a className="navbar-brand logo" href="#">TV-Tour</a> */}
        <ul className="nav-menu navbar-nav ms-auto  mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/destination">Destination</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/gallery">Gallery</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
         
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/">Covid-19</a>
          </li>
          
          
        </ul>
       
      </div>
    </div>
  </nav>
  );
};

export default Nabvar;
