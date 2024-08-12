// This code imports what's needed for the site and fuctions to work
import React, { useContext } from "react";
import { CartContext } from "../../Context/cart-context";
import "../../styles.css";
import { Link } from "react-router-dom";

// This code is the function to allow the cart to show what you added from art.jsx
const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.Price),
    0
  );

  return (
    <div className="main-rectangle-div">
      <div className="blank-box"></div>
      <div className="background">
        <div className="blank-box"></div>
        <div className="blank-box"></div>
        <div className="cart-panel">
          {/* This begin's the text on the page with the function that shows the art items in the cart */}
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div key={index}>
                <img src={item.Image} alt={item.Name} />
                <h4>{item.Name}</h4>
                <p>${item.Price}</p>
                <button onClick={() => removeFromCart(item.Id)}>Remove</button>
              </div>
            ))
          )}
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
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
          <div className="blank-box"></div>
          <div className="blank-box"></div>
          {/* Click this to proceed to another component */}
          <Link to="/checkout">
            {cart.length > 0 && <button>Proceed to Checkout</button>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart; //this code allows it to be used in other components
