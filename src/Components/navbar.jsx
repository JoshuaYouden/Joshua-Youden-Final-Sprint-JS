// This code imports what's needed for the fuctions to work
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navstyle.css";

// this code is where the site begins
export const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-main">
        <div className="line-main">
          <div className="wrapper">
            <div className="half-box"></div>
            <div className="Nature-Creator">Nature Creator</div>
          </div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          {/* Click this to proceed to another component */}
          <div className="main">
            <Link to="/" className="nav-link">
              {" "}
              Main Page!
            </Link>
          </div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          {/* Click this to proceed to another component */}
          <div className="art-shop">
            <Link to="/art"> Buy My Art Here! </Link>
          </div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          {/* Click this to proceed to another component */}
          <div className="about">
            <Link to="/about"> Learn More About Me! </Link>
          </div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          <div className="blank-box-2"></div>
          {/* Click this to proceed to another component */}
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar; //this code allows it to be used in other components
