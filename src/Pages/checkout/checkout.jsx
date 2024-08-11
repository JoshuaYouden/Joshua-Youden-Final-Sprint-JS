import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/navbar";
import "../../styles.css";

const Checkout = () => {
  return (
    <div className="main-rectangle-div">
      ;
      <div className="background">
        <div>
          <div class="cart-confirm">
            <h1>Please enter the following information</h1>
          </div>
          <form>
            <label>First Name</label>
            <input type="text" placeholder="First Name" /> <br />
            <br />
            <label>Last Name</label>
            <input type="text" placeholder="last Name" /> <br />
            <br />
            <label>Email</label>
            <input type="text" placeholder="Email" />
            <br />
            <br />
            <label>Address</label>
            <input type="text" placeholder="Address" />
            <br />
            <br />
            <label>Credit Card</label>
            <input type="text" placeholder="Credit Card Number" />
            <br />
            <br />
            <label>Credit Card Exp</label>
            <input type="text" placeholder="Exp Date" />
            <div className="blank-box"></div>
            <label>Credit Card CCV</label>
            <input type="text" placeholder="CCV" />
          </form>
          <Link to="/thanks">Confirm</Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
