import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import Header from "./Header";

function Navbar() {
  const [navbar,setNavbar]=useState(false);

  const changeBackground=()=>{
      if(window.scrollY >= 60){
          setNavbar(true)
      }else{
          setNavbar(false);
      }
  };
  window.addEventListener('scroll',changeBackground)
  return (
    <>
    <Header />
      {/* <nav className="navbar navbar-expand-lg fixed-top active"> */}
      <nav className={navbar ? "navbar navbar-expand-lg navbar-light bg-light fixed-top bg-transparent active " : "navbar navbar-expand-lg navbar-light bg-light fixed-top bg-transparent "}>
        <div className="container">
          <img
            src={logo}
            alt="Logo"
            width="100"
            height="50"
            className="img-fluid"
          ></img>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">
                  Team
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </>
  );
}

export default Navbar;
