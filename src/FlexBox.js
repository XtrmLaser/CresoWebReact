import React from "react";

import "./FlexBox.css";

function myFunction() {
  return;
}

console.log(myFunction());

function Flexbox() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet"
      />

      <div className="flex-container">
        <div className="flex-child magenta">
          <p className="littletext">
            <b>E-Services/E-Cafe.. Maybe!</b>
          </p>
          <button className="btn">
            {" "}
            <b>Services Offered</b>
          </button>
        </div>

        <div className="flex-child green">
          <p className="getintouch">
            <b>Choose your preference! </b>
          </p>
          <button className="btn" id="new">
            <b>Rapid Work</b>
          </button>

          <button className="btn" id="new">
            <b>Good Stuffs Take Time!</b>
          </button>
        </div>
      </div>
    </>
  );
}

export default Flexbox;
