import React from "react";

import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="topnav" id="myTopnav">
        <a href="#home" className="active">
          Home
        </a>

        <a href="https://myeduvation.in">News</a>
        <a href="https://myeduvation.in">Contact</a>
        <a href="https://myeduvation.in">About</a>
        <a href="https://myeduvation.in" className="icon">
          <i className="fa fa-bars"></i>
        </a>
        <a href="https://myeduvation.in" id="master">
          CreSo
        </a>
      </div>
    </div>
  );
}

export default Navbar;
