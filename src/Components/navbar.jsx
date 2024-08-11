import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navstyle.css";

export const Navbar = () => {
  return (
      <div className="nav-bar">
        <div className="nav-main">
          <div className="line-main">
            <div className="wrapper">
              <div className="Nature-Creator">
                <h2>Nature Creator</h2>
              </div>
            </div>
            <div className="blank-box-2"></div>
            <div className="blank-box-2"></div>
            <div className="blank-box-2"></div>
            <div className="blank-box-2"></div>
            <div className="blank-box-2"></div>
            <div className="main">
                <Link to="/"> Main Page! </Link>
              </div>
            <div className="blank-box-2"></div>
            <div className="blank-box-2"></div>
            <div className="blank-box-2"></div>
            <div className="blank-box-2"></div>
            <div className="blank-box-2"></div>
              <div className="art-shop">
                <Link to="/art"> Buy My Art Here! </Link>
              </div>
              <div className="blank-box-2"></div>
            <div className="blank-box-2"></div>
            <div className="blank-box-2"></div>
            <div className="blank-box-2"></div>
            <div className="blank-box-2"></div>
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
              <Link to="/cart">
                <ShoppingCart size={32} />
              </Link>
        </div>
      </div>
    </div>
    
  );
};

export default Navbar;
