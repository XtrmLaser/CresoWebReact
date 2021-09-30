import React from "react";

import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="topnav" id="myTopnav">
        <a href="#home" className="active">
          Home
        </a>

        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="#" className="icon">
          <i className="fa fa-bars"></i>
        </a>
        <a href="#master" id="master">
          CreSo
        </a>
      </div>
    </div>
  );
}

export default Navbar;
