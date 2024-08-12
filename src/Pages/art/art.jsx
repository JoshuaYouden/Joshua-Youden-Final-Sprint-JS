// This code imports what's needed for the site and fuctions to work
import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/cart-context";
import "../../styles.css";
import ItemsData from "../../prices.json";

// This code is the function to allow the art shop to be interacted with
const Shop = () => {
  const { addToCart } = useContext(CartContext);
  const [items] = useState(ItemsData.ItemsData || []);

  return (
    <div className="main-rectangle-div">
      <div className="blank-box"></div>
      <div className="background">
        {/* This begins the text on the site */}
        <div className="big-shop">
          <h4>
            You want to buy some of my art? You've come to the right place. See
            what I sell!
          </h4>
        </div>
        <div className="blank-box"></div>
        {/* Here's the panel where the shop appears */}
        <div className="shop-panel">
          {Array.isArray(items) && items.length > 0 ? (
            items.map((item) => (
              <div key={item.Id} className="item-card">
                <img src={item.Image} alt={item.Name} />
                <h3>{item.Name}</h3>
                <p>${item.Price}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            ))
          ) : (
            <p>No items available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop; //this code allows it to be used in other components
