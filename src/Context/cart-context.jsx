// This code imports what's needed for the fuctions to work
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // This adds the items from the json
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // This removes the items
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.Id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
