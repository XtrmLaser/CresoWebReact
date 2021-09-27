import React from "react";

import "./FlexBox.css";

function Flexbox() {
  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        />
      </head>
      <div class="flex-container">
        <div class="flex-child magenta">
          <p class="littletext">
            <b>E-Services/E-Cafe.. Maybe!</b>
          </p>
          <button onClick="myFunction()" class="btn">
            {" "}
            <b>Services Offered</b>
          </button>
        </div>

        <div class="flex-child green">
          <p class="getintouch">
            <b>Just Dive In Straight</b>
            <br></br>
          </p>
          <button onClick="urgentCall()" class="btn" id="new">
            <b>
              For quick response
              <br />
              <br />
              Click it!
            </b>
          </button>

          <button onClick="qualityCall()" class="btn" id="new">
            <b>
              Get your work done with Grace
              <br />
              <br />
              Click it!
            </b>
          </button>
        </div>
      </div>
    </>
  );
}

export default Flexbox;
