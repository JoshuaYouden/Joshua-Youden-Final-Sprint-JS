// This code imports what's needed for the site and fuctions to work
import React from "react";
import { Link } from "react-router-dom";
import "../../styles.css";

const Checkout = () => {
  return (
    <div className="main-rectangle-div">
      ;
      <div className="background">
        <div className="blank-box"></div>
        <div>
          {/* This begin's the form on the page that you can enter infomation */}
          <div class="cart-confirm">
            <h1>Please enter the following information</h1>
          </div>
          <form>
            <input type="text" placeholder="First Name" /> <br />
            <br />
            <input type="text" placeholder="Last Name" /> <br />
            <br />
            <input type="text" placeholder="Email" />
            <br />
            <br />
            <input type="text" placeholder="Address" />
            <br />
            <br />
            <input type="text" placeholder="Credit Card Number" />
            <br />
            <br />
            <input type="CC" placeholder="Exp Date" />
            <input type="CC" placeholder="CCV" />
          </form>
          <div className="blank-box">
            <div className="blank-box"></div>
            <div className="blank-box"></div>
            <div className="blank-box"></div>
            <div className="blank-box"></div>
            <div className="blank-box"></div>
            <div className="blank-box"></div>
            <div className="blank-box"></div>
            <div className="blank-box"></div>
            <div className="blank-box"></div>
            <div className="blank-box"></div>
            <div className="blank-box"></div>
            <div className="blank-box"></div>
            <div className="blank-box"></div>
            <div className="blank-box"></div>
            <div className="blank-box"></div>
            <div className="blank-box"></div>
            {/* Click this to proceed to another component */}
            <Link to="/thanks">Confirm</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; //this code allows it to be used in other components
