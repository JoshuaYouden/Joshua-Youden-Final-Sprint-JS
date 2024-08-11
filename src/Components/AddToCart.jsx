import React from "react";
import Item from "art";

const AddToCart = ({ Item }) => {
  const handleAddToCart = async () => {
    const response = await fetch("https://localhost:3000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Item),
    });
    if (response.ok) {
      console.log("Product added to cart");
    } else {
      console.error("Failed to add art to cart");
    }
  };
  return <button onClick={handleAddToCart}>Add</button>;
};

export default AddToCart;
