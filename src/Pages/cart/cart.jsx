import React, { useContext } from "react";
import { CartContext } from "../../Context/cart-context";
import "../../styles.css";
import { Link } from "react-router-dom";

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
          <Link to="/checkout">
            {cart.length > 0 && <button>Proceed to Checkout</button>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
