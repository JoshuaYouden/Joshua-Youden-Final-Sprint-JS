import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navstyle.css";

export const Navbar = () => {
  return (
    <div className="left-text">
      <div className="nav-bar">
        <div className="nav-main">
          <div className="line-main">
            <div className="wrapper">
              <div className="Nature-Creator">
                <h1>Nature Creator</h1>
              </div>
              <div class="blank-box"></div>
              <div class="blank-box"></div>
              <div class="blank-box"></div>
              <div class="blank-box"></div>
              <div className="main">
                <Link to="/main"> Main Page! </Link>
              </div>
            </div>
            <div className="right-text">
              <div class="blank-box"></div>
              <div class="blank-box"></div>
              <div class="blank-box"></div>
              <div class="blank-box"></div>
              <div className="art-shop">
                <Link to="/art"> Buy My Art Here! </Link>
              </div>
              <div class="blank-box"></div>
              <div class="blank-box"></div>
              <div class="blank-box"></div>
              <div class="blank-box"></div>
              <div className="about">
                <Link to="/about"> Learn More About Me! </Link>
              </div>
              <div class="blank-box"></div>
              <div class="blank-box"></div>
              <div class="blank-box"></div>
              <div class="blank-box"></div>
              <Link to="/cart">
                <ShoppingCart size={32} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
