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
            <Link to="/thanks">Confirm</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
