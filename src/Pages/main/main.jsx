import { Link } from "react-router-dom";
import React from "react";
import "./main.css";

const Main = () => {
  return (
    <div className="main-rectangle-div">
      ;
      <div className="background">
        <div className="big-text">
          WELCOME TO THE NATURE CREATOR SITE (THAT'S ME!)
        </div>
        <div className="small-text">
          See the background? That was made by me! Click the buttons on the
          navigation bar up top to see more of the site!
        </div>
        <Link to="../art/art.jsx">
          <div className="button">
            <button>Click me to buy some art!</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Main;
