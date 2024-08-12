// This code imports what's needed for the site and fuctions to work
import { Link } from "react-router-dom";
import React from "react";
import "./main.css";

{
  /* This is the code for the base of the site */
}
const Main = () => {
  return (
    <div className="main-rectangle-div">
      ;
      <div className="background">
        <div className="blank-box"></div>
        <div className="blank-box"></div>
        <div className="big-text">
          <div className="blank-box"></div>
          <h4>WELCOME TO THE NATURE CREATOR SITE (THAT'S ME!)</h4>
        </div>
        <div className="blank-box-2"></div>
        <div className="blank-box-2"></div>
        <div className="blank-box-2"></div>
        <div className="blank-box-2"></div>
        <div className="small-text">
          See the background? That was made by me! Click the buttons on the
          navigation bar up top to see more of the site!
        </div>
        <div className="blank-box-2"></div>
        <div className="blank-box-2"></div>
        <div className="blank-box-2"></div>
        <div className="blank-left">
          {/* Click this to proceed to another component */}
          <Link to="../art" className="link-button">
            <button className="button">Click me to buy some art!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main; //this code allows it to be used in other components
