import React from "react";
import ItemsData from "../prices.json";

const addToCart = ({ Items }) => {
  const handleAddToCart = async () => {
    const response = await fetch("https://localhost:3000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Items),
    });
    if (response.ok) {
      console.log("Product added to cart");
    } else {
      console.error("Failed to add art to cart");
    }
  };
  return <button onClick={handleAddToCart}>Add to Cart</button>;
};

export default addToCart;
