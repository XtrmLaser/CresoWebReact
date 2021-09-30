import React from "react";

import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div class="topnav" id="myTopnav">
        <a href="#home" class="active">
          Home
        </a>

        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="#" class="icon">
          <i class="fa fa-bars"></i>
        </a>
        <a href="master" id="master">
          CreSo
        </a>
      </div>
    </div>
  );
}

export default Navbar;
